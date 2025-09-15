import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { 
  Truck, 
  Package, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  Users, 
  TrendingUp, 
  MapPin,
  Phone,
  Calendar,
  DollarSign,
  Recycle,
  BarChart3
} from "lucide-react";
import { motion } from "motion/react";

export function RecyclerDashboard() {
  const pendingPickups = [
    { 
      id: 1, 
      customer: "User", 
      location: "101, Bandra, Mumbai, India", 
      items: 3, 
      priority: "high", 
      scheduledTime: "10:00 AM",
      phone: "+91 91919 91919"
    },
    { 
      id: 2, 
      customer: "Tech Corp Inc.", 
      location: "456 Business Ave, Downtown", 
      items: 15, 
      priority: "medium", 
      scheduledTime: "2:00 PM",
      phone: "+91 91919 91919"
    },
    { 
      id: 3, 
      customer: "Sarah Userson", 
      location: "789 Oak Street, Riverside", 
      items: 2, 
      priority: "low", 
      scheduledTime: "4:30 PM",
      phone: "+91 91919 91919"
    },
  ];

  const recentProcessing = [
    { id: 1, batchId: "B2024-001", items: 25, status: "sorting", completedPercent: 65 },
    { id: 2, batchId: "B2024-002", items: 18, status: "disassembly", completedPercent: 40 },
    { id: 3, batchId: "B2024-003", items: 32, status: "material-extraction", completedPercent: 90 },
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
      case "sorting": return "bg-blue-100 text-blue-800";
      case "disassembly": return "bg-orange-100 text-orange-800";
      case "material-extraction": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Green Valley Recycling Center</h1>
            <p className="text-gray-600 mt-1">Manage collections, processing, and operations</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg"
          >
            <div className="text-center">
              <div className="text-2xl font-bold">98.5%</div>
              <div className="text-sm opacity-90">Efficiency Rate</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-gray-600">Pending Pickups</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">156</p>
                <p className="text-sm text-gray-600">Items Processing</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">1,240</p>
                <p className="text-sm text-gray-600">Completed This Month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">₹24.5K</p>
                <p className="text-sm text-gray-600">Monthly Revenue</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Pickups */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Today's Pickups
              </CardTitle>
              <CardDescription>Scheduled collections for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingPickups.map((pickup, index) => (
                  <motion.div
                    key={pickup.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium">{pickup.customer}</p>
                        <Badge className={getPriorityColor(pickup.priority)} variant="secondary">
                          {pickup.priority}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {pickup.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {pickup.scheduledTime} • {pickup.items} items
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {pickup.phone}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      <Button size="sm">
                        Start Pickup
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Pickups
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Processing Status */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Recycle className="h-5 w-5" />
                Processing Status
              </CardTitle>
              <CardDescription>Current batch processing progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProcessing.map((batch, index) => (
                  <motion.div
                    key={batch.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="p-4 border rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{batch.batchId}</p>
                        <Badge className={getStatusColor(batch.status)} variant="secondary">
                          {batch.status.replace('-', ' ')}
                        </Badge>
                      </div>
                      <span className="text-sm text-gray-600">{batch.items} items</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{batch.completedPercent}%</span>
                      </div>
                      <Progress value={batch.completedPercent} />
                    </div>
                  </motion.div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View Processing Queue
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Performance Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Performance Metrics
            </CardTitle>
            <CardDescription>Key performance indicators for this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2.8 tons</div>
                <p className="text-sm text-gray-600">Materials Processed</p>
                <Progress value={85} className="mt-2" />
                <p className="text-xs text-green-600 mt-1">+12% from last month</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <p className="text-sm text-gray-600">Recovery Rate</p>
                <Progress value={95} className="mt-2" />
                <p className="text-xs text-green-600 mt-1">+3% from last month</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">4.2</div>
                <p className="text-sm text-gray-600">Avg. Processing Days</p>
                <Progress value={70} className="mt-2" />
                <p className="text-xs text-red-600 mt-1">-0.5 days from last month</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">340</div>
                <p className="text-sm text-gray-600">Active Customers</p>
                <Progress value={90} className="mt-2" />
                <p className="text-xs text-green-600 mt-1">+28 new this month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <Button className="h-20 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
          <div className="text-center">
            <Truck className="h-6 w-6 mx-auto mb-1" />
            <span>Schedule Pickup</span>
          </div>
        </Button>
        <Button variant="outline" className="h-20">
          <div className="text-center">
            <Package className="h-6 w-6 mx-auto mb-1" />
            <span>Create Batch</span>
          </div>
        </Button>
        <Button variant="outline" className="h-20">
          <div className="text-center">
            <Users className="h-6 w-6 mx-auto mb-1" />
            <span>Manage Customers</span>
          </div>
        </Button>
        <Button variant="outline" className="h-20">
          <div className="text-center">
            <TrendingUp className="h-6 w-6 mx-auto mb-1" />
            <span>View Reports</span>
          </div>
        </Button>
      </motion.div>

      {/* Alerts & Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Alerts & Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
                <div className="flex-1">
                  <p className="font-medium text-yellow-800">Storage capacity at 85%</p>
                  <p className="text-sm text-yellow-700">Consider scheduling additional material shipments</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-600" />
                <div className="flex-1">
                  <p className="font-medium text-blue-800">Maintenance scheduled for tomorrow</p>
                  <p className="text-sm text-blue-700">Equipment maintenance from 9:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}