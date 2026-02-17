import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">LaptopCare</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium laptop repair services and authentic spare parts. 
              We bring your devices back to life with professional care and expertise.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link to="/spare-parts" className="text-gray-400 hover:text-white transition-colors text-sm">Spare Parts</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Screen Replacement</li>
              <li className="text-gray-400 text-sm">Battery Replacement</li>
              <li className="text-gray-400 text-sm">Motherboard Repair</li>
              <li className="text-gray-400 text-sm">Keyboard Replacement</li>
              <li className="text-gray-400 text-sm">Data Recovery</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Tech Park, Cyber City,<br />Gurugram, Haryana 122002</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone size={18} className="flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={18} className="flex-shrink-0" />
                <span>support@laptopcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LaptopCare. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
