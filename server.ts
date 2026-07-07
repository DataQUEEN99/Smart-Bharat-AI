import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import dns from "dns";

// Prevent 'fetch failed' due to IPv6 preferred routing in dual-stack container environments
dns.setDefaultResultOrder("ipv4first");

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini API helper
let aiInstance: GoogleGenAI | null = null;
function getAI(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey === "") {
    throw new Error(
      "GEMINI_API_KEY is missing or not configured. Please add your GEMINI_API_KEY in the Secrets / Environment panel."
    );
  }
  if (!aiInstance) {
    aiInstance = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });
  }
  return aiInstance;
}

// Robust fallback handlers for Gemini API calls to bypass transient 503 or overload errors
async function generateContentWithFallback(ai: GoogleGenAI, params: any) {
  const modelsToTry = ["gemini-2.5-flash", "gemini-3.5-flash", "gemini-3.1-pro-preview"];
  if (params.model) {
    const idx = modelsToTry.indexOf(params.model);
    if (idx !== -1) {
      modelsToTry.splice(idx, 1);
    }
    modelsToTry.unshift(params.model);
  }

  let lastError: any = null;
  for (const model of modelsToTry) {
    try {
      console.log(`[Gemini API] Attempting with model: ${model}`);
      const response = await ai.models.generateContent({
        ...params,
        model: model
      });
      console.log(`[Gemini API] Success with model: ${model}`);
      return response;
    } catch (err: any) {
      console.warn(`[Gemini API] Failed with model ${model}:`, err.message || err);
      lastError = err;
    }
  }
  throw lastError || new Error("All models failed to generate content.");
}

async function* generateContentStreamWithFallback(ai: GoogleGenAI, params: any) {
  const modelsToTry = ["gemini-3.5-flash", "gemini-2.5-flash", "gemini-3.1-pro-preview"];
  if (params.model) {
    const idx = modelsToTry.indexOf(params.model);
    if (idx !== -1) {
      modelsToTry.splice(idx, 1);
    }
    modelsToTry.unshift(params.model);
  }

  let lastError: any = null;
  for (const model of modelsToTry) {
    try {
      console.log(`[Gemini API Stream] Attempting with model: ${model}`);
      const responseStream = await ai.models.generateContentStream({
        ...params,
        model: model
      });

      // Try to read the first chunk to ensure the stream is valid and not throwing a 503/400
      const iterator = responseStream[Symbol.asyncIterator]();
      let firstResult;
      try {
        firstResult = await iterator.next();
      } catch (firstReadErr: any) {
        console.warn(`[Gemini API Stream] First read failed for model ${model}:`, firstReadErr.message || firstReadErr);
        throw firstReadErr; // This will trigger the outer catch and fallback to the next model!
      }

      console.log(`[Gemini API Stream] Success first read with model: ${model}`);

      // If the first read was successful, yield the first chunk and then yield the rest
      if (!firstResult.done) {
        yield firstResult.value;
      }

      let nextResult = await iterator.next();
      while (!nextResult.done) {
        yield nextResult.value;
        nextResult = await iterator.next();
      }

      // Successfully streamed the entire content! Exit.
      return;
    } catch (err: any) {
      console.warn(`[Gemini API Stream] Failed with model ${model}:`, err.message || err);
      lastError = err;
    }
  }
  throw lastError || new Error("All models failed to generate stream.");
}

// Helper to determine the target language name
function getLanguageName(lang: string): string {
  const map: Record<string, string> = {
    en: "English",
    hi: "Hindi (हिन्दी)",
    kn: "Kannada (ಕನ್ನಡ)",
    ta: "Tamil (தமிழ்)",
    te: "Telugu (తెలుగు)",
    mr: "Marathi (मराठी)",
    bn: "Bengali (বাংলা)"
  };
  return map[lang] || "English";
}

// Core API Health Route
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    apiConfigured: !!process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY"
  });
});

