/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { AppProvider, useAppState } from "./AppContext";
import { translations } from "./translations";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProfileModal } from "./components/ProfileModal";

// Modular Views Imports
import { HomeView } from "./components/pages/HomeView";
import { AssistantView } from "./components/pages/AssistantView";
import { SchemesView } from "./components/pages/SchemesView";
import { DocumentsView } from "./components/pages/DocumentsView";
import { ComplaintsView } from "./components/pages/ComplaintsView";
import { TrackerView } from "./components/pages/TrackerView";
import { DashboardView } from "./components/pages/DashboardView";

// Lucide Icons for mobile rail
import { 
  Home, Sparkles, Compass, FileText, MapPin, Clock, Activity 
} from "lucide-react";

function AppContent() {
  const { state } = useAppState();
  const t = translations[state.language] || translations.en;

  const [activeTab, setActiveTab] = useState<string>("home");
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [preloadedTrackerId, setPreloadedTrackerId] = useState<string>("");

  // Switch between tab screens
  const renderActiveView = () => {
    switch (activeTab) {
      case "home":
        return <HomeView setActiveTab={setActiveTab} />;
      case "assistant":
        return <AssistantView />;
      case "schemes":
        return <SchemesView />;
      case "documents":
        return <DocumentsView />;
      case "complaints":
        return (
          <ComplaintsView 
            setActiveTab={setActiveTab} 
            setPreloadedTrackerId={setPreloadedTrackerId} 
          />
        );
      case "tracker":
        return (
          <TrackerView 
            preloadedTrackerId={preloadedTrackerId} 
            setPreloadedTrackerId={setPreloadedTrackerId} 
          />
        );
      case "dashboard":
        return (
          <DashboardView 
            setActiveTab={setActiveTab} 
            setPreloadedTrackerId={setPreloadedTrackerId} 
            onOpenProfile={() => setIsProfileOpen(true)} 
          />
        );
      default:
        return <HomeView setActiveTab={setActiveTab} />;
    }
  };

  const mobileRailItems = [
    { id: "home", label: t.navHome, icon: Home },
    { id: "assistant", label: t.navAssistant, icon: Sparkles },
    { id: "schemes", label: t.navSchemes, icon: Compass },
    { id: "documents", label: t.navDocuments, icon: FileText },
    { id: "complaints", label: t.navComplaints, icon: MapPin },
    { id: "tracker", label: t.navTracker, icon: Clock },
    { id: "dashboard", label: t.navDashboard, icon: Activity }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50 dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      {/* Universal Desktop/Tablet Header Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenProfile={() => setIsProfileOpen(true)} 
      />

      {/* Main Container Wrapper */}
      <main className={`flex-grow w-full ${activeTab === "assistant" ? "max-w-none px-0 py-0 pb-16 lg:pb-0" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-8"}`}>
        <div className={activeTab === "assistant" ? "h-[calc(100vh-4.25rem)] flex flex-col overflow-hidden" : "animate-fade-in-up duration-500"}>
          {renderActiveView()}
        </div>
      </main>

      {/* UnifiedNIC Government Footer */}
      {activeTab !== "assistant" && <Footer />}

      {/* Mobil bottom navigation rail (visible only on small touchscreens) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t border-gray-250 dark:border-slate-850/80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3 py-1.5 flex items-center justify-between shadow-2xl">
        {mobileRailItems.map((item) => {
          const active = activeTab === item.id;
          return (
            <button
              key={item.id}
              id={`mobile-rail-${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center flex-1 py-1 transition-all cursor-pointer ${
                active 
                  ? "text-ashoka-600 dark:text-ashoka-400 scale-105 font-bold" 
                  : "text-gray-400 hover:text-gray-500"
              }`}
            >
              <item.icon className="w-4.5 h-4.5 mb-0.5" />
              <span className="text-[9px] tracking-tight truncate leading-none uppercase font-semibold">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Editable Citizen Profile Popup modal */}
      <ProfileModal 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
      />

    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
