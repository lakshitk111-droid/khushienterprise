import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Button from './ui/Button';
import Image from './ui/Image';
import logobox from '../assets/logobox.jpg';
import logotext from '../assets/logotext.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Spare Parts', path: '/spare-parts' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'bg-slate-900/80 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent shadow-none py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Boxed Logo Image Only */}
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
              <Image 
                src={logobox} 
                alt="Khushi Enterprises Logo" 
                className="w-full h-full object-contain p-1"
              />
            </div>
            
            {/* Brand Text Image Outside Box */}
            <Image 
              src={logotext} 
              alt="Khushi Enterprises" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary relative group py-2 ${
                  location.pathname === link.path 
                    ? 'text-primary' 
                    : scrolled 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-white hover:text-primary'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              href="/book-repair" 
              variant="outlineWhite" 
              size="sm"
              className={`whitespace-nowrap ${scrolled ? 'border-gray-400 text-gray-200 hover:bg-white hover:text-primary hover:border-white' : 'border-white/50 text-white hover:bg-white hover:text-primary'}`}
            >
              Book Repair
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                scrolled ? 'text-gray-300 hover:text-white' : 'text-white hover:text-primary'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-lg border-t border-gray-700 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-medium border-b border-gray-700 hover:bg-gray-800 rounded-lg transition-colors ${
                  location.pathname === link.path ? 'text-primary bg-primary/10' : 'text-gray-300 hover:text-white'
                }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button
                  href="/book-repair"
                  onClick={() => setIsOpen(false)}
                  variant="outlineWhite"
                  className="w-full border-gray-600 text-gray-300 hover:border-white hover:text-white hover:bg-white/5"
                  size="lg"
                >
                  Book Repair
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
