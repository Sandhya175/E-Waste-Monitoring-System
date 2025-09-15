import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Dashboard } from "./components/Dashboard";
import { UserDashboard } from "./components/UserDashboard";
import { RecyclerDashboard } from "./components/RecyclerDashboard";
import { EWasteRegistration } from "./components/EWasteRegistration";
import { CollectionCenters } from "./components/CollectionCenters";
import { PickupScheduler } from "./components/PickupScheduler";
import { Analytics } from "./components/Analytics";
import { PickupManagement } from "./components/PickupManagement";
import { LandingPage } from "./components/LandingPage";
import { AuthPage } from "./components/AuthPage";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentView, setCurrentView] = useState<"landing" | "auth" | "app">("landing");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [userType, setUserType] = useState<"user" | "recycler">("user");

  const handleGetStarted = () => {
    setCurrentView("auth");
  };

  const handleAuthenticated = (selectedUserType: "user" | "recycler") => {
    setUserType(selectedUserType);
    setCurrentView("app");
  };

  const handleBackToLanding = () => {
    setCurrentView("landing");
  };

  const renderContent = () => {
    if (userType === "user") {
      switch (activeTab) {
        case "dashboard":
          return <UserDashboard />;
        case "register":
          return <EWasteRegistration />;
        case "centers":
          return <CollectionCenters />;
        case "schedule":
          return <PickupScheduler />;
        case "analytics":
          return <Analytics />;
        default:
          return <UserDashboard />;
      }
    } else {
      // Recycler views
      switch (activeTab) {
        case "dashboard":
          return <RecyclerDashboard />;
        case "pickups":
          return <PickupManagement />;
        case "processing":
          return <div className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Processing Queue</h2>
            <p className="text-gray-600">Track and manage material processing batches</p>
          </div>;
        case "customers":
          return <div className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Customer Management</h2>
            <p className="text-gray-600">Manage customer accounts and service requests</p>
          </div>;
        case "analytics":
          return <Analytics />;
        default:
          return <RecyclerDashboard />;
      }
    }
  };

  if (currentView === "landing") {
    return (
      <>
        <LandingPage onGetStarted={handleGetStarted} />
        <Toaster />
      </>
    );
  }

  if (currentView === "auth") {
    return (
      <>
        <AuthPage 
          onAuthenticated={handleAuthenticated} 
          onBack={handleBackToLanding}
        />
        <Toaster />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} userType={userType} />
      
      <main className="p-6">
        {renderContent()}
      </main>

      <Toaster />
    </div>
  );
}