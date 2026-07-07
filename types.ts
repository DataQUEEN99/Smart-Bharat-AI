export interface UserProfile {
  name: string;
  age: number;
  occupation: string;
  income: number;
  state: string;
  gender: string;
  education: string;
  avatarSeed: string;
}

export interface Scheme {
  name: string;
  category: string;
  briefDescription: string;
  eligibilityDetails: string;
  benefits: string[];
  applicationSteps: string[];
  documentsRequired: string[];
  officialUrl: string;
}

export interface DocumentItem {
  name: string;
  purpose: string;
  isMandatory: boolean;
}

export interface ServiceDocumentChecklist {
  service: string;
  processingTime: string;
  approxFee: string;
  requiredDocuments: DocumentItem[];
  applicationSteps: string[];
  importantTips: string[];
}

export type ComplaintStatus = "Submitted" | "Under Review" | "Assigned" | "Resolved";

export interface StatusUpdate {
  status: ComplaintStatus;
  date: string;
  comment: string;
}

export interface ComplaintTicket {
  id: string;
  description: string;
  location: string;
  category: string;
  department: string;
  priorityLevel: "Low" | "Medium" | "High" | "Critical";
  estimatedResolutionTime: string;
  formalComplaintDraft: string;
  status: ComplaintStatus;
  timeline: StatusUpdate[];
  dateSubmitted: string;
  imageUrl?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  content: string;
  timestamp: string;
  isBookmarked?: boolean;
  category?: "Government Scheme" | "Document Help" | "Civic Complaint" | "Complaint Tracking" | "General Information" | "Emergency";
  schemeInfo?: {
    eligibility: string;
    requiredDocuments: string[];
    applicationProcess: string[];
    officialWebsite: string;
    tips: string[];
  };
  civicComplaintInfo?: {
    department: string;
    priority: "Low" | "Medium" | "High" | "Critical";
    estimatedResolutionTime: string;
    complaintDraft: string;
  };
}

export interface AppState {
  profile: UserProfile;
  language: string;
  theme: "light" | "dark";
  complaints: ComplaintTicket[];
  savedSchemes: Scheme[];
  chatHistory: ChatMessage[];
  recentSearches: string[];
}
