import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Checkbox } from "./ui/checkbox";
import { Eye, EyeOff, Recycle, ArrowLeft, Cpu, Zap, Shield, User, Building2 } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { motion } from "motion/react";

interface AuthPageProps {
  onAuthenticated: (userType: "user" | "recycler") => void;
  onBack: () => void;
}

export function AuthPage({ onAuthenticated, onBack }: AuthPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState<"user" | "recycler">("user");
  
  // Login form state
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  
  // Signup form state
  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Basic validation
    if (!loginForm.email || !loginForm.password) {
      toast.error("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      toast.success(`Login successful! Welcome to E-Waste Monitor`);
      setIsLoading(false);
      onAuthenticated(selectedUserType);
    }, 1500);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Basic validation
    if (!signupForm.firstName || !signupForm.lastName || !signupForm.email || 
        !signupForm.password || !signupForm.confirmPassword) {
      toast.error("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    if (signupForm.password !== signupForm.confirmPassword) {
      toast.error("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (!signupForm.agreeToTerms) {
      toast.error("Please agree to the terms and conditions");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      toast.success("Account created successfully! Welcome to E-Waste Monitor");
      setIsLoading(false);
      onAuthenticated(selectedUserType);
    }, 1500);
  };

  const updateLoginForm = (field: string, value: any) => {
    setLoginForm(prev => ({ ...prev, [field]: value }));
  };

  const updateSignupForm = (field: string, value: any) => {
    setSignupForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-green-200/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-32 right-16 w-16 h-16 bg-blue-200/30 rounded-full"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-12 h-12 bg-purple-200/30 rounded-full"
        animate={{
          y: [0, -10, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Floating 3D Icons */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-green-400/20"
        animate={{
          rotateY: [0, 360],
          y: [0, -30, 0],
        }}
        transition={{
          rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <Cpu className="h-8 w-8" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-1/4 text-blue-400/20"
        animate={{
          rotateX: [0, 360],
          x: [0, 20, 0],
        }}
        transition={{
          rotateX: { duration: 6, repeat: Infinity, ease: "linear" },
          x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <Zap className="h-6 w-6" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-1/3 text-purple-400/20"
        animate={{
          rotateZ: [0, 360],
          y: [0, 25, 0],
        }}
        transition={{
          rotateZ: { duration: 10, repeat: Infinity, ease: "linear" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <Shield className="h-7 w-7" />
      </motion.div>

      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          type: "spring",
          stiffness: 100
        }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              onClick={onBack}
              className="absolute top-4 left-4 gap-2 hover:bg-white/20 backdrop-blur-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ scale: 0, rotateY: -180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ 
              delay: 0.5, 
              duration: 0.8,
              type: "spring",
              stiffness: 120 
            }}
          >
            <motion.div 
              className="bg-gradient-to-r from-green-600 to-green-500 p-3 rounded-xl shadow-lg"
              whileHover={{ 
                scale: 1.1,
                rotateY: 180,
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
              }}
              animate={{
                rotateY: [0, 5, -5, 0],
              }}
              transition={{
                rotateY: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Recycle className="h-6 w-6 text-white" />
            </motion.div>
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              E-Waste Monitor
            </motion.h1>
          </motion.div>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Join the sustainable future of e-waste management
          </motion.p>
        </motion.div>

        {/* Auth Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ 
            delay: 0.4, 
            duration: 0.7,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            y: -5,
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Card className="backdrop-blur-sm bg-white/90 shadow-2xl border border-white/20">
            <CardHeader className="space-y-1">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <CardTitle className="text-center bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Get Started
                </CardTitle>
                <CardDescription className="text-center text-gray-500">
                  Sign in to your account or create a new one
                </CardDescription>
              </motion.div>
            </CardHeader>
            <CardContent>
              {/* User Type Selection */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mb-6"
              >
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-600">I am a:</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedUserType("user")}
                    className={`cursor-pointer p-4 rounded-lg border-2 transition-all duration-300 ${
                      selectedUserType === "user"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 bg-white hover:border-green-300"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <User className={`h-6 w-6 ${selectedUserType === "user" ? "text-green-600" : "text-gray-500"}`} />
                      <span className={`text-sm font-medium ${selectedUserType === "user" ? "text-green-700" : "text-gray-600"}`}>
                        Individual User
                      </span>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedUserType("recycler")}
                    className={`cursor-pointer p-4 rounded-lg border-2 transition-all duration-300 ${
                      selectedUserType === "recycler"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 bg-white hover:border-blue-300"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Building2 className={`h-6 w-6 ${selectedUserType === "recycler" ? "text-blue-600" : "text-gray-500"}`} />
                      <span className={`text-sm font-medium ${selectedUserType === "recycler" ? "text-blue-700" : "text-gray-600"}`}>
                        Recycling Center
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            
            <Tabs defaultValue="login" className="w-full">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <TabsList className="grid w-full grid-cols-2 bg-gray-100/50 backdrop-blur-sm">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <TabsTrigger value="login" className="data-[state=active]:bg-white data-[state=active]:shadow-md">
                      Sign In
                    </TabsTrigger>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <TabsTrigger value="signup" className="data-[state=active]:bg-white data-[state=active]:shadow-md">
                      Sign Up
                    </TabsTrigger>
                  </motion.div>
                </TabsList>
              </motion.div>
              
              <TabsContent value="login" className="space-y-4">
                <motion.form 
                  onSubmit={handleLogin} 
                  className="space-y-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <motion.div 
                    className="space-y-2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Label htmlFor="login-email">Email</Label>
                    <motion.div
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)" }}
                    >
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="Enter your email"
                        value={loginForm.email}
                        onChange={(e) => updateLoginForm("email", e.target.value)}
                        required
                        className="bg-white/70 backdrop-blur-sm border-gray-200 focus:border-green-400 transition-all duration-300"
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Label htmlFor="login-password">Password</Label>
                    <motion.div
                      className="relative"
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)" }}
                    >
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={loginForm.password}
                        onChange={(e) => updateLoginForm("password", e.target.value)}
                        required
                        className="bg-white/70 backdrop-blur-sm border-gray-200 focus:border-green-400 transition-all duration-300"
                      />
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-green-50"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <motion.div
                            animate={{ rotateY: showPassword ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </motion.div>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={loginForm.rememberMe}
                        onCheckedChange={(checked) => updateLoginForm("rememberMe", checked)}
                      />
                      <Label htmlFor="remember" className="text-sm">Remember me</Label>
                    </div>
                    <Button variant="link" className="px-0 text-sm">
                      Forgot password?
                    </Button>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 shadow-lg hover:shadow-xl transition-all duration-300" 
                      disabled={isLoading}
                    >
                      <motion.span
                        animate={isLoading ? { opacity: [1, 0.5, 1] } : {}}
                        transition={{ repeat: isLoading ? Infinity : 0, duration: 1 }}
                      >
                        {isLoading ? "Signing in..." : "Sign In"}
                      </motion.span>
                    </Button>
                  </motion.div>
                </motion.form>
              </TabsContent>
              
              <TabsContent value="signup" className="space-y-4">
                <motion.form 
                  onSubmit={handleSignup} 
                  className="space-y-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <motion.div 
                    className="grid grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Label htmlFor="first-name">First Name</Label>
                      <motion.div whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}>
                        <Input
                          id="first-name"
                          placeholder="User"
                          value={signupForm.firstName}
                          onChange={(e) => updateSignupForm("firstName", e.target.value)}
                          required
                          className="bg-white/70 backdrop-blur-sm border-gray-200 focus:border-blue-400 transition-all duration-300"
                        />
                      </motion.div>
                    </motion.div>
                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Label htmlFor="last-name">Last Name</Label>
                      <motion.div whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}>
                        <Input
                          id="last-name"
                          placeholder="Doe"
                          value={signupForm.lastName}
                          onChange={(e) => updateSignupForm("lastName", e.target.value)}
                          required
                          className="bg-white/70 backdrop-blur-sm border-gray-200 focus:border-blue-400 transition-all duration-300"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Label htmlFor="signup-email">Email</Label>
                    <motion.div whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="abc@example.com"
                        value={signupForm.email}
                        onChange={(e) => updateSignupForm("email", e.target.value)}
                        required
                        className="bg-white/70 backdrop-blur-sm border-gray-200 focus:border-blue-400 transition-all duration-300"
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Label htmlFor="phone">Phone Number</Label>
                    <motion.div whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 91919 91919"
                        value={signupForm.phone}
                        onChange={(e) => updateSignupForm("phone", e.target.value)}
                        className="bg-white/70 backdrop-blur-sm border-gray-200 focus:border-blue-400 transition-all duration-300"
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Label htmlFor="organization">Organization (Optional)</Label>
                    <motion.div whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}>
                      <Input
                        id="organization"
                        placeholder="Your company name"
                        value={signupForm.organization}
                        onChange={(e) => updateSignupForm("organization", e.target.value)}
                        className="bg-white/70 backdrop-blur-sm border-gray-200 focus:border-blue-400 transition-all duration-300"
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Label htmlFor="signup-password">Password</Label>
                    <motion.div
                      className="relative"
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                    >
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        value={signupForm.password}
                        onChange={(e) => updateSignupForm("password", e.target.value)}
                        required
                        className="bg-white/70 backdrop-blur-sm border-gray-200 focus:border-blue-400 transition-all duration-300"
                      />
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-blue-50"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <motion.div
                            animate={{ rotateY: showPassword ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </motion.div>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <motion.div
                      className="relative"
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                    >
                      <Input
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={signupForm.confirmPassword}
                        onChange={(e) => updateSignupForm("confirmPassword", e.target.value)}
                        required
                        className="bg-white/70 backdrop-blur-sm border-gray-200 focus:border-blue-400 transition-all duration-300"
                      />
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-blue-50"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          <motion.div
                            animate={{ rotateY: showConfirmPassword ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </motion.div>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={signupForm.agreeToTerms}
                      onCheckedChange={(checked) => updateSignupForm("agreeToTerms", checked)}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <Button variant="link" className="px-0 h-auto text-sm">
                        Terms of Service
                      </Button>{" "}
                      and{" "}
                      <Button variant="link" className="px-0 h-auto text-sm">
                        Privacy Policy
                      </Button>
                    </Label>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300" 
                      disabled={isLoading}
                    >
                      <motion.span
                        animate={isLoading ? { opacity: [1, 0.5, 1] } : {}}
                        transition={{ repeat: isLoading ? Infinity : 0, duration: 1 }}
                      >
                        {isLoading ? "Creating Account..." : "Create Account"}
                      </motion.span>
                    </Button>
                  </motion.div>
                </motion.form>
              </TabsContent>
            </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-6 text-sm text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.p
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-[length:200%_auto] bg-clip-text text-transparent"
          >
            Secure • Reliable • Sustainable
          </motion.p>
          <motion.p 
            className="mt-2"
            whileHover={{ scale: 1.05 }}
          >
            Need help?{" "}
            <motion.div 
              className="inline-block"
              whileHover={{ scale: 1.1, color: "#22c55e" }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="link" className="px-0 h-auto text-sm hover:text-green-600 transition-colors duration-300">
                Contact Support
              </Button>
            </motion.div>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}