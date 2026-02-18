import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import footerBg from '../assets/footer.jpg';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
    } else {
      alert('Please enter your email address.');
    }
  };

  const getLinkPath = (item) => {
    if (item === 'Home') return '/';
    if (item === 'About Us') return '/about';
    return `/${item.toLowerCase().replace(' ', '-')}`;
  };

  return (
    <footer className="relative overflow-hidden bg-[#1a1a1a] text-gray-300 pt-20 pb-10 border-t-4 border-primary">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${footerBg})` }}
      />
      
      {/* Overlay Layer */}
      <div className="absolute inset-0 z-10 bg-black/80"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">Khushi Enterprises</h3>
            <p className="text-gray-400 text-sm leading-loose font-light max-w-xs">
              Premium laptop repair services and authentic spare parts. 
              Restoring your digital companions with precision and care.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors transform hover:-translate-y-1 duration-300"><Facebook size={18} /></a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors transform hover:-translate-y-1 duration-300"><Twitter size={18} /></a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors transform hover:-translate-y-1 duration-300"><Instagram size={18} /></a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors transform hover:-translate-y-1 duration-300"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:pl-8">
            <h4 className="text-white font-semibold mb-8 tracking-wide text-sm uppercase">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Spare Parts', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={getLinkPath(item)} 
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group w-fit"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-8 tracking-wide text-sm uppercase">Our Expertise</h4>
            <ul className="space-y-4">
              {['Screen Replacement', 'Battery Replacement', 'Motherboard Repair', 'Data Recovery', 'Software Support'].map((item) => (
                <li key={item} className="text-gray-400 text-sm hover:text-white transition-colors cursor-default w-fit">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter Column */}
          <div>
            <h4 className="text-white font-semibold mb-8 tracking-wide text-sm uppercase">Get in Touch</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start space-x-3 text-gray-400 text-sm font-light">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-primary" />
                <span>123 Tech Park, Cyber City, Gurugram</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm font-light">
                <Phone size={16} className="flex-shrink-0 text-primary" />
                <span>+91 98680 22297</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm font-light">
                <Mail size={16} className="flex-shrink-0 text-primary" />
                <span>contact@khushienterprises.com</span>
              </li>
            </ul>

            <h5 className="text-white font-semibold mb-4 tracking-wide text-xs uppercase">Newsletter</h5>
            <div className="relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address" 
                className="w-full bg-white/5 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all placeholder:text-gray-600"
              />
              <button 
                onClick={handleSubscribe}
                className="absolute right-2 top-1.5 bg-primary text-white p-1.5 rounded-md hover:bg-primary-light transition-colors shadow-lg"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs font-light tracking-wide">
            © {new Date().getFullYear()} Khushi Enterprises. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors font-light">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors font-light">Terms of Service</a>
            <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors font-light">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
