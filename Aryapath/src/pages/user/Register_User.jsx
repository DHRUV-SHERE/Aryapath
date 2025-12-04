import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  MapPin,
  ArrowRight,
  ArrowLeft,
  Check,
  Compass,
  Shield,
  Star,
  BookOpen,
  Camera,
  Home,
} from "lucide-react";
import resources from "../../resource";

const TravelerSignup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1
    fullName: "",
    email: "",
    phone: "",

    // Step 2
    password: "",
    confirmPassword: "",
    gender: "",

    // Step 3
    address: "",
    city: "",
    state: "",
    pinCode: "",

    // Step 4
    interests: [],
    travelStyle: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      return;
    }

    setIsLoading(true);
    // Simulate signup process
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    // Handle signup logic here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    { number: 1, title: "Personal Info", icon: <User className="h-6 w-6" /> },
    { number: 2, title: "Account Setup", icon: <Shield className="h-6 w-6" /> },
    { number: 3, title: "Location", icon: <MapPin className="h-6 w-6" /> },
    {
      number: 4,
      title: "Travel Preferences",
      icon: <Compass className="h-6 w-6" />,
    },
  ];

  const travelInterests = [
    {
      id: "heritage",
      label: "Heritage Sites",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      id: "adventure",
      label: "Adventure",
      icon: <Compass className="h-4 w-4" />,
    },
    {
      id: "culture",
      label: "Cultural Immersion",
      icon: <Star className="h-4 w-4" />,
    },
    {
      id: "photography",
      label: "Photography",
      icon: <Camera className="h-4 w-4" />,
    },
    { id: "food", label: "Local Cuisine", icon: "🍛" },
    { id: "spiritual", label: "Spiritual", icon: "🕉️" },
  ];

  const toggleInterest = (interestId) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter((id) => id !== interestId)
        : [...prev.interests, interestId],
    }));
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Interactive Journey Map */}
      <div
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
        style={{
          backgroundColor: "var(--accent-dark)",
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-color)] to-[var(--secondary-color)]"></div>
        </div>

        {/* Interactive Journey Nodes */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full px-8">
          <div className="w-full max-w-lg">
            {/* Journey Title */}
            <motion.div
              className="text-center mb-12"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Your Indian{" "}
                <span className="text-[var(--secondary-color)]">Journey</span>{" "}
                Begins
              </h2>
              <p className="text-lg text-white/80">
                Follow the path to discover incredible experiences
              </p>
            </motion.div>

            {/* Journey Path */}
            <div className="relative">
              {/* Main Path Line */}
              <div className="absolute left-8 top-16 bottom-16 w-1 bg-white/20 rounded-full"></div>

              {/* Animated Progress Line */}
              <motion.div
                className="absolute left-8 top-16 w-1 bg-[var(--secondary-color)] rounded-full"
                initial={{ height: 0 }}
                animate={{ height: `${(currentStep - 1) * 33}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              {/* Journey Nodes */}
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative flex items-center mb-16 last:mb-0"
                >
                  {/* Node */}
                  <motion.div
                    className={`flex items-center justify-center w-16 h-16 rounded-2xl border-4 z-10 ${
                      currentStep >= step.number
                        ? "border-[var(--secondary-color)] bg-white shadow-lg scale-110"
                        : "border-white/30 bg-white/10"
                    } transition-all duration-500`}
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      scale:
                        currentStep === step.number
                          ? 1.1
                          : currentStep > step.number
                          ? 1.05
                          : 1,
                    }}
                  >
                    <div
                      className={
                        currentStep >= step.number
                          ? "text-[var(--accent-color)]"
                          : "text-white/60"
                      }
                    >
                      {currentStep > step.number ? (
                        <Check className="h-6 w-6" />
                      ) : (
                        step.icon
                      )}
                    </div>
                  </motion.div>

                  {/* Node Content */}
                  <motion.div
                    className="ml-6 flex-1"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        currentStep >= step.number
                          ? "text-white"
                          : "text-white/60"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        currentStep >= step.number
                          ? "text-white/80"
                          : "text-white/40"
                      }`}
                    >
                      {step.number === 1 &&
                        "Tell us about yourself to personalize your experience"}
                      {step.number === 2 &&
                        "Secure your account with login credentials"}
                      {step.number === 3 &&
                        "Help us find amazing experiences near you"}
                      {step.number === 4 &&
                        "Share your interests for better recommendations"}
                    </p>

                    {/* Cultural Element */}
                    {currentStep === step.number && (
                      <motion.div
                        className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-[var(--secondary-color)]/20 border border-[var(--secondary-color)]/30"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <span className="text-xs text-[var(--secondary-color)] font-medium">
                          Discovering Indian Culture...
                        </span>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex-1 flex items-center justify-center bg-[var(--bg-color)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Progress Steps */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <motion.div
                className="mx-auto w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                style={{
                  background:
                    "linear-gradient(to right, var(--accent-color), var(--accent-dark))",
                  boxShadow: "0 0 15px rgba(228, 107, 61, 0.4)",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={resources.Logo.src} alt={resources.Logo.alt} />
              </motion.div>
              <h2 className="mt-6 text-3xl font-extrabold text-[var(--text-color)]">
                Join as Traveler
              </h2>

              {/* Step Indicator */}
              <div className="mt-6 flex justify-between items-center">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full border-2 font-semibold ${
                        currentStep >= step.number
                          ? "border-[var(--accent-color)] text-white"
                          : "border-[var(--border-color)] text-[var(--muted-color)]"
                      }`}
                      style={
                        currentStep >= step.number
                          ? {
                              backgroundColor: "var(--accent-color)",
                              borderColor: "var(--accent-color)",
                            }
                          : {}
                      }
                    >
                      {currentStep > step.number ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        step.number
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`w-16 h-1 ${
                          currentStep > step.number
                            ? "bg-[var(--accent-color)]"
                            : "bg-[var(--border-color)]"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-[var(--muted-color)]">
                Step {currentStep} of 4: {steps[currentStep - 1]?.title}
              </p>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.form
              key={currentStep}
              className="mt-8 space-y-6"
              onSubmit={handleSubmit}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="relative">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-[var(--text-color)] mb-2"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--muted-color)]" />
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all text-[var(--text-color)] placeholder-[var(--muted-color)]"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--text-color)] mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--muted-color)]" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all text-[var(--text-color)] placeholder-[var(--muted-color)]"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[var(--text-color)] mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--muted-color)]" />
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all text-[var(--text-color)] placeholder-[var(--muted-color)]"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Account Setup */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-[var(--text-color)] mb-2"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--muted-color)]" />
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full pl-12 pr-12 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all text-[var(--text-color)] placeholder-[var(--muted-color)]"
                        placeholder="Create a password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--muted-color)] hover:text-[var(--text-color)] transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-[var(--text-color)] mb-2"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--muted-color)]" />
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full pl-12 pr-12 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all text-[var(--text-color)] placeholder-[var(--muted-color)]"
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--muted-color)] hover:text-[var(--text-color)] transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium text-[var(--text-color)] mb-2"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all text-[var(--text-color)]"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">
                        Prefer not to say
                      </option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Location Information */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="relative">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-[var(--text-color)] mb-2"
                    >
                      Address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-4 h-5 w-5 text-[var(--muted-color)]" />
                      <textarea
                        id="address"
                        name="address"
                        rows={3}
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full pl-12 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all text-[var(--text-color)] placeholder-[var(--muted-color)] resize-none"
                        placeholder="Enter your complete address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-[var(--text-color)] mb-2"
                      >
                        City
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all text-[var(--text-color)] placeholder-[var(--muted-color)]"
                        placeholder="City"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-[var(--text-color)] mb-2"
                      >
                        State
                      </label>
                      <input
                        id="state"
                        name="state"
                        type="text"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all text-[var(--text-color)] placeholder-[var(--muted-color)]"
                        placeholder="State"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="pinCode"
                      className="block text-sm font-medium text-[var(--text-color)] mb-2"
                    >
                      PIN Code
                    </label>
                    <input
                      id="pinCode"
                      name="pinCode"
                      type="text"
                      required
                      value={formData.pinCode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all text-[var(--text-color)] placeholder-[var(--muted-color)]"
                      placeholder="Enter PIN code"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Travel Preferences */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-4">
                      What are your travel interests?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {travelInterests.map((interest) => (
                        <motion.button
                          key={interest.id}
                          type="button"
                          onClick={() => toggleInterest(interest.id)}
                          className={`p-3 rounded-xl border-2 transition-all duration-200 flex items-center gap-2 ${
                            formData.interests.includes(interest.id)
                              ? "border-[var(--accent-color)] bg-[var(--accent-fade)]"
                              : "border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[var(--accent-color)]/50"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="text-lg">{interest.icon}</span>
                          <span className="text-sm font-medium text-[var(--text-color)]">
                            {interest.label}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="travelStyle"
                      className="block text-sm font-medium text-[var(--text-color)] mb-2"
                    >
                      Preferred Travel Style
                    </label>
                    <select
                      id="travelStyle"
                      name="travelStyle"
                      value={formData.travelStyle}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all text-[var(--text-color)]"
                    >
                      <option value="">Select your travel style</option>
                      <option value="luxury">Luxury & Comfort</option>
                      <option value="budget">Budget Friendly</option>
                      <option value="adventure">Adventure & Exploration</option>
                      <option value="cultural">Cultural Immersion</option>
                      <option value="family">Family Friendly</option>
                      <option value="solo">Solo Travel</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex space-x-4">
                {currentStep > 1 && (
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 inline-flex justify-center items-center py-4 px-4 border border-[var(--border-color)] rounded-xl text-sm font-medium text-[var(--text-color)] bg-[var(--card-bg)] hover:bg-[var(--accent-fade)] transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Previous
                  </motion.button>
                )}

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 inline-flex justify-center items-center py-4 px-4 border border-transparent text-sm font-medium rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background:
                      "linear-gradient(to right, var(--accent-color), var(--accent-dark))",
                    boxShadow: "0 0 15px rgba(228, 107, 61, 0.4)",
                  }}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : currentStep === 4 ? (
                    <>
                      <Check className="h-5 w-5 mr-2" />
                      Start Your Journey
                    </>
                  ) : (
                    <>
                      Continue Journey
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </>
                  )}
                </motion.button>
              </div>

              {/* Login Link */}
<div className="text-center space-y-4">
  <p className="text-sm text-[var(--muted-color)]">
    Already have an account?{" "}
    <a
      href="/login"
      className="font-medium transition-colors duration-200 text-[var(--accent-color)] hover:text-[var(--accent-dark)]"
    >
      Sign in
    </a>
  </p>

  <div className="pt-4 border-t border-[var(--border-color)]">
    <Link
      to="/"
      className="inline-flex items-center text-sm text-[var(--muted-color)] hover:text-[var(--text-color)] transition-colors duration-200 group"
    >
      <Home className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
      Back to home
    </Link>
  </div>
</div>
            </motion.form>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TravelerSignup;
