import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, ShoppingCart, Monitor, Battery, Keyboard, HardDrive, Cpu, Fan, 
  ShieldCheck, Package, CheckCircle, AlertCircle, ArrowRight, X 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionWrapper, { FadeIn } from '../components/Animations';
import SectionHeading from '../components/ui/SectionHeading';
import PatternBackground from '../components/ui/PatternBackground';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';

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

const categories = [
  { name: "Screens", icon: Monitor, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { name: "Batteries", icon: Battery, image: "https://images.unsplash.com/photo-1619551734325-81aaf323686c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { name: "Keyboards", icon: Keyboard, image: "https://images.unsplash.com/photo-1587829741301-dc798b91add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { name: "Storage", icon: HardDrive, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { name: "RAM", icon: Cpu, image: "https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { name: "Cooling", icon: Fan, image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
];

const features = [
  {
    icon: ShieldCheck,
    title: "Original & Tested",
    description: "Every part undergoes rigorous testing to ensure it meets original manufacturer specifications."
  },
  {
    icon: CheckCircle,
    title: "Warranty Available",
    description: "Shop with confidence. All our spare parts come with a standard warranty for peace of mind."
  },
  {
    icon: Monitor,
    title: "Major Brands",
    description: "We stock components for Apple, Dell, HP, Lenovo, Asus, Acer, and other leading manufacturers."
  },
  {
    icon: Package,
    title: "Secure Packaging",
    description: "Parts are carefully packed in anti-static and shock-proof packaging to ensure safe delivery."
  }
];

const SpareParts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [selectedPart, setSelectedPart] = useState(null);

  const filteredParts = parts.filter(part => {
    const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          part.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesCategory = true;
    if (selectedCategory !== 'All Categories') {
      if (selectedCategory === 'Screens') matchesCategory = part.category === 'Screen';
      else if (selectedCategory === 'Batteries') matchesCategory = part.category === 'Battery';
      else if (selectedCategory === 'Storage') matchesCategory = part.category === 'Storage';
      else if (selectedCategory === 'Keyboards') matchesCategory = part.category === 'Keyboard';
      else if (selectedCategory === 'Memory') matchesCategory = part.category === 'Memory';
      else if (selectedCategory === 'Cooling') matchesCategory = part.category === 'Cooling';
      else matchesCategory = part.category === selectedCategory;
    }

    let matchesBrand = true;
    if (selectedBrand !== 'All Brands') {
      if (selectedBrand === 'Apple') matchesBrand = part.name.includes('MacBook');
      else if (selectedBrand === 'Lenovo') matchesBrand = part.name.includes('ThinkPad');
      else matchesBrand = part.name.includes(selectedBrand);
    }

    return matchesSearch && matchesCategory && matchesBrand;
  });

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-secondary">
      <Navbar />
      
      <PageHero 
        title="Spare Parts"
        subtitle="Authentic components for every major laptop brand. From screens to batteries, we have it all."
        backgroundImage="https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <SectionWrapper>
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Search parts..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-full border border-gray-200 bg-white text-gray-600 focus:outline-none cursor-pointer"
            >
              <option>All Categories</option>
              <option>Screens</option>
              <option>Batteries</option>
              <option>Storage</option>
              <option>Keyboards</option>
              <option>Memory</option>
              <option>Cooling</option>
            </select>
            <select 
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-4 py-3 rounded-full border border-gray-200 bg-white text-gray-600 focus:outline-none cursor-pointer"
            >
              <option>All Brands</option>
              <option>Apple</option>
              <option>Dell</option>
              <option>HP</option>
              <option>Samsung</option>
              <option>Lenovo</option>
              <option>Asus</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredParts.length > 0 ? (
            filteredParts.map((part, index) => (
              <FadeIn key={part.id} delay={index * 0.1}>
                <motion.div 
                  layoutId={`card-${part.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col cursor-pointer relative"
                  onClick={() => setSelectedPart(part)}
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <motion.img 
                      layoutId={`image-${part.id}`}
                      src={part.image} 
                      alt={part.name} 
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-6 py-3 bg-white text-secondary font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{part.category}</div>
                    <motion.h3 layoutId={`title-${part.id}`} className="text-lg font-bold text-secondary mb-2 line-clamp-2 min-h-[3.5rem]">{part.name}</motion.h3>
                    <div className="flex justify-between items-center mt-auto pt-4">
                      <motion.span layoutId={`price-${part.id}`} className="text-xl font-bold text-gray-900">{part.price}</motion.span>
                      <button className="p-3 bg-gray-50 rounded-full text-secondary hover:bg-primary hover:text-white transition-colors">
                        <ShoppingCart size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              No parts found matching your criteria.
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* Expanded Card Modal */}
      <AnimatePresence>
        {selectedPart && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ pointerEvents: 'auto' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedPart(null)}
            />
            <motion.div
              layoutId={`card-${selectedPart.id}`}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPart(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white/50 hover:bg-white rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="w-full md:w-1/2 relative bg-gray-100 h-64 md:h-auto">
                <motion.img
                  layoutId={`image-${selectedPart.id}`}
                  src={selectedPart.image}
                  alt={selectedPart.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                <div className="mb-6">
                  <span className="text-sm font-bold text-primary uppercase tracking-wider mb-2 block">{selectedPart.category}</span>
                  <motion.h3 layoutId={`title-${selectedPart.id}`} className="text-3xl font-bold text-secondary mb-4">{selectedPart.name}</motion.h3>
                  <motion.span layoutId={`price-${selectedPart.id}`} className="text-2xl font-bold text-gray-900 block mb-6">{selectedPart.price}</motion.span>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    High-quality replacement component compatible with select models. Rigorously tested for performance and durability. 
                    Includes standard warranty and installation support.
                  </p>
                </div>

                <div className="mt-auto space-y-4">
                  <Link 
                    to="/contact" 
                    className="block w-full py-4 bg-primary text-white text-center font-bold rounded-xl hover:bg-primary-dark transition-colors"
                  >
                    Inquire Now
                  </Link>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                    <ShieldCheck size={16} />
                    <span>Original Quality Guaranteed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Category Highlights */}
      <section className="py-16 bg-white relative">
        <PatternBackground variant="dots" className="opacity-20 text-gray-200" />
        <SectionWrapper className="relative z-10">
          <div className="text-center mb-12">
            <FadeIn>
              <SectionHeading 
                title="Browse by Category" 
                subtitle="Selection"
                alignment="center"
                variant="creative"
              />
              <p className="text-gray-500 max-w-2xl mx-auto mt-4">
                Find exactly what you need from our wide selection of laptop components.
              </p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div 
                  className="group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    setSelectedCategory(category.name);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                    <category.icon className="text-white mb-2 opacity-80 group-hover:opacity-100 transition-opacity" size={24} />
                    <h3 className="text-white font-bold text-sm md:text-base">{category.name}</h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* Why Buy From Us */}
      <section className="py-16 bg-gray-50 relative">
        <PatternBackground variant="grid" className="opacity-10" />
        <SectionWrapper className="relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <SectionHeading 
                title="Why Buy From Us" 
                subtitle="Our Guarantee"
                alignment="center"
                variant="default"
              />
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      <feature.icon size={24} />
                    </div>
                    <h3 className="font-bold text-secondary text-lg">{feature.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* Compatibility Note */}
      <section className="py-12 bg-blue-50 border-y border-blue-100">
        <SectionWrapper>
          <FadeIn>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-blue-100">
              <div className="p-4 bg-blue-100 text-blue-600 rounded-full flex-shrink-0">
                <AlertCircle size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Check Compatibility Before You Buy</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Laptop parts can be very specific. To ensure the part fits your device, please check the exact model number (usually found on the bottom of your laptop) and match the part number if possible.
                </p>
                <div className="text-sm text-blue-600 font-medium flex items-center">
                  Need help identifying your model? <Link to="/contact" className="underline ml-1 hover:text-blue-800">Contact Support</Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </SectionWrapper>
      </section>

      {/* Call to Action Section */}
      <CTASection 
        title="Not Sure Which Part You Need?"
        subtitle="Our experts can help you identify the correct component for your specific laptop model."
        buttonText="Contact Our Experts"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <Footer />
    </div>
  );
};

export default SpareParts;
