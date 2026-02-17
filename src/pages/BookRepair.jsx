import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionWrapper, { FadeIn } from '../components/Animations';

const BookRepair = () => {
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
            Book a Repair
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Schedule a visit or pickup for your device.
          </motion.p>
        </div>
      </div>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <form className="space-y-8">
              {/* Personal Details */}
              <div>
                <h3 className="text-xl font-bold mb-6 border-b pb-2 border-gray-100">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Full Name</label>
                    <input type="text" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Phone Number</label>
                    <input type="tel" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-gray-600">Email Address</label>
                    <input type="email" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none" placeholder="john@example.com" />
                  </div>
                </div>
              </div>

              {/* Device Details */}
              <div>
                <h3 className="text-xl font-bold mb-6 border-b pb-2 border-gray-100">Device Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Device Type</label>
                    <select className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer">
                      <option>Laptop</option>
                      <option>MacBook</option>
                      <option>Desktop</option>
                      <option>All-in-One</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Brand & Model</label>
                    <input type="text" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none" placeholder="e.g. Dell XPS 15" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-gray-600">Issue Description</label>
                    <textarea rows="4" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Please describe the problem..."></textarea>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div>
                <h3 className="text-xl font-bold mb-6 border-b pb-2 border-gray-100">Preferred Schedule</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-4 text-gray-400" size={20} />
                      <input type="date" className="w-full pl-12 p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Time Slot</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-4 text-gray-400" size={20} />
                      <select className="w-full pl-12 p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer">
                        <option>Morning (9 AM - 12 PM)</option>
                        <option>Afternoon (12 PM - 4 PM)</option>
                        <option>Evening (4 PM - 8 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button type="button" className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors shadow-lg shadow-primary/30">
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default BookRepair;
