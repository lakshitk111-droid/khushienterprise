import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const number1 = "919868022297";
  const number2 = "919810776852";
  const message = encodeURIComponent("Hi, I’m contacting Khushi Enterprises from your website regarding a query.");
  
  const getUrl = (num) => `https://wa.me/${num}?text=${message}`;

  return (
    <div className="fixed bottom-8 right-4 md:right-8 z-[100] flex flex-col items-end space-y-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 mb-2 flex flex-col space-y-3 min-w-[200px]"
          >
             <p className="text-sm font-semibold text-gray-700 mb-1">Contact Us via WhatsApp:</p>
             <a 
               href={getUrl(number1)} 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center space-x-3 p-2 hover:bg-green-50 rounded-lg transition-colors group"
             >
                <div className="w-8 h-8 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                  <span className="text-[#25D366] font-bold text-xs">1</span>
                </div>
                <span className="text-gray-600 font-medium group-hover:text-[#25D366]">+91 98680 22297</span>
             </a>
             <a 
               href={getUrl(number2)} 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center space-x-3 p-2 hover:bg-green-50 rounded-lg transition-colors group"
             >
                <div className="w-8 h-8 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                  <span className="text-[#25D366] font-bold text-xs">2</span>
                </div>
                <span className="text-gray-600 font-medium group-hover:text-[#25D366]">+91 98107 76852</span>
             </a>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300 focus:outline-none"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat with us on WhatsApp"
      >
        {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
            <svg 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.536 0 1.52 1.115 2.988 1.264 3.186.149.198 2.19 3.349 5.306 4.695.742.321 1.32.513 1.77.657.75.238 1.433.204 1.969.123.596-.09 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
        )}
      </motion.button>
    </div>
  );
};

export default FloatingWhatsApp;
