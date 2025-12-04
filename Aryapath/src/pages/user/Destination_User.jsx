// /src/pages/user/Destination_User.jsx
import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  MapPin,
  Star,
  Clock,
  Users,
  Camera,
  Utensils,
  Mountain,
  Palette,
  Heart,
  Share2,
  Calendar,
  Compass
} from 'lucide-react';

const Destination_User = () => {
  const { stateName } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for Indian states (in real app, this would come from backend)
  const stateData = {
    'rajasthan': {
      id: 1,
      name: 'Rajasthan',
      region: 'North',
      description: 'The Land of Kings with majestic forts, desert landscapes, and vibrant culture that will transport you to an era of royal splendor.',
      longDescription: 'Rajasthan, the largest state in India, is a realm of majestic forts, sprawling deserts, and vibrant cultures. From the golden sands of Thar Desert to the serene lakes of Udaipur, every corner tells a story of valor and romance. The state is renowned for its architectural marvels, colorful festivals, and warm hospitality that makes every visitor feel like royalty.',
      images: [
        'https://images.unsplash.com/photo-1539599114-bf10f3e3e3b9?w=800',
        'https://images.unsplash.com/photo-1452573993591-30c324a4c941?w=800',
        'https://images.unsplash.com/photo-1557237339-db0d9e8f4c3c?w=800',
        'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800'
      ],
      rating: 4.8,
      reviews: 1247,
      bestTime: 'October to March',
      duration: '5-7 days',
      priceRange: 'Medium',
      culturalScore: 95,
      
      // Famous Places
      famousPlaces: [
        {
          id: 1,
          name: 'Amber Fort',
          city: 'Jaipur',
          image: 'https://images.unsplash.com/photo-1539599114-bf10f3e3e3b9?w=400',
          description: 'Magnificent fort palace with artistic Hindu elements',
          type: 'Heritage',
          rating: 4.7,
          bestTime: 'Sunrise or Sunset'
        },
        {
          id: 2,
          name: 'City Palace',
          city: 'Udaipur',
          image: 'https://images.unsplash.com/photo-1452573993591-30c324a4c941?w=400',
          description: 'Beautiful palace complex with museums and courtyards',
          type: 'Heritage',
          rating: 4.6,
          bestTime: 'Morning'
        },
        {
          id: 3,
          name: 'Thar Desert',
          city: 'Jaisalmer',
          image: 'https://images.unsplash.com/photo-1557237339-db0d9e8f4c3c?w=400',
          description: 'Golden sand dunes and camel safaris',
          type: 'Adventure',
          rating: 4.8,
          bestTime: 'Evening'
        },
        {
          id: 4,
          name: 'Ranthambore',
          city: 'Sawai Madhopur',
          image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400',
          description: 'Famous tiger reserve and national park',
          type: 'Wildlife',
          rating: 4.9,
          bestTime: 'Early Morning'
        }
      ],

      // Famous Foods
      famousFoods: [
        {
          id: 1,
          name: 'Dal Baati Churma',
          image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
          description: 'Traditional Rajasthani meal with lentil curry, baked dough balls, and sweet crumbled bread',
          type: 'Main Course',
          spiceLevel: 'Medium'
        },
        {
          id: 2,
          name: 'Laal Maas',
          image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400',
          description: 'Spicy mutton curry cooked with Mathania red chilies',
          type: 'Non-Veg',
          spiceLevel: 'High'
        },
        {
          id: 3,
          name: 'Gatte ki Sabzi',
          image: 'https://images.unsplash.com/photo-1563379091339-03246963d96f?w=400',
          description: 'Gram flour dumplings in spicy yogurt-based curry',
          type: 'Vegetarian',
          spiceLevel: 'Medium'
        },
        {
          id: 4,
          name: 'Mohan Thaal',
          image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400',
          description: 'Rich sweet made from gram flour and dry fruits',
          type: 'Dessert',
          spiceLevel: 'None'
        }
      ],

      // Cultural Highlights
      culture: {
        festivals: ['Pushkar Fair', 'Desert Festival', 'Gangaur', 'Teej'],
        arts: ['Miniature Painting', 'Kathputli Puppetry', 'Ghoomar Dance', 'Block Printing'],
        crafts: ['Blue Pottery', 'Leather Work', 'Kundan Jewelry', 'Textiles'],
        languages: ['Hindi', 'Rajasthani', 'Marwari']
      },

      // Travel Tips
      travelTips: [
        'Carry light cotton clothes in summer and woolens in winter',
        'Hire a local guide for better cultural insights',
        'Try camel safari in Jaisalmer desert',
        'Book heritage hotels in advance during peak season',
        'Respect local customs and dress modestly'
      ],

      // Statistics
      stats: {
        area: '342,239 sq km',
        population: '68 million',
        capital: 'Jaipur',
        language: 'Hindi, Rajasthani',
        bestSeason: 'Winter (Oct-Mar)',
        famousFor: 'Forts, Desert, Culture'
      }
    },
    'kerala': {
      id: 2,
      name: 'Kerala',
      region: 'South',
      description: 'God\'s Own Country - serene backwaters, lush greenery, and Ayurvedic traditions in tropical paradise.',
      longDescription: 'Kerala, nestled between the Western Ghats and the Arabian Sea, is a tropical paradise known for its serene backwaters, lush hill stations, and pristine beaches. The state offers a perfect blend of natural beauty and cultural richness, with traditional Ayurvedic treatments, vibrant festivals, and delicious cuisine that will rejuvenate your mind, body, and soul.',
      images: [
        'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800',
        'https://images.unsplash.com/photo-1508197149814-0cc02e5d0c8e?w=800',
        'https://images.unsplash.com/photo-1559666126-84d0e0a5ebf6?w=800',
        'https://images.unsplash.com/photo-1578645510447-e4b5c5c0b1c1?w=800'
      ],
      rating: 4.9,
      reviews: 1893,
      bestTime: 'September to March',
      duration: '6-8 days',
      priceRange: 'Medium',
      culturalScore: 92,
      
      famousPlaces: [
        {
          id: 1,
          name: 'Alleppey Backwaters',
          city: 'Alleppey',
          image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400',
          description: 'Network of tranquil backwaters and houseboat stays',
          type: 'Nature',
          rating: 4.8,
          bestTime: 'Year-round'
        },
        {
          id: 2,
          name: 'Munnar Hills',
          city: 'Munnar',
          image: 'https://images.unsplash.com/photo-1508197149814-0cc02e5d0c8e?w=400',
          description: 'Rolling tea plantations and misty mountains',
          type: 'Hill Station',
          rating: 4.7,
          bestTime: 'Sep-May'
        }
      ],
      famousFoods: [
        {
          id: 1,
          name: 'Sadya',
          image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
          description: 'Traditional vegetarian feast served on banana leaf',
          type: 'Main Course',
          spiceLevel: 'Medium'
        }
      ],
      // ... similar structure for other states
    }
    // Add more states as needed
  };

  const state = stateData[stateName?.toLowerCase()];

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--text-color)] mb-4">State Not Found</h1>
          <button 
            onClick={() => navigate('/user/explore')}
            className="px-6 py-2 bg-[var(--accent-color)] text-white rounded-xl hover:bg-[var(--accent-dark)] transition-colors"
          >
            Back to Explore
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-color)]">
      {/* Back Button */}
      <div className="sticky top-16 z-10 bg-[var(--bg-color)] py-4 border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/user/explore')}
            className="flex items-center space-x-2 text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Explore</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={state.images[0]}
          alt={state.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{state.name}</h1>
            <p className="text-xl text-white/80 max-w-2xl">{state.description}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 sticky top-32">
              {/* Quick Stats */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[var(--muted-color)]">Rating</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{state.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--muted-color)]">Reviews</span>
                  <span className="font-semibold">{state.reviews}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--muted-color)]">Best Time</span>
                  <span className="font-semibold">{state.bestTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--muted-color)]">Duration</span>
                  <span className="font-semibold">{state.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--muted-color)]">Cultural Score</span>
                  <span className="font-semibold text-[var(--accent-color)]">{state.culturalScore}%</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button className="w-full bg-[var(--accent-color)] text-white py-3 rounded-xl font-semibold hover:bg-[var(--accent-dark)] transition-colors flex items-center justify-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Plan My Trip</span>
                </button>
                <button className="w-full border border-[var(--border-color)] text-[var(--text-color)] py-3 rounded-xl font-semibold hover:bg-[var(--accent-fade)] transition-colors flex items-center justify-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <span>Add to Wishlist</span>
                </button>
                <button className="w-full border border-[var(--border-color)] text-[var(--text-color)] py-3 rounded-xl font-semibold hover:bg-[var(--accent-fade)] transition-colors flex items-center justify-center space-x-2">
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 mb-8">
              <div className="flex space-x-8 border-b border-[var(--border-color)]">
                {['overview', 'places', 'food', 'culture'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 px-2 font-medium capitalize transition-colors ${
                      activeTab === tab
                        ? 'text-[var(--accent-color)] border-b-2 border-[var(--accent-color)]'
                        : 'text-[var(--muted-color)] hover:text-[var(--text-color)]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="pt-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <p className="text-lg text-[var(--text-color)] leading-relaxed">
                      {state.longDescription}
                    </p>
                    
                    {/* Image Gallery */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {state.images.slice(1).map((image, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="relative h-32 rounded-xl overflow-hidden cursor-pointer"
                        >
                          <img
                            src={image}
                            alt={`${state.name} ${index + 2}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Statistics */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                      {Object.entries(state.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-[var(--accent-fade)] rounded-xl">
                          <div className="text-sm text-[var(--muted-color)] capitalize mb-1">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </div>
                          <div className="font-semibold text-[var(--text-color)]">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'places' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[var(--text-color)] mb-6">
                      Famous Places in {state.name}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {state.famousPlaces.map((place) => (
                        <motion.div
                          key={place.id}
                          whileHover={{ y: -5 }}
                          className="bg-[var(--bg-color)] border border-[var(--border-color)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                          <div className="relative h-48">
                            <img
                              src={place.image}
                              alt={place.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-semibold">{place.rating}</span>
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="text-xl font-bold text-[var(--text-color)]">{place.name}</h4>
                              <span className="text-xs text-[var(--muted-color)] bg-[var(--accent-fade)] px-2 py-1 rounded-full">
                                {place.type}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-[var(--muted-color)] mb-3">
                              <MapPin className="h-4 w-4" />
                              <span>{place.city}</span>
                            </div>
                            <p className="text-[var(--text-color)] mb-4">{place.description}</p>
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center space-x-1 text-[var(--muted-color)]">
                                <Clock className="h-4 w-4" />
                                <span>Best: {place.bestTime}</span>
                              </div>
                              <button className="text-[var(--accent-color)] hover:text-[var(--accent-dark)] font-semibold">
                                Explore →
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'food' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[var(--text-color)] mb-6">
                      Famous Foods of {state.name}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {state.famousFoods.map((food) => (
                        <motion.div
                          key={food.id}
                          whileHover={{ y: -5 }}
                          className="bg-[var(--bg-color)] border border-[var(--border-color)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                          <div className="relative h-48">
                            <img
                              src={food.image}
                              alt={food.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-4 left-4 bg-[var(--accent-color)] text-white rounded-full px-3 py-1 text-sm font-medium">
                              {food.type}
                            </div>
                          </div>
                          <div className="p-6">
                            <h4 className="text-xl font-bold text-[var(--text-color)] mb-2">{food.name}</h4>
                            <p className="text-[var(--text-color)] mb-4">{food.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Utensils className="h-4 w-4 text-[var(--muted-color)]" />
                                <span className="text-sm text-[var(--muted-color)]">
                                  Spice Level: {food.spiceLevel}
                                </span>
                              </div>
                              <button className="text-[var(--accent-color)] hover:text-[var(--accent-dark)] font-semibold">
                                Find Restaurants →
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'culture' && (
                  <div className="space-y-8">
                    {/* Festivals */}
                    <div>
                      <h4 className="text-xl font-bold text-[var(--text-color)] mb-4">Major Festivals</h4>
                      <div className="flex flex-wrap gap-2">
                        {state.culture.festivals.map((festival, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-[var(--accent-fade)] text-[var(--accent-color)] rounded-full text-sm font-medium"
                          >
                            {festival}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arts */}
                    <div>
                      <h4 className="text-xl font-bold text-[var(--text-color)] mb-4">Traditional Arts</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {state.culture.arts.map((art, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-[var(--bg-color)] rounded-xl">
                            <Palette className="h-5 w-5 text-[var(--accent-color)]" />
                            <span className="text-[var(--text-color)]">{art}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Travel Tips */}
                    <div>
                      <h4 className="text-xl font-bold text-[var(--text-color)] mb-4">Travel Tips</h4>
                      <div className="space-y-3">
                        {state.travelTips.map((tip, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-[var(--text-color)]">{tip}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination_User;