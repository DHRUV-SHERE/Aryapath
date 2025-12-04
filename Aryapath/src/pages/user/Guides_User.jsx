// /src/pages/user/Guides_User.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  MapPin,
  Star,
  Users,
  Filter,
  Award,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  X,
  IndianRupee,
  Clock,
  Languages,
  Shield,
  CheckCircle,
  Compass
} from 'lucide-react';

const Guides_User = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);

  // Indian states for filtering
  const indianStates = [
    'all', 'Rajasthan', 'Kerala', 'Goa', 'Himachal Pradesh', 'Tamil Nadu', 
    'Uttar Pradesh', 'Kashmir', 'Varanasi', 'Delhi', 'Mumbai', 'Kolkata',
    'Chennai', 'Bangalore', 'Hyderabad', 'Punjab', 'Gujarat', 'Madhya Pradesh'
  ];

  const specialties = [
    'all', 'Heritage & Culture', 'Food Tours', 'Adventure', 'Spiritual', 
    'Wildlife', 'Photography', 'History', 'Architecture', 'Wellness'
  ];

  // Mock guides data
  const guides = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Rajasthan',
      specialty: 'Heritage & Culture',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      coverImage: 'https://images.unsplash.com/photo-1539599114-bf10f3e3e3b9?w=800',
      rating: 4.8,
      reviews: 127,
      experience: '8 years',
      languages: ['Hindi', 'English', 'Rajasthani'],
      price: 2500,
      description: 'Expert in Rajasthani heritage with deep knowledge of royal history and cultural traditions.',
      longDescription: 'With over 8 years of experience, Rajesh specializes in bringing the rich history of Rajasthan to life. His tours are known for their depth of cultural insight and engaging storytelling that transports visitors to the era of maharajas.',
      specialties: ['Fort Tours', 'Cultural Shows', 'Local Markets', 'Traditional Cuisine'],
      achievements: ['Top Rated Guide 2023', 'Cultural Heritage Award', '500+ Tours Completed'],
      availability: ['Monday - Saturday', '9:00 AM - 6:00 PM'],
      contact: {
        phone: '+91 98765 43210',
        email: 'rajesh.kumar@aryapath.com'
      },
      stats: {
        tours: 500,
        repeatClients: 45,
        responseTime: '1 hour'
      }
    },
    {
      id: 2,
      name: 'Priya Nair',
      location: 'Kerala',
      specialty: 'Wellness & Nature',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300',
      coverImage: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800',
      rating: 4.9,
      reviews: 89,
      experience: '6 years',
      languages: ['Malayalam', 'English', 'Hindi'],
      price: 2200,
      description: 'Wellness expert specializing in Ayurvedic tours and backwater experiences.',
      longDescription: 'Priya brings a holistic approach to Kerala tourism, combining traditional Ayurvedic wisdom with serene backwater experiences. Her tours focus on wellness, relaxation, and authentic cultural immersion.',
      specialties: ['Ayurvedic Retreats', 'Backwater Cruises', 'Yoga Sessions', 'Local Cuisine'],
      achievements: ['Wellness Tourism Award', 'Ayurveda Certified', '300+ Happy Clients'],
      availability: ['All Days', '7:00 AM - 8:00 PM'],
      contact: {
        phone: '+91 98765 43211',
        email: 'priya.nair@aryapath.com'
      },
      stats: {
        tours: 300,
        repeatClients: 60,
        responseTime: '30 minutes'
      }
    },
    {
      id: 3,
      name: 'Vikram Singh',
      location: 'Himachal Pradesh',
      specialty: 'Adventure',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      coverImage: 'https://images.unsplash.com/photo-1580258874253-4b6fc2c8d8d4?w=800',
      rating: 4.7,
      reviews: 156,
      experience: '10 years',
      languages: ['Hindi', 'English', 'Pahari'],
      price: 3000,
      description: 'Adventure specialist with expertise in Himalayan treks and mountain expeditions.',
      longDescription: 'Vikram is a seasoned adventure guide with extensive experience in the Himalayas. He is certified in mountain safety and first aid, ensuring safe and thrilling adventures for all skill levels.',
      specialties: ['Trekking', 'Mountain Climbing', 'Camping', 'Wildlife Safaris'],
      achievements: ['Adventure Guide Certified', 'First Aid Expert', '1000+ Treks Led'],
      availability: ['Monday - Sunday', '6:00 AM - 7:00 PM'],
      contact: {
        phone: '+91 98765 43212',
        email: 'vikram.singh@aryapath.com'
      },
      stats: {
        tours: 1000,
        repeatClients: 35,
        responseTime: '2 hours'
      }
    },
    {
      id: 4,
      name: 'Anita Sharma',
      location: 'Delhi',
      specialty: 'Food Tours',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
      coverImage: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800',
      rating: 4.8,
      reviews: 203,
      experience: '7 years',
      languages: ['Hindi', 'English', 'Punjabi'],
      price: 1800,
      description: 'Food enthusiast exploring Delhi\'s hidden culinary gems and street food culture.',
      longDescription: 'Anita takes you on a gastronomic journey through Delhi\'s vibrant food scene. From upscale restaurants to hidden street food stalls, she knows every culinary secret the city has to offer.',
      specialties: ['Street Food Tours', 'Fine Dining', 'Cooking Classes', 'Market Visits'],
      achievements: ['Food Tourism Award', 'Culinary Expert', 'Food Safety Certified'],
      availability: ['Tuesday - Sunday', '10:00 AM - 9:00 PM'],
      contact: {
        phone: '+91 98765 43213',
        email: 'anita.sharma@aryapath.com'
      },
      stats: {
        tours: 450,
        repeatClients: 55,
        responseTime: '45 minutes'
      }
    },
    {
      id: 5,
      name: 'Rahul Mehta',
      location: 'Mumbai',
      specialty: 'City Tours',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
      coverImage: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800',
      rating: 4.6,
      reviews: 178,
      experience: '5 years',
      languages: ['Hindi', 'English', 'Marathi', 'Gujarati'],
      price: 2000,
      description: 'Mumbai local with extensive knowledge of city history, Bollywood, and local culture.',
      longDescription: 'Rahul brings Mumbai to life with his engaging tours that cover everything from colonial history to Bollywood glamour. His local connections provide unique access to places most tourists never see.',
      specialties: ['City Heritage', 'Bollywood Tours', 'Local Markets', 'Cultural Shows'],
      achievements: ['City Tourism Award', 'Local Expert', 'Film Industry Connections'],
      availability: ['All Days', '8:00 AM - 10:00 PM'],
      contact: {
        phone: '+91 98765 43214',
        email: 'rahul.mehta@aryapath.com'
      },
      stats: {
        tours: 600,
        repeatClients: 40,
        responseTime: '1 hour'
      }
    },
    {
      id: 6,
      name: 'Sita Patel',
      location: 'Varanasi',
      specialty: 'Spiritual',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=300',
      coverImage: 'https://images.unsplash.com/photo-1557237339-db0d9e8f4c3c?w=800',
      rating: 5.0,
      reviews: 95,
      experience: '12 years',
      languages: ['Hindi', 'English', 'Sanskrit'],
      price: 2800,
      description: 'Spiritual guide with deep understanding of Varanasi\'s religious and cultural significance.',
      longDescription: 'Sita offers profound spiritual experiences in Varanasi, the spiritual capital of India. Her tours provide deep insights into Hindu traditions, rituals, and the city\'s ancient wisdom.',
      specialties: ['Ganga Aarti', 'Temple Tours', 'Meditation Sessions', 'Spiritual Discourses'],
      achievements: ['Spiritual Tourism Award', 'Vedic Studies Certified', 'Yoga Instructor'],
      availability: ['All Days', '5:00 AM - 8:00 PM'],
      contact: {
        phone: '+91 98765 43215',
        email: 'sita.patel@aryapath.com'
      },
      stats: {
        tours: 350,
        repeatClients: 70,
        responseTime: '2 hours'
      }
    }
  ];

  // Filter guides based on search and filters
  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesState = selectedState === 'all' || guide.location === selectedState;
    const matchesSpecialty = selectedSpecialty === 'all' || guide.specialty === selectedSpecialty;

    return matchesSearch && matchesState && matchesSpecialty;
  });

  const openProfileModal = (guide) => {
    setSelectedGuide(guide);
    setShowProfileModal(true);
  };

  const closeProfileModal = () => {
    setShowProfileModal(false);
    setSelectedGuide(null);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-[var(--text-color)] mb-2">
            Find Your Guide
          </h1>
          <p className="text-[var(--muted-color)]">
            Connect with experienced local guides for authentic travel experiences
          </p>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-[var(--muted-color)]" />
            <span className="font-medium text-[var(--text-color)]">Find your perfect guide:</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 flex-1 max-w-4xl">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--muted-color)]" />
              <input
                type="text"
                placeholder="Search guides by name, location, or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] placeholder-[var(--muted-color)]"
              />
            </div>

            {/* State Filter */}
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl text-[var(--text-color)] focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
            >
              <option value="all">All States</option>
              {indianStates.filter(s => s !== 'all').map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>

            {/* Specialty Filter */}
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl text-[var(--text-color)] focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
            >
              <option value="all">All Specialties</option>
              {specialties.filter(s => s !== 'all').map(specialty => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center justify-between"
      >
        <p className="text-[var(--muted-color)]">
          Showing {filteredGuides.length} of {guides.length} guides
        </p>
      </motion.div>

      {/* Guides Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredGuides.map((guide, index) => (
            <motion.div
              key={guide.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Guide Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{guide.rating}</span>
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 bg-[var(--accent-color)] text-white rounded-full px-3 py-1">
                  <span className="text-sm font-semibold">{guide.location}</span>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold flex items-center">
                    <IndianRupee className="h-3 w-3 mr-1" />
                    {guide.price}/day
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors">
                    {guide.name}
                  </h3>
                  <span className="text-xs text-[var(--muted-color)] bg-[var(--accent-fade)] px-2 py-1 rounded-full">
                    {guide.specialty}
                  </span>
                </div>

                <p className="text-[var(--muted-color)] text-sm mb-4 line-clamp-2">
                  {guide.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-[var(--muted-color)] mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{guide.reviews} reviews</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{guide.experience}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Languages className="h-3 w-3" />
                    <span>{guide.languages.length}</span>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {guide.languages.slice(0, 3).map((language, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[var(--accent-fade)] text-[var(--accent-color)] px-2 py-1 rounded-full"
                    >
                      {language}
                    </span>
                  ))}
                  {guide.languages.length > 3 && (
                    <span className="text-xs text-[var(--muted-color)]">
                      +{guide.languages.length - 3} more
                    </span>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => openProfileModal(guide)}
                    className="flex-1 text-center px-4 py-2 bg-[var(--accent-color)] text-white rounded-xl font-semibold hover:bg-[var(--accent-dark)] transition-colors"
                  >
                    View Profile
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-[var(--border-color)] rounded-xl text-[var(--text-color)] hover:bg-[var(--accent-fade)] transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span>Message</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredGuides.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <Compass className="h-20 w-20 text-[var(--muted-color)] mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-[var(--text-color)] mb-4">
            No guides found
          </h3>
          <p className="text-[var(--muted-color)] mb-8 max-w-md mx-auto">
            Try adjusting your search criteria or filters to find available guides.
          </p>
        </motion.div>
      )}

      {/* Profile Modal */}
      <AnimatePresence>
        {showProfileModal && selectedGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={closeProfileModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[var(--card-bg)] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64">
                <img
                  src={selectedGuide.coverImage}
                  alt={selectedGuide.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <button
                  onClick={closeProfileModal}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
                <div className="absolute bottom-4 left-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">{selectedGuide.name}</h2>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{selectedGuide.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4" />
                      <span>{selectedGuide.specialty}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{selectedGuide.rating} ({selectedGuide.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column - Guide Info */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* About */}
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-color)] mb-3">About</h3>
                      <p className="text-[var(--text-color)] leading-relaxed">
                        {selectedGuide.longDescription}
                      </p>
                    </div>

                    {/* Specialties */}
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-color)] mb-3">Specialties</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedGuide.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-2 bg-[var(--accent-fade)] text-[var(--accent-color)] rounded-xl text-sm font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-color)] mb-3">Achievements</h3>
                      <div className="space-y-2">
                        {selectedGuide.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span className="text-[var(--text-color)]">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Booking & Contact */}
                  <div className="space-y-6">
                    {/* Pricing Card */}
                    <div className="bg-[var(--accent-fade)] border border-[var(--accent-color)]/20 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-[var(--text-color)] mb-4">Pricing</h3>
                      <div className="text-3xl font-bold text-[var(--text-color)] mb-2 flex items-center">
                        <IndianRupee className="h-6 w-6 mr-1" />
                        {selectedGuide.price}
                        <span className="text-sm font-normal text-[var(--muted-color)] ml-2">per day</span>
                      </div>
                      <button className="w-full bg-[var(--accent-color)] text-white py-3 rounded-xl font-semibold hover:bg-[var(--accent-dark)] transition-colors mb-3">
                        Book This Guide
                      </button>
                      <button className="w-full border border-[var(--border-color)] text-[var(--text-color)] py-3 rounded-xl font-semibold hover:bg-[var(--accent-fade)] transition-colors flex items-center justify-center space-x-2">
                        <MessageCircle className="h-5 w-5" />
                        <span>Send Message</span>
                      </button>
                    </div>

                    {/* Contact Info */}
                    <div className="border border-[var(--border-color)] rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-[var(--text-color)] mb-4">Contact</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-[var(--muted-color)]" />
                          <span className="text-[var(--text-color)]">{selectedGuide.contact.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-[var(--muted-color)]" />
                          <span className="text-[var(--text-color)]">{selectedGuide.contact.email}</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="border border-[var(--border-color)] rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-[var(--text-color)] mb-4">Guide Stats</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[var(--accent-color)]">{selectedGuide.stats.tours}+</div>
                          <div className="text-sm text-[var(--muted-color)]">Tours</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[var(--accent-color)]">{selectedGuide.stats.repeatClients}%</div>
                          <div className="text-sm text-[var(--muted-color)]">Repeat Clients</div>
                        </div>
                      </div>
                    </div>

                    {/* Availability */}
                    <div className="border border-[var(--border-color)] rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-[var(--text-color)] mb-4">Availability</h3>
                      <div className="space-y-2">
                        {selectedGuide.availability.map((slot, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <Calendar className="h-4 w-4 text-[var(--muted-color)]" />
                            <span className="text-[var(--text-color)] text-sm">{slot}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Guides_User;