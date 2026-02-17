import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-secondary text-white py-2 text-xs md:text-sm font-medium border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-primary-light" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-2 hidden sm:flex">
            <Mail size={14} className="text-primary-light" />
            <span>support@laptopcare.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Clock size={14} className="text-primary-light" />
            <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
          </div>
          <div className="flex items-center space-x-2 hidden sm:flex">
            <MapPin size={14} className="text-primary-light" />
            <span>Gurugram, Haryana</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
