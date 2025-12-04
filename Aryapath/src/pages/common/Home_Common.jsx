import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Compass, 
  MapPin, 
  Users, 
  Star, 
  Shield, 
  Globe,
  ArrowRight,
  Play,
  Calendar,
  Heart,
  Building,
  Map,
  Camera,
  Utensils
} from 'lucide-react';
import resources from '../../resource';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    'https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2055&q=80',
    'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  ];

  const features = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Explore by Region",
      description: "Discover India's 29 states with detailed cultural insights and travel information"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Local Guides",
      description: "Connect with verified local guides for authentic cultural experiences"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Transparent Experience",
      description: "Clear pricing, digital invoices, and verified reviews from real travelers"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Smart Planning",
      description: "AI-powered trip planning with real-time assistance in multiple languages"
    }
  ];

  const platformHighlights = [
    {
      icon: <Building className="h-10 w-10" />,
      title: "For Travelers",
      description: "Plan your perfect India trip with expert guides, curated itineraries, and seamless booking",
      features: ["Explore Destinations", "Book Verified Guides", "AI Trip Planning", "Cultural Insights"],
      link: "/traveler-signup",
      linkText: "Start Exploring"
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "For Guides",
      description: "Showcase your expertise, connect with global travelers, and grow your tourism business",
      features: ["Create Profile", "Manage Bookings", "Digital Invoicing", "Premium Features"],
      link: "/guide-signup",
      linkText: "Join as Guide"
    }
  ];

  const popularDestinations = [
    {
      name: "Rajasthan",
      image: "https://images.unsplash.com/photo-1459745973746-5a71c0c2e7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      description: "Land of Kings and Palaces",
      highlights: ["Heritage Palaces", "Desert Safari", "Traditional Culture"]
    },
    {
      name: "Kerala",
      image: "https://images.unsplash.com/photo-1580100580630-449bca3ce949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80",
      description: "God's Own Country",
      highlights: ["Backwaters", "Ayurveda", "Wildlife"]
    },
    {
      name: "Goa",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Sun, Sand & Portuguese Heritage",
      highlights: ["Beaches", "Portuguese Architecture", "Nightlife"]
    },
    {
      name: "Uttarakhand",
      image: "https://images.unsplash.com/photo-1580476262380-2b6dde5ef6d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Gateway to the Himalayas",
      highlights: ["Trekking", "Spiritual Sites", "Adventure Sports"]
    }
  ];

  const experiences = [
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Cultural Heritage",
      description: "Explore ancient temples, forts, and UNESCO World Heritage sites"
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Local Cuisine",
      description: "Taste authentic regional dishes with local food experiences"
    },
    {
      icon: <Map className="h-6 w-6" />,
      title: "Adventure & Nature",
      description: "From Himalayas to beaches, experience India's diverse landscapes"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Festivals & Events",
      description: "Participate in vibrant local festivals and cultural celebrations"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`India Landscape ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4 max-w-6xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <div className="w-36 h-36 flex items-center justify-center">
              <img
                src={resources.Logo.src}
                alt={resources.Logo.alt}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Discover <span className="text-[var(--accent-color)]">India</span> with AryaPath
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
            The Noble Path to Authentic Indian Experiences. Connect with local culture, expert guides, and create unforgettable memories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-dark)] text-white rounded-lg font-semibold text-lg flex items-center gap-2 hover:shadow-[0_0_20px_rgba(228,107,61,0.4)] transition-all"
            >
              Explore India <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold text-lg flex items-center gap-2 border border-white/30 hover:bg-white/30 transition-all"
            >
              <Play size={20} /> Watch Introduction
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 bg-[var(--card-bg)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              One Platform, <span className="text-[var(--accent-color)]">Endless Possibilities</span>
            </h2>
            <p className="text-xl text-[var(--muted-color)] max-w-3xl mx-auto">
              AryaPath bridges the gap between travelers seeking authentic experiences and local guides sharing their expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {platformHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[var(--bg-color)] p-8 rounded-2xl shadow-lg border border-[var(--border-color)] hover:shadow-xl transition-all"
              >
                <div className="text-[var(--accent-color)] mb-6">
                  {highlight.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{highlight.title}</h3>
                <p className="text-[var(--text-color)]/80 mb-6">{highlight.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {highlight.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[var(--text-color)]/80">
                      <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={highlight.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-dark)] text-white rounded-lg font-semibold hover:shadow-[0_0_15px_rgba(228,107,61,0.4)] transition-all"
                >
                  {highlight.linkText} <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-[var(--accent-color)]">AryaPath</span>?
            </h2>
            <p className="text-xl text-[var(--muted-color)] max-w-2xl mx-auto">
              Experience India like never before with our comprehensive tourism platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[var(--card-bg)] p-6 rounded-xl shadow-lg border border-[var(--border-color)] hover:shadow-xl transition-all text-center"
              >
                <div className="text-[var(--accent-color)] mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-[var(--text-color)]/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-[var(--card-bg)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Discover <span className="text-[var(--accent-color)]">Incredible India</span>
            </h2>
            <p className="text-xl text-[var(--muted-color)]">
              Explore the diverse beauty and rich heritage of India's most beloved destinations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-gray-200 mb-3">{destination.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {destination.highlights.map((highlight, idx) => (
                      <span key={idx} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <Heart size={20} className="text-white" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[var(--accent-color)] text-[var(--accent-color)] rounded-lg font-semibold hover:bg-[var(--accent-color)] hover:text-white transition-all"
            >
              Explore All 29 States <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Experience Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Types of <span className="text-[var(--accent-color)]">Experiences</span>
            </h2>
            <p className="text-xl text-[var(--muted-color)]">
              Discover the many facets of India through curated experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--card-bg)] p-6 rounded-xl shadow-lg border border-[var(--border-color)] text-center hover:shadow-xl transition-all"
              >
                <div className="text-[var(--accent-color)] mb-4 flex justify-center">
                  {experience.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{experience.title}</h3>
                <p className="text-[var(--text-color)]/80 text-sm">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-dark)] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Happy Travelers" },
              { number: "2K+", label: "Verified Guides" },
              { number: "29", label: "States Covered" },
              { number: "4.9", label: "Average Rating", icon: <Star className="h-5 w-5 fill-current" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl md:text-4xl font-bold">
                    {stat.number}
                  </span>
                  {stat.icon && <span>{stat.icon}</span>}
                </div>
                <p className="font-medium opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Begin Your <span className="text-[var(--accent-color)]">Indian Journey</span>?
            </h2>
            <p className="text-xl text-[var(--muted-color)] mb-8 max-w-2xl mx-auto">
              Join thousands of travelers and guides who are already experiencing the magic of India through AryaPath
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="px-8 py-4 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-dark)] text-white rounded-lg font-semibold text-lg hover:shadow-[0_0_20px_rgba(228,107,61,0.4)] transition-all inline-flex items-center gap-2"
              >
                <Compass className="inline" size={20} />
                Start Exploring
              </Link>
              <Link
                to="/guide-registration"
                className="px-8 py-4 border-2 border-[var(--accent-color)] text-[var(--accent-color)] rounded-lg font-semibold text-lg hover:bg-[var(--accent-color)] hover:text-white transition-all"
              >
                Become a Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;