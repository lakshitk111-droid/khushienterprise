import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const widgetRef = useRef(null);

  // Close widget when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const contacts = [
    {
      name: "Rupesh",
      number: "919992602021",
      role: "Support Team"
    },
    {
      name: "Yogesh",
      number: "918222835004",
      role: "Sales Team"
    }
  ];

  const handleContactClick = (number) => {
    window.open(`https://wa.me/${number}`, '_blank');
  };

  return (
    <div ref={widgetRef} className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-4 w-[350px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#095E54] p-6 text-white relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center space-x-3 mb-1">
                <MessageCircle size={28} className="text-white" />
                <h3 className="font-bold text-lg">WhatsApp Support</h3>
              </div>
              <p className="text-white/80 text-sm pl-10">Typically replies within minutes</p>
            </div>

            {/* Body */}
            <div className="p-6 bg-[#E5DDD5] min-h-[300px] relative">
              {/* Background Pattern Overlay */}
              <div className="absolute inset-0 opacity-5 pointer-events-none" 
                   style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }}>
              </div>

              <div className="relative z-10 space-y-4">
                {/* Welcome Message */}
                <div className="bg-white p-4 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm text-sm text-gray-700 max-w-[90%]">
                  <p className="mb-2">Hi there! 👋<br/>Need help with repair or spare parts? Click below to chat with us.</p>
                  <p className="text-xs text-gray-400 text-right">Available 24/7</p>
                </div>

                {/* Contact List */}
                <div className="space-y-3 pt-2">
                  {contacts.map((contact, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleContactClick(contact.number)}
                      className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 cursor-pointer flex items-center justify-between group hover:shadow-md transition-all"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                          <MessageCircle size={20} className="text-[#25D366]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">{contact.name}</h4>
                          <p className="text-xs text-gray-500">{contact.role}</p>
                        </div>
                      </div>
                      <div className="text-gray-300 group-hover:text-[#25D366] transition-colors">
                        <Send size={18} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center relative group"
      >
        <MessageCircle size={28} className="text-white" />
        
        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute right-16 bg-white text-gray-800 text-sm py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap font-medium"
            >
              Chat with us
              <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white transform -translate-y-1/2 rotate-45"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification Dot */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
        )}
      </motion.button>
    </div>
  );
};

export default FloatingWhatsApp;
