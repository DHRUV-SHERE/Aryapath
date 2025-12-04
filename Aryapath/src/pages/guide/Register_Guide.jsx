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
  Users,
  Shield,
  Award,
  BookOpen,
  Camera,
  Languages,
  Star,
  Briefcase,
  Home
} from "lucide-react";

const GuideSignup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1
    fullName: "",
    email: "",
    phone: "",
    experience: "",

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
    expertise: [],
    languages: [],
    specialties: []
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
    { number: 1, title: "Profile Setup", icon: <User className="h-6 w-6" /> },
    { number: 2, title: "Account Security", icon: <Shield className="h-6 w-6" /> },
    { number: 3, title: "Location Details", icon: <MapPin className="h-6 w-6" /> },
    { number: 4, title: "Expertise & Skills", icon: <Award className="h-6 w-6" /> },
  ];

  const expertiseAreas = [
    { id: "heritage", label: "Heritage & History", icon: <BookOpen className="h-4 w-4" /> },
    { id: "adventure", label: "Adventure Tours", icon: "🏔️" },
    { id: "culture", label: "Cultural Experiences", icon: <Star className="h-4 w-4" /> },
    { id: "photography", label: "Photography Tours", icon: <Camera className="h-4 w-4" /> },
    { id: "food", label: "Food & Cuisine", icon: "🍛" },
    { id: "spiritual", label: "Spiritual Tours", icon: "🕉️" },
    { id: "wildlife", label: "Wildlife & Nature", icon: "🐘" },
    { id: "architecture", label: "Architecture", icon: "🏯" }
  ];

  const availableLanguages = [
    "Hindi", "English", "Bengali", "Tamil", "Telugu", "Marathi", 
    "Gujarati", "Punjabi", "Malayalam", "Kannada", "Odia", "Urdu"
  ];

  const guideSpecialties = [
    "Family Tours", "Solo Travelers", "Group Tours", "Luxury Experiences",
    "Budget Travel", "Educational Tours", "Photography", "Adventure Sports"
  ];

  const toggleExpertise = (expertiseId) => {
    setFormData(prev => ({
      ...prev,
      expertise: prev.expertise.includes(expertiseId)
        ? prev.expertise.filter(id => id !== expertiseId)
        : [...prev.expertise, expertiseId]
    }));
  };

  const toggleLanguage = (language) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(lang => lang !== language)
        : [...prev.languages, language]
    }));
  };

  const toggleSpecialty = (specialty) => {
    setFormData(prev => ({
      ...prev,
      specialties: prev.specialties.includes(specialty)
        ? prev.specialties.filter(spec => spec !== specialty)
        : [...prev.specialties, specialty]
    }));
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Side - Guide Journey Map */}
      <div 
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
        style={{ 
          backgroundColor: 'var(--accent-dark)'
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-color)] to-[var(--secondary-color)]"></div>
        </div>

        {/* Guide Journey Nodes */}
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
                Share Your <span className="text-[var(--secondary-color)]">Expertise</span>
              </h2>
              <p className="text-lg text-white/80">
                Begin your journey as a trusted AryaPath guide
              </p>
            </motion.div>

            {/* Guide Journey Path */}
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

              {/* Guide Journey Nodes */}
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex items-center mb-16 last:mb-0">
                  {/* Node */}
                  <motion.div
                    className={`flex items-center justify-center w-16 h-16 rounded-2xl border-4 z-10 ${
                      currentStep >= step.number
                        ? "border-[var(--secondary-color)] bg-white shadow-lg scale-110"
                        : "border-white/30 bg-white/10"
                    } transition-all duration-500`}
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      scale: currentStep === step.number ? 1.1 : currentStep > step.number ? 1.05 : 1,
                    }}
                  >
                    <div className={
                      currentStep >= step.number 
                        ? "text-[var(--accent-color)]" 
                        : "text-white/60"
                    }>
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
                    <h3 className={`text-xl font-bold mb-2 ${
                      currentStep >= step.number ? "text-white" : "text-white/60"
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm ${
                      currentStep >= step.number ? "text-white/80" : "text-white/40"
                    }`}>
                      {step.number === 1 && "Create your professional guide profile"}
                      {step.number === 2 && "Secure your account with credentials"}
                      {step.number === 3 && "Set your service location and area"}
                      {step.number === 4 && "Showcase your expertise and skills"}
                    </p>

                    {/* Guide Element */}
                    {currentStep === step.number && (
                      <motion.div
                        className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-[var(--secondary-color)]/20 border border-[var(--secondary-color)]/30"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <span className="text-xs text-[var(--secondary-color)] font-medium">
                          Building Your Guide Profile...
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

      {/* Right Side - Guide Signup Form */}
      <div className="flex-1 flex items-center justify-center bg-[var(--bg-color)] px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-md w-full space-y-8 py-8">
          {/* Progress Steps */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <motion.div
                className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ 
                  background: 'linear-gradient(to right, var(--accent-color), var(--accent-dark))',
                  boxShadow: '0 0 15px rgba(228, 107, 61, 0.4)'
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Users className="h-8 w-8 text-white" />
              </motion.div>
              <h2 className="mt-6 text-3xl font-extrabold text-[var(--text-color)]">
                Join as Local Guide
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
                      style={currentStep >= step.number ? { 
                        backgroundColor: 'var(--accent-color)',
                        borderColor: 'var(--accent-color)'
                      } : {}}
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
              {/* Step 1: Profile Setup */}
              {currentStep === 1 && (
                <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                  <div className="relative">
                    <label htmlFor="fullName" className="block text-sm font-medium text-[var(--text-color)] mb-2">
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
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-color)] mb-2">
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
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-color)] mb-2">
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

                  <div className="relative">
                    <label htmlFor="experience" className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      Years of Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all text-[var(--text-color)]"
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Account Security */}
              {currentStep === 2 && (
                <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                  <div className="relative">
                    <label htmlFor="password" className="block text-sm font-medium text-[var(--text-color)] mb-2">
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
                        placeholder="Create a secure password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--muted-color)] hover:text-[var(--text-color)] transition-colors"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-[var(--text-color)] mb-2">
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
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--muted-color)] hover:text-[var(--text-color)] transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="gender" className="block text-sm font-medium text-[var(--text-color)] mb-2">
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
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Location Details */}
              {currentStep === 3 && (
                <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                  <div className="relative">
                    <label htmlFor="address" className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      Service Address
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
                        placeholder="Enter your service address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-[var(--text-color)] mb-2">
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
                      <label htmlFor="state" className="block text-sm font-medium text-[var(--text-color)] mb-2">
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
                    <label htmlFor="pinCode" className="block text-sm font-medium text-[var(--text-color)] mb-2">
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

              {/* Step 4: Expertise & Skills */}
              {currentStep === 4 && (
                <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-4">
                      Areas of Expertise
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {expertiseAreas.map((expertise) => (
                        <motion.button
                          key={expertise.id}
                          type="button"
                          onClick={() => toggleExpertise(expertise.id)}
                          className={`p-3 rounded-xl border-2 transition-all duration-200 flex items-center gap-2 ${
                            formData.expertise.includes(expertise.id)
                              ? "border-[var(--accent-color)] bg-[var(--accent-fade)]"
                              : "border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[var(--accent-color)]/50"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="text-lg">{expertise.icon}</span>
                          <span className="text-sm font-medium text-[var(--text-color)] text-left">
                            {expertise.label}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-3">
                      Languages You Speak
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableLanguages.map((language) => (
                        <motion.button
                          key={language}
                          type="button"
                          onClick={() => toggleLanguage(language)}
                          className={`px-3 py-2 rounded-lg border transition-all duration-200 flex items-center gap-1 ${
                            formData.languages.includes(language)
                              ? "border-[var(--accent-color)] bg-[var(--accent-fade)] text-[var(--accent-dark)]"
                              : "border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-color)]"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Languages className="h-3 w-3" />
                          <span className="text-xs font-medium">{language}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-3">
                      Guide Specialties
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {guideSpecialties.map((specialty) => (
                        <motion.button
                          key={specialty}
                          type="button"
                          onClick={() => toggleSpecialty(specialty)}
                          className={`px-3 py-2 rounded-lg border transition-all duration-200 ${
                            formData.specialties.includes(specialty)
                              ? "border-[var(--accent-color)] bg-[var(--accent-fade)] text-[var(--accent-dark)]"
                              : "border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-color)]"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="text-xs font-medium">{specialty}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex space-x-4 pt-4">
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
                    background: 'linear-gradient(to right, var(--accent-color), var(--accent-dark))',
                    boxShadow: '0 0 15px rgba(228, 107, 61, 0.4)'
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
                      Complete Registration
                    </>
                  ) : (
                    <>
                      Continue
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </>
                  )}
                </motion.button>
              </div>

              {/* Login Link */}
              <div className="text-center space-y-4 pt-4">
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

export default GuideSignup;