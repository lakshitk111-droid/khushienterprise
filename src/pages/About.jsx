import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import SectionWrapper, { FadeIn } from '../components/Animations';
import Button from '../components/ui/Button';
import PageHero from '../components/PageHero';
import Image from '../components/ui/Image';

const About = () => {
  return (
    <div className="bg-gray-50 font-sans text-secondary overflow-x-hidden">
      <Navbar />

      {/* Page Hero / Banner */}
      <PageHero 
        title="About Us"
        subtitle="Discover the story behind Khushi Enterprises and our mission to keep your digital life running smoothly."
        backgroundImage="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Our Story Section */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Gallery */}
          <FadeIn direction="right" className="grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                <Image 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a783?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Technician working" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-left md:text-center">
                <div className="text-3xl font-bold text-primary mb-1">8+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-secondary p-6 rounded-2xl text-left md:text-center text-white">
                <div className="text-3xl font-bold mb-1">15k+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Happy Clients</div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                <Image 
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
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 leading-tight">
              More Than Just a Repair, <br/> It’s Door-to-Door Reliability.
            </h2>
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
              <p>
                Khushi Enterprises was built with a simple belief — technology support should be 
                convenient, transparent, and stress-free. Instead of asking customers to visit a 
                service center, we bring expert laptop repair services directly to their doorstep.
              </p>
              <p>
                From home users to working professionals and businesses, we provide fast, 
                reliable, and professional repairs without disrupting your daily routine. 
                No travel, no waiting — just expert service at your location.
              </p>
              <p>
                Whether it’s a complex motherboard issue, data recovery, or a simple battery 
                replacement, every device is handled with precision, care, and honesty — 
                as if it were our own.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                href="/book-repair" 
                variant="white"
                size="lg"
                className="w-full sm:w-auto text-secondary border border-gray-200"
              >
                Book Door-to-Door Repair
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
