import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Home, User } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Illustration & Content */}
      <div 
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
        style={{ 
          backgroundColor: 'var(--accent-dark)'
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: 'var(--accent-color)',
                opacity: 0.15
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full px-8 space-y-8">
          {/* Illustration */}
          <motion.div
            className="w-auto h-[50vh] rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden"
            style={{ 
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-bg)'
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Login Illustration"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Welcome Text */}
          <motion.div
            className="text-center space-y-6 w-full max-w-md"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white">
              Welcome Back to <span className="text-[var(--secondary-color)]">AryaPath</span>
            </h2>
            <p className="text-lg text-white/80">
              Continue your journey to discover authentic Indian experiences and create unforgettable memories.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-[var(--bg-color)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
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
                <User className="h-8 w-8 text-white" />
              </motion.div>
              <h2 className="mt-6 text-3xl font-extrabold text-[var(--text-color)]">
                Sign In
              </h2>
              <p className="mt-2 text-sm text-[var(--muted-color)]">
                Enter your credentials to access your account
              </p>
            </div>
          </motion.div>

          {/* Login Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-color)] mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--muted-color)] h-5 w-5" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all text-[var(--text-color)] placeholder-[var(--muted-color)]"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[var(--text-color)] mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--muted-color)] h-5 w-5" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all text-[var(--text-color)] placeholder-[var(--muted-color)]"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--muted-color)] hover:text-[var(--text-color)] transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[var(--accent-color)] focus:ring-[var(--accent-color)] border-[var(--border-color)] rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-[var(--text-color)]">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-medium text-[var(--accent-color)] hover:text-[var(--accent-dark)] transition-colors"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-dark)] text-white rounded-xl font-semibold text-lg hover:shadow-[0_0_20px_rgba(228,107,61,0.4)] transition-all duration-300 flex items-center justify-center gap-3 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Sign In</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

          {/* Sign Up & Back to Home */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center space-y-4"
          >
            <p className="text-sm text-[var(--muted-color)]">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium transition-colors duration-200 text-[var(--accent-color)] hover:text-[var(--accent-dark)]"
              >
                Create account
              </Link>
            </p>
            
            <div className="pt-4 border-t border-[var(--border-color)]">
              <Link
                to="/"
                className="inline-flex items-center text-sm text-[var(--muted-color)] hover:text-[var(--text-color)] transition-colors duration-200"
              >
                <Home className="h-4 w-4 mr-2" />
                Back to home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;