import { motion } from 'framer-motion';
import { ArrowRight, Wrench, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SectionWrapper, { FadeIn } from '../components/Animations';

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
  >
    <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
      <Icon size={28} className="text-primary group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed mb-6">{description}</p>
    <Link to="/services" className="inline-flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
      Learn More <ArrowRight size={16} className="ml-2" />
    </Link>
  </motion.div>
);

const Home = () => {
  return (
    <div className="bg-gray-50 font-sans text-secondary overflow-x-hidden">
      <Navbar />
      
      <Hero />

      {/* Services Preview Section */}
      <SectionWrapper className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-secondary">Premium Repair Services</h2>
            <p className="text-gray-500 text-lg">
              We specialize in diagnosing and fixing complex hardware and software issues with precision and care.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={Wrench} 
            title="Hardware Repair" 
            description="Expert logic board repairs, screen replacements, and component level troubleshooting."
            delay={0.2}
          />
          <ServiceCard 
            icon={ShieldCheck} 
            title="Genuine Parts" 
            description="We use only authentic spare parts to ensure the longevity and performance of your device."
            delay={0.4}
          />
          <ServiceCard 
            icon={Clock} 
            title="Express Service" 
            description="Quick turnaround times for most repairs, so you can get back to work without delay."
            delay={0.6}
          />
        </div>
      </SectionWrapper>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a783?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Technician working" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-xl hidden md:block max-w-xs">
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
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-8 text-secondary leading-tight">
                More Than Just Repairs, <br/>It's Peace of Mind.
              </h2>
              <p className="text-gray-500 text-lg mb-6 leading-relaxed">
                LaptopCare was born from a simple idea: technology should serve you, not stress you. 
                We created a service where modern expertise meets old-school reliability.
              </p>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                Whether you're a creative professional needing a fast screen fix, or a business looking 
                for reliable fleet maintenance, our certified technicians are here to help.
              </p>
              <Link 
                to="/about" 
                className="px-8 py-4 bg-secondary text-white rounded-full font-medium hover:bg-secondary-light transition-colors inline-block"
              >
                Read Our Story
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Restore Your Device?</h2>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
              Book a repair today or browse our catalogue of premium spare parts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/book-repair" 
                className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              >
                Book Now
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
