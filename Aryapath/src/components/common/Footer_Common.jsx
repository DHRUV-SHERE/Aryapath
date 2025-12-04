import { Link } from 'react-router-dom';
import { Compass, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--bg-color)] text-[var(--text-color)] py-12 mt-20 border-t border-[var(--border-color)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Compass className="h-6 w-6 text-[var(--accent-color)]" />
              <span className="text-xl font-bold text-[var(--text-color)]">AryaPath</span>
            </div>
            <p className="text-sm text-[var(--text-color)]/80">
              The Noble Path of Discovery. Explore India's heritage, culture, and destinations with expert guides.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-[var(--text-color)]/70 hover:text-[var(--accent-color)] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[var(--text-color)]/70 hover:text-[var(--accent-color)] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[var(--text-color)]/70 hover:text-[var(--accent-color)] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[var(--text-color)]/70 hover:text-[var(--accent-color)] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-[var(--text-color)]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-[var(--text-color)]/80 hover:text-[var(--accent-color)] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-[var(--text-color)]/80 hover:text-[var(--accent-color)] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/explore" className="text-[var(--text-color)]/80 hover:text-[var(--accent-color)] transition-colors">Explore India</Link>
              </li>
              <li>
                <Link to="/contact" className="text-[var(--text-color)]/80 hover:text-[var(--accent-color)] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold mb-4 text-[var(--text-color)]">Popular Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/state/rajasthan" className="text-[var(--text-color)]/80 hover:text-[var(--accent-color)] transition-colors">Rajasthan</Link>
              </li>
              <li>
                <Link to="/state/kerala" className="text-[var(--text-color)]/80 hover:text-[var(--accent-color)] transition-colors">Kerala</Link>
              </li>
              <li>
                <Link to="/state/goa" className="text-[var(--text-color)]/80 hover:text-[var(--accent-color)] transition-colors">Goa</Link>
              </li>
              <li>
                <Link to="/state/uttarakhand" className="text-[var(--text-color)]/80 hover:text-[var(--accent-color)] transition-colors">Uttarakhand</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-[var(--text-color)]">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-[var(--text-color)]/80">
                <MapPin size={16} className="mt-1 text-[var(--accent-color)] flex-shrink-0" />
                <span>New Delhi, India</span>
              </li>
              <li className="flex items-center gap-2 text-[var(--text-color)]/80">
                <Phone size={16} className="text-[var(--accent-color)] flex-shrink-0" />
                <span>+91 1234 567 890</span>
              </li>
              <li className="flex items-center gap-2 text-[var(--text-color)]/80">
                <Mail size={16} className="text-[var(--accent-color)] flex-shrink-0" />
                <span>info@aryapath.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--border-color)] pt-6 text-center text-sm text-[var(--text-color)]/70">
          <p>&copy; 2025 AryaPath. All rights reserved. Made with ❤️ for India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;