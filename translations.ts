export interface TranslationSet {
  appName: string;
  tagline: string;
  navHome: string;
  navAssistant: string;
  navSchemes: string;
  navDocuments: string;
  navComplaints: string;
  navTracker: string;
  navDashboard: string;
  
  heroTitle: string;
  heroSub: string;
  heroCtaChat: string;
  heroCtaSchemes: string;
  
  statCitizens: string;
  statSchemes: string;
  statComplaints: string;
  statResolution: string;
  
  chatPlaceholder: string;
  chatSend: string;
  chatSuggested: string;
  chatHistory: string;
  chatClear: string;
  chatBookmark: string;
  chatCopied: string;
  chatVoiceTip: string;
  
  schemeTitle: string;
  schemeAge: string;
  schemeOccupation: string;
  schemeIncome: string;
  schemeState: string;
  schemeGender: string;
  schemeEducation: string;
  schemeSearchBtn: string;
  schemeRecommended: string;
  schemeEligibility: string;
  schemeBenefits: string;
  schemeSteps: string;
  schemeDocs: string;
  schemeVisit: string;
  
  docTitle: string;
  docSelectService: string;
  docTime: string;
  docFee: string;
  docChecklist: string;
  docImportantNotes: string;
  docSteps: string;
  
  complaintTitle: string;
  complaintDesc: string;
  complaintLoc: string;
  complaintUpload: string;
  complaintSubmit: string;
  complaintSuccess: string;
  complaintId: string;
  complaintDept: string;
  complaintPriority: string;
  complaintDraft: string;
  
  trackerTitle: string;
  trackerEnterId: string;
  trackerTrackBtn: string;
  trackerStatus: string;
  trackerDate: string;
  statusSubmitted: string;
  statusReview: string;
  statusAssigned: string;
  statusResolved: string;
  
  dashTitle: string;
  dashWelcome: string;
  dashQuickStats: string;
  dashSavedSchemes: string;
  dashRecentSearches: string;
  dashRecentComplaints: string;
  
  themeLight: string;
  themeDark: string;
}

