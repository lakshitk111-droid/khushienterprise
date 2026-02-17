import { motion } from 'framer-motion';
import { 
  Wrench, Battery, Monitor, Cpu, HardDrive, Wifi, 
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
import heroImg from '../assets/image.jpg';
import ctaImg from '../assets/image2.jpg';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 group h-full flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-5 transition-opacity duration-500 transform translate-x-4 -translate-y-4">
                  <service.icon size={100} />
                </div>
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 relative z-10">
                  <service.icon size={32} className="text-secondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3 relative z-10">{service.title}</h3>
                <p className="text-gray-500 mb-6 flex-grow leading-relaxed relative z-10">{service.description}</p>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center relative z-10">
                  <span className="text-primary font-bold text-lg">{service.price}</span>
                  <Button href="/book-repair" variant="soft" size="sm">
                    Book Now
                  </Button>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-white relative">
        <PatternBackground variant="grid" className="opacity-10" />
        <SectionWrapper className="relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <SectionHeading 
                title="Why Choose Us" 
                subtitle="Our Commitment"
                alignment="center"
                variant="creative"
              />
              <p className="text-gray-500 max-w-2xl mx-auto mt-4">
                We pride ourselves on delivering top-notch repair services with a focus on quality, speed, and customer satisfaction.
              </p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-6 rounded-2xl text-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20 h-full"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* Service Process Section */}
      <section className="py-16 bg-gray-50 relative">
        <SectionWrapper>
          <div className="text-center mb-16">
            <FadeIn>
              <SectionHeading 
                title="How It Works" 
                subtitle="Simple Process"
                alignment="center"
                variant="default"
              />
              <p className="text-gray-500 max-w-2xl mx-auto mt-4">
                Our streamlined process ensures your device is back in your hands as quickly as possible.
              </p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10 transform translate-y-4"></div>
            
            {processSteps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <div className="relative text-center bg-gray-50 md:bg-transparent">
                  <div className="w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold text-secondary shadow-md z-10">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm px-4">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* Brands We Support */}
      <section className="py-16 bg-white overflow-hidden relative">
        <PatternBackground variant="dots" className="opacity-20" />
        <SectionWrapper className="relative z-10">
          <div className="text-center mb-12">
            <FadeIn>
              <SectionHeading 
                title="Brands We Support" 
                subtitle="Compatibility"
                alignment="center"
                variant="default"
              />
              <p className="text-gray-400 mt-4">We specialize in repairing all major laptop brands.</p>
            </FadeIn>
          </div>
          <FadeIn>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {brands.map((brand, index) => (
                <div key={index} className="w-24 h-12 md:w-32 md:h-16 flex items-center justify-center p-2 hover:scale-110 transition-transform duration-300">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
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
