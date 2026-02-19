import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, ShoppingCart, Monitor, Battery, Keyboard, HardDrive, Cpu, Fan, 
  ShieldCheck, Package, CheckCircle, X, ChevronDown, Info
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
    <div className="bg-gray-50 min-h-screen font-sans text-secondary selection:bg-primary/10 selection:text-primary">
      <Navbar />
      
      <PageHero 
        title="Spare Parts"
        subtitle="Authentic components for every major laptop brand. From screens to batteries, we have it all."
        backgroundImage="https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-12">
        
        {/* 1. Search & Filter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-md border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 md:p-8 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-5 items-center">
            {/* Search Input */}
            <div className="relative w-full lg:flex-1 group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="text-gray-400 group-focus-within:text-primary transition-colors duration-300" size={22} />
              </div>
              <input 
                type="text" 
                placeholder="Search for parts (e.g. 'Screen', 'Battery', 'SSD')..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-4 py-4 bg-gray-50/50 border-2 border-transparent rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all duration-300 shadow-inner"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative group min-w-[200px]">
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full appearance-none px-6 py-4 bg-gray-50/50 border-2 border-transparent rounded-xl text-gray-700 focus:outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all duration-300 cursor-pointer font-medium shadow-sm hover:bg-gray-50"
                >
                  <option>All Categories</option>
                  <option>Screens</option>
                  <option>Batteries</option>
                  <option>Storage</option>
                  <option>Keyboards</option>
                  <option>Memory</option>
                  <option>Cooling</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-primary transition-colors duration-300" size={18} />
              </div>
              
              <div className="relative group min-w-[200px]">
                <select 
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full appearance-none px-6 py-4 bg-gray-50/50 border-2 border-transparent rounded-xl text-gray-700 focus:outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all duration-300 cursor-pointer font-medium shadow-sm hover:bg-gray-50"
                >
                  <option>All Brands</option>
                  <option>Apple</option>
                  <option>Dell</option>
                  <option>HP</option>
                  <option>Samsung</option>
                  <option>Lenovo</option>
                  <option>Asus</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-primary transition-colors duration-300" size={18} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Spare Parts Product Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredParts.length > 0 ? (
              filteredParts.map((part, index) => (
                <motion.div 
                  key={part.id}
                  layoutId={`card-${part.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 group h-full flex flex-col cursor-pointer border border-gray-100/50 hover:border-primary/10"
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedPart(part)}
                >
                  <div className="relative aspect-[1.1] overflow-hidden bg-gray-50">
                    <motion.img 
                      layoutId={`image-${part.id}`}
                      src={part.image} 
                      alt={part.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* View Details Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <span className="px-5 py-2.5 bg-white/95 backdrop-blur-md text-primary font-bold text-xs uppercase tracking-wider rounded-full shadow-lg border border-white/20 hover:bg-primary hover:text-white transition-colors">
                        View Details
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5 flex flex-col flex-grow relative">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-bold text-primary bg-primary/5 px-2.5 py-1 rounded-md uppercase tracking-wider border border-primary/10">
                        {part.category}
                      </span>
                    </div>
                    
                    <motion.h3 
                      layoutId={`title-${part.id}`} 
                      className="text-base font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-snug min-h-[2.5rem]"
                    >
                      {part.name}
                    </motion.h3>
                    
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
                      <motion.span layoutId={`price-${part.id}`} className="text-lg font-bold text-gray-900">
                        {part.price}
                      </motion.span>
                      <button className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                        <ShoppingCart size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-24 bg-white rounded-3xl border border-dashed border-gray-200">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 text-gray-300 mb-6">
                  <Search size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No parts found</h3>
                <p className="text-gray-500 max-w-md mx-auto">We couldn't find any parts matching your search. Try adjusting your filters or search term.</p>
                <button 
                  onClick={() => {setSearchTerm(''); setSelectedCategory('All Categories'); setSelectedBrand('All Brands');}}
                  className="mt-6 px-6 py-2 bg-primary/10 text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

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
                className="absolute top-4 right-4 z-20 p-2 bg-white/50 hover:bg-white rounded-full transition-colors text-gray-600 hover:text-red-500"
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
                  <motion.h3 layoutId={`title-${selectedPart.id}`} className="text-3xl font-bold text-secondary mb-4 leading-tight">{selectedPart.name}</motion.h3>
                  <motion.span layoutId={`price-${selectedPart.id}`} className="text-2xl font-bold text-gray-900 block mb-6">{selectedPart.price}</motion.span>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    High-quality replacement component compatible with select models. Rigorously tested for performance and durability. 
                    Includes standard warranty and installation support.
                  </p>
                </div>

                <div className="mt-auto space-y-4">
                  <Link 
                    to="/contact" 
                    className="block w-full py-4 bg-primary text-white text-center font-bold rounded-xl hover:bg-primary-light transition-colors shadow-lg shadow-primary/20"
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

      {/* 3. Browse by Category Section */}
      <section className="py-12 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
           <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
           <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-3xl" />
        </div>
        
        <SectionWrapper className="relative z-10">
          <div className="text-center mb-10">
            <FadeIn>
              <SectionHeading 
                title="Browse by Category" 
                subtitle="Explore Our Range"
                alignment="center"
                variant="creative"
              />
              <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-base leading-relaxed">
                Find exactly what you need from our comprehensive selection of high-quality laptop components.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {categories.map((category, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div 
                  className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -6, scale: 1.02 }}
                  onClick={() => {
                    setSelectedCategory(category.name);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-10"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-20" />
                  
                  <div className="absolute inset-0 z-30 flex flex-col items-center justify-end p-4 pb-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-lg">
                      <category.icon className="text-white" size={22} />
                    </div>
                    <h3 className="text-white font-bold text-sm tracking-wide group-hover:text-primary-light transition-colors duration-300">{category.name}</h3>
                    <div className="w-6 h-1 bg-primary group-hover:w-12 mt-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0" />
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* 4. Why Buy From Us Section */}
      <section className="py-12 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
        <PatternBackground variant="dots" className="opacity-20 text-gray-300" />
        
        <SectionWrapper className="relative z-10">
          <div className="text-center mb-10">
            <FadeIn>
              <SectionHeading 
                title="Why Buy From Us" 
                subtitle="The Khushi Guarantee"
                alignment="center"
                variant="default"
              />
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div 
                  className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 h-full group hover:-translate-y-2 relative overflow-hidden"
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gray-50 to-transparent opacity-50 group-hover:scale-150 transition-transform duration-500 rounded-bl-full -mr-8 -mt-8" />
                  
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="w-16 h-16 bg-red-50/50 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:rotate-3">
                      <feature.icon size={28} className="transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-3">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
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
