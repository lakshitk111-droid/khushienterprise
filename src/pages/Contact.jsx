import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionWrapper, { FadeIn } from '../components/Animations';

const Contact = () => {
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
            Contact Us
          </motion.h1>
          <p className="text-gray-400 text-lg">We'd love to hear from you.</p>
        </div>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <FadeIn direction="right">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-500 leading-relaxed">
                    123 Tech Park, Cyber City,<br />
                    Gurugram, Haryana 122002
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-500 leading-relaxed">
                    +91 98765 43210<br />
                    +91 12345 67890
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-500 leading-relaxed">
                    support@laptopcare.com<br />
                    info@laptopcare.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl overflow-hidden h-64 shadow-lg">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.0688975472578!3d28.52728034389636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1647854652435!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Name</label>
                    <input type="text" className="w-full p-3 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-primary/20 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                    <input type="email" className="w-full p-3 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-primary/20 outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Subject</label>
                  <input type="text" className="w-full p-3 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-primary/20 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Message</label>
                  <textarea rows="4" className="w-full p-3 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-primary/20 outline-none"></textarea>
                </div>
                <button className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Contact;