// 1. AI Citizen Chatbot Endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { messages, language = "en" } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid messages array provided." });
    }

    let ai;
    try {
      ai = getAI();
    } catch (keyErr: any) {
      return res.status(500).json({
        error: "GEMINI_API_KEY Missing",
        message: keyErr.message
      });
    }

    const targetLang = getLanguageName(language);

    // Filter and format message logs for Gemini
    const chatHistory = messages.map((m) => `${m.role === "user" ? "Citizen" : "Assistant"}: ${m.content}`).join("\n");

    const systemInstruction = `
      You are Smart Bharat AI, an elite, highly knowledgeable government assistant designed to help Indian citizens.
      Your primary purpose is to guide citizens regarding government services, procedures, rights, and welfare.
      Always respond in a professional, polite, helpful, and empathetic tone.
      Provide detailed, accurate answers with specific details relevant to India (e.g. government departments, official websites ending in .gov.in, processes).
      Ensure your final response is translated and presented in ${targetLang}.
      Use Markdown formatting (bold, lists, headers) to make responses easy to read.

      CRITICAL RULE: Every single response you generate MUST follow this EXACT layout structure.
      You must begin your response with a metadata section, followed by a separator, followed by your conversational answer.
      
      The metadata section is a raw, unquoted JSON object containing three fields:
      - "category": One of "Government Scheme", "Document Help", "Civic Complaint", "Complaint Tracking", "General Information", "Emergency".
      - "schemeInfo": (Only if category is "Government Scheme", otherwise null) - an object with:
        - "eligibility": A concise description in ${targetLang} of who is eligible for this scheme.
        - "requiredDocuments": An array of strings of necessary documents in ${targetLang}.
        - "applicationProcess": An array of step-by-step application instructions in ${targetLang}.
        - "officialWebsite": The exact official government website URL (must end in .gov.in or .nic.in).
        - "tips": An array of strings containing practical citizen tips in ${targetLang}.
      - "civicComplaintInfo": (Only if category is "Civic Complaint", otherwise null) - an object with:
        - "department": The specific government department responsible (e.g., BESCOM, BBMP, PWD, Municipal Corporation).
        - "priority": One of "Low", "Medium", "High", "Critical".
        - "estimatedResolutionTime": A realistic duration (e.g., "3-5 Working Days", "24-48 Hours").
        - "complaintDraft": A complete, formal grievance petition/complaint letter draft in ${targetLang} addressed to the department officer, structured and signed as "Citizen".

      Layout template:
      ---METADATA---
      {
        "category": "Government Scheme" or "Document Help" or "Civic Complaint" or "Complaint Tracking" or "General Information" or "Emergency",
        "schemeInfo": { ... } or null,
        "civicComplaintInfo": { ... } or null
      }
      ---CONTENT---
      Your conversational, friendly, and complete citizen response in ${targetLang} goes here.
      
      Do NOT wrap the JSON inside markdown codeblocks (no \`\`\`json). Output raw, plain text JSON directly between the markers. Ensure the JSON is completely valid and parseable.

      LOW LATENCY RULES:
      - Responses must begin appearing immediately.
      - Avoid unnecessary conversational fluff, preambles, or long introductions. Answer the query directly and effectively.
      - Keep the final conversational content concise and focused.
    `;

    const prompt = `
      System Context: ${systemInstruction}
      
      Conversation so far:
      ${chatHistory}
      
      Provide the next response as Assistant:
    `;

    // Set streaming headers
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    // Track state for clean shutdown
    let isClosed = false;
    const timeoutId = setTimeout(() => {
      if (!isClosed) {
        console.warn("[Express] Hard 20s timeout triggered.");
        res.write(`data: ${JSON.stringify({ error: "TIMEOUT", text: "\n\nResponse is taking longer than expected. Please try again." })}\n\n`);
        res.write("data: [DONE]\n\n");
        res.end();
        isClosed = true;
      }
    }, 20000);

    req.on("close", () => {
      isClosed = true;
      clearTimeout(timeoutId);
      console.log("[Express] Client closed connection.");
    });

    try {
      const userMessageContent = messages[messages.length - 1]?.content || "";
      // Only use Google Search Grounding when live government information is actually required.
      // For normal civic questions, answer directly without search.
      const requiresLiveSearch = /current|latest|live|now|recent|update|today|this week|active|status of|how much is the|new scheme|subsidies amount/i.test(userMessageContent);

      const streamConfig: any = {
        maxOutputTokens: 512,
        temperature: 0.2,
      };

      if (requiresLiveSearch) {
        console.log("[Gemini API] Activating Google Search Grounding for live query.");
        streamConfig.tools = [{ googleSearch: {} }];
      }

      const responseStream = generateContentStreamWithFallback(ai, {
        model: "gemini-3.5-flash",
        contents: prompt,
        config: streamConfig
      });

      for await (const chunk of responseStream) {
        if (isClosed) {
          break;
        }
        const text = chunk.text;
        if (text) {
          res.write(`data: ${JSON.stringify({ text })}\n\n`);
        }
      }
      
      if (!isClosed) {
        res.write("data: [DONE]\n\n");
      }
    } catch (streamError: any) {
      console.error("Error generating stream:", streamError);
      if (!isClosed) {
        res.write(`data: ${JSON.stringify({ error: streamError.message || "Error generating stream" })}\n\n`);
      }
    } finally {
      clearTimeout(timeoutId);
      res.end();
    }
  } catch (error: any) {
    console.error("Error in /api/chat endpoint:", error);
    if (!res.headersSent) {
      res.status(500).json({
        error: "AI Assistant Error",
        message: error.message || "An unexpected error occurred while communicating with Gemini."
      });
    }
  }
});

