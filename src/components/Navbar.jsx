import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Laptop } from 'lucide-react';
import { useState, useEffect } from 'react';
import Button from './ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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
          ? 'bg-white/10 backdrop-blur-md shadow-md py-2' 
          : 'bg-white shadow-none py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-primary text-white group-hover:bg-primary-dark transition-colors">
               <Laptop size={24} />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-secondary' : 'text-secondary'}`}>
              Khushi Enterprises
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                  location.pathname === link.path ? 'text-primary' : 'text-secondary'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              href="/book-repair" 
              variant="primary" 
              size="sm"
            >
              Book Repair
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-secondary hover:text-primary transition-colors"
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
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-medium border-b border-gray-50 hover:bg-gray-50 rounded-lg ${
                    location.pathname === link.path ? 'text-primary bg-primary/5' : 'text-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                href="/book-repair"
                onClick={() => setIsOpen(false)}
                variant="primary"
                className="w-full mt-4"
                size="lg"
              >
                Book Repair
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
