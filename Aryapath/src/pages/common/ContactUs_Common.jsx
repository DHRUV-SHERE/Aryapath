import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  User,
  MailIcon,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "info@aryapath.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+91 1234 567 890",
      description: "Mon to Fri from 9am to 6pm"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "New Delhi, India",
      description: "Come say hello at our office"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "Mon - Sun: 9AM - 8PM",
      description: "We're here to help you"
    }
  ];

  const faqs = [
    {
      question: "How do I book a guide through AryaPath?",
      answer: "Simply browse our verified guides, check their availability, and book directly through our platform. You'll receive instant confirmation and all the details you need."
    },
    {
      question: "What if I need to cancel my booking?",
      answer: "We offer flexible cancellation policies. Most bookings can be cancelled up to 24 hours in advance for a full refund. Check the specific guide's cancellation policy during booking."
    },
    {
      question: "Are the guides verified and trustworthy?",
      answer: "Yes! All our guides undergo a thorough verification process including background checks, document verification, and training to ensure they meet our quality standards."
    },
    {
      question: "Can I customize my travel itinerary?",
      answer: "Absolutely! Our guides work with you to create personalized itineraries that match your interests, pace, and preferences. You can discuss your requirements before booking."
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] ">
      {/* Hero Section - Same design as About page */}
      <section className="pt-20 pb-16 sm:py-20 bg-gradient-to-br from-[var(--accent-dark)] to-[var(--accent-color)] relative overflow-hidden">
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
              Contact{" "}
              <span className="text-[var(--secondary-color)]">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Get In Touch With Us - Let's Start Your Indian Adventure Together
            </p>
            <div className="w-24 h-1 bg-[var(--secondary-color)] mx-auto rounded-full"></div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--secondary-color)] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-fade)] rounded-full translate-x-1/2 translate-y-1/2 opacity-30"></div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--card-bg)] p-6 rounded-2xl shadow-lg border border-[var(--border-color)] text-center hover:shadow-xl transition-all"
              >
                <div className="text-[var(--accent-color)] mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-lg font-semibold text-[var(--accent-color)] mb-2">
                  {item.details}
                </p>
                <p className="text-[var(--text-color)]/80 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 sm:py-20 bg-[var(--card-bg)]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[var(--bg-color)] p-6 sm:p-8 rounded-2xl shadow-lg border border-[var(--border-color)]"
            >
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 flex items-center justify-center gap-3">
                  <MessageCircle className="text-[var(--accent-color)]" />
                  Send us a Message
                </h2>
                <p className="text-[var(--text-color)]/80">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--muted-color)] h-5 w-5" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--muted-color)] h-5 w-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-color)] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-color)] mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-[var(--muted-color)] h-5 w-5" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-dark)] text-white rounded-lg font-semibold text-lg hover:shadow-[0_0_20px_rgba(228,107,61,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-[var(--bg-color)] p-6 rounded-2xl shadow-lg border border-[var(--border-color)]">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="text-[var(--accent-color)]" />
                  Visit Our Office
                </h3>
                <div className="bg-gray-200 rounded-lg h-64 sm:h-80 flex items-center justify-center text-[var(--muted-color)]">
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                    <p>Interactive Map</p>
                    <p className="text-sm">New Delhi, India</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-[var(--text-color)]/80">
                    Come visit us at our headquarters in the heart of New Delhi
                  </p>
                </div>
              </div>

              {/* Quick Response Info */}
              <div className="bg-gradient-to-r from-[var(--accent-color)]/10 to-[var(--secondary-color)]/10 p-6 rounded-2xl border-l-4 border-[var(--accent-color)]">
                <h4 className="text-xl font-bold mb-3 text-[var(--text-color)]">
                  Quick Response Guarantee
                </h4>
                <ul className="space-y-2 text-[var(--text-color)]/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full"></div>
                    Response within 24 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full"></div>
                    24/7 emergency support for travelers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full"></div>
                    Multilingual support team
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full"></div>
                    Dedicated guide coordination
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Frequently Asked <span className="text-[var(--accent-color)]">Questions</span>
            </h2>
            <p className="text-lg sm:text-xl text-[var(--muted-color)] max-w-2xl mx-auto">
              Quick answers to common questions about AryaPath
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--card-bg)] p-6 rounded-2xl shadow-lg border border-[var(--border-color)] hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-[var(--accent-color)]">
                  {faq.question}
                </h3>
                <p className="text-[var(--text-color)]/80 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-dark)] text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Emergency Support
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
              For urgent assistance while traveling in India, our emergency support team is available 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-2xl sm:text-3xl font-bold bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                +91 98765 43210
              </div>
              <p className="text-white/80">
                Available 24/7 for emergency travel support
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;