// 2. Government Scheme Recommendation Endpoint
app.post("/api/schemes", async (req, res) => {
  try {
    const { age, occupation, income, state, gender, education, language = "en" } = req.body;
    const ai = getAI();
    const targetLang = getLanguageName(language);

    const systemPrompt = `
      You are an expert Indian policy advisor. Based on the citizen demographics, recommend 3-4 highly relevant Central or State Government schemes (such as PM-KISAN, Pradhan Mantri Mudra Yojana, PM-Awas Yojana, PM-Svanidhi, Post Matric Scholarship, Ladli Behna, etc.).
      Analyze these demographic details:
      - Age: ${age || "Any"}
      - Occupation: ${occupation || "Any"}
      - Annual Family Income: ₹${income || "Any"}
      - Residence State: ${state || "Any"}
      - Gender: ${gender || "Any"}
      - Education Qualification: ${education || "Any"}

      You must return a JSON response matching this EXACT TypeScript schema. Do not output markdown codeblocks around the JSON, just pure raw JSON that can be parsed directly.
      
      interface SchemeResponse {
        schemes: Array<{
          name: string; // Title in ${targetLang}
          category: string; // e.g. Agriculture, Business, Housing, Education
          briefDescription: string; // In ${targetLang}
          eligibilityDetails: string; // Why it fits this user, in ${targetLang}
          benefits: string[]; // List of key benefits in ${targetLang}
          applicationSteps: string[]; // Step-by-step applying process in ${targetLang}
          documentsRequired: string[]; // Required paperwork in ${targetLang}
          officialUrl: string; // Actual official portal URL (must end in .gov.in or similar credible Indian link)
        }>
      }
    `;

    const response = await generateContentWithFallback(ai, {
      model: "gemini-3.5-flash",
      contents: systemPrompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const resultText = response.text?.trim() || "{}";
    const data = JSON.parse(resultText);
    res.json(data);
  } catch (error: any) {
    console.error("Error in /api/schemes:", error);
    res.status(500).json({
      error: "Scheme Finder Error",
      message: error.message || "Could not generate government scheme recommendations."
    });
  }
});

// 3. Document Assistant Checklist Endpoint
app.post("/api/documents", async (req, res) => {
  try {
    const { serviceName, language = "en" } = req.body;
    if (!serviceName) {
      return res.status(400).json({ error: "serviceName is required." });
    }

    const ai = getAI();
    const targetLang = getLanguageName(language);

    const prompt = `
      Analyze the Indian public service requested: "${serviceName}".
      Provide comprehensive details for applying to this service in India.
      Return a JSON response matching this EXACT TypeScript schema. Do not return markdown wrappers, just raw JSON.

      interface DocumentChecklist {
        service: string; // Service name in ${targetLang}
        processingTime: string; // Estimated working days (e.g., "7-15 Working Days")
        approxFee: string; // e.g., "₹150 (Normal), ₹1500 (Tatkaal)"
        requiredDocuments: Array<{
          name: string; // Name of paper in ${targetLang}
          purpose: string; // Why it is needed/What serves as this (e.g. "Aadhaar / Voter ID as Address Proof"), in ${targetLang}
          isMandatory: boolean;
        }>;
        applicationSteps: string[]; // Step-by-step applying guide in ${targetLang}
        importantTips: string[]; // Pro-tips/Important precautions in ${targetLang}
      }
    `;

    const response = await generateContentWithFallback(ai, {
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const resultText = response.text?.trim() || "{}";
    const data = JSON.parse(resultText);
    res.json(data);
  } catch (error: any) {
    console.error("Error in /api/documents:", error);
    res.status(500).json({
      error: "Document Assistant Error",
      message: error.message || "Failed to generate document checklist."
    });
  }
});

// 4. Civic Complaint Categorization & Draft Generation Endpoint
app.post("/api/complaints/categorize", async (req, res) => {
  try {
    const { description, location = "", language = "en" } = req.body;
    if (!description) {
      return res.status(400).json({ error: "description is required." });
    }

    const ai = getAI();
    const targetLang = getLanguageName(language);

    const prompt = `
      You are an automated civic intake supervisor for municipal corporations in India (e.g. Swachh Bharat, Municipal Councils, PWD, Electricity Board, Jal Board).
      Analyze this civic grievance: "${description}".
      Simulated Location: "${location || "Assigned via GPS"}".

      Determine the correct classification, priority, and draft a formal administrative letter/grievance petition that can be sent to municipal authorities.
      Return a JSON response matching this EXACT TypeScript schema. Do not return markdown wrappers, just raw JSON.

      interface ComplaintIntake {
        category: string; // e.g. Waste Management, Pot Holes / Road Repair, Streetlights, Water Supply, Drainage & Sewage
        department: string; // e.g. Municipal Solid Waste Department, Public Works Department (PWD), Municipal Electricity Board, Jal Board
        priorityLevel: "Low" | "Medium" | "High" | "Critical"; // Based on safety hazards, public health impact
        estimatedResolutionTime: string; // e.g. "24-48 Hours", "3-5 Working Days"
        formalComplaintDraft: string; // An elegant, formal administrative letter draft addressed to the Ward Officer, fully formatted with Subject, Salutation, Body, and Sign-off, translated and rendered in ${targetLang}.
      }
    `;

    const response = await generateContentWithFallback(ai, {
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const resultText = response.text?.trim() || "{}";
    const data = JSON.parse(resultText);
    res.json(data);
  } catch (error: any) {
    console.error("Error in /api/complaints/categorize:", error);
    res.status(500).json({
      error: "Civic Portal Error",
      message: error.message || "Failed to classify and draft civic grievance."
    });
  }
});

// 5. Dynamic Translation API
app.post("/api/translate", async (req, res) => {
  try {
    const { text, targetLanguage } = req.body;
    if (!text || !targetLanguage) {
      return res.status(400).json({ error: "text and targetLanguage are required." });
    }

    const ai = getAI();
    const targetLang = getLanguageName(targetLanguage);

    const prompt = `
      Translate the following Indian civic government statement/phrase into ${targetLang}. Preserve any placeholders, numbers, and maintain a highly respectful, formal administrative tone.
      Return only the direct translation. Do not include extra preambles.
      
      Text to translate:
      ${text}
    `;

    const response = await generateContentWithFallback(ai, {
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    res.json({ translatedText: response.text?.trim() || text });
  } catch (error: any) {
    console.error("Error in /api/translate:", error);
    res.status(500).json({
      error: "Translation Error",
      message: error.message || "Failed to translate the selected text."
    });
  }
});

// Vite Middleware & Static Fallback Setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting in development mode with Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting in production mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Smart Bharat AI Full-Stack Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
