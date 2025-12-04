// /src/pages/user/Wishlist_User.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  MapPin,
  Star,
  Clock,
  Users,
  IndianRupee,
  Trash2,
  Share2,
  Calendar,
  Plus,
  Filter,
  Search,
  Compass,
  Plane
} from 'lucide-react';

const Wishlist_User = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [wishlist, setWishlist] = useState([
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
      experiences: ['Heritage', 'Adventure', 'Cultural'],
      addedDate: '2024-11-15',
      plannedDate: '2024-12-20'
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
      experiences: ['Wellness', 'Nature', 'Cultural'],
      addedDate: '2024-11-10',
      plannedDate: null
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
      experiences: ['Beach', 'Party', 'Food'],
      addedDate: '2024-11-05',
      plannedDate: '2024-02-15'
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
      experiences: ['Adventure', 'Nature', 'Spiritual'],
      addedDate: '2024-10-28',
      plannedDate: null
    },
    {
      id: 5,
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
      experiences: ['Nature', 'Adventure', 'Romantic'],
      addedDate: '2024-10-20',
      plannedDate: '2024-05-10'
    }
  ]);

  const categories = ['all', 'Heritage', 'Nature', 'Adventure', 'Spiritual', 'Beach', 'Wellness', 'Food'];

  // Filter wishlist based on search and filters
  const filteredWishlist = wishlist.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.highlights.some(highlight => 
                           highlight.toLowerCase().includes(searchQuery.toLowerCase())
                         );
    
    const matchesCategory = selectedCategory === 'all' || 
                           item.experiences.some(exp => exp.toLowerCase() === selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  const removeFromWishlist = (id) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
  };

  const addToPlanned = (id, date) => {
    setWishlist(prev => prev.map(item => 
      item.id === id ? { ...item, plannedDate: date || new Date().toISOString().split('T')[0] } : item
    ));
  };

  const getPriceColor = (range) => {
    switch (range) {
      case 'Low': return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'Medium': return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20';
      case 'High': return 'text-red-600 bg-red-50 dark:bg-red-900/20';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Not planned';
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getDaysSinceAdded = (addedDate) => {
    const added = new Date(addedDate);
    const today = new Date();
    const diffTime = Math.abs(today - added);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Statistics
  const stats = {
    total: wishlist.length,
    planned: wishlist.filter(item => item.plannedDate).length,
    byRegion: wishlist.reduce((acc, item) => {
      acc[item.region] = (acc[item.region] || 0) + 1;
      return acc;
    }, {}),
    averageRating: (wishlist.reduce((sum, item) => sum + item.rating, 0) / wishlist.length).toFixed(1)
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
            My Wishlist
          </h1>
          <p className="text-[var(--muted-color)]">
            Your saved destinations and travel dreams
          </p>
        </div>
        
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Link
            to="/user/explore"
            className="flex items-center space-x-2 px-6 py-3 bg-[var(--accent-color)] text-white rounded-xl font-semibold hover:bg-[var(--accent-dark)] transition-colors"
          >
            <Plus className="h-5 w-5" />
            <span>Explore More</span>
          </Link>
        </div>
      </motion.div>

      {/* Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 text-center">
          <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-[var(--text-color)]">{stats.total}</h3>
          <p className="text-[var(--muted-color)]">Saved Places</p>
        </div>
        
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 text-center">
          <Calendar className="h-8 w-8 text-blue-500 mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-[var(--text-color)]">{stats.planned}</h3>
          <p className="text-[var(--muted-color)]">Planned Trips</p>
        </div>
        
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 text-center">
          <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-[var(--text-color)]">{stats.averageRating}</h3>
          <p className="text-[var(--muted-color)]">Avg Rating</p>
        </div>
        
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 text-center">
          <Compass className="h-8 w-8 text-green-500 mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-[var(--text-color)]">
            {Object.keys(stats.byRegion).length}
          </h3>
          <p className="text-[var(--muted-color)]">Regions</p>
        </div>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-[var(--muted-color)]" />
            <span className="font-medium text-[var(--text-color)]">Filter by:</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 flex-1 max-w-2xl">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--muted-color)]" />
              <input
                type="text"
                placeholder="Search your wishlist..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] placeholder-[var(--muted-color)]"
              />
            </div>

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
        transition={{ delay: 0.3 }}
        className="flex items-center justify-between"
      >
        <p className="text-[var(--muted-color)]">
          Showing {filteredWishlist.length} of {wishlist.length} saved destinations
        </p>
      </motion.div>

      {/* Wishlist Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredWishlist.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{item.rating}</span>
                </div>

                {/* Cultural Score */}
                <div className="absolute top-4 left-4 bg-[var(--accent-color)] text-white rounded-full px-3 py-1">
                  <span className="text-sm font-semibold">{item.culturalScore}%</span>
                </div>

                {/* Price Range */}
                <div className={`absolute bottom-4 left-4 ${getPriceColor(item.priceRange)} rounded-full px-3 py-1 text-xs font-medium`}>
                  {item.priceRange}
                </div>

                {/* Action Buttons */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-red-500 hover:text-white transition-colors"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <button
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-[var(--accent-color)] hover:text-white transition-colors"
                    title="Share"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-xs text-[var(--muted-color)] bg-[var(--accent-fade)] px-2 py-1 rounded-full">
                    {item.region}
                  </span>
                </div>

                <p className="text-[var(--muted-color)] text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.highlights.slice(0, 3).map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[var(--accent-fade)] text-[var(--accent-color)] px-2 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-[var(--muted-color)] mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{item.reviews} reviews</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{item.bestTime}</span>
                  </div>
                </div>

                {/* Planning Status */}
                <div className="flex items-center justify-between mb-4 p-3 bg-[var(--accent-fade)] rounded-xl">
                  <div>
                    <p className="text-sm font-medium text-[var(--text-color)]">
                      {item.plannedDate ? 'Planned for' : 'Not planned yet'}
                    </p>
                    <p className="text-xs text-[var(--muted-color)]">
                      {formatDate(item.plannedDate)}
                    </p>
                  </div>
                  {!item.plannedDate && (
                    <button
                      onClick={() => addToPlanned(item.id)}
                      className="flex items-center space-x-1 px-3 py-1 bg-[var(--accent-color)] text-white rounded-lg text-sm hover:bg-[var(--accent-dark)] transition-colors"
                    >
                      <Calendar className="h-3 w-3" />
                      <span>Plan</span>
                    </button>
                  )}
                </div>

                {/* Added Info */}
                <div className="text-xs text-[var(--muted-color)]">
                  Added {getDaysSinceAdded(item.addedDate)} days ago
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center space-x-3 mt-4">
                  <Link
                    to={`/user/destination/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex-1 text-center px-4 py-2 bg-[var(--accent-color)] text-white rounded-xl font-semibold hover:bg-[var(--accent-dark)] transition-colors"
                  >
                    View Details
                  </Link>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-[var(--border-color)] rounded-xl text-[var(--text-color)] hover:bg-[var(--accent-fade)] transition-colors">
                    <Plane className="h-4 w-4" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredWishlist.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <Heart className="h-20 w-20 text-[var(--muted-color)] mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-[var(--text-color)] mb-4">
            {wishlist.length === 0 ? 'Your wishlist is empty' : 'No destinations found'}
          </h3>
          <p className="text-[var(--muted-color)] mb-8 max-w-md mx-auto">
            {wishlist.length === 0 
              ? "Start building your travel dreams! Save destinations you'd love to visit."
              : "Try adjusting your search or filters to find your saved destinations."
            }
          </p>
          <Link
            to="/user/explore"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-[var(--accent-color)] text-white rounded-xl font-semibold hover:bg-[var(--accent-dark)] transition-colors"
          >
            <Compass className="h-5 w-5" />
            <span>Explore Destinations</span>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Wishlist_User;