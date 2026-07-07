import React, { createContext, useContext, useState, useEffect } from "react";
import { AppState, UserProfile, ComplaintTicket, Scheme, ChatMessage, ComplaintStatus } from "./types";

interface AppContextProps {
  state: AppState;
  setLanguage: (lang: string) => void;
  setTheme: (theme: "light" | "dark") => void;
  updateProfile: (profile: Partial<UserProfile>) => void;
  addComplaint: (complaint: Omit<ComplaintTicket, "id" | "status" | "timeline" | "dateSubmitted"> & { id?: string; status?: ComplaintStatus }) => ComplaintTicket;
  toggleSchemeBookmark: (scheme: Scheme) => void;
  addChatMessage: (
    role: "user" | "model",
    content: string,
    category?: ChatMessage["category"],
    schemeInfo?: ChatMessage["schemeInfo"],
    civicComplaintInfo?: ChatMessage["civicComplaintInfo"]
  ) => void;
  toggleChatBookmark: (id: string) => void;
  clearChat: () => void;
  addRecentSearch: (query: string) => void;
  isSchemeSaved: (name: string) => boolean;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const DEFAULT_PROFILE: UserProfile = {
  name: "Khushi Kumari",
  age: 42,
  occupation: "Small Business Owner (Retail Store)",
  income: 350000,
  state: "Karnataka",
  gender: "Female",
  education: "Graduate",
  avatarSeed: "khushi"
};

const DEFAULT_COMPLAINTS: ComplaintTicket[] = [
  {
    id: "SB-2026-A109",
    description: "Major pothole on Outer Ring Road near Marathahalli junction causing safety hazards for motorcyclists.",
    location: "12.9562° N, 77.7019° E (ORR Service Rd, Bengaluru)",
    category: "Pot Holes / Road Repair",
    department: "BBMP Public Works Department (PWD)",
    priorityLevel: "High",
    estimatedResolutionTime: "3-5 Working Days",
    formalComplaintDraft: "To,\nThe Assistant Executive Engineer,\nBBMP Ward 150,\nBengaluru.\n\nSubject: Request for urgent repair of major pothole on Outer Ring Road.\n\nSir/Madam,\n\nI am writing to draw your attention to a hazardous pothole on ORR near Marathahalli. This is a critical risk for daily commuters, especially riders at night.\n\nKindly dispatch road repair teams for asphalt laying at the earliest.\n\nThank you.\nSincerely,\nKhushi Kumari",
    status: "Assigned",
    dateSubmitted: "2026-07-02T10:30:00Z",
    timeline: [
      { status: "Submitted", date: "2026-07-02T10:30:00Z", comment: "Complaint filed via Smart Bharat AI. Intake ID verified." },
      { status: "Under Review", date: "2026-07-02T14:15:00Z", comment: "Assigned to BBMP Road Grievance Cell. Priority set to High." },
      { status: "Assigned", date: "2026-07-03T09:00:00Z", comment: "Ticket forwarded to Ward 150 Assistant Executive Engineer." }
    ]
  },
  {
    id: "SB-2026-B943",
    description: "Two streetlights on 4th Cross Road, HSR Layout Sector 3 have been non-functional for over 10 days, making the lane unsafe for seniors.",
    location: "12.9116° N, 77.6382° E (HSR Sector 3, Bengaluru)",
    category: "Streetlights",
    department: "BESCOM Municipal Electrical Department",
    priorityLevel: "Medium",
    estimatedResolutionTime: "24-48 Hours",
    formalComplaintDraft: "To,\nThe Senior Section Engineer,\nBESCOM Division,\nBengaluru.\n\nSubject: Complaint regarding non-functional streetlights in HSR Layout Sector 3.\n\nSir/Madam,\n\nThis is to notify you that two streetlights are out of order for 10+ days. This poses a safety risk.\n\nPlease facilitate bulb replacement.\n\nThank you.\nSincerely,\nKhushi Kumari",
    status: "Resolved",
    dateSubmitted: "2026-07-04T18:20:00Z",
    timeline: [
      { status: "Submitted", date: "2026-07-04T18:20:00Z", comment: "Complaint logged." },
      { status: "Under Review", date: "2026-07-04T20:00:00Z", comment: "Auto-routed to Electrical Cell." },
      { status: "Assigned", date: "2026-07-05T08:30:00Z", comment: "Assigned to BESCOM Ward maintenance team." },
      { status: "Resolved", date: "2026-07-06T11:45:00Z", comment: "Field technicians replaced standard incandescent lamps with energy-efficient LED nodes. Confirmed operational." }
    ]
  }
];

const DEFAULT_CHATS: ChatMessage[] = [
  {
    id: "chat-1",
    role: "model",
    content: "Greetings! I am **Smart Bharat AI**, your dedicated assistant for public schemes, documents, and municipal complaints in India. How can I help you today?",
    timestamp: "2026-07-06T20:00:00Z"
  }
];

const DEFAULT_SCHEMES: Scheme[] = [
  {
    name: "Pradhan Mantri Mudra Yojana (PMMY)",
    category: "Business & Startup",
    briefDescription: "Provides loans up to ₹10 Lakhs to non-corporate, non-farm small/micro enterprises to help expand business activities.",
    eligibilityDetails: "Perfect fit for Retail business owners with annual household income guidelines within standard banking norms.",
    benefits: [
      "No collateral security required for loans up to limits",
      "Low processing charges and flexible repayment tenures",
      "Three products: Shishu (up to ₹50k), Kishor (up to ₹5L), Tarun (up to ₹10L)"
    ],
    applicationSteps: [
      "Prepare your business proposal and collect identity/address proofs.",
      "Visit any designated Commercial, Regional Rural, or Small Finance Bank.",
      "Fill out the Mudra Loan application form corresponding to your product.",
      "Once validated, the bank sanctions the Mudra card with overdraft limits."
    ],
    documentsRequired: [
      "Proof of Identity (Aadhaar Card, Voter ID, PAN Card)",
      "Proof of Residence (Electricity bill, Telephone bill)",
      "Proof of Business Identity / Address (Registration, Licenses)",
      "Quotation of machinery or items to be purchased"
    ],
    officialUrl: "https://www.mudra.org.in"
  }
];

const INITIAL_STATE: AppState = {
  profile: DEFAULT_PROFILE,
  language: "en",
  theme: "light",
  complaints: DEFAULT_COMPLAINTS,
  savedSchemes: DEFAULT_SCHEMES,
  chatHistory: DEFAULT_CHATS,
  recentSearches: ["Mudra Loan Eligibility", "Aadhaar address update fee", "Pothole BBMP complaint portal"]
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem("smart_bharat_state");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Ensure structure is correct
        return {
          ...INITIAL_STATE,
          ...parsed,
          profile: { ...INITIAL_STATE.profile, ...parsed.profile },
          complaints: parsed.complaints || INITIAL_STATE.complaints,
          savedSchemes: parsed.savedSchemes || INITIAL_STATE.savedSchemes,
          chatHistory: parsed.chatHistory || INITIAL_STATE.chatHistory,
        };
      } catch (e) {
        return INITIAL_STATE;
      }
    }
    return INITIAL_STATE;
  });

  useEffect(() => {
    localStorage.setItem("smart_bharat_state", JSON.stringify(state));
  }, [state]);

  // Handle Dark/Light Theme class adding/removing
  useEffect(() => {
    const root = window.document.documentElement;
    if (state.theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [state.theme]);

  const setLanguage = (lang: string) => {
    setState((prev) => ({ ...prev, language: lang }));
  };

  const setTheme = (theme: "light" | "dark") => {
    setState((prev) => ({ ...prev, theme }));
  };

  const updateProfile = (profileUpdate: Partial<UserProfile>) => {
    setState((prev) => ({
      ...prev,
      profile: { ...prev.profile, ...profileUpdate }
    }));
  };

  const addComplaint = (newComplaint: Omit<ComplaintTicket, "id" | "status" | "timeline" | "dateSubmitted"> & { id?: string; status?: ComplaintStatus }) => {
    const id = newComplaint.id || `SB-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const status = newComplaint.status || "Submitted";
    const dateSubmitted = new Date().toISOString();
    
    const ticket: ComplaintTicket = {
      ...newComplaint,
      id,
      status,
      dateSubmitted,
      timeline: [
        { status: "Submitted", date: dateSubmitted, comment: "Civic complaint successfully registered via Smart Bharat AI intake system." }
      ]
    };

    setState((prev) => ({
      ...prev,
      complaints: [ticket, ...prev.complaints]
    }));

    return ticket;
  };

  const toggleSchemeBookmark = (scheme: Scheme) => {
    setState((prev) => {
      const exists = prev.savedSchemes.some((s) => s.name === scheme.name);
      if (exists) {
        return {
          ...prev,
          savedSchemes: prev.savedSchemes.filter((s) => s.name !== scheme.name)
        };
      } else {
        return {
          ...prev,
          savedSchemes: [...prev.savedSchemes, scheme]
        };
      }
    });
  };

  const isSchemeSaved = (name: string) => {
    return state.savedSchemes.some((s) => s.name === name);
  };

  const addChatMessage = (
    role: "user" | "model",
    content: string,
    category?: ChatMessage["category"],
    schemeInfo?: ChatMessage["schemeInfo"],
    civicComplaintInfo?: ChatMessage["civicComplaintInfo"]
  ) => {
    const newMessage: ChatMessage = {
      id: `chat-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      role,
      content,
      timestamp: new Date().toISOString(),
      category,
      schemeInfo,
      civicComplaintInfo
    };
    setState((prev) => ({
      ...prev,
      chatHistory: [...prev.chatHistory, newMessage]
    }));
  };

  const toggleChatBookmark = (id: string) => {
    setState((prev) => ({
      ...prev,
      chatHistory: prev.chatHistory.map((msg) =>
        msg.id === id ? { ...msg, isBookmarked: !msg.isBookmarked } : msg
      )
    }));
  };

  const clearChat = () => {
    setState((prev) => ({
      ...prev,
      chatHistory: [DEFAULT_CHATS[0]]
    }));
  };

  const addRecentSearch = (query: string) => {
    setState((prev) => {
      const filtered = prev.recentSearches.filter((q) => q.toLowerCase() !== query.toLowerCase());
      return {
        ...prev,
        recentSearches: [query, ...filtered].slice(0, 5)
      };
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        setLanguage,
        setTheme,
        updateProfile,
        addComplaint,
        toggleSchemeBookmark,
        addChatMessage,
        toggleChatBookmark,
        clearChat,
        addRecentSearch,
        isSchemeSaved
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within an AppProvider");
  }
  return context;
};
