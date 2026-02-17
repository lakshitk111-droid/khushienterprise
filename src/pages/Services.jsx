import { motion } from 'framer-motion';
import { Wrench, Battery, Monitor, Cpu, HardDrive, Wifi } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionWrapper, { FadeIn } from '../components/Animations';

const services = [
  {
    icon: Monitor,
    title: "Screen Replacement",
    description: "Original quality displays for all major brands. Restores touch sensitivity and brightness.",
    price: "From $99"
  },
  {
    icon: Battery,
    title: "Battery Replacement",
    description: "Get back to all-day battery life with our certified battery replacement service.",
    price: "From $49"
  },
  {
    icon: Cpu,
    title: "Motherboard Repair",
    description: "Chip-level repairs for water damage, power issues, and logic board failures.",
    price: "Custom Quote"
  },
  {
    icon: HardDrive,
    title: "Data Recovery",
    description: "Advanced recovery for crashed hard drives, SSDs, and accidental deletions.",
    price: "From $149"
  },
  {
    icon: Wrench,
    title: "Keyboard Repair",
    description: "Fix sticky keys or replace entire keyboard modules for a smooth typing experience.",
    price: "From $39"
  },
  {
    icon: Wifi,
    title: "Software & Network",
    description: "OS installation, virus removal, and driver optimization for peak performance.",
    price: "From $29"
  }
];

const Services = () => {
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
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Comprehensive repair solutions tailored to your needs.
          </motion.p>
        </div>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full flex flex-col">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon size={32} className="text-secondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-gray-500 mb-6 flex-grow leading-relaxed">{service.description}</p>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-primary font-bold text-lg">{service.price}</span>
                  <button className="px-4 py-2 rounded-full bg-gray-100 text-secondary text-sm font-medium group-hover:bg-primary group-hover:text-white transition-colors">
                    Book Now
                  </button>
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

export default Services;
