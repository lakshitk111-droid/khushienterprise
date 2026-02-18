import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionWrapper, { FadeIn } from './Animations';

const MapSection = () => {
  return (
    <SectionWrapper className="bg-gray-50 py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <FadeIn>
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Location</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Visit Our Service Center</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 text-lg">
            Conveniently located in Cyber City. Drop by for a quick consultation or repair.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info Card */}
        <FadeIn direction="right" className="lg:col-span-1">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500"></div>
            
            <h3 className="text-2xl font-bold text-secondary mb-8 relative z-10">Contact Details</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Address</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    123 Tech Park, Cyber City,<br />Gurugram, Haryana 122002
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Phone</h4>
                  <p className="text-gray-500 text-sm">+91 98680 22297</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Open Hours</h4>
                  <p className="text-gray-500 text-sm">Mon - Sat: 09:00 AM - 08:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </FadeIn>

        {/* Map Card */}
        <FadeIn direction="left" delay={0.2} className="lg:col-span-2">
          <motion.div 
            whileHover={{ y: -5, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            className="h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white p-2"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.0688975472578!3d28.52728034389636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1647854652435!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '1.5rem' }} 
              allowFullScreen="" 
              loading="lazy"
              className="w-full h-full grayscale-[50%] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
};

export default MapSection;
