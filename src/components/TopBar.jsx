import { Mail, Phone, Facebook, Instagram } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#000080] text-white py-2 text-xs md:text-sm hidden sm:block border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
            <Phone size={14} className="text-primary" />
            <div className="flex flex-col sm:flex-row sm:space-x-2">
              <a href="tel:+919868022297" className="font-medium tracking-wide">+91 98680 22297</a>
              <span className="hidden sm:inline">|</span>
              <a href="tel:+919810776852" className="font-medium tracking-wide">+91 98107 76852</a>
            </div>
          </div>
          <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer hidden md:flex">
            <Mail size={14} className="text-primary" />
            <a href="mailto:Khushienterprises241@gmail.com" className="font-medium tracking-wide">Khushienterprises241@gmail.com</a>
          </div>
        </div>
        <div className="flex space-x-4">
           <a href="https://www.facebook.com/share/1HmMTu5oiQ/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Facebook size={16} />
          </a>
          <a href="https://www.instagram.com/khushienterprises241?igsh=a28wNXF5Y3VxYml4" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Instagram size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
