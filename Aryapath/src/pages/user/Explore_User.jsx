// /src/pages/user/Explore_User.jsx
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  MapPin,
  Users,
  Star,
  Filter,
  Compass,
  Clock,
  IndianRupee,
  Mountain,
  Palette,
  Utensils,
  Camera
} from 'lucide-react';

const Explore_User = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Indian states data with cultural highlights
  const indianStates = [
    {
      id: 1,
      name: 'Rajasthan',
      region: 'North',
      image: 'https://images.unsplash.com/photo-1539599114-bf10f3e3e3b9?w=400',
      description: 'The Land of Kings with majestic forts, desert landscapes, and vibrant culture.',
      highlights: ['Palaces', 'Desert Safari', 'Folk Music'],
      bestTime: 'Oct-Mar',
      duration: '5-7 days',
      priceRange: 'Medium',
      rating: 4.8,
      reviews: 1247,
      culturalScore: 95,
      experiences: ['Heritage', 'Adventure', 'Cultural']
    },
    {
      id: 2,
      name: 'Kerala',
      region: 'South',
      image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400',
      description: 'God\'s Own Country - serene backwaters, lush greenery, and Ayurvedic traditions.',
      highlights: ['Backwaters', 'Houseboats', 'Ayurveda'],
      bestTime: 'Sep-Mar',
      duration: '6-8 days',
      priceRange: 'Medium',
      rating: 4.9,
      reviews: 1893,
      culturalScore: 92,
      experiences: ['Wellness', 'Nature', 'Cultural']
    },
    {
      id: 3,
      name: 'Goa',
      region: 'West',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400',
      description: 'Sun-kissed beaches, Portuguese heritage, and vibrant nightlife.',
      highlights: ['Beaches', 'Nightlife', 'Seafood'],
      bestTime: 'Nov-Feb',
      duration: '4-6 days',
      priceRange: 'Low',
      rating: 4.7,
      reviews: 2156,
      culturalScore: 78,
      experiences: ['Beach', 'Party', 'Food']
    },
    {
      id: 4,
      name: 'Himachal Pradesh',
      region: 'North',
      image: 'https://images.unsplash.com/photo-1580258874253-4b6fc2c8d8d4?w=400',
      description: 'Majestic Himalayas, serene hill stations, and adventure sports.',
      highlights: ['Mountains', 'Trekking', 'Snow'],
      bestTime: 'Mar-Jun',
      duration: '7-10 days',
      priceRange: 'Low',
      rating: 4.8,
      reviews: 1678,
      culturalScore: 85,
      experiences: ['Adventure', 'Nature', 'Spiritual']
    },
    {
      id: 5,
      name: 'Tamil Nadu',
      region: 'South',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400',
      description: 'Ancient temples, classical arts, and rich Dravidian heritage.',
      highlights: ['Temples', 'Classical Dance', 'Filter Coffee'],
      bestTime: 'Oct-Mar',
      duration: '8-12 days',
      priceRange: 'Medium',
      rating: 4.6,
      reviews: 1342,
      culturalScore: 98,
      experiences: ['Heritage', 'Spiritual', 'Cultural']
    },
    {
      id: 6,
      name: 'Uttar Pradesh',
      region: 'North',
      image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=400',
      description: 'Spiritual heartland with iconic monuments and sacred rivers.',
      highlights: ['Taj Mahal', 'Ganga Aarti', 'Spirituality'],
      bestTime: 'Oct-Mar',
      duration: '5-7 days',
      priceRange: 'Low',
      rating: 4.5,
      reviews: 1987,
      culturalScore: 96,
      experiences: ['Heritage', 'Spiritual', 'Cultural']
    },
    {
      id: 7,
      name: 'Kashmir',
      region: 'North',
      image: 'https://images.unsplash.com/photo-1575403089460-0faa8ceac8b7?w=400',
      description: 'Paradise on Earth with stunning valleys and houseboats.',
      highlights: ['Dal Lake', 'Skiing', 'Mughal Gardens'],
      bestTime: 'Apr-Oct',
      duration: '6-8 days',
      priceRange: 'High',
      rating: 4.9,
      reviews: 1456,
      culturalScore: 88,
      experiences: ['Nature', 'Adventure', 'Romantic']
    },
    {
      id: 8,
      name: 'Varanasi',
      region: 'North',
      image: 'https://images.unsplash.com/photo-1557237339-db0d9e8f4c3c?w=400',
      description: 'Ancient spiritual city on the banks of River Ganges.',
      highlights: ['Ghats', 'Spirituality', 'Ganga Aarti'],
      bestTime: 'Oct-Mar',
      duration: '3-4 days',
      priceRange: 'Low',
      rating: 4.7,
      reviews: 1765,
      culturalScore: 99,
      experiences: ['Spiritual', 'Cultural', 'Heritage']
    }
  ];

  const regions = ['all', 'North', 'South', 'East', 'West', 'Central', 'Northeast'];
  const categories = ['all', 'Heritage', 'Nature', 'Adventure', 'Spiritual', 'Beach', 'Wellness', 'Food'];

  // Filter states based on search and filters
  const filteredStates = useMemo(() => {
    return indianStates.filter(state => {
      const matchesSearch = state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           state.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           state.highlights.some(highlight => 
                             highlight.toLowerCase().includes(searchQuery.toLowerCase())
                           );
      
      const matchesRegion = selectedRegion === 'all' || state.region === selectedRegion;
      const matchesCategory = selectedCategory === 'all' || 
                             state.experiences.some(exp => exp.toLowerCase() === selectedCategory.toLowerCase());

      return matchesSearch && matchesRegion && matchesCategory;
    });
  }, [searchQuery, selectedRegion, selectedCategory]);

  const getPriceColor = (range) => {
    switch (range) {
      case 'Low': return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'Medium': return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20';
      case 'High': return 'text-red-600 bg-red-50 dark:bg-red-900/20';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getExperienceIcon = (experience) => {
    switch (experience) {
      case 'Heritage': return <Palette className="h-3 w-3" />;
      case 'Nature': return <Mountain className="h-3 w-3" />;
      case 'Adventure': return <Compass className="h-3 w-3" />;
      case 'Spiritual': return <Star className="h-3 w-3" />;
      case 'Beach': return <span>🏖️</span>;
      case 'Wellness': return <span>🧘</span>;
      case 'Food': return <Utensils className="h-3 w-3" />;
      default: return <Camera className="h-3 w-3" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-dark)] rounded-2xl p-8 text-white overflow-hidden"
      >
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Discover Incredible India</h1>
          <p className="text-xl text-white/80 mb-6 max-w-2xl">
            Explore diverse cultures, ancient heritage, and breathtaking landscapes across India's magnificent states
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
            <input
              type="text"
              placeholder="Search states, experiences, or highlights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:border-transparent"
            />
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-[var(--muted-color)]" />
            <span className="font-medium text-[var(--text-color)]">Filter by:</span>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {/* Region Filter */}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl text-[var(--text-color)] focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
            >
              <option value="all">All Regions</option>
              {regions.filter(r => r !== 'all').map(region => (
                <option key={region} value={region}>{region} India</option>
              ))}
            </select>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl text-[var(--text-color)] focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
            >
              <option value="all">All Experiences</option>
              {categories.filter(c => c !== 'all').map(category => (
                <option key={category} value={category}>{category}</option>
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
          Showing {filteredStates.length} of {indianStates.length} destinations
        </p>
      </motion.div>

      {/* States Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredStates.map((state, index) => (
            <motion.div
              key={state.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={state.image}
                  alt={state.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{state.rating}</span>
                </div>

                {/* Cultural Score */}
                <div className="absolute top-4 left-4 bg-[var(--accent-color)] text-white rounded-full px-3 py-1">
                  <span className="text-sm font-semibold">{state.culturalScore}%</span>
                </div>

                {/* Price Range */}
                <div className={`absolute bottom-4 left-4 ${getPriceColor(state.priceRange)} rounded-full px-3 py-1 text-xs font-medium`}>
                  {state.priceRange}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors">
                    {state.name}
                  </h3>
                  <span className="text-xs text-[var(--muted-color)] bg-[var(--accent-fade)] px-2 py-1 rounded-full">
                    {state.region}
                  </span>
                </div>

                <p className="text-[var(--muted-color)] text-sm mb-4 line-clamp-2">
                  {state.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {state.highlights.slice(0, 3).map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[var(--accent-fade)] text-[var(--accent-color)] px-2 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Experiences */}
                <div className="flex items-center space-x-2 mb-4">
                  {state.experiences.slice(0, 2).map((experience, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-1 text-xs text-[var(--muted-color)]"
                      title={experience}
                    >
                      {getExperienceIcon(experience)}
                      <span>{experience}</span>
                    </div>
                  ))}
                  {state.experiences.length > 2 && (
                    <span className="text-xs text-[var(--muted-color)]">
                      +{state.experiences.length - 2} more
                    </span>
                  )}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-[var(--muted-color)]">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{state.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{state.reviews} reviews</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{state.bestTime}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={`/user/destination/${state.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 bg-[var(--accent-color)] text-white rounded-xl font-semibold hover:bg-[var(--accent-dark)] transition-colors duration-200"
                >
                  Explore {state.name}
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredStates.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Compass className="h-16 w-16 text-[var(--muted-color)] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[var(--text-color)] mb-2">
            No destinations found
          </h3>
          <p className="text-[var(--muted-color)]">
            Try adjusting your search or filters to find more destinations
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Explore_User;