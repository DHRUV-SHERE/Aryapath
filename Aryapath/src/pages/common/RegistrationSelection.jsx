import { motion } from "framer-motion";
import { User, Users, Compass, ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import resources from "../../resource";

const RegisterSelection = () => {
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
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Travel Illustration"
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
              Join <span className="text-[var(--secondary-color)]">AryaPath</span>
            </h2>
            <p className="text-lg text-white/80">
              Choose your path to authentic Indian experiences. Discover incredible destinations or share your local expertise.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Selection Options */}
      <div className="flex-1 flex items-center justify-center bg-[var(--bg-color)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <motion.div
                className="mx-auto w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ 
                  background: 'linear-gradient(to right, var(--accent-color), var(--accent-dark))',
                  boxShadow: '0 0 15px rgba(228, 107, 61, 0.4)'
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={resources.Logo.src} alt={resources.Logo.alt} />
              </motion.div>
              <h2 className="mt-6 text-3xl font-extrabold text-[var(--text-color)]">
                Choose Your Journey
              </h2>
              <p className="mt-2 text-sm text-[var(--muted-color)]">
                Select how you want to experience India with AryaPath
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {/* Traveler Option */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/traveler-signup">
                <motion.div
                  className="group relative p-6 border-2 border-[var(--border-color)] rounded-2xl hover:border-[var(--accent-color)] transition-all duration-300 cursor-pointer bg-[var(--card-bg)] hover:shadow-lg"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                        style={{ 
                          backgroundColor: 'var(--accent-fade)',
                        }}
                      >
                        <User className="h-6 w-6 text-[var(--accent-color)]" />
                      </div>
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-xl font-bold text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors duration-300">
                        Traveler
                      </h3>
                      <p className="mt-2 text-[var(--text-color)]/80">
                        Discover authentic Indian experiences with expert local guides. Plan your perfect trip and create unforgettable memories.
                      </p>
                      <div className="mt-4 flex items-center font-medium text-[var(--accent-color)]">
                        <span>Start exploring India</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Guide Option */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/guide-signup">
                <motion.div
                  className="group relative p-6 border-2 border-[var(--border-color)] rounded-2xl hover:border-[var(--accent-color)] transition-all duration-300 cursor-pointer bg-[var(--card-bg)] hover:shadow-lg"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                        style={{ 
                          backgroundColor: 'var(--accent-fade)',
                        }}
                      >
                        <Users className="h-6 w-6 text-[var(--accent-color)]" />
                      </div>
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-xl font-bold text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors duration-300">
                        Local Guide
                      </h3>
                      <p className="mt-2 text-[var(--text-color)]/80">
                        Share your local expertise and cultural knowledge. Connect with travelers and grow your tourism business.
                      </p>
                      <div className="mt-4 flex items-center font-medium text-[var(--accent-color)]">
                        <span>Join as guide</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Back to Home & Login */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center space-y-4"
          >
            <p className="text-sm text-[var(--muted-color)]">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium transition-colors duration-200 text-[var(--accent-color)] hover:text-[var(--accent-dark)]"
              >
                Sign in
              </Link>
            </p>
            <Link
              to="/"
              className="inline-flex items-center text-sm text-[var(--muted-color)] hover:text-[var(--text-color)] transition-colors duration-200"
            >
              <Home className="h-4 w-4 mr-2" />
              Back to home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSelection;