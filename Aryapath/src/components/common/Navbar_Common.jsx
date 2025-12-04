import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Compass, Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import resources from "../../resource";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 h-16 ${
        isScrolled
          ? "bg-[var(--overlay-bg)] backdrop-blur-lg shadow-lg border-b border-[var(--border-color)]"
          : "bg-[var(--overlay-bg)] backdrop-blur-lg border-b border-[var(--border-color)]"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group flex-shrink-0"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
              <img
                src={resources.Logo.src}
                alt={resources.Logo.alt}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-[var(--text-color)]">
              Arya<span className="font-bolder text-[var(--accent-color)]">Path</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative font-medium transition-colors hover:text-[var(--accent-color)] px-2 py-1 ${
                  location.pathname === link.to
                    ? "text-[var(--accent-color)]"
                    : "text-[var(--text-color)]"
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent-color)] rounded-full" />
                )}
              </Link>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] hover:bg-[var(--accent-fade)] hover:text-[var(--accent-dark)] transition-all duration-300 flex-shrink-0"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button onClick={()=>navigate('/register')} className="px-4 lg:px-6 py-2 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-dark)] text-white rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(228,107,61,0.4)] whitespace-nowrap text-sm lg:text-base">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] hover:bg-[var(--accent-fade)] hover:text-[var(--accent-dark)] transition-all duration-300 flex-shrink-0"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button
              className="p-2 text-[var(--text-color)] hover:bg-[var(--card-bg)] rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[var(--overlay-bg)] backdrop-blur-lg border-b border-[var(--border-color)] shadow-xl animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`font-medium transition-all duration-200 py-3 px-4 rounded-lg hover:bg-[var(--accent-fade)] hover:text-[var(--accent-color)] ${
                      location.pathname === link.to
                        ? "text-[var(--accent-color)] bg-[var(--accent-fade)] border-l-4 border-[var(--accent-color)]"
                        : "text-[var(--text-color)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button onClick={()=>navigate('/register')} className="w-full px-6 py-3 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-dark)] text-white rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(228,107,61,0.4)] mt-2">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;