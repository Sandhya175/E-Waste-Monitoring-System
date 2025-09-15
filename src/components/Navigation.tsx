import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Home, 
  Plus, 
  MapPin, 
  Calendar, 
  BarChart3, 
  Bell, 
  User, 
  Settings,
  Menu,
  X,
  Recycle,
  Truck,
  Package,
  Users,
  TrendingUp
} from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  userType: "user" | "recycler";
}

export function Navigation({ activeTab, onTabChange, userType }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const userNavItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "register", label: "Register E-Waste", icon: Plus },
    { id: "centers", label: "Collection Centers", icon: MapPin },
    { id: "schedule", label: "Schedule Pickup", icon: Calendar },
    { id: "analytics", label: "My Analytics", icon: BarChart3 },
  ];

  const recyclerNavItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "pickups", label: "Manage Pickups", icon: Truck },
    { id: "processing", label: "Processing Queue", icon: Package },
    { id: "customers", label: "Customer Management", icon: Users },
    { id: "analytics", label: "Business Analytics", icon: TrendingUp },
  ];

  const navItems = userType === "user" ? userNavItems : recyclerNavItems;

  const handleNavClick = (tabId: string) => {
    onTabChange(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex bg-white border-b border-border px-6 py-4">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Recycle className="w-8 h-8 text-green-600" />
            <div>
              <span className="font-bold text-xl">E-Waste Monitor</span>
              <div className="text-xs text-gray-500 capitalize">{userType} Portal</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                onClick={() => handleNavClick(item.id)}
                className="flex items-center space-x-2"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 text-xs p-0 flex items-center justify-center">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-white border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-2">
            <Recycle className="w-6 h-6 text-green-600" />
            <div>
              <span className="font-bold">E-Waste Monitor</span>
              <div className="text-xs text-gray-500 capitalize">{userType}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <Badge className="absolute -top-1 -right-1 w-4 h-4 text-xs p-0 flex items-center justify-center">
                3
              </Badge>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-border bg-white">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full justify-start"
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              ))}
              <div className="border-t border-border pt-2 mt-2">
                <Button variant="ghost" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}