export const translations: Record<string, TranslationSet> = {
  en: {
    appName: "Smart Bharat AI",
    tagline: "Your Intelligent Civic Companion",
    navHome: "Home",
    navAssistant: "AI Assistant",
    navSchemes: "Scheme Finder",
    navDocuments: "Documents",
    navComplaints: "Civic Portal",
    navTracker: "Grievance Tracker",
    navDashboard: "Dashboard",
    
    heroTitle: "Empowering Every Citizen with Intelligent Governance",
    heroSub: "Access welfare schemes, voice local grievances, get document checklists, and query citizen services in your own language, powered by Google's Gemini AI.",
    heroCtaChat: "Ask AI Assistant",
    heroCtaSchemes: "Find Eligible Schemes",
    
    statCitizens: "Active Digital Citizens",
    statSchemes: "Government Welfare Schemes",
    statComplaints: "Grievances Resolved",
    statResolution: "Average Resolution Rate",
    
    chatPlaceholder: "Ask me anything about Aadhaar, Passport, subsidies, or civic issues...",
    chatSend: "Send",
    chatSuggested: "Suggested Topics",
    chatHistory: "Chat History",
    chatClear: "Clear Chat",
    chatBookmark: "Bookmark Answer",
    chatCopied: "Copied to clipboard!",
    chatVoiceTip: "Speak your query (simulation)",
    
    schemeTitle: "Government Scheme Recommendation Engine",
    schemeAge: "Age",
    schemeOccupation: "Occupation / Profession",
    schemeIncome: "Annual Household Income (INR)",
    schemeState: "State of Residence",
    schemeGender: "Gender",
    schemeEducation: "Highest Education Level",
    schemeSearchBtn: "Find Eligible Welfare Schemes",
    schemeRecommended: "Recommended Government Schemes",
    schemeEligibility: "Eligibility Match Criteria",
    schemeBenefits: "Benefits Provided",
    schemeSteps: "Application Instructions",
    schemeDocs: "Required Paperwork",
    schemeVisit: "Visit Official Site",
    
    docTitle: "Civic Document Assistant",
    docSelectService: "Select Public Service / ID Card",
    docTime: "Estimated Processing Time",
    docFee: "Applicable Application Fee",
    docChecklist: "Required Document Checklist",
    docImportantNotes: "Critical Precautions & Rules",
    docSteps: "Official Application Steps",
    
    complaintTitle: "File a Local Civic Grievance",
    complaintDesc: "Describe the civic issue (e.g. pothole, broken streetlight, garbage dump)...",
    complaintLoc: "Grievance Location (GPS Coordinates)",
    complaintUpload: "Upload Photo of the Issue (Drag & Drop / Browse)",
    complaintSubmit: "Submit Civic Complaint via AI",
    complaintSuccess: "Civic Complaint Registered Successfully!",
    complaintId: "Grievance Ticket ID",
    complaintDept: "Assigned Authority Department",
    complaintPriority: "AI Assigned Priority Level",
    complaintDraft: "AI Auto-Generated Official Petition",
    
    trackerTitle: "Track Public Grievance Status",
    trackerEnterId: "Enter Grievance Ticket ID (e.g., SB-1092-A)",
    trackerTrackBtn: "Fetch Current Status",
    trackerStatus: "Current Grievance Status",
    trackerDate: "Last Update",
    statusSubmitted: "Grievance Received",
    statusReview: "Under Technical Review",
    statusAssigned: "Assigned to Ward Officer",
    statusResolved: "Issue Resolved & Closed",
    
    dashTitle: "Digital Citizen Dashboard",
    dashWelcome: "Welcome back, Citizen",
    dashQuickStats: "Your Civic Profile Summary",
    dashSavedSchemes: "Saved Schemes & Benefits",
    dashRecentSearches: "Recent AI Inquiries",
    dashRecentComplaints: "Your Filed Grievance Tickets",
    
    themeLight: "Light Mode",
    themeDark: "Dark Mode",
  },
  hi: {
    appName: "स्मार्ट भारत एआई",
    tagline: "आपका बुद्धिमान नागरिक साथी",
    navHome: "मुख्य पृष्ठ",
    navAssistant: "एआई सहायक",
    navSchemes: "योजना खोजक",
    navDocuments: "दस्तावेज़",
    navComplaints: "नागरिक पोर्टल",
    navTracker: "शिकायत ट्रैकर",
    navDashboard: "डैशबोर्ड",
    
    heroTitle: "इंटेलिजेंट गवर्नेंस के साथ हर नागरिक को सशक्त बनाना",
    heroSub: "कल्याणकारी योजनाओं तक पहुँचें, स्थानीय शिकायतें उठाएँ, दस्तावेज़ चेकलिस्ट प्राप्त करें, और अपनी भाषा में नागरिक सेवाओं के बारे में पूछें, जो गूगल के जेमिनी एआई द्वारा संचालित है।",
    heroCtaChat: "एआई सहायक से पूछें",
    heroCtaSchemes: "पात्र योजनाएं खोजें",
    
    statCitizens: "सक्रिय डिजिटल नागरिक",
    statSchemes: "सरकारी कल्याण योजनाएं",
    statComplaints: "शिकायतों का समाधान",
    statResolution: "औसत समाधान दर",
    
    chatPlaceholder: "आधार, पासपोर्ट, सब्सिडी या नागरिक मुद्दों के बारे में कुछ भी पूछें...",
    chatSend: "भेजें",
    chatSuggested: "सुझाए गए विषय",
    chatHistory: "चैट इतिहास",
    chatClear: "चैट साफ करें",
    chatBookmark: "उत्तर बुकमार्क करें",
    chatCopied: "क्लिपबोर्ड पर कॉपी किया गया!",
    chatVoiceTip: "अपनी बात बोलें (सिमुलेशन)",
    
    schemeTitle: "सरकारी योजना अनुशंसा इंजन",
    schemeAge: "आयु",
    schemeOccupation: "व्यवसाय / पेशा",
    schemeIncome: "वार्षिक पारिवारिक आय (INR)",
    schemeState: "निवास का राज्य",
    schemeGender: "लिंग",
    schemeEducation: "उच्चतम शिक्षा स्तर",
    schemeSearchBtn: "पात्र कल्याणकारी योजनाएं खोजें",
    schemeRecommended: "अनुशंसित सरकारी योजनाएं",
    schemeEligibility: "पात्रता मिलान मानदंड",
    schemeBenefits: "प्रदान किए गए लाभ",
    schemeSteps: "आवेदन निर्देश",
    schemeDocs: "आवश्यक कागजात",
    schemeVisit: "आधिकारिक साइट पर जाएं",
    
    docTitle: "नागरिक दस्तावेज़ सहायक",
    docSelectService: "सार्वजनिक सेवा / आईडी कार्ड चुनें",
    docTime: "अनुमानित प्रसंस्करण समय",
    docFee: "लागू आवेदन शुल्क",
    docChecklist: "आवश्यक दस्तावेज़ चेकलिस्ट",
    docImportantNotes: "महत्वपूर्ण सावधानियां और नियम",
    docSteps: "आधिकारिक आवेदन चरण",
    
    complaintTitle: "स्थानीय नागरिक शिकायत दर्ज करें",
    complaintDesc: "नागरिक समस्या का वर्णन करें (जैसे गड्ढा, टूटी स्ट्रीटलाइट, कचरा डंप)...",
    complaintLoc: "शिकायत का स्थान (जीपीएस निर्देशांक)",
    complaintUpload: "समस्या का फोटो अपलोड करें (खींचें और छोड़ें / ब्राउज़ करें)",
    complaintSubmit: "एआई के माध्यम से नागरिक शिकायत जमा करें",
    complaintSuccess: "नागरिक शिकायत सफलतापूर्वक पंजीकृत हुई!",
    complaintId: "शिकायत टिकट आईडी",
    complaintDept: "असाइन किया गया प्राधिकरण विभाग",
    complaintPriority: "एआई असाइन की गई प्राथमिकता स्तर",
    complaintDraft: "एआई ऑटो-जेनरेटेड आधिकारिक याचिका",
    
    trackerTitle: "सार्वजनिक शिकायत की स्थिति को ट्रैक करें",
    trackerEnterId: "शिकायत टिकट आईडी दर्ज करें (जैसे, SB-1092-A)",
    trackerTrackBtn: "वर्तमान स्थिति प्राप्त करें",
    trackerStatus: "वर्तमान शिकायत की स्थिति",
    trackerDate: "अंतिम अपडेट",
    statusSubmitted: "शिकायत प्राप्त हुई",
    statusReview: "तकनीकी समीक्षा के अधीन",
    statusAssigned: "वार्ड अधिकारी को सौंपा गया",
    statusResolved: "समस्या का समाधान और बंद",
    
    dashTitle: "डिजिटल नागरिक डैशबोर्ड",
    dashWelcome: "वापसी पर स्वागत है, नागरिक",
    dashQuickStats: "आपका नागरिक प्रोफ़ाइल सारांश",
    dashSavedSchemes: "सहेजी गई योजनाएं और लाभ",
    dashRecentSearches: "हाल ही की एआई पूछताछ",
    dashRecentComplaints: "आपके द्वारा दर्ज शिकायत टिकट",
    
    themeLight: "लाइट मोड",
    themeDark: "डार्क मोड",
  },
  kn: {
    appName: "ಸ್ಮಾರ್ಟ್ ಭಾರತ್ AI",
    tagline: "ನಿಮ್ಮ ಬುದ್ಧಿವಂತ ನಾಗರಿಕ ಸಹಚರ",
    navHome: "ಮುಖಪುಟ",
    navAssistant: "AI ಸಹಾಯದಾತ",
    navSchemes: "ಯೋಜನಾ ಹುಡುಕುವಿಕೆ",
    navDocuments: "ದಾಖಲೆಗಳು",
    navComplaints: "ನಾಗರಿಕ ಪೋರ್ಟಲ್",
    navTracker: "ದೂರು ಟ್ರ್ಯಾಕರ್",
    navDashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    
    heroTitle: "ಬುದ್ಧಿವಂತ ಆಡಳಿತದೊಂದಿಗೆ ಪ್ರತಿ ನಾಗರಿಕರನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವುದು",
    heroSub: "ಕಲ್ಯಾಣ ಯೋಜನೆಗಳನ್ನು ಪ್ರವೇಶಿಸಿ, ಸ್ಥಳೀಯ ದೂರುಗಳನ್ನು ಸಲ್ಲಿಸಿ, ದಾಖಲೆಗಳ ಪಟ್ಟಿಯನ್ನು ಪಡೆಯಿರಿ ಮತ್ತು ನಿಮ್ಮದೇ ಭಾಷೆಯಲ್ಲಿ ನಾಗರಿಕ ಸೇವೆಗಳ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ, ಗೂಗಲ್‌ನ ಜೆಮಿನಿ AI ನಿಂದ ಪ್ರೇರಿತವಾಗಿದೆ.",
    heroCtaChat: "AI ಸಹಾಯದಾತರನ್ನು ಕೇಳಿ",
    heroCtaSchemes: "ಅರ್ಹ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ",
    
    statCitizens: "ಸಕ್ರಿಯ ಡಿಜಿಟಲ್ ನಾಗರಿಕರು",
    statSchemes: "ಸರ್ಕಾರಿ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳು",
    statComplaints: "ಪರಿಹರಿಸಲಾದ ದೂರುಗಳು",
    statResolution: "ಸರಾಸರಿ ಪರಿಹಾರ ದರ",
    
    chatPlaceholder: "ಆಧಾರ್, ಪಾಸ್‌ಪೋರ್ಟ್, ಸಬ್ಸಿಡಿಗಳು ಅಥವಾ ನಾಗರಿಕ ಸಮಸ್ಯೆಗಳ ಬಗ್ಗೆ ಏನನ್ನಾದರೂ ಕೇಳಿ...",
    chatSend: "ಕಳುಹಿಸಿ",
    chatSuggested: "ಸೂಚಿಸಲಾದ ವಿಷಯಗಳು",
    chatHistory: "ಚಾಟ್ ಇತಿಹಾಸ",
    chatClear: "ಚಾಟ್ ತೆರವುಗೊಳಿಸಿ",
    chatBookmark: "ಉತ್ತರವನ್ನು ಬುಕ್‌ಮಾರ್ಕ್ ಮಾಡಿ",
    chatCopied: "ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ಗೆ ನಕಲಿಸಲಾಗಿದೆ!",
    chatVoiceTip: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಮಾತನಾಡಿ (ಸಿಮ್ಯುಲೇಶನ್)",
    
    schemeTitle: "ಸರ್ಕಾರಿ ಯೋಜನೆ ಶಿಫಾರಸು ಇಂಜಿನ್",
    schemeAge: "ವಯಸ್ಸು",
    schemeOccupation: "ಉದ್ಯೋಗ / ವೃತ್ತಿ",
    schemeIncome: "ವಾರ್ಷಿಕ ಕೌಟುಂಬಿಕ ಆದಾಯ (INR)",
    schemeState: "ವಾಸಸ್ಥಳ ರಾಜ್ಯ",
    schemeGender: "ಲಿಂಗ",
    schemeEducation: "ಗರಿಷ್ಠ ಶಿಕ್ಷಣ ಮಟ್ಟ",
    schemeSearchBtn: "ಅರ್ಹ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ",
    schemeRecommended: "ಶಿಫಾರಸು ಮಾಡಲಾದ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
    schemeEligibility: "ಅರ್ಹತೆಯ ಹೊಂದಾಣಿಕೆ ಮಾನದಂಡ",
    schemeBenefits: "ಒದಗಿಸಲಾದ ಪ್ರಯೋಜನಗಳು",
    schemeSteps: "ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ಸೂಚನೆಗಳು",
    schemeDocs: "ಅಗತ್ಯವಿರುವ ದಾಖಲೆಗಳು",
    schemeVisit: "ಅಧಿಕೃತ ಸೈಟ್‌ಗೆ ಭೇಟಿ ನೀಡಿ",
    
    docTitle: "ನಾಗರಿಕ ದಾಖಲೆ ಸಹಾಯದಾತ",
    docSelectService: "ಸಾರ್ವಜನಿಕ ಸೇವೆ / ಐಡಿ ಕಾರ್ಡ್ ಆಯ್ಕೆಮಾಡಿ",
    docTime: "ಅಂದಾಜು ಪ್ರಕ್ರಿಯೆ ಸಮಯ",
    docFee: "ಅನ್ವಯವಾಗುವ ಅರ್ಜಿ ಶುಲ್ಕ",
    docChecklist: "ಅಗತ್ಯವಿರುವ ದಾಖಲೆಗಳ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ",
    docImportantNotes: "ಪ್ರಮುಖ ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು ಮತ್ತು ನಿಯಮಗಳು",
    docSteps: "ಅಧಿಕೃತ ಅನ್ವಯಿಕ ಹಂತಗಳು",
    
    complaintTitle: "ಸ್ಥಳೀಯ ನಾಗರಿಕ ದೂರನ್ನು ದಾಖಲಿಸಿ",
    complaintDesc: "ನಾಗರಿಕ ಸಮಸ್ಯೆಯನ್ನು ವಿವರಿಸಿ (ಉದಾ. ಗುಂಡಿ, ಒಡೆದ ಬೀದಿದೀಪ, ಕಸದ ರಾಶಿ)...",
    complaintLoc: "ದೂರಿನ ಸ್ಥಳ (GPS ನಿರ್ದೇಶಾಂಕಗಳು)",
    complaintUpload: "ಸಮಸ್ಯೆಯ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (ಎಳೆಯಿರಿ ಮತ್ತು ಬಿಡಿ / ಬ್ರೌಸ್ ಮಾಡಿ)",
    complaintSubmit: "AI ಮೂಲಕ ನಾಗರಿಕ ದೂರನ್ನು ಸಲ್ಲಿಸಿ",
    complaintSuccess: "ನಾಗರಿಕ ದೂರು ಯಶಸ್ವಿಯಾಗಿ ನೋಂದಾಯಿಸಲ್ಪಟ್ಟಿದೆ!",
    complaintId: "ದೂರು ಟಿಕೆಟ್ ಐಡಿ",
    complaintDept: "ನಿಯೋಜಿಸಲಾದ ಪ್ರಾಧಿಕಾರ ಇಲಾಖೆ",
    complaintPriority: "AI ನಿಯೋಜಿಸಿದ ಆದ್ಯತೆಯ ಮಟ್ಟ",
    complaintDraft: "AI ಸ್ವಯಂ-ರಚಿತ ಅಧಿಕೃತ ಅರ್ಜಿ",
    
    trackerTitle: "ಸಾರ್ವಜನಿಕ ದೂರಿನ ಸ್ಥಿತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
    trackerEnterId: "ದೂರು ಟಿಕೆಟ್ ಐಡಿ ನಮೂದಿಸಿ (ಉದಾ, SB-1092-A)",
    trackerTrackBtn: "ಪ್ರಸ್ತುತ ಸ್ಥಿತಿಯನ್ನು ಪಡೆಯಿರಿ",
    trackerStatus: "ಪ್ರಸ್ತುತ ದೂರಿನ ಸ್ಥಿತಿ",
    trackerDate: "ಕೊನೆಯ ಅಪ್ಡೇಟ್",
    statusSubmitted: "ದೂರು ಸ್ವೀಕರಿಸಲಾಗಿದೆ",
    statusReview: "ತಾಂತ್ರಿಕ ಪರಿಶೀಲನೆಯಲ್ಲಿದೆ",
    statusAssigned: "ವಾರ್ಡ್ ಅಧಿಕಾರಿಗೆ ನಿಯೋಜಿಸಲಾಗಿದೆ",
    statusResolved: "ಸಮಸ್ಯೆ ಪರಿಹರಿಸಲಾಗಿದೆ ಮತ್ತು ಮುಚ್ಚಲಾಗಿದೆ",
    
    dashTitle: "ಡಿಜಿಟಲ್ ನಾಗರಿಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    dashWelcome: "ಮರಳಿ ಸ್ವಾಗತ, ನಾಗರಿಕರೇ",
    dashQuickStats: "ನಿಮ್ಮ ನಾಗರಿಕ ಪ್ರೊಫೈಲ್ ಸಾರಾಂಶ",
    dashSavedSchemes: "ಉಳಿಸಿದ ಯೋಜನೆಗಳು ಮತ್ತು ಪ್ರಯೋಜನಗಳು",
    dashRecentSearches: "ಇತ್ತೀಚಿನ AI ವಿಚಾರಣೆಗಳು",
    dashRecentComplaints: "ನೀವು ಸಲ್ಲಿಸಿದ ದೂರು ಟಿಕೆಟ್‌ಗಳು",
    
    themeLight: "ಬೆಳಕಿನ ಮೋಡ್",
    themeDark: "ಡಾರ್ಕ್ ಮೋಡ್",
  },
  ta: {
    appName: "ஸ்மார்ட் பாரத் AI",
    tagline: "உங்கள் அறிவார்ந்த குடிமைத் துணை",
    navHome: "முகப்பு",
    navAssistant: "AI உதவியாளர்",
    navSchemes: "திட்டக் கண்டறிவி",
    navDocuments: "ஆவணங்கள்",
    navComplaints: "குடிமை போர்டல்",
    navTracker: "புகார் டிராக்கர்",
    navDashboard: "டாஷ்போர்டு",
    
    heroTitle: "அறிவார்ந்த நிர்வாகத்தின் மூலம் ஒவ்வொரு குடிமகனையும் வலுப்படுத்துதல்",
    heroSub: "கூகுளின் ஜெமினி AI ஆல் இயக்கப்படும் உங்கள் சொந்த மொழியில் நலத்திட்டங்களை அணுகவும், உள்ளூர் குறைகளை எழுப்பவும், ஆவண சரிபார்ப்பு பட்டியல்களைப் பெறவும் மற்றும் குடிமக்களின் சேவைகளைப் பற்றி கேட்கவும்.",
    heroCtaChat: "AI உதவியாளரிடம் கேளுங்கள்",
    heroCtaSchemes: "தகுதியான திட்டங்களைக் கண்டறியவும்",
    
    statCitizens: "செயலில் உள்ள டிஜிட்டல் குடிமக்கள்",
    statSchemes: "அரசு நலத்திட்டங்கள்",
    statComplaints: "தீர்வு காணப்பட்ட குறைகள்",
    statResolution: "சராசரி தீர்வு விகிதம்",
    
    chatPlaceholder: "ஆதார், பாஸ்போர்ட், மானியங்கள் அல்லது குடிமைப் பிரச்சினைகள் பற்றி எதையும் கேளுங்கள்...",
    chatSend: "அனுப்பு",
    chatSuggested: "பரிந்துரைக்கப்பட்ட தலைப்புகள்",
    chatHistory: "உரையாடல் வரலாறு",
    chatClear: "உரையாடலை அழி",
    chatBookmark: "பதிலை புக்மார்க் செய்",
    chatCopied: "கிளிப்போர்டுக்கு நகலெடுக்கப்பட்டது!",
    chatVoiceTip: "உங்கள் கேள்வியைப் பேசுங்கள் (உருவகப்படுத்துதல்)",
    
    schemeTitle: "அரசு திட்டப் பரிந்துரை இயந்திரம்",
    schemeAge: "வயது",
    schemeOccupation: "தொழில் / வேலை",
    schemeIncome: "ஆண்டு குடும்ப வருமானம் (INR)",
    schemeState: "வசிப்பிட மாநிலம்",
    schemeGender: "பாலினம்",
    schemeEducation: "உயர்ந்த கல்வி நிலை",
    schemeSearchBtn: "தகுதியான நலத்திட்டங்களைக் கண்டறியவும்",
    schemeRecommended: "பரிந்துரைக்கப்பட்ட அரசு திட்டங்கள்",
    schemeEligibility: "தகுதிப் பொருத்த அளவுகோல்",
    schemeBenefits: "வழங்கப்படும் நன்மைகள்",
    schemeSteps: "விண்ணப்பிப்பதற்கான வழிமுறைகள்",
    schemeDocs: "தேவையான ஆவணங்கள்",
    schemeVisit: "அதிகாரப்பூர்வ தளத்தைப் பார்வையிடவும்",
    
    docTitle: "குடிமை ஆவண உதவியாளர்",
    docSelectService: "பொது சேவை / அடையாள அட்டையைத் தேர்ந்தெடுக்கவும்",
    docTime: "மதிப்பிடப்பட்ட செயலாக்க நேரம்",
    docFee: "பொருந்தக்கூடிய விண்ணப்பக் கட்டணம்",
    docChecklist: "தேவையான ஆவண சரிபார்ப்பு பட்டியல்",
    docImportantNotes: "முக்கியமான முன்னெச்சரிக்கைகள் & விதிகள்",
    docSteps: "அதிகாரப்பூர்வ விண்ணப்பப் படிகள்",
    
    complaintTitle: "உள்ளூர் குடிமைப் புகாரைப் பதிவு செய்யவும்",
    complaintDesc: "குடிமைப் பிரச்சினையை விவரிக்கவும் (எ.கா. குழி, உடைந்த தெருவிளக்கு, குப்பை குவியல்)...",
    complaintLoc: "புகார் இடம் (ஜிபிஎஸ் ஆயத்தொலைவுகள்)",
    complaintUpload: "பிரச்சினையின் புகைப்படத்தைப் பதிவேற்றவும் (இழுத்து விடவும் / உலாவவும்)",
    complaintSubmit: "AI மூலம் குடிமைப் புகாரைச் சமர்ப்பிக்கவும்",
    complaintSuccess: "குடிமைப் புகார் வெற்றிகரமாகப் பதிவுசெய்யப்பட்டது!",
    complaintId: "புகார் டிக்கெட் ஐடி",
    complaintDept: "ஒதுக்கப்பட்ட அதிகாரத் துறை",
    complaintPriority: "AI ஒதுக்கிய முன்னுரிமை நிலை",
    complaintDraft: "AI தானாக உருவாக்கிய அதிகாரப்பூர்வ மனு",
    
    trackerTitle: "பொது குறை தீர்க்கும் நிலையை கண்காணிக்கவும்",
    trackerEnterId: "புகார் டிக்கெட் ஐடியை உள்ளிடவும் (எ.கா., SB-1092-A)",
    trackerTrackBtn: "தற்போதைய நிலையைப் பெறுக",
    trackerStatus: "தற்போதைய புகார் நிலை",
    trackerDate: "கடைசி புதுப்பிப்பு",
    statusSubmitted: "புகார் பெறப்பட்டது",
    statusReview: "தொழில்நுட்ப மதிப்பாய்வில் உள்ளது",
    statusAssigned: "வார்டு அதிகாரிக்கு ஒதுக்கப்பட்டது",
    statusResolved: "பிரச்சினை தீர்க்கப்பட்டு மூடப்பட்டது",
    
    dashTitle: "டிஜிட்டல் குடிமகன் டாஷ்போர்டு",
    dashWelcome: "மீண்டும் வருக, குடிமகனே",
    dashQuickStats: "உங்கள் குடிமை சுயவிவரச் சுருக்கம்",
    dashSavedSchemes: "சேமிக்கப்பட்ட திட்டங்கள் & நன்மைகள்",
    dashRecentSearches: "சமீபத்திய AI விசாரணைகள்",
    dashRecentComplaints: "நீங்கள் சமர்ப்பித்த புகார் டிக்கெட்டுகள்",
    
    themeLight: "ஒளி பயன்முறை",
    themeDark: "இருண்ட பயன்முறை",
  },
  te: {
    appName: "స్మార్ట్ భారత్ AI",
    tagline: "మీ తెలివైన పౌర సహచరుడు",
    navHome: "హోమ్",
    navAssistant: "AI సహాయకుడు",
    navSchemes: "పథకాల అన్వేషణ",
    navDocuments: "పత్రాలు",
    navComplaints: "పౌర పోర్టల్",
    navTracker: "ఫిర్యాదుల ట్రాకర్",
    navDashboard: "డాష్‌బోర్డ్",
    
    heroTitle: "తెలివైన పరిపాలనతో ప్రతి పౌరుడిని సాధికారం చేయడం",
    heroSub: "గూగుల్ జెమిని AI ఆధారిత మీ స్వంత భాషలో సంక్షేమ పథకాలను యాక్సెస్ చేయండి, స్థానిక సమస్యలపై ఫిర్యాదు చేయండి, అవసరమైన డాక్యుమెంట్ల జాబితాను పొందండి మరియు పౌర సేవల గురించి అడగండి.",
    heroCtaChat: "AI సహాయకుడిని అడగండి",
    heroCtaSchemes: "అర్హత గల పథకాలను కనుగొనండి",
    
    statCitizens: "యాక్టివ్ డిజిటల్ పౌరులు",
    statSchemes: "ప్రభుత్వ సంక్షేమ పథకాలు",
    statComplaints: "పరిష్కరించబడిన సమస్యలు",
    statResolution: "సగటు పరిష్కార రేటు",
    
    chatPlaceholder: "आधार, పాస్‌పోర్ట్, సబ్సిడీలు లేదా పౌర సమస్యల గురించి ఏదైనా అడగండి...",
    chatSend: "పంపండి",
    chatSuggested: "సూచించబడిన అంశాలు",
    chatHistory: "చాట్ చరిత్ర",
    chatClear: "చాట్ క్లియర్ చేయి",
    chatBookmark: "సమాధానాన్ని బుక్‌మార్క్ చేయి",
    chatCopied: "క్లిప్‌బోర్డ్‌కు కాపీ చేయబడింది!",
    chatVoiceTip: "మీ ప్రశ్నను మాట్లాడండి (సిమ్యులేషన్)",
    
    schemeTitle: "ప్రభుత్వ పథకాల సిఫార్సు ఇంజిన్",
    schemeAge: "వయస్సు",
    schemeOccupation: "ఉద్యోగం / వృత్తి",
    schemeIncome: "వార్షిక కుటుంబ ఆదాయం (INR)",
    schemeState: "నివాస రాష్ట్రం",
    schemeGender: "లింగం",
    schemeEducation: "అత్యున్నత విద్యా అర్హత",
    schemeSearchBtn: "అర్హత గల సంక్షేమ పథకాలను కనుగొనండి",
    schemeRecommended: "సిఫార్సు చేయబడిన ప్రభుత్వ పథకాలు",
    schemeEligibility: "అర్హత సరిపోలిక ప్రమాణాలు",
    schemeBenefits: "అందించే ప్రయోజనాలు",
    schemeSteps: "దరఖాస్తు విధానం",
    schemeDocs: "అవసరమైన పత్రాలు",
    schemeVisit: "అధికారిక సైట్‌ను సందర్శించండి",
    
    docTitle: "పౌర పత్ర సహాయకుడు",
    docSelectService: "పౌర సేవ / ఐడి కార్డ్‌ను ఎంచుకోండి",
    docTime: "అంచనా వేసిన ప్రాసెసింగ్ సమయం",
    docFee: "వర్తించే దరఖాస్తు రుసుము",
    docChecklist: "అవసరమైన పత్రాల తనిఖీ జాబితా",
    docImportantNotes: "ముఖ్యమైన జాగ్రత్తలు & నియమాలు",
    docSteps: "అధికారిక దరఖాస్తు దశలు",
    
    complaintTitle: "స్థానిక పౌర ఫిర్యాదును నమోదు చేయండి",
    complaintDesc: "పౌర సమస్యను వివరించండి (ఉదా. గుంత, విరిగిపోయిన వీధిలైట్, చెత్త కుప్ప)...",
    complaintLoc: "ఫిర్యాదు స్థానం (GPS కోఆర్డినేట్స్)",
    complaintUpload: "సమస్య ఫోటోను అప్‌లోడ్ చేయండి (డ్రాగ్ & డ్రాప్ / బ్రౌజ్)",
    complaintSubmit: "AI ద్వారా పౌర ఫిర్యాదును సమర్పించండి",
    complaintSuccess: "పౌర ఫిర్యాదు విజయవంతంగా నమోదైంది!",
    complaintId: "ఫిర్యాదు టికెట్ ఐడి",
    complaintDept: "కేటాయించిన అధికార విభాగం",
    complaintPriority: "AI కేటాయించిన ప్రాధాన్యతా స్థాయి",
    complaintDraft: "AI స్వయంచాలకంగా రూపొందించిన అధికారిక వినతి పత్రం",
    
    trackerTitle: "పౌర ఫిర్యాదు స్థితిని ట్రాక్ చేయండి",
    trackerEnterId: "ఫిర్యాదు టికెట్ ఐడిని నమోదు చేయండి (ఉదా, SB-1092-A)",
    trackerTrackBtn: "ప్రస్తుత స్థితిని పొందండి",
    trackerStatus: "ప్రస్తుత ఫిర్యాదు స్థితి",
    trackerDate: "చివరి అప్‌డేట్",
    statusSubmitted: "ఫిర్యాదు స్వీకరించబడింది",
    statusReview: "సాంకేతిక సమీక్షలో ఉంది",
    statusAssigned: "వార్డు అధికారికి కేటాయించబడింది",
    statusResolved: "సమస్య పరిష్కరించబడింది & మూసివేయబడింది",
    
    dashTitle: "డిజిటల్ పౌరుల డాష్‌బోర్డ్",
    dashWelcome: "తిరిగి స్వాగతం, పౌరులారా",
    dashQuickStats: "మీ పౌర ప్రొఫైల్ సారాంశం",
    dashSavedSchemes: "సేవ్ చేసిన పథకాలు & ప్రయోజనాలు",
    dashRecentSearches: "ఇటీవలి AI విచారణలు",
    dashRecentComplaints: "మీరు సమర్పించిన ఫిర్యాదు టిక్కెట్లు",
    
    themeLight: "లైట్ మోడ్",
    themeDark: "డార్క్ మోడ్",
  },
  mr: {
    appName: "स्मार्ट भारत AI",
    tagline: "तुमचा बुद्धिमान नागरी सहकारी",
    navHome: "मुख्यपृष्ठ",
    navAssistant: "AI सहाय्यक",
    navSchemes: "योजना शोधक",
    navDocuments: "दस्तऐवज",
    navComplaints: "नागरी पोर्टल",
    navTracker: "तक्रार ट्रॅकर",
    navDashboard: "डॅशबोर्ड",
    
    heroTitle: "इंटेलिजेंट गव्हर्नन्सद्वारे प्रत्येक नागरिकाचे सक्षमीकरण",
    heroSub: "कल्याणकारी योजनांमध्ये प्रवेश मिळवा, स्थानिक तक्रारी मांडू शकता, दस्तऐवज चेकलिस्ट मिळवू शकता, आणि गुगलच्या जेमिनी AI द्वारे संचालित तुमच्या स्वतःच्या भाषेत नागरी सेवांविषयी विचारू शकता.",
    heroCtaChat: "AI सहाय्यकाला विचारा",
    heroCtaSchemes: "पात्र योजना शोधा",
    
    statCitizens: "सक्रिय डिजिटल नागरिक",
    statSchemes: "सरकारी कल्याणकारी योजना",
    statComplaints: "निवारण झालेल्या तक्रारी",
    statResolution: "सरासरी निवारण दर",
    
    chatPlaceholder: "आधार, पासपोर्ट, सबसिडी किंवा नागरी समस्यांबद्दल काहीही विचारा...",
    chatSend: "पाठवा",
    chatSuggested: "सुचविलेले विषय",
    chatHistory: "संभाषण इतिहास",
    chatClear: "संभाषण साफ करा",
    chatBookmark: "उत्तर बुकमार्क करा",
    chatCopied: "क्लिपबोर्डवर कॉपी केले!",
    chatVoiceTip: "तुमची शंका बोला (सिम्युलेशन)",
    
    schemeTitle: "सरकारी योजना शिफारस इंजिन",
    schemeAge: "वय",
    schemeOccupation: "व्यवसाय / पेशा",
    schemeIncome: "वार्षिक कौटुंबिक उत्पन्न (INR)",
    schemeState: "रहिवासी राज्य",
    schemeGender: "लिंग",
    schemeEducation: "उच्चतम शिक्षण पातळी",
    schemeSearchBtn: "पात्र कल्याणकारी योजना शोधा",
    schemeRecommended: "शिफारस केलेल्या सरकारी योजना",
    schemeEligibility: "पात्रता जुळणी निकष",
    schemeBenefits: "प्रदान केलेले फायदे",
    schemeSteps: "अर्ज करण्याच्या सूचना",
    schemeDocs: "आवश्यक कागदपत्रे",
    schemeVisit: "अधिकृत साइटला भेट द्या",
    
    docTitle: "नागरी दस्तऐवज सहाय्यक",
    docSelectService: "सार्वजनिक सेवा / ओळखपत्र निवडा",
    docTime: "अंदाजित प्रक्रिया वेळ",
    docFee: "लागू अर्ज शुल्क",
    docChecklist: "आवश्यक दस्तऐवज चेकलिस्ट",
    docImportantNotes: "महत्त्वाच्या खबरदारी आणि नियम",
    docSteps: "अधिकृत अर्ज चरण",
    
    complaintTitle: "स्थानिक नागरी तक्रार नोंदवा",
    complaintDesc: "नागरी समस्येचे वर्णन करा (उदा. खड्डा, तुटलेला पथदिवा, कचऱ्याचा ढीग)...",
    complaintLoc: "तक्रार स्थान (जीपीएस कोऑर्डिनेट्स)",
    complaintUpload: "समस्येचा फोटो अपलोड करा (ड्रॅग आणि ड्रॉप / ब्राउझ)",
    complaintSubmit: "AI द्वारे नागरी तक्रार सबमिट करा",
    complaintSuccess: "नागरी तक्रार यशस्वीरित्या नोंदवली गेली!",
    complaintId: "तक्रार तिकीट आयडी",
    complaintDept: "नियुक्त केलेले प्राधिकरण विभाग",
    complaintPriority: "AI नियुक्त केलेली प्राथमिकता पातळी",
    complaintDraft: "AI ऑटो-जनरेटेड अधिकृत याचिका",
    
    trackerTitle: "सार्वजनिक तक्रारीच्या स्थितीचा मागोवा घ्या",
    trackerEnterId: "तक्रार तिकीट आयडी प्रविष्ट करा (उदा, SB-1092-A)",
    trackerTrackBtn: "सध्याची स्थिती मिळवा",
    trackerStatus: "सध्याची तक्रार स्थिती",
    trackerDate: "शेवटचे अपडेट",
    statusSubmitted: "तक्रार प्राप्त झाली",
    statusReview: "तांत्रिक पुनरावलोकनाधीन",
    statusAssigned: "वॉर्ड ऑफिसरकडे वर्ग",
    statusResolved: "समस्या सोडवली आणि बंद केली",
    
    dashTitle: "डिजिटल नागरिक डॅशबोर्ड",
    dashWelcome: "पुन्हा स्वागत आहे, नागरिक",
    dashQuickStats: "तुमचा नागरी प्रोफाइल सारांश",
    dashSavedSchemes: "जतन केलेल्या योजना आणि फायदे",
    dashRecentSearches: "अलीकडील AI चौकशी",
    dashRecentComplaints: "तुमची दाखल केलेली तक्रार तिकिटे",
    
    themeLight: "लाइट मोड",
    themeDark: "डार्क मोड",
  },
  bn: {
    appName: "স্মার্ট ভারত AI",
    tagline: "আপনার বুদ্ধিমান নাগরিক সঙ্গী",
    navHome: "হোম",
    navAssistant: "AI সহকারী",
    navSchemes: "স্কিম অনুসন্ধান",
    navDocuments: "নথিপত্র",
    navComplaints: "নাগরিক পোর্টাল",
    navTracker: "অভিযোগ ট্র্যাকার",
    navDashboard: "ড্যাশবোর্ড",
    
    heroTitle: "বুদ্ধিমান শাসনের মাধ্যমে প্রতিটি নাগরিককে ক্ষমতায়ন করা",
    heroSub: "আপনার নিজস্ব ভাষায় কল্যাণমূলক স্কিমগুলি অ্যাক্সেস করুন, স্থানীয় অভিযোগ উত্থাপন করুন, নথি চেকলিস্ট পান এবং নাগরিক পরিষেবা সম্পর্কে জিজ্ঞাসা করুন, যা গুগলের জেমিনি AI দ্বারা চালিত।",
    heroCtaChat: "AI সহকারীকে জিজ্ঞাসা করুন",
    heroCtaSchemes: "যোগ্য স্কিম খুঁজুন",
    
    statCitizens: "সক্রিয় ডিজিটাল নাগরিক",
    statSchemes: "সরকারি কল্যাণমূলক স্কিম",
    statComplaints: "সমাধানকৃত অভিযোগ",
    statResolution: "গড় সমাধান হার",
    
    chatPlaceholder: "আধার, পাসপোর্ট, ভর্তুকি বা নাগরিক সমস্যা সম্পর্কে যেকোনো কিছু জিজ্ঞাসা করুন...",
    chatSend: "পাঠান",
    chatSuggested: "প্রস্তাবিত বিষয়",
    chatHistory: "চ্যাটের ইতিহাস",
    chatClear: "চ্যাট পরিষ্কার করুন",
    chatBookmark: "উত্তর বুকমার্ক করুন",
    chatCopied: "ক্লিপবোর্ডে অনুলিপি করা হয়েছে!",
    chatVoiceTip: "আপনার জিজ্ঞাসাটি বলুন (সিমুলেশন)",
    
    schemeTitle: "সরকারি স্কিম সুপারিশ ইঞ্জিন",
    schemeAge: "বয়স",
    schemeOccupation: "পেশা / জীবিকা",
    schemeIncome: "বার্ষিক পারিবারিক আয় (INR)",
    schemeState: "বাসস্থানের রাজ্য",
    schemeGender: "লিঙ্গ",
    schemeEducation: "সর্বোচ্চ শিক্ষাগত যোগ্যতা",
    schemeSearchBtn: "যোগ্য কল্যাণমূলক স্কিম খুঁজুন",
    schemeRecommended: "সুপারিশকৃত সরকারি স্কিম",
    schemeEligibility: "যোগ্যতার মানদণ্ড",
    schemeBenefits: "প্রদত্ত সুবিধাসমূহ",
    schemeSteps: "আবেদন করার নির্দেশাবলী",
    schemeDocs: "প্রয়োজনীয় নথিপত্র",
    schemeVisit: "অফিসিয়াল সাইটে যান",
    
    docTitle: "নাগরিক নথি সহকারী",
    docSelectService: "পাবলিক সার্ভিস / আইডি কার্ড নির্বাচন করুন",
    docTime: "আনুমানিক প্রক্রিয়াকরণের সময়",
    docFee: "প্রযোজ্য আবেদন ফি",
    docChecklist: "প্রয়োজনীয় নথি চেকলিস্ট",
    docImportantNotes: "গুরুত্বপূর্ণ সতর্কতা ও নিয়ম",
    docSteps: "অফিসিয়াল আবেদন ধাপসমূহ",
    
    complaintTitle: "স্থানীয় নাগরিক অভিযোগ দায়ের করুন",
    complaintDesc: "নাগরিক সমস্যাটি বর্ণনা করুন (যেমন গর্ত, ভাঙা স্ট্রিটলাইট, আবর্জনার স্তূপ)...",
    complaintLoc: "অভিযোগের স্থান (GPS স্থানাঙ্ক)",
    complaintUpload: "সমস্যার ছবি আপলোড করুন (টেনে আনুন এবং ছেড়ে দিন / ব্রাউজ করুন)",
    complaintSubmit: "AI এর মাধ্যমে নাগরিক অভিযোগ জমা দিন",
    complaintSuccess: "নাগরিক অভিযোগ সফলভাবে নিবন্ধিত হয়েছে!",
    complaintId: "অভিযোগের টিকিট আইডি",
    complaintDept: "বরাদ্দকৃত কর্তৃপক্ষ বিভাগ",
    complaintPriority: "AI নির্ধারিত অগ্রাধিকার স্তর",
    complaintDraft: "AI দ্বারা স্বয়ংক্রিয়ভাবে তৈরি অফিসিয়াল আবেদনপত্র",
    
    trackerTitle: "জনসাধারণের অভিযোগের স্থিতি ট্র্যাক করুন",
    trackerEnterId: "অভিযোগের টিকিট আইডি লিখুন (যেমন, SB-1092-A)",
    trackerTrackBtn: "বর্তমান স্থিতি দেখুন",
    trackerStatus: "বর্তমান অভিযোগের স্থিতি",
    trackerDate: "শেষ আপডেট",
    statusSubmitted: "অভিযোগ প্রাপ্ত হয়েছে",
    statusReview: "প্রযুক্তিগত পর্যালোচনার অধীনে",
    statusAssigned: "ওয়ার্ড অফিসারের কাছে বরাদ্দকৃত",
    statusResolved: "সমস্যা সমাধান এবং বন্ধ",
    
    dashTitle: "ডিজিটাল নাগরিক ড্যাশবোর্ড",
    dashWelcome: "ফিরে আসার জন্য স্বাগতম, নাগরিক",
    dashQuickStats: "আপনার নাগরিক প্রোফাইলের সংক্ষিপ্তসার",
    dashSavedSchemes: "সংরক্ষিত স্কিম এবং সুবিধাসমূহ",
    dashRecentSearches: "সাম্প্রতিক AI অনুসন্ধানসমূহ",
    dashRecentComplaints: "আপনার দায়ের করা অভিযোগ টিকিটসমূহ",
    
    themeLight: "লাইট মোড",
    themeDark: "ডার্ক মোড",
  }
};
