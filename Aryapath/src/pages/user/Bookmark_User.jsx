// /src/pages/user/Bookmarks_User.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bookmark,
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
  Plane,
  Eye
} from 'lucide-react';

const Bookmarks_User = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookmarks, setBookmarks] = useState([
    {
      id: 1,
      type: 'destination',
      name: 'Amber Fort',
      location: 'Rajasthan',
      image: 'https://images.unsplash.com/photo-1539599114-bf10f3e3e3b9?w=400',
      description: 'Magnificent fort palace with artistic Hindu elements',
      category: 'Heritage',
      rating: 4.7,
      reviews: 1247,
      bestTime: 'Sunrise or Sunset',
      price: 500,
      duration: '3-4 hours',
      addedDate: '2024-11-15'
    },
    {
      id: 2,
      type: 'destination',
      name: 'Kerala Backwaters',
      location: 'Kerala',
      image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400',
      description: 'Serene network of canals and houseboats',
      category: 'Nature',
      rating: 4.9,
      reviews: 1893,
      bestTime: 'Year-round',
      price: 2000,
      duration: 'Full day',
      addedDate: '2024-11-10'
    },
    {
      id: 3,
      type: 'guide',
      name: 'Rajesh Kumar',
      location: 'Rajasthan',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      description: 'Expert in Rajasthani heritage with deep knowledge of royal history',
      category: 'Heritage',
      rating: 4.8,
      reviews: 127,
      experience: '8 years',
      price: 2500,
      languages: ['Hindi', 'English'],
      addedDate: '2024-11-08'
    },
    {
      id: 4,
      type: 'destination',
      name: 'Dal Lake',
      location: 'Kashmir',
      image: 'https://images.unsplash.com/photo-1575403089460-0faa8ceac8b7?w=400',
      description: 'Famous lake with shikara rides and houseboats',
      category: 'Nature',
      rating: 4.8,
      reviews: 956,
      bestTime: 'Apr-Oct',
      price: 800,
      duration: '2-3 hours',
      addedDate: '2024-11-05'
    },
    {
      id: 5,
      type: 'guide',
      name: 'Priya Nair',
      location: 'Kerala',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400',
      description: 'Wellness expert specializing in Ayurvedic tours',
      category: 'Wellness',
      rating: 4.9,
      reviews: 89,
      experience: '6 years',
      price: 2200,
      languages: ['Malayalam', 'English', 'Hindi'],
      addedDate: '2024-11-01'
    },
    {
      id: 6,
      type: 'destination',
      name: 'Taj Mahal',
      location: 'Uttar Pradesh',
      image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=400',
      description: 'Iconic white marble mausoleum and UNESCO World Heritage site',
      category: 'Heritage',
      rating: 4.9,
      reviews: 21543,
      bestTime: 'Sunrise',
      price: 1100,
      duration: '2-3 hours',
      addedDate: '2024-10-28'
    }
  ]);

  const categories = ['all', 'Heritage', 'Nature', 'Adventure', 'Wellness', 'Spiritual', 'Food'];

  // Filter bookmarks based on search and filters
  const filteredBookmarks = bookmarks.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const removeBookmark = (id) => {
    setBookmarks(prev => prev.filter(item => item.id !== id));
  };

  const getTypeColor = (type) => {
    return type === 'destination' 
      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
      : 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300';
  };

  const getTypeIcon = (type) => {
    return type === 'destination' ? MapPin : Users;
  };

  const formatDate = (dateString) => {
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
    total: bookmarks.length,
    destinations: bookmarks.filter(item => item.type === 'destination').length,
    guides: bookmarks.filter(item => item.type === 'guide').length,
    categories: [...new Set(bookmarks.map(item => item.category))].length
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
            My Bookmarks
          </h1>
          <p className="text-[var(--muted-color)]">
            Your saved destinations and favorite guides
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
          <Bookmark className="h-8 w-8 text-[var(--accent-color)] mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-[var(--text-color)]">{stats.total}</h3>
          <p className="text-[var(--muted-color)]">Total Bookmarks</p>
        </div>
        
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 text-center">
          <MapPin className="h-8 w-8 text-blue-500 mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-[var(--text-color)]">{stats.destinations}</h3>
          <p className="text-[var(--muted-color)]">Destinations</p>
        </div>
        
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 text-center">
          <Users className="h-8 w-8 text-green-500 mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-[var(--text-color)]">{stats.guides}</h3>
          <p className="text-[var(--muted-color)]">Guides</p>
        </div>
        
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 text-center">
          <Compass className="h-8 w-8 text-purple-500 mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-[var(--text-color)]">{stats.categories}</h3>
          <p className="text-[var(--muted-color)]">Categories</p>
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
                placeholder="Search your bookmarks..."
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
              <option value="all">All Categories</option>
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
          Showing {filteredBookmarks.length} of {bookmarks.length} bookmarks
        </p>
      </motion.div>

      {/* Bookmarks Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredBookmarks.map((item, index) => {
            const TypeIcon = getTypeIcon(item.type);
            
            return (
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
                  
                  {/* Type Badge */}
                  <div className={`absolute top-4 left-4 ${getTypeColor(item.type)} rounded-full px-3 py-1 text-xs font-medium flex items-center space-x-1`}>
                    <TypeIcon className="h-3 w-3" />
                    <span>{item.type === 'destination' ? 'Place' : 'Guide'}</span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{item.rating}</span>
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-4 left-4 bg-[var(--accent-color)] text-white rounded-full px-3 py-1">
                    <span className="text-sm font-semibold flex items-center">
                      <IndianRupee className="h-3 w-3 mr-1" />
                      {item.price}
                      {item.type === 'guide' && '/day'}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                    <button
                      onClick={() => removeBookmark(item.id)}
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-red-500 hover:text-white transition-colors"
                      title="Remove bookmark"
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
                      {item.location}
                    </span>
                  </div>

                  <p className="text-[var(--muted-color)] text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Category */}
                  <div className="flex items-center justify-between text-xs text-[var(--muted-color)] mb-4">
                    <span className="bg-[var(--accent-fade)] text-[var(--accent-color)] px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{item.reviews} reviews</span>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-[var(--muted-color)] mb-4">
                    <div className="flex items-center space-x-4">
                      {item.type === 'destination' ? (
                        <>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{item.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>Best: {item.bestTime}</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{item.experience}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>{item.languages.length} languages</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Added Info */}
                  <div className="text-xs text-[var(--muted-color)] mb-4">
                    Added {getDaysSinceAdded(item.addedDate)} days ago • {formatDate(item.addedDate)}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex items-center space-x-3">
                    <button className="flex-1 text-center px-4 py-2 bg-[var(--accent-color)] text-white rounded-xl font-semibold hover:bg-[var(--accent-dark)] transition-colors flex items-center justify-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span>View Details</span>
                    </button>
                    {item.type === 'guide' ? (
                      <button className="flex items-center space-x-2 px-4 py-2 border border-[var(--border-color)] rounded-xl text-[var(--text-color)] hover:bg-[var(--accent-fade)] transition-colors">
                        <Users className="h-4 w-4" />
                        <span>Message</span>
                      </button>
                    ) : (
                      <button className="flex items-center space-x-2 px-4 py-2 border border-[var(--border-color)] rounded-xl text-[var(--text-color)] hover:bg-[var(--accent-fade)] transition-colors">
                        <Plane className="h-4 w-4" />
                        <span>Book Tour</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredBookmarks.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <Bookmark className="h-20 w-20 text-[var(--muted-color)] mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-[var(--text-color)] mb-4">
            {bookmarks.length === 0 ? 'Your bookmarks are empty' : 'No bookmarks found'}
          </h3>
          <p className="text-[var(--muted-color)] mb-8 max-w-md mx-auto">
            {bookmarks.length === 0 
              ? "Start saving your favorite destinations and guides for easy access later."
              : "Try adjusting your search or filters to find your saved bookmarks."
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

export default Bookmarks_User;