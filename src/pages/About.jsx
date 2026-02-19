import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import SectionWrapper, { FadeIn } from '../components/Animations';
import Button from '../components/ui/Button';
import { GOOGLE_MAPS_LINK } from '../utils/constants';

const About = () => {
  return (
    <div className="bg-gray-50 font-sans text-secondary overflow-x-hidden">
      <Navbar />

      {/* Page Hero / Banner */}
      <div className="relative h-[400px] w-full bg-secondary flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-300 text-lg md:text-xl font-light"
          >
            Discover the story behind Khushi Enterprises and our mission to keep your digital life running smoothly.
          </motion.p>
        </div>
      </div>

      {/* Our Story Section */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Gallery */}
          <FadeIn direction="right" className="grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a783?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Technician working" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center">
                <div className="text-3xl font-bold text-primary mb-1">8+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-secondary p-6 rounded-2xl text-center text-white">
                <div className="text-3xl font-bold mb-1">15k+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Happy Clients</div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                <img 
                  src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Motherboard repair" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="left">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 leading-tight">
              More Than Just a Repair, <br/> It’s Reliability.
            </h2>
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
              <p>
                Khushi Enterprises was born from a simple observation: in a world dependent on technology, finding reliable, transparent, and quick repair services was surprisingly difficult. We set out to change that.
              </p>
              <p>
                What started as a small workshop has grown into a premier service center known for its expertise and integrity. We don't just fix devices; we restore your connection to work, entertainment, and the people you love.
              </p>
              <p>
                Whether it's a complex motherboard issue or a simple battery replacement, we treat every device with the same level of care and precision as if it were our own.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href={GOOGLE_MAPS_LINK}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-lg"
                aria-label="Open our location on Google Maps"
              >
                Visit Our Center
              </Button>
               <Button 
                href="/services" 
                variant="white"
                size="lg"
                className="w-full sm:w-auto text-secondary border border-gray-200"
              >
                View Services
              </Button>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Instagram Follow Section */}
      <Gallery />

      <Footer />
    </div>
  );
};

export default About;
