import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Truck, MapPin, Phone, Clock, Search, Filter } from "lucide-react";
import { motion } from "motion/react";

export function PickupManagement() {
  const pickups = [
    {
      id: "P001",
      customer: "User",
      location: "101, Bandra, Mumbai, India",
      phone: "+91 91919 91919",
      scheduledDate: "2024-01-20",
      scheduledTime: "10:00 AM",
      items: 3,
      priority: "high",
      status: "scheduled",
      estimatedDuration: "30 min"
    },
    {
      id: "P002", 
      customer: "Tech Corp Inc.",
      location: "456 Business Ave, Downtown",
      phone: "+91 91919 91919",
      scheduledDate: "2024-01-20",
      scheduledTime: "2:00 PM",
      items: 15,
      priority: "medium",
      status: "in-progress",
      estimatedDuration: "90 min"
    },
    {
      id: "P003",
      customer: "Sarah Userson", 
      location: "789 Oak Street, Riverside",
      phone: "+91 91919 91919",
      scheduledDate: "2024-01-21",
      scheduledTime: "9:00 AM", 
      items: 2,
      priority: "low",
      status: "scheduled",
      estimatedDuration: "20 min"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled": return "bg-blue-100 text-blue-800";
      case "in-progress": return "bg-orange-100 text-orange-800";
      case "completed": return "bg-green-100 text-green-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Pickup Management</h1>
            <p className="text-gray-600 mt-1">Schedule, track, and optimize collection routes</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-blue-500">
            <Truck className="h-4 w-4 mr-2" />
            Schedule New Pickup
          </Button>
        </div>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Search by customer name, location, or pickup ID..."
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline">
                  Today's Routes
                </Button>
                <Button variant="outline">
                  Optimize Routes
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Pickup List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Active Pickups</CardTitle>
            <CardDescription>Manage and track all scheduled collections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pickups.map((pickup, index) => (
                <motion.div
                  key={pickup.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold">{pickup.customer}</h3>
                        <Badge className={getPriorityColor(pickup.priority)} variant="secondary">
                          {pickup.priority} priority
                        </Badge>
                        <Badge className={getStatusColor(pickup.status)} variant="secondary">
                          {pickup.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{pickup.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          <span>{pickup.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{pickup.scheduledDate} at {pickup.scheduledTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <span className="bg-gray-100 px-2 py-1 rounded">
                          {pickup.items} items
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded">
                          Est. {pickup.estimatedDuration}
                        </span>
                        <span className="text-blue-600 font-medium">
                          ID: {pickup.id}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 ml-4">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      {pickup.status === "scheduled" && (
                        <Button size="sm">
                          Start Pickup
                        </Button>
                      )}
                      {pickup.status === "in-progress" && (
                        <Button size="sm" variant="outline">
                          Complete
                        </Button>
                      )}
                      <Button size="sm" variant="ghost">
                        Reschedule
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Route Optimization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Route Optimization</CardTitle>
            <CardDescription>Optimize pickup routes for maximum efficiency</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">8</div>
                <div className="text-sm text-gray-600">Scheduled Pickups</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">45 km</div>
                <div className="text-sm text-gray-600">Total Distance</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">4.5 hrs</div>
                <div className="text-sm text-gray-600">Estimated Time</div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button className="flex-1">
                Generate Optimized Route
              </Button>
              <Button variant="outline">
                View Map
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}