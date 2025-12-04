// /src/pages/user/Profile_User.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit2,
  Save,
  X,
  Camera,
  Shield,
  Bell,
  Globe,
  Heart,
  Award,
  Compass,
  Star,
  Users,
  IndianRupee,
  Settings
} from 'lucide-react';

const Profile_User = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400');
  
  // User data state
  const [userData, setUserData] = useState({
    personal: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+91 98765 43210',
      dateOfBirth: '1990-05-15',
      gender: 'Male',
      nationality: 'Indian'
    },
    address: {
      street: '123 Main Street',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      country: 'India'
    },
    preferences: {
      language: 'English',
      currency: 'INR',
      notifications: {
        email: true,
        sms: false,
        push: true
      },
      theme: 'light'
    },
    travel: {
      travelStyle: ['Cultural', 'Adventure'],
      dietaryPreference: 'Vegetarian',
      accessibility: false,
      emergencyContact: {
        name: 'Jane Doe',
        phone: '+91 98765 43211',
        relationship: 'Spouse'
      }
    }
  });

  // Mock statistics
  const userStats = {
    tripsCompleted: 8,
    countriesVisited: 3,
    guidesRated: 12,
    totalSpent: 125000,
    wishlistItems: 15,
    memberSince: '2023-01-15'
  };

  // Recent activities
  const recentActivities = [
    {
      id: 1,
      type: 'booking',
      message: 'Booked Rajasthan Heritage Tour',
      date: '2024-11-15',
      guide: 'Rajesh Kumar'
    },
    {
      id: 2,
      type: 'review',
      message: 'Rated Kerala Backwaters 5 stars',
      date: '2024-11-10',
      guide: 'Priya Nair'
    },
    {
      id: 3,
      type: 'wishlist',
      message: 'Added Goa to wishlist',
      date: '2024-11-05',
      destination: 'Goa'
    },
    {
      id: 4,
      type: 'booking',
      message: 'Booked Himalayan Trek',
      date: '2024-10-28',
      guide: 'Vikram Singh'
    }
  ];

  const handleInputChange = (section, field, value) => {
    setUserData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleNestedInputChange = (section, subSection, field, value) => {
    setUserData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [subSection]: {
          ...prev[section][subSection],
          [field]: value
        }
      }
    }));
  };

  const handleSave = () => {
    // Here you would typically make an API call to save the data
    console.log('Saving user data:', userData);
    setIsEditing(false);
    // Add your save logic here
  };

  const handleCancel = () => {
    // Reset form or reload original data
    setIsEditing(false);
    // Add cancel logic here
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
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
            My Profile
          </h1>
          <p className="text-[var(--muted-color)]">
            Manage your personal information and preferences
          </p>
        </div>
        
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center space-x-2 px-6 py-3 bg-[var(--accent-color)] text-white rounded-xl font-semibold hover:bg-[var(--accent-dark)] transition-colors"
            >
              <Edit2 className="h-5 w-5" />
              <span>Edit Profile</span>
            </button>
          ) : (
            <div className="flex items-center space-x-3">
              <button
                onClick={handleCancel}
                className="flex items-center space-x-2 px-6 py-3 border border-[var(--border-color)] text-[var(--text-color)] rounded-xl font-semibold hover:bg-[var(--accent-fade)] transition-colors"
              >
                <X className="h-5 w-5" />
                <span>Cancel</span>
              </button>
              <button
                onClick={handleSave}
                className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
              >
                <Save className="h-5 w-5" />
                <span>Save Changes</span>
              </button>
            </div>
          )}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar - Profile Summary */}
        <div className="lg:col-span-1 space-y-6">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 text-center"
          >
            <div className="relative inline-block mb-4">
              <img
                src={profileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-[var(--accent-color)]"
              />
              {isEditing && (
                <label className="absolute bottom-0 right-0 bg-[var(--accent-color)] text-white p-2 rounded-full cursor-pointer hover:bg-[var(--accent-dark)] transition-colors">
                  <Camera className="h-4 w-4" />
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>
            
            <h2 className="text-xl font-bold text-[var(--text-color)] mb-1">
              {userData.personal.firstName} {userData.personal.lastName}
            </h2>
            <p className="text-[var(--muted-color)] text-sm mb-4">Travel Enthusiast</p>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-[var(--muted-color)] mb-4">
              <MapPin className="h-4 w-4" />
              <span>{userData.address.city}, {userData.address.state}</span>
            </div>
            
            <div className="text-xs text-[var(--muted-color)]">
              Member since {formatDate(userStats.memberSince)}
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6"
          >
            <h3 className="font-semibold text-[var(--text-color)] mb-4">Travel Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Compass className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-[var(--text-color)]">Trips Completed</span>
                </div>
                <span className="font-semibold text-[var(--text-color)]">{userStats.tripsCompleted}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-[var(--text-color)]">States Visited</span>
                </div>
                <span className="font-semibold text-[var(--text-color)]">{userStats.countriesVisited}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm text-[var(--text-color)]">Guides Rated</span>
                </div>
                <span className="font-semibold text-[var(--text-color)]">{userStats.guidesRated}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <IndianRupee className="h-5 w-5 text-purple-500" />
                  <span className="text-sm text-[var(--text-color)]">Total Spent</span>
                </div>
                <span className="font-semibold text-[var(--text-color)]">{formatCurrency(userStats.totalSpent)}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="text-sm text-[var(--text-color)]">Wishlist Items</span>
                </div>
                <span className="font-semibold text-[var(--text-color)]">{userStats.wishlistItems}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl overflow-hidden"
          >
            {/* Tabs */}
            <div className="border-b border-[var(--border-color)]">
              <div className="flex space-x-8 px-6">
                {[
                  { key: 'personal', label: 'Personal Info', icon: User },
                  { key: 'address', label: 'Address', icon: MapPin },
                  { key: 'preferences', label: 'Preferences', icon: Settings },
                  { key: 'travel', label: 'Travel Preferences', icon: Compass },
                  { key: 'activity', label: 'Recent Activity', icon: Award }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`pb-4 px-2 font-medium flex items-center space-x-2 transition-colors ${
                        activeTab === tab.key
                          ? 'text-[var(--accent-color)] border-b-2 border-[var(--accent-color)]'
                          : 'text-[var(--muted-color)] hover:text-[var(--text-color)]'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'personal' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={userData.personal.firstName}
                      onChange={(e) => handleInputChange('personal', 'firstName', e.target.value)}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={userData.personal.lastName}
                      onChange={(e) => handleInputChange('personal', 'lastName', e.target.value)}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      Email
                    </label>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[var(--muted-color)]" />
                      <input
                        type="email"
                        value={userData.personal.email}
                        onChange={(e) => handleInputChange('personal', 'email', e.target.value)}
                        disabled={!isEditing}
                        className="flex-1 px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      Phone
                    </label>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[var(--muted-color)]" />
                      <input
                        type="tel"
                        value={userData.personal.phone}
                        onChange={(e) => handleInputChange('personal', 'phone', e.target.value)}
                        disabled={!isEditing}
                        className="flex-1 px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      Date of Birth
                    </label>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-[var(--muted-color)]" />
                      <input
                        type="date"
                        value={userData.personal.dateOfBirth}
                        onChange={(e) => handleInputChange('personal', 'dateOfBirth', e.target.value)}
                        disabled={!isEditing}
                        className="flex-1 px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      Gender
                    </label>
                    <select
                      value={userData.personal.gender}
                      onChange={(e) => handleInputChange('personal', 'gender', e.target.value)}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>
                </div>
              )}

              {activeTab === 'address' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      Street Address
                    </label>
                    <input
                      type="text"
                      value={userData.address.street}
                      onChange={(e) => handleInputChange('address', 'street', e.target.value)}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      value={userData.address.city}
                      onChange={(e) => handleInputChange('address', 'city', e.target.value)}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      value={userData.address.state}
                      onChange={(e) => handleInputChange('address', 'state', e.target.value)}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      PIN Code
                    </label>
                    <input
                      type="text"
                      value={userData.address.pincode}
                      onChange={(e) => handleInputChange('address', 'pincode', e.target.value)}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      value={userData.address.country}
                      onChange={(e) => handleInputChange('address', 'country', e.target.value)}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'preferences' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                        Language
                      </label>
                      <select
                        value={userData.preferences.language}
                        onChange={(e) => handleInputChange('preferences', 'language', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                        Currency
                      </label>
                      <select
                        value={userData.preferences.currency}
                        onChange={(e) => handleInputChange('preferences', 'currency', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="INR">Indian Rupee (INR)</option>
                        <option value="USD">US Dollar (USD)</option>
                        <option value="EUR">Euro (EUR)</option>
                        <option value="GBP">British Pound (GBP)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--text-color)] mb-4">Notification Preferences</h4>
                    <div className="space-y-3">
                      {Object.entries(userData.preferences.notifications).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <Bell className="h-4 w-4 text-[var(--muted-color)]" />
                            <span className="text-sm text-[var(--text-color)] capitalize">
                              {key} Notifications
                            </span>
                          </label>
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={(e) => handleNestedInputChange('preferences', 'notifications', key, e.target.checked)}
                            disabled={!isEditing}
                            className="w-4 h-4 text-[var(--accent-color)] bg-[var(--bg-color)] border-[var(--border-color)] rounded focus:ring-[var(--accent-color)] focus:ring-2"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'travel' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      Travel Style
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['Cultural', 'Adventure', 'Luxury', 'Budget', 'Family', 'Solo', 'Wellness'].map(style => (
                        <label key={style} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={userData.travel.travelStyle.includes(style)}
                            onChange={(e) => {
                              const newStyles = e.target.checked
                                ? [...userData.travel.travelStyle, style]
                                : userData.travel.travelStyle.filter(s => s !== style);
                              handleInputChange('travel', 'travelStyle', newStyles);
                            }}
                            disabled={!isEditing}
                            className="w-4 h-4 text-[var(--accent-color)] bg-[var(--bg-color)] border-[var(--border-color)] rounded focus:ring-[var(--accent-color)] focus:ring-2"
                          />
                          <span className="text-sm text-[var(--text-color)]">{style}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      Dietary Preference
                    </label>
                    <select
                      value={userData.travel.dietaryPreference}
                      onChange={(e) => handleInputChange('travel', 'dietaryPreference', e.target.value)}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Non-Vegetarian">Non-Vegetarian</option>
                      <option value="Vegan">Vegan</option>
                      <option value="Gluten-Free">Gluten-Free</option>
                      <option value="No Preference">No Preference</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <span className="text-sm font-medium text-[var(--text-color)]">
                        Special Accessibility Requirements
                      </span>
                    </label>
                    <input
                      type="checkbox"
                      checked={userData.travel.accessibility}
                      onChange={(e) => handleInputChange('travel', 'accessibility', e.target.checked)}
                      disabled={!isEditing}
                      className="w-4 h-4 text-[var(--accent-color)] bg-[var(--bg-color)] border-[var(--border-color)] rounded focus:ring-[var(--accent-color)] focus:ring-2"
                    />
                  </div>

                  <div className="border-t border-[var(--border-color)] pt-6">
                    <h4 className="font-semibold text-[var(--text-color)] mb-4">Emergency Contact</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                          Contact Name
                        </label>
                        <input
                          type="text"
                          value={userData.travel.emergencyContact.name}
                          onChange={(e) => handleNestedInputChange('travel', 'emergencyContact', 'name', e.target.value)}
                          disabled={!isEditing}
                          className="w-full px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={userData.travel.emergencyContact.phone}
                          onChange={(e) => handleNestedInputChange('travel', 'emergencyContact', 'phone', e.target.value)}
                          disabled={!isEditing}
                          className="w-full px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                          Relationship
                        </label>
                        <input
                          type="text"
                          value={userData.travel.emergencyContact.relationship}
                          onChange={(e) => handleNestedInputChange('travel', 'emergencyContact', 'relationship', e.target.value)}
                          disabled={!isEditing}
                          className="w-full px-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'activity' && (
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center space-x-4 p-4 border border-[var(--border-color)] rounded-xl hover:bg-[var(--accent-fade)] transition-colors"
                    >
                      <div className="w-10 h-10 bg-[var(--accent-fade)] rounded-full flex items-center justify-center">
                        <Award className="h-5 w-5 text-[var(--accent-color)]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[var(--text-color)] font-medium">{activity.message}</p>
                        <p className="text-sm text-[var(--muted-color)]">
                          {activity.guide && `with ${activity.guide} • `}
                          {formatDate(activity.date)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile_User;