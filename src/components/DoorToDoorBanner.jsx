import { motion } from 'framer-motion';
import { Truck, Home, UserCheck, Clock, Phone, Calendar } from 'lucide-react';
import SectionWrapper, { FadeIn } from './Animations';
import Button from './ui/Button';
import Image from './ui/Image';

const DoorToDoorBanner = () => {
  return (
    <SectionWrapper className="bg-gray-50 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content Side */}
        <FadeIn direction="right" className="text-left md:text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center justify-start md:justify-center lg:justify-start gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-wider mb-6">
            <Truck size={16} />
            <span>We Come To You</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
            Door-to-Door <br/>
            <span className="text-primary">Laptop Repair Services</span>
          </h2>
          
          <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-xl md:mx-auto lg:mx-0">
            We provide professional laptop repair services directly at your doorstep. 
            No physical center — enjoy fast, reliable, and convenient service from the comfort of your home or office.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                <Truck size={20} />
              </div>
              <span className="font-medium text-gray-700">Home Pickup & Delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                <Home size={20} />
              </div>
              <span className="font-medium text-gray-700">On-Site Diagnosis</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                <UserCheck size={20} />
              </div>
              <span className="font-medium text-gray-700">Trusted Technicians</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                <Clock size={20} />
              </div>
              <span className="font-medium text-gray-700">Fast Turnaround</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center lg:justify-start">
            <Button href="/book-repair" variant="primary" size="lg" icon={Calendar} className="btn-premium">
              Book Door-to-Door Repair
            </Button>
            <Button href="tel:+919868022297" variant="outline" size="lg" icon={Phone} className="btn-premium">
              Call Now
            </Button>
          </div>
        </FadeIn>

        {/* Visual Side */}
        <FadeIn direction="left" className="order-1 lg:order-2">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10 card-transition card-hover image-hover glow-border animate-float-soft">
              <Image 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Doorstep delivery service" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                  <p className="font-bold text-lg mb-1">Service Area</p>
                  <p className="text-white/80 text-sm">Serving all major locations in Gurugram & Delhi NCR</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
};

export default DoorToDoorBanner;
