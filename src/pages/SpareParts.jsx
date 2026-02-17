import { motion } from 'framer-motion';
import { Search, ShoppingCart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionWrapper, { FadeIn } from '../components/Animations';

const parts = [
  {
    id: 1,
    name: "MacBook Pro Retina Display Assembly",
    category: "Screen",
    price: "$399.00",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Dell XPS 15 Battery (97Wh)",
    category: "Battery",
    price: "$129.00",
    image: "https://images.unsplash.com/photo-1619551734325-81aaf323686c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Samsung 1TB NVMe M.2 SSD",
    category: "Storage",
    price: "$149.00",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "ThinkPad X1 Carbon Keyboard",
    category: "Keyboard",
    price: "$89.00",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b91add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    name: "DDR4 32GB RAM Kit (2x16GB)",
    category: "Memory",
    price: "$119.00",
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    name: "Asus ROG Cooling Fan",
    category: "Cooling",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

const SpareParts = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-secondary">
      <Navbar />
      
      <div className="pt-32 pb-16 bg-secondary text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Spare Parts
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Authentic components for every major laptop brand.
          </motion.p>
        </div>
      </div>

      <SectionWrapper>
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Search parts..." 
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-3 rounded-full border border-gray-200 bg-white text-gray-600 focus:outline-none cursor-pointer">
              <option>All Categories</option>
              <option>Screens</option>
              <option>Batteries</option>
              <option>Storage</option>
            </select>
            <select className="px-4 py-3 rounded-full border border-gray-200 bg-white text-gray-600 focus:outline-none cursor-pointer">
              <option>All Brands</option>
              <option>Apple</option>
              <option>Dell</option>
              <option>HP</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {parts.map((part, index) => (
            <FadeIn key={part.id} delay={index * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={part.image} 
                    alt={part.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-3 bg-white text-secondary font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{part.category}</div>
                  <h3 className="text-lg font-bold text-secondary mb-2 line-clamp-2 min-h-[3.5rem]">{part.name}</h3>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-gray-900">{part.price}</span>
                    <button className="p-3 bg-gray-50 rounded-full text-secondary hover:bg-primary hover:text-white transition-colors">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default SpareParts;
