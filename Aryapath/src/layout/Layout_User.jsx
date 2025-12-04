// /src/layout/Layout_User.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  MapPin,
  Compass,
  Heart,
  User,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
  Settings,
  Bookmark,
  Calendar,
  MessageCircle,
  Shield,
  Sun,
  Moon,
  Users
} from 'lucide-react';
import resources from '../resource';

const UserLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  const navigation = [
    { name: 'Dashboard', href: '/user/dashboard', icon: Home },
    { name: 'Explore', href: '/user/explore', icon: Compass },
    { name: 'Guides', href: '/user/guides', icon: Users },
    { name: 'My Bookings', href: '/user/bookings', icon: Calendar },
    { name: 'Wishlist', href: '/user/wishlist', icon: Heart },
    { name: 'Messages', href: '/user/messages', icon: MessageCircle },
    { name: 'Bookmarks', href: '/user/bookmarks', icon: Bookmark },
  ];

  const userNavigation = [
    { name: 'Profile', href: '/user/profile', icon: User },
    { name: 'Settings', href: '/user/settings', icon: Settings },
    { name: 'Security', href: '/user/security', icon: Shield },
    { name: 'Logout', href: '/logout', icon: LogOut },
  ];

  const isActiveRoute = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div className="min-h-screen bg-[var(--bg-color)]">
      {/* Mobile sidebar backdrop */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Fixed Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[var(--card-bg)] border-r border-[var(--border-color)] 
        transform transition-transform duration-300 ease-in-out backdrop-blur-sm
        flex flex-col
        lg:translate-x-0 lg:z-30
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center justify-between h-16 px-4 border-b border-[var(--border-color)]">
          <Link to="/user/dashboard" className="flex items-center space-x-2">
            {/* Replace with your logo image URL */}
            <img 
              src={resources.Logo.src} 
              alt={resources.Logo.alt}
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="text-xl font-bold text-[var(--text-color)]">AryaPath</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 rounded-lg hover:bg-[var(--accent-fade)] transition-colors"
          >
            <X className="h-5 w-5 text-[var(--text-color)]" />
          </button>
        </div>

        {/* Navigation - Scrollable area */}
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActiveRoute(item.href);
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                  active
                    ? 'bg-[var(--accent-fade)] text-[var(--accent-color)] border border-[var(--accent-color)]/20'
                    : 'text-[var(--text-color)] hover:bg-[var(--accent-fade)] hover:text-[var(--accent-color)]'
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon className={`h-5 w-5 mr-3 ${active ? 'text-[var(--accent-color)]' : 'text-[var(--muted-color)] group-hover:text-[var(--accent-color)]'}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section - Fixed at bottom */}
        <div className="flex-shrink-0 border-t border-[var(--border-color)]">
          {/* Theme Toggle */}
          <div className="p-4 border-b border-[var(--border-color)]">
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-between w-full p-3 rounded-xl bg-[var(--accent-fade)] border border-[var(--accent-color)]/20 hover:bg-[var(--accent-color)] hover:text-white transition-all duration-200 group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-white/20">
                  {darkMode ? (
                    <Moon className="h-4 w-4 text-[var(--accent-color)] group-hover:text-white" />
                  ) : (
                    <Sun className="h-4 w-4 text-[var(--accent-color)] group-hover:text-white" />
                  )}
                </div>
                <span className="text-sm font-medium text-[var(--text-color)] group-hover:text-white">
                  {darkMode ? 'Dark Mode' : 'Light Mode'}
                </span>
              </div>
              <div className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${
                darkMode ? 'bg-[var(--accent-dark)] justify-end' : 'bg-gray-300 justify-start'
              }`}>
                <div className="w-4 h-4 bg-white rounded-full shadow-lg"></div>
              </div>
            </button>
          </div>

          {/* User section */}
          <div className="p-4">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-[var(--accent-fade)] border border-[var(--accent-color)]/20">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-dark)] flex items-center justify-center">
                <span className="text-white font-semibold text-sm">U</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[var(--text-color)] truncate">
                  John Doe
                </p>
                <p className="text-xs text-[var(--muted-color)] truncate">
                  Travel Enthusiast
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content area with fixed header */}
      <div className="lg:ml-64 min-h-screen flex flex-col">
        {/* Fixed Header */}
        <header className="sticky top-0 z-40 bg-[var(--card-bg)] border-b border-[var(--border-color)] backdrop-blur-sm">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            {/* Left section */}
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-[var(--accent-fade)] transition-colors mr-4"
              >
                <Menu className="h-5 w-5 text-[var(--text-color)]" />
              </button>
              
              {/* Search bar */}
              <div className="relative max-w-md w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--muted-color)]" />
                <input
                  type="text"
                  placeholder="Search destinations, guides..."
                  className="w-full pl-10 pr-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all text-[var(--text-color)] placeholder-[var(--muted-color)]"
                />
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle Button for Desktop - Always Visible */}
              <button
                onClick={toggleDarkMode}
                className="hidden lg:flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-[var(--accent-fade)] transition-colors group"
                title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? (
                  <>
                    <Sun className="h-5 w-5 text-[var(--text-color)] group-hover:text-[var(--accent-color)]" />
                    <span className="text-sm text-[var(--text-color)] group-hover:text-[var(--accent-color)]">
                      Light
                    </span>
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 text-[var(--text-color)] group-hover:text-[var(--accent-color)]" />
                    <span className="text-sm text-[var(--text-color)] group-hover:text-[var(--accent-color)]">
                      Dark
                    </span>
                  </>
                )}
              </button>

              {/* Mobile theme toggle */}
              <button
                onClick={toggleDarkMode}
                className="lg:hidden p-2 rounded-lg hover:bg-[var(--accent-fade)] transition-colors group"
                title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? (
                  <Sun className="h-5 w-5 text-[var(--text-color)] group-hover:text-[var(--accent-color)]" />
                ) : (
                  <Moon className="h-5 w-5 text-[var(--text-color)] group-hover:text-[var(--accent-color)]" />
                )}
              </button>

              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-[var(--accent-fade)] transition-colors group">
                <Bell className="h-5 w-5 text-[var(--text-color)] group-hover:text-[var(--accent-color)]" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--accent-color)] rounded-full border-2 border-[var(--card-bg)]"></span>
              </button>

              {/* User menu */}
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-3 p-2 rounded-xl hover:bg-[var(--accent-fade)] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-dark)] flex items-center justify-center">
                    <span className="text-white font-semibold text-xs">U</span>
                  </div>
                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-medium text-[var(--text-color)]">John Doe</p>
                    <p className="text-xs text-[var(--muted-color)]">Traveler</p>
                  </div>
                </button>

                {/* User dropdown menu */}
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-48 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl shadow-lg py-1 z-50 backdrop-blur-sm"
                    >
                      {userNavigation.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="flex items-center px-4 py-2 text-sm text-[var(--text-color)] hover:bg-[var(--accent-fade)] hover:text-[var(--accent-color)] transition-colors"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            <Icon className="h-4 w-4 mr-3 text-[var(--muted-color)]" />
                            {item.name}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Close user menu when clicking outside */}
      {userMenuOpen && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setUserMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default UserLayout;