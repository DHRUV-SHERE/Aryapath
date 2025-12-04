import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Star,
  Clock,
  TrendingUp,
  Compass,
  Heart,
  Bookmark,
  Users,
  Award,
  ArrowRight,
  Plus
} from 'lucide-react';

const Dashboard_User = () => {
  // Mock data - replace with actual data from your API
  const stats = [
    { 
      name: 'Upcoming Trips', 
      value: '3', 
      icon: Calendar, 
      color: 'text-blue-500', 
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      change: '+1 this month'
    },
    { 
      name: 'Wishlisted Places', 
      value: '12', 
      icon: Heart, 
      color: 'text-red-500', 
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      change: '+3 recently'
    },
    { 
      name: 'Total Reviews', 
      value: '8', 
      icon: Star, 
      color: 'text-yellow-500', 
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      change: '2.4 avg rating'
    },
    { 
      name: 'Days Exploring', 
      value: '47', 
      icon: Compass, 
      color: 'text-green-500', 
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      change: '+12 this year'
    },
  ];

  const upcomingTrips = [
    {
      id: 1,
      destination: 'Varanasi Ghats',
      guide: 'Rajesh Kumar',
      date: '2024-12-15',
      duration: '2 days',
      status: 'confirmed',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=300'
    },
    {
      id: 2,
      destination: 'Kerala Backwaters',
      guide: 'Priya Nair',
      date: '2024-12-22',
      duration: '3 days',
      status: 'confirmed',
      image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=300'
    },
    {
      id: 3,
      destination: 'Rajasthan Forts',
      guide: 'Vikram Singh',
      date: '2024-12-30',
      duration: '4 days',
      status: 'pending',
      image: 'https://images.unsplash.com/photo-1539599114-bf10f3e3e3b9?w=300'
    },
  ];

  const recommendedGuides = [
    {
      id: 1,
      name: 'Anita Sharma',
      specialty: 'Heritage & Culture',
      location: 'Delhi',
      rating: 4.9,
      reviews: 127,
      languages: ['Hindi', 'English'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150'
    },
    {
      id: 2,
      name: 'Rahul Mehta',
      specialty: 'Food Tours',
      location: 'Mumbai',
      rating: 4.8,
      reviews: 89,
      languages: ['Hindi', 'English', 'Marathi'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
    },
    {
      id: 3,
      name: 'Sita Patel',
      specialty: 'Spiritual Journeys',
      location: 'Varanasi',
      rating: 5.0,
      reviews: 203,
      languages: ['Hindi', 'English'],
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'booking',
      message: 'Booked Varanasi tour with Rajesh Kumar',
      time: '2 hours ago',
      icon: Calendar
    },
    {
      id: 2,
      type: 'wishlist',
      message: 'Added Kerala Backwaters to wishlist',
      time: '1 day ago',
      icon: Heart
    },
    {
      id: 3,
      type: 'review',
      message: 'Reviewed Taj Mahal tour - 5 stars',
      time: '2 days ago',
      icon: Star
    },
    {
      id: 4,
      type: 'bookmark',
      message: 'Saved Rajasthan travel guide',
      time: '3 days ago',
      icon: Bookmark
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-dark)] rounded-2xl p-6 text-white"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Welcome back, John! 👋
            </h1>
            <p className="text-white/80 text-lg">
              Ready for your next adventure? Discover amazing experiences waiting for you.
            </p>
          </div>
          <Link
            to="/user/explore"
            className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-white text-[var(--accent-color)] rounded-xl font-semibold hover:bg-white/90 transition-colors duration-200"
          >
            <Compass className="h-5 w-5 mr-2" />
            Explore Destinations
          </Link>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[var(--muted-color)] mb-1">
                    {stat.name}
                  </p>
                  <p className="text-2xl font-bold text-[var(--text-color)]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[var(--muted-color)] mt-1">
                    {stat.change}
                  </p>
                </div>
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Trips */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[var(--text-color)]">
              Upcoming Trips
            </h2>
            <Link
              to="/user/bookings"
              className="text-sm text-[var(--accent-color)] hover:text-[var(--accent-dark)] transition-colors duration-200 flex items-center"
            >
              View all
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="space-y-4">
            {upcomingTrips.map((trip) => (
              <div
                key={trip.id}
                className="flex items-center space-x-4 p-4 rounded-xl border border-[var(--border-color)] hover:border-[var(--accent-color)]/30 transition-all duration-200"
              >
                <img
                  src={trip.image}
                  alt={trip.destination}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-[var(--text-color)]">
                    {trip.destination}
                  </h3>
                  <p className="text-sm text-[var(--muted-color)]">
                    with {trip.guide}
                  </p>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center text-xs text-[var(--muted-color)]">
                      <Calendar className="h-3 w-3 mr-1" />
                      {trip.date}
                    </div>
                    <div className="flex items-center text-xs text-[var(--muted-color)]">
                      <Clock className="h-3 w-3 mr-1" />
                      {trip.duration}
                    </div>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    trip.status === 'confirmed'
                      ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300'
                      : 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300'
                  }`}
                >
                  {trip.status}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/user/explore"
            className="mt-6 w-full flex items-center justify-center p-3 border-2 border-dashed border-[var(--border-color)] rounded-xl text-[var(--muted-color)] hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] transition-all duration-200"
          >
            <Plus className="h-5 w-5 mr-2" />
            Book New Trip
          </Link>
        </motion.div>

        {/* Recommended Guides */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[var(--text-color)]">
              Recommended Guides
            </h2>
            <Link
              to="/user/explore"
              className="text-sm text-[var(--accent-color)] hover:text-[var(--accent-dark)] transition-colors duration-200 flex items-center"
            >
              See more
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="space-y-4">
            {recommendedGuides.map((guide) => (
              <div
                key={guide.id}
                className="flex items-center space-x-4 p-4 rounded-xl border border-[var(--border-color)] hover:border-[var(--accent-color)]/30 transition-all duration-200"
              >
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-[var(--text-color)]">
                      {guide.name}
                    </h3>
                    <div className="flex items-center text-xs text-[var(--muted-color)]">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                      {guide.rating}
                    </div>
                  </div>
                  <p className="text-sm text-[var(--muted-color)]">
                    {guide.specialty}
                  </p>
                  <div className="flex items-center space-x-3 mt-1">
                    <div className="flex items-center text-xs text-[var(--muted-color)]">
                      <MapPin className="h-3 w-3 mr-1" />
                      {guide.location}
                    </div>
                    <div className="flex items-center text-xs text-[var(--muted-color)]">
                      <Users className="h-3 w-3 mr-1" />
                      {guide.reviews} reviews
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6"
      >
        <h2 className="text-xl font-bold text-[var(--text-color)] mb-6">
          Recent Activity
        </h2>

        <div className="space-y-4">
          {recentActivities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.id}
                className="flex items-center space-x-4 p-3 rounded-xl hover:bg-[var(--accent-fade)] transition-all duration-200"
              >
                <div className="p-2 rounded-lg bg-[var(--accent-fade)] text-[var(--accent-color)]">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[var(--text-color)]">
                    {activity.message}
                  </p>
                  <p className="text-xs text-[var(--muted-color)]">
                    {activity.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard_User;