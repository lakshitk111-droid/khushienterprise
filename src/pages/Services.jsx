import { motion } from 'framer-motion';
import { 
  Wrench, Battery, Monitor, Cpu, HardDrive, Wifi, Printer, Server,
  Award, ShieldCheck, Clock, DollarSign, ArrowRight, CheckCircle 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionWrapper, { FadeIn } from '../components/Animations';
import SectionHeading from '../components/ui/SectionHeading';
import PatternBackground from '../components/ui/PatternBackground';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import Button from '../components/ui/Button';
import Image from '../components/ui/Image';
import heroImg from '../assets/image.jpg';
import ctaImg from '../assets/image2.jpg';
import bgImg from '../assets/bg1.jpg';

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
  },
  {
    icon: Server,
    title: "Desktop Services",
    description: "Complete desktop assembly, repair, upgrades, and maintenance for home and office PCs.",
    price: "Custom Quote"
  },
  {
    icon: Printer,
    title: "Printer Services",
    description: "Expert repair for laser & inkjet printers, cartridge refilling, and driver installation.",
    price: "From $39"
  }
];

const features = [
  {
    icon: Award,
    title: "Certified Technicians",
    description: "Our team consists of highly skilled and certified professionals with years of experience."
  },
  {
    icon: ShieldCheck,
    title: "Genuine Parts",
    description: "We use only authentic spare parts to ensure the longevity and performance of your device."
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "We understand the importance of your device. Most repairs are completed within 24-48 hours."
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden costs. High-quality service at competitive rates."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Book Repair",
    description: "Schedule a repair online or visit our service center."
  },
  {
    number: "02",
    title: "Free Diagnosis",
    description: "Our experts inspect your device and provide a free quote."
  },
  {
    number: "03",
    title: "Repair & Testing",
    description: "We fix your device and perform rigorous quality checks."
  },
  {
    number: "04",
    title: "Delivery / Pickup",
    description: "Collect your fully functional device or get it delivered."
  }
];

const brands = [
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" },
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
  { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" },
  { name: "Asus", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg" },
  { name: "Acer", logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/Acer_2011.svg" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-secondary">
      <Navbar />
      
      <PageHero 
        title="Our Services"
        subtitle="Comprehensive repair solutions tailored to your needs. From screen replacements to complex motherboard repairs."
        backgroundImage={heroImg}
      />

      <SectionWrapper className="relative">
        <PatternBackground variant="dots" className="opacity-40 text-gray-200" />
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col h-full group card-transition card-hover glow-border"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:border-primary/20 transition-colors duration-300 icon-hover">
                <service.icon size={32} className="text-gray-400 group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-500 mb-8 leading-relaxed flex-grow">{service.description}</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                <span className="text-lg font-semibold text-gray-900">{service.price}</span>
                <Button href="/book-repair" variant="outline" size="sm" className="rounded-full px-6 border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 btn-premium">
                  Book Now
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden">
        <SectionWrapper className="relative z-10">
          <div className="text-left md:text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading 
                title="Why Choose Us" 
                subtitle="Our Commitment"
                alignment="center"
                variant="creative"
              />
              <p className="text-gray-500 max-w-2xl mr-auto md:mx-auto mt-4 text-sm leading-relaxed">
                We pride ourselves on delivering top-notch repair services with a focus on quality, speed, and customer satisfaction.
              </p>
            </motion.div>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 h-full text-left md:text-center group card-transition card-hover glow-border"
              >
                <div className="w-16 h-16 mr-auto md:mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-50 to-white flex items-center justify-center transition-transform duration-300 shadow-sm border border-primary/10 icon-hover">
                  <feature.icon size={24} className="text-primary/80 group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>
      </section>

      {/* Service Process Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.75))'
          }}
        ></div>
        <SectionWrapper>
          <div className="text-left md:text-center mb-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading 
                title="How It Works" 
                subtitle="Simple Process"
                alignment="center"
                variant="default"
              />
              <p className="text-gray-500 max-w-2xl md:mx-auto mt-4 text-sm leading-relaxed">
                Our streamlined process ensures your device is back in your hands as quickly as possible.
              </p>
            </motion.div>
          </div>
          
          <div className="relative max-w-6xl mx-auto px-4">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="relative bg-white p-8 rounded-[2rem] shadow-sm border border-white/50 backdrop-blur-sm flex flex-col items-start md:items-center text-left md:text-center group cursor-default transition-all duration-300 card-transition card-hover glow-border"
                >
                  {/* Subtle Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Step Number Badge */}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10 bg-white shadow-sm border border-gray-100 group-hover:border-primary/20 transition-all duration-300 overflow-hidden icon-hover">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-xl font-bold text-primary group-hover:text-white relative z-10 transition-colors duration-300 font-serif">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed relative z-10 group-hover:text-gray-600 transition-colors duration-300">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </SectionWrapper>
      </section>

      {/* Brands We Support */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <PatternBackground variant="dots" className="opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-gray-50/50"></div>
        <SectionWrapper className="relative z-10">
          <div className="text-left md:text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <SectionHeading 
                title="Brands We Support" 
                subtitle="Compatibility"
                alignment="center"
                variant="default"
              />
              <p className="text-gray-400 mt-4 text-left md:text-center">We specialize in repairing all major laptop brands.</p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {brands.map((brand, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-24 h-12 md:w-32 md:h-16 flex items-center justify-center p-2 group relative"
                >
                  <div className="absolute inset-0 bg-white rounded-lg opacity-0 group-hover:opacity-100 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105"></div>
                  <Image 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="max-w-full max-h-full object-contain transition-all duration-300 relative z-10"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SectionWrapper>
      </section>

      {/* Call to Action Section */}
      <CTASection 
        title="Ready to Restore Your Device?"
        subtitle="Book a repair today or browse our catalogue of premium spare parts."
        buttonText="Book Repair Now"
        buttonLink="/book-repair"
        backgroundImage={ctaImg}
      />

      <Footer />
    </div>
  );
};

export default Services;
