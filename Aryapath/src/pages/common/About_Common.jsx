import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Compass,
  Users,
  Target,
  Heart,
  Code,
  Lightbulb,
  Award,
  MapPin,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  BookOpen,
} from "lucide-react";
import resources from "../../resource";

const About = () => {
  const teamValues = [
    {
      icon: <Compass className="h-8 w-8" />,
      title: "Our Mission",
      description:
        "To make India's rich cultural heritage accessible to the world through technology and authentic local experiences.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Our Vision",
      description:
        "Creating a global platform where every traveler can discover the real India and every guide can share their expertise.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Our Passion",
      description:
        "We're driven by our love for India's diversity and our commitment to sustainable, responsible tourism.",
    },
  ];

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Local Guides",
      description:
        "Verified local experts who bring destinations to life with authentic stories and insights",
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: "Comprehensive Exploration",
      description:
        "From heritage sites to hidden gems, discover India's 29 states in depth",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Cultural Immersion",
      description:
        "Experience festivals, cuisine, and traditions through curated cultural activities",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Smart Planning",
      description:
        "AI-powered itinerary planning with real-time assistance and recommendations",
    },
  ];

  const developerInfo = {
    name: "Your Name",
    role: "Full Stack Developer & Project Lead",
    image: `${resources.Founder.src}`,
    bio: "The visionary behind AryaPath, combining technical expertise with a passion for Indian culture and tourism innovation.",
    skills: ["Full Stack Development", "Project Management", "AI Integration"],
    achievements: [
      "Led the complete development of AryaPath platform",
      "Integrated advanced AI features for personalized travel experiences",
      "Built scalable architecture supporting thousands of users",
      "Created intuitive user interfaces for both travelers and guides",
    ],
    social: {
      github: "https://github.com/DHRUV-SHERE/",
      linkedin: "https://www.linkedin.com/in/dhruv-shere/",
      portfolio: "https://portfolio-dhruvshere.vercel.app/",
      email: "sheredhruv@gmail.com",
    },
  };

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]  pl-0">
      {/* Hero Section - Updated for better navbar visibility */}
      <section className="py-20 bg-gradient-to-br from-[var(--accent-dark)] to-[var(--accent-color)] relative overflow-hidden">
        {/* Dark overlay to ensure navbar text visibility */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              About{" "}
              <span className="text-[var(--secondary-color)]">AryaPath</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              The Noble Path to Discovering India's Soul Through Technology and
              Authentic Experiences
            </p>
            <div className="w-24 h-1 bg-[var(--secondary-color)] mx-auto rounded-full"></div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--secondary-color)] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-fade)] rounded-full translate-x-1/2 translate-y-1/2 opacity-30"></div>
      </section>
      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-[var(--accent-color)]">Story</span>
              </h2>
              <p className="text-lg text-[var(--text-color)]/80 mb-6">
                AryaPath was born from a simple yet powerful vision: to bridge
                the gap between India's incredible cultural heritage and modern
                travelers seeking authentic experiences. We noticed that while
                India has endless treasures to offer, many travelers struggled
                to find reliable information and trustworthy local guides.
              </p>
              <p className="text-lg text-[var(--text-color)]/80 mb-6">
                Our platform combines cutting-edge technology with deep cultural
                understanding to create a seamless experience for both travelers
                and local guides. We're not just another travel platform – we're
                a community dedicated to preserving and sharing India's stories.
              </p>
              <p className="text-lg text-[var(--text-color)]/80">
                The name{" "}
                <span className="text-[var(--accent-color)] font-semibold">
                  AryaPath
                </span>
                , meaning "The Noble Path" in Sanskrit, reflects our commitment
                to ethical tourism, cultural preservation, and creating
                meaningful connections between people and places.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center items-center "
            >
              <div className="relative">
                <img
                  src={resources.Logo.src}
                  alt="Indian Cultural Heritage"
                  className="rounded-2xl  w-96 h-96 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-color)]/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[var(--card-bg)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-[var(--accent-color)]">Values</span>
            </h2>
            <p className="text-xl text-[var(--muted-color)] max-w-2xl mx-auto">
              The principles that guide everything we do at AryaPath
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-[var(--bg-color)] p-8 rounded-2xl shadow-lg border border-[var(--border-color)] text-center hover:shadow-xl transition-all"
              >
                <div className="text-[var(--accent-color)] mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-[var(--text-color)]/80">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet the{" "}
              <span className="text-[var(--accent-color)]">Creator</span>
            </h2>
            <p className="text-xl text-[var(--muted-color)] max-w-2xl mx-auto">
              The visionary behind AryaPath - Combining technology with passion
              for Indian heritage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Developer Image and Basic Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="relative mb-8">
                <img
                  src={developerInfo.image}
                  alt={developerInfo.name}
                  className="w-80 h-80 rounded-2xl object-cover mx-auto lg:mx-0 shadow-2xl"
                />
                {/* <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[var(--accent-color)] rounded-2xl flex items-center justify-center">
                  <Code className="h-10 w-10 text-white" />
                </div> */}
              </div>

              <h3 className="text-3xl font-bold mb-2">{developerInfo.name}</h3>
              <p className="text-xl text-[var(--accent-color)] mb-4">
                {developerInfo.role}
              </p>
              <p className="text-[var(--text-color)]/80 mb-6">
                {developerInfo.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4 mb-6">
                <a
                  href={developerInfo.social.github}
                  className="p-3 bg-[var(--card-bg)] rounded-lg border border-[var(--border-color)] hover:bg-[var(--accent-fade)] transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
                <a
                  href={developerInfo.social.linkedin}
                  className="p-3 bg-[var(--card-bg)] rounded-lg border border-[var(--border-color)] hover:bg-[var(--accent-fade)] transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={developerInfo.social.portfolio}
                  className="p-3 bg-[var(--card-bg)] rounded-lg border border-[var(--border-color)] hover:bg-[var(--accent-fade)] transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                </a>
                <a
                  href={`mailto:${developerInfo.social.email}`}
                  className="p-3 bg-[var(--card-bg)] rounded-lg border border-[var(--border-color)] hover:bg-[var(--accent-fade)] transition-all"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>

            {/* Developer Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Skills */}
              <div>
                <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="text-[var(--accent-color)]" />
                  Skills & Expertise
                </h4>
                <div className="flex flex-wrap gap-3">
                  {developerInfo.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[var(--accent-fade)] text-[var(--accent-dark)] rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Award className="text-[var(--accent-color)]" />
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {developerInfo.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-[var(--text-color)]/80"
                    >
                      <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full mt-2 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Personal Message */}
              <div className="bg-gradient-to-r from-[var(--accent-color)]/20 to-[var(--secondary-color)]/15 p-6 rounded-2xl border-l-4 border-[var(--accent-color)]">
                <h4 className="text-xl font-bold mb-3 text-[var(--text-color)]">
                  A Personal Note
                </h4>
                <p className="text-[var(--text-color)]/90 leading-relaxed">
                  "Creating AryaPath has been more than just a project – it's
                  been a journey of passion. As someone who deeply loves India's
                  cultural diversity, I wanted to build a platform that truly
                  captures the essence of our incredible nation. Every line of
                  code, every design decision, and every feature was crafted
                  with the vision of making Indian tourism more accessible,
                  authentic, and meaningful."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-[var(--card-bg)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="text-[var(--accent-color)]">AryaPath</span>{" "}
              Stands Out
            </h2>
            <p className="text-xl text-[var(--muted-color)] max-w-2xl mx-auto">
              Innovative features that make us different from traditional travel
              platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--bg-color)] p-6 rounded-xl shadow-lg border border-[var(--border-color)] hover:shadow-xl transition-all"
              >
                <div className="text-[var(--accent-color)] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-[var(--text-color)]/80 text-sm">
                  {feature.description}
                </p>
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
              Join Our{" "}
              <span className="text-[var(--accent-color)]">Journey</span>
            </h2>
            <p className="text-xl text-[var(--muted-color)] mb-8 max-w-2xl mx-auto">
              Be part of the revolution in Indian tourism. Whether you're a
              traveler seeking authentic experiences or a guide ready to share
              your expertise, AryaPath is your platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="px-8 py-4 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-dark)] text-white rounded-lg font-semibold text-lg hover:shadow-[0_0_20px_rgba(228,107,61,0.4)] transition-all"
              >
                Start Exploring India
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-[var(--accent-color)] text-[var(--accent-color)] rounded-lg font-semibold text-lg hover:bg-[var(--accent-color)] hover:text-white transition-all"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
