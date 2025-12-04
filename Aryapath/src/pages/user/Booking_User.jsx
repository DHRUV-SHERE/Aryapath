// /src/pages/user/Bookings_User.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  IndianRupee,
  Download,
  Eye,
  Star,
  MoreVertical,
  Filter,
  Search,
  Truck,
  Hotel,
  Utensils,
  Camera,
  Navigation
} from 'lucide-react';

const Bookings_User = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Mock booking data
  const userBookings = {
    upcoming: [
      {
        id: 'BK001',
        tripName: 'Rajasthan Royal Heritage Tour',
        destination: 'Rajasthan',
        image: 'https://images.unsplash.com/photo-1539599114-bf10f3e3e3b9?w=400',
        guide: {
          name: 'Rajesh Kumar',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
          rating: 4.8,
          reviews: 127
        },
        dates: {
          start: '2024-12-15',
          end: '2024-12-20',
          duration: '6 days'
        },
        travelers: 2,
        totalAmount: 24500,
        status: 'confirmed',
        paymentStatus: 'paid',
        itinerary: [
          {
            day: 1,
            date: '2024-12-15',
            activities: ['Arrival in Jaipur', 'Hotel Check-in', 'Local Market Visit'],
            meals: ['Dinner'],
            accommodation: 'Heritage Palace Hotel'
          },
          {
            day: 2,
            date: '2024-12-16',
            activities: ['Amber Fort', 'City Palace', 'Jantar Mantar'],
            meals: ['Breakfast', 'Lunch', 'Dinner'],
            accommodation: 'Heritage Palace Hotel'
          }
        ],
        inclusions: [
          'Accommodation (5 nights)',
          'Daily Breakfast & Dinner',
          'Private AC Vehicle',
          'English Speaking Guide',
          'Monument Entries',
          'Cultural Show'
        ],
        exclusions: [
          'Flight Tickets',
          'Travel Insurance',
          'Personal Expenses',
          'Lunch'
        ],
        bookingDate: '2024-11-10',
        bookingId: 'ARYA20241110BK001'
      }
    ],
    completed: [
      {
        id: 'BK002',
        tripName: 'Kerala Backwaters Retreat',
        destination: 'Kerala',
        image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400',
        guide: {
          name: 'Priya Nair',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
          rating: 4.9,
          reviews: 89
        },
        dates: {
          start: '2024-10-05',
          end: '2024-10-10',
          duration: '6 days'
        },
        travelers: 2,
        totalAmount: 18700,
        status: 'completed',
        paymentStatus: 'paid',
        rating: 5,
        review: 'Amazing experience! The houseboat stay was incredible and Priya was very knowledgeable.',
        itinerary: [
          {
            day: 1,
            date: '2024-10-05',
            activities: ['Cochin Arrival', 'Chinese Fishing Nets', 'Fort Kochi'],
            meals: ['Dinner'],
            accommodation: 'Waterside Resort'
          }
        ],
        inclusions: [
          'Houseboat Stay (2 nights)',
          'Resort Stay (3 nights)',
          'All Meals',
          'Backwater Cruise',
          'Ayurvedic Massage'
        ],
        bookingDate: '2024-09-15',
        bookingId: 'ARYA20240915BK002'
      }
    ],
    cancelled: [
      {
        id: 'BK003',
        tripName: 'Goa Beach Holiday',
        destination: 'Goa',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400',
        guide: {
          name: 'Rahul Desai',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
          rating: 4.7,
          reviews: 156
        },
        dates: {
          start: '2024-11-20',
          end: '2024-11-25',
          duration: '6 days'
        },
        travelers: 2,
        totalAmount: 15600,
        status: 'cancelled',
        paymentStatus: 'refunded',
        cancellationReason: 'Change in travel plans',
        cancellationDate: '2024-11-05',
        refundAmount: 14040
      }
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'completed': return 'text-blue-600 bg-blue-50 dark:bg-blue-900/20';
      case 'cancelled': return 'text-red-600 bg-red-50 dark:bg-red-900/20';
      case 'pending': return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'pending': return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20';
      case 'refunded': return 'text-blue-600 bg-blue-50 dark:bg-blue-900/20';
      case 'failed': return 'text-red-600 bg-red-50 dark:bg-red-900/20';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
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
            My Bookings
          </h1>
          <p className="text-[var(--muted-color)]">
            Manage and view all your travel bookings in one place
          </p>
        </div>
        
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--muted-color)]" />
            <input
              type="text"
              placeholder="Search bookings..."
              className="pl-10 pr-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] placeholder-[var(--muted-color)]"
            />
          </div>
          
          {/* Filter Button */}
          <button className="flex items-center space-x-2 px-4 py-2 border border-[var(--border-color)] rounded-xl text-[var(--text-color)] hover:bg-[var(--accent-fade)] transition-colors">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6"
      >
        <div className="flex space-x-8 border-b border-[var(--border-color)]">
          {[
            { key: 'upcoming', label: 'Upcoming', count: userBookings.upcoming.length },
            { key: 'completed', label: 'Completed', count: userBookings.completed.length },
            { key: 'cancelled', label: 'Cancelled', count: userBookings.cancelled.length }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-4 px-2 font-medium flex items-center space-x-2 transition-colors ${
                activeTab === tab.key
                  ? 'text-[var(--accent-color)] border-b-2 border-[var(--accent-color)]'
                  : 'text-[var(--muted-color)] hover:text-[var(--text-color)]'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-2 py-1 text-xs rounded-full ${
                activeTab === tab.key
                  ? 'bg-[var(--accent-color)] text-white'
                  : 'bg-[var(--border-color)] text-[var(--muted-color)]'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Bookings List */}
        <div className="pt-6 space-y-6">
          {userBookings[activeTab].length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-[var(--muted-color)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[var(--text-color)] mb-2">
                No {activeTab} bookings
              </h3>
              <p className="text-[var(--muted-color)]">
                {activeTab === 'upcoming' 
                  ? "You don't have any upcoming trips. Start exploring amazing destinations!"
                  : `No ${activeTab} trips found.`}
              </p>
            </div>
          ) : (
            userBookings[activeTab].map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--bg-color)] border border-[var(--border-color)] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    {/* Booking Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-[var(--text-color)] mb-2">
                            {booking.tripName}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-[var(--muted-color)]">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{booking.destination}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {formatDate(booking.dates.start)} - {formatDate(booking.dates.end)}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{booking.travelers} {booking.travelers === 1 ? 'Person' : 'People'}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(booking.paymentStatus)}`}>
                            {booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1)}
                          </span>
                        </div>
                      </div>

                      {/* Guide Info */}
                      <div className="flex items-center space-x-3 mb-4">
                        <img
                          src={booking.guide.image}
                          alt={booking.guide.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-[var(--text-color)]">
                            Guide: {booking.guide.name}
                          </p>
                          <div className="flex items-center space-x-2 text-sm text-[var(--muted-color)]">
                            <div className="flex items-center space-x-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span>{booking.guide.rating}</span>
                            </div>
                            <span>•</span>
                            <span>{booking.guide.reviews} reviews</span>
                          </div>
                        </div>
                      </div>

                      {/* Price and Actions */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-[var(--text-color)]">
                            {formatCurrency(booking.totalAmount)}
                          </p>
                          <p className="text-sm text-[var(--muted-color)]">
                            Booking ID: {booking.bookingId}
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <button className="flex items-center space-x-2 px-4 py-2 border border-[var(--border-color)] rounded-xl text-[var(--text-color)] hover:bg-[var(--accent-fade)] transition-colors">
                            <Eye className="h-4 w-4" />
                            <span>View Details</span>
                          </button>
                          
                          {activeTab === 'upcoming' && (
                            <button className="flex items-center space-x-2 px-4 py-2 bg-[var(--accent-color)] text-white rounded-xl hover:bg-[var(--accent-dark)] transition-colors">
                              <Download className="h-4 w-4" />
                              <span>Download Invoice</span>
                            </button>
                          )}
                          
                          {activeTab === 'completed' && !booking.rating && (
                            <button className="flex items-center space-x-2 px-4 py-2 bg-[var(--accent-color)] text-white rounded-xl hover:bg-[var(--accent-dark)] transition-colors">
                              <Star className="h-4 w-4" />
                              <span>Write Review</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Booking Image */}
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <img
                        src={booking.image}
                        alt={booking.tripName}
                        className="w-48 h-32 rounded-xl object-cover"
                      />
                    </div>
                  </div>

                  {/* Additional Info for Completed Bookings */}
                  {activeTab === 'completed' && booking.rating && (
                    <div className="mt-4 p-4 bg-[var(--accent-fade)] rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < booking.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-[var(--text-color)]">
                          Your Rating
                        </span>
                      </div>
                      <p className="text-[var(--text-color)] text-sm">{booking.review}</p>
                    </div>
                  )}

                  {/* Cancellation Info */}
                  {activeTab === 'cancelled' && (
                    <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                      <p className="text-red-700 dark:text-red-300 text-sm">
                        <strong>Cancellation Reason:</strong> {booking.cancellationReason}
                      </p>
                      <p className="text-red-700 dark:text-red-300 text-sm mt-1">
                        <strong>Refund Amount:</strong> {formatCurrency(booking.refundAmount)} 
                        (Refunded on {formatDate(booking.cancellationDate)})
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 text-center">
          <Calendar className="h-8 w-8 text-[var(--accent-color)] mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-[var(--text-color)]">{userBookings.upcoming.length}</h3>
          <p className="text-[var(--muted-color)]">Upcoming Trips</p>
        </div>
        
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 text-center">
          <Star className="h-8 w-8 text-green-500 mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-[var(--text-color)]">{userBookings.completed.length}</h3>
          <p className="text-[var(--muted-color)]">Completed Trips</p>
        </div>
        
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 text-center">
          <IndianRupee className="h-8 w-8 text-blue-500 mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-[var(--text-color)]">
            {userBookings.completed.reduce((sum, booking) => sum + booking.totalAmount, 0).toLocaleString('en-IN')}
          </h3>
          <p className="text-[var(--muted-color)]">Total Spent</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Bookings_User;