import { motion } from 'framer-motion';
import { ArrowRight, Wrench, ShieldCheck, Clock, CheckCircle, Activity, Zap, PenTool, Printer, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroScroll from '../components/HeroScroll';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import DoorToDoorBanner from '../components/DoorToDoorBanner';
import SectionWrapper, { FadeIn } from '../components/Animations';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import PatternBackground from '../components/ui/PatternBackground';
import Image from '../components/ui/Image';
import ctaImg from '../assets/image2.jpg';

const ServiceCard = ({ icon: Icon, title, description, delay, floatDelay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`group bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 border border-gray-100 relative overflow-hidden card-transition card-hover glow-border animate-float-soft ${floatDelay}`}
  >
    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform translate-x-4 -translate-y-4">
      <Icon size={80} />
    </div>
    <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 relative z-10 icon-hover">
      <Icon size={28} className="text-primary group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-secondary mb-3 relative z-10">{title}</h3>
    <p className="text-gray-500 leading-relaxed mb-6 relative z-10">{description}</p>
    <Link to="/services" className="inline-flex items-center text-primary font-medium btn-premium relative z-10">
      Learn More <ArrowRight size={16} className="ml-2" />
    </Link>
  </motion.div>
);

const Home = () => {
  return (
    <div className="bg-gray-50 font-sans text-secondary">
      <Navbar />
      
      <HeroScroll />

      {/* Services Preview Section */}
      <SectionWrapper className="bg-white relative">
        <PatternBackground variant="dots" className="text-gray-100" />
        <div className="text-left md:text-center max-w-3xl mx-auto mb-16 relative z-10">
          <FadeIn>
            <SectionHeading 
              title="Premium Repair Services" 
              subtitle="Our Expertise"
              alignment="center"
              variant="creative"
            />
            <p className="text-gray-500 text-lg mt-4 text-left md:text-center">
              We specialize in diagnosing and fixing complex hardware and software issues with precision and care.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <ServiceCard 
            icon={Wrench} 
            title="Hardware Repair" 
            description="Expert logic board repairs, screen replacements, and component level troubleshooting."
            delay={0.2}
            floatDelay=""
          />
          <ServiceCard 
            icon={ShieldCheck} 
            title="Genuine Parts" 
            description="We use only authentic spare parts to ensure the longevity and performance of your device."
            delay={0.4}
            floatDelay="delay-1000"
          />
          <ServiceCard 
            icon={Clock} 
            title="Express Service" 
            description="Quick turnaround times for most repairs, so you can get back to work without delay."
            delay={0.6}
            floatDelay="delay-2000"
          />
          <ServiceCard 
            icon={Server} 
            title="Desktop Support" 
            description="Complete desktop assembly, repair, upgrades, and maintenance for home and office PCs."
            delay={0.8}
            floatDelay=""
          />
          <ServiceCard 
            icon={Printer} 
            title="Printer Services" 
            description="Expert repair for laser & inkjet printers, cartridge refilling, and driver installation."
            delay={1.0}
            floatDelay="delay-1000"
          />
        </div>
      </SectionWrapper>

      {/* About Section - Left Image / Right Text */}
      <SectionWrapper className="bg-gray-50 relative overflow-hidden">
        <PatternBackground variant="grid" className="opacity-10" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <FadeIn direction="right" className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group card-transition card-hover image-hover glow-border animate-float-soft delay-1000">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <Image 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a783?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Technician working on laptop repair" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-xl hidden md:block max-w-xs border-l-4 border-primary z-20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-full text-green-600">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">10k+</h4>
                    <p className="text-sm text-gray-500">Devices Repaired</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Trusted by thousands of professionals and businesses for reliable tech support.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <SectionHeading 
                title="More Than Just Repairs" 
                subtitle="About Us"
                alignment="left"
                variant="creative"
              />
              <p className="text-gray-500 text-lg mb-6 leading-relaxed">
                Khushi Enterprises was born from a simple idea: technology should serve you, not stress you. 
                We created a service where modern expertise meets old-school reliability.
              </p>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                Whether you're a creative professional needing a fast screen fix, or a business looking 
                for reliable fleet maintenance, our certified technicians are here to help.
              </p>
              <Button 
                href="/about" 
                variant="secondary"
                size="lg"
                className="btn-premium"
              >
                Read Our Story
              </Button>
            </FadeIn>
          </div>
      </SectionWrapper>

      {/* New Alternating Section - Right Image / Left Text */}
      <SectionWrapper className="bg-white relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <FadeIn direction="right" className="order-2 lg:order-1">
            <SectionHeading 
              title="State-of-the-Art Diagnostics" 
              subtitle="Precision Care"
              alignment="left"
              variant="creative"
            />
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg text-primary mt-1">
                  <Activity size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Advanced Testing Tools</h4>
                  <p className="text-gray-500 leading-relaxed">We use industry-standard diagnostic software and hardware to pinpoint issues accurately.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg text-primary mt-1">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">ESD Safe Environment</h4>
                  <p className="text-gray-500 leading-relaxed">Our lab is fully ESD-protected to prevent any static damage to your sensitive components.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg text-primary mt-1">
                  <PenTool size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Detailed Reports</h4>
                  <p className="text-gray-500 leading-relaxed">Receive a comprehensive report of your device's health before and after repair.</p>
                </div>
              </div>
            </div>
            <Button 
              href="/services" 
              variant="outline"
              size="lg"
              className="btn-premium"
            >
              View Our Process
            </Button>
          </FadeIn>

          <FadeIn direction="left" className="order-1 lg:order-2 relative">
             <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group card-transition card-hover image-hover glow-border animate-float-soft delay-2000">
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <Image 
                  src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Advanced diagnostics lab" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10"></div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <section className="relative min-h-[60vh] overflow-hidden flex items-center justify-center">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${ctaImg})` }}
        />
        
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content Layer */}
        <div className="relative z-20 w-full">
          <SectionWrapper className="text-left md:text-center text-white">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Restore Your Device?</h2>
              <p className="text-white/90 text-xl mb-10 max-w-2xl md:mx-auto">
                Book a repair today or browse our catalogue of premium spare parts.
              </p>
              <div className="flex flex-col sm:flex-row justify-start md:justify-center gap-4">
                <Button 
                  href="/book-repair" 
                  variant="white"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Book Now
                </Button>
                <Button 
                  href="/contact" 
                  variant="outlineWhite"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </div>
            </FadeIn>
          </SectionWrapper>
        </div>
      </section>

      <Features />

      <Testimonials />

      {/* Instagram Follow Section */}
      <Gallery />

      {/* Door-to-Door Service Banner */}
      <DoorToDoorBanner />

      <Footer />
    </div>
  );
};

export default Home;
