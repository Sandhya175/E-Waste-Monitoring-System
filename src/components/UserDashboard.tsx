import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Smartphone, Laptop, Tablet, HardDrive, Camera, Headphones, Calendar, MapPin, Award, Recycle, Package, Clock } from "lucide-react";
import { motion } from "motion/react";

export function UserDashboard() {
  const recentDevices = [
    { id: 1, name: "iPhone 12", type: "smartphone", status: "collected", date: "2024-01-15", points: 120 },
    { id: 2, name: "MacBook Pro 2019", type: "laptop", status: "processing", date: "2024-01-10", points: 250 },
    { id: 3, name: "iPad Air", type: "tablet", status: "recycled", date: "2024-01-05", points: 180 },
  ];

  const upcomingPickups = [
    { id: 1, date: "2024-01-20", time: "10:00 AM", location: "101, Bandra, Mumbai, India", items: 3 },
    { id: 2, date: "2024-01-25", time: "2:00 PM", location: "101, Bandra, Mumbai, India", items: 1 },
  ];

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "smartphone": return <Smartphone className="h-4 w-4" />;
      case "laptop": return <Laptop className="h-4 w-4" />;
      case "tablet": return <Tablet className="h-4 w-4" />;
      default: return <HardDrive className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "collected": return "bg-blue-100 text-blue-800";
      case "processing": return "bg-yellow-100 text-yellow-800";
      case "recycled": return "bg-green-100 text-green-800";
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
            <h1 className="text-3xl font-bold">Welcome back, User!</h1>
            <p className="text-gray-600 mt-1">Track your e-waste recycling journey and environmental impact</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg"
          >
            <div className="text-center">
              <div className="text-2xl font-bold">1,240</div>
              <div className="text-sm opacity-90">Eco Points</div>
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
              <div className="bg-green-100 p-3 rounded-full">
                <Recycle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">15</p>
                <p className="text-sm text-gray-600">Devices Recycled</p>
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
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-gray-600">Active Requests</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">Gold</p>
                <p className="text-sm text-gray-600">Member Level</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-gray-600">Pending Pickups</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Devices */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Devices</CardTitle>
              <CardDescription>Your latest e-waste submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDevices.map((device, index) => (
                  <motion.div
                    key={device.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 p-2 rounded">
                        {getDeviceIcon(device.type)}
                      </div>
                      <div>
                        <p className="font-medium">{device.name}</p>
                        <p className="text-sm text-gray-600">{device.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(device.status)}>
                        {device.status}
                      </Badge>
                      <span className="text-sm font-medium text-green-600">+{device.points} pts</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Submissions
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Pickups */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Pickups</CardTitle>
              <CardDescription>Your scheduled collection appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingPickups.map((pickup, index) => (
                  <motion.div
                    key={pickup.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded">
                        <Calendar className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{pickup.date} at {pickup.time}</p>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <MapPin className="h-3 w-3" />
                          {pickup.location}
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline">
                      {pickup.items} item{pickup.items > 1 ? 's' : ''}
                    </Badge>
                  </motion.div>
                ))}
              </div>
              <Button className="w-full mt-4">
                Schedule New Pickup
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Environmental Impact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Your Environmental Impact</CardTitle>
            <CardDescription>See how your recycling efforts are making a difference</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">12.5 kg</div>
                <p className="text-sm text-gray-600">Materials Recycled</p>
                <Progress value={75} className="mt-2" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">8.2 kg</div>
                <p className="text-sm text-gray-600">CO₂ Saved</p>
                <Progress value={60} className="mt-2" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
                <p className="text-sm text-gray-600">Trees Equivalent</p>
                <Progress value={85} className="mt-2" />
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
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Button className="h-20 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600">
          <div className="text-center">
            <Smartphone className="h-6 w-6 mx-auto mb-1" />
            <span>Register New Device</span>
          </div>
        </Button>
        <Button variant="outline" className="h-20">
          <div className="text-center">
            <Calendar className="h-6 w-6 mx-auto mb-1" />
            <span>Schedule Pickup</span>
          </div>
        </Button>
        <Button variant="outline" className="h-20">
          <div className="text-center">
            <MapPin className="h-6 w-6 mx-auto mb-1" />
            <span>Find Collection Centers</span>
          </div>
        </Button>
      </motion.div>
    </div>
  );
}