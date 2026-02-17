import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionWrapper, { FadeIn } from '../components/Animations';

const BookRepair = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    deviceType: 'Laptop',
    brandModel: '',
    issue: '',
    date: '',
    timeSlot: 'Morning (9 AM - 12 PM)'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.phone || !formData.issue) {
      alert('Please fill in the required fields (Name, Phone, Issue).');
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        deviceType: 'Laptop',
        brandModel: '',
        issue: '',
        date: '',
        timeSlot: 'Morning (9 AM - 12 PM)'
      });
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

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
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                  <Check size={40} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">Booking Confirmed!</h3>
                <p className="text-gray-500 max-w-md">
                  Thank you for booking with us. Our team will contact you shortly to confirm your appointment.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors"
                >
                  Book Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Details */}
                <div>
                  <h3 className="text-xl font-bold mb-6 border-b pb-2 border-gray-100">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-600">Full Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none" 
                        placeholder="John Doe" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-600">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none" 
                        placeholder="+91 98765 43210" 
                        required
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-gray-600">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none" 
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>
                </div>

                {/* Device Details */}
                <div>
                  <h3 className="text-xl font-bold mb-6 border-b pb-2 border-gray-100">Device Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-600">Device Type</label>
                      <select 
                        name="deviceType"
                        value={formData.deviceType}
                        onChange={handleChange}
                        className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer"
                      >
                        <option>Laptop</option>
                        <option>MacBook</option>
                        <option>Desktop</option>
                        <option>All-in-One</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-600">Brand & Model</label>
                      <input 
                        type="text" 
                        name="brandModel"
                        value={formData.brandModel}
                        onChange={handleChange}
                        className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none" 
                        placeholder="e.g. Dell XPS 15" 
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-gray-600">Issue Description *</label>
                      <textarea 
                        rows="4" 
                        name="issue"
                        value={formData.issue}
                        onChange={handleChange}
                        className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none" 
                        placeholder="Please describe the problem..."
                        required
                      ></textarea>
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
                        <input 
                          type="date" 
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full pl-12 p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-600">Time Slot</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-4 text-gray-400" size={20} />
                        <select 
                          name="timeSlot"
                          value={formData.timeSlot}
                          onChange={handleChange}
                          className="w-full pl-12 p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer"
                        >
                          <option>Morning (9 AM - 12 PM)</option>
                          <option>Afternoon (12 PM - 4 PM)</option>
                          <option>Evening (4 PM - 8 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors shadow-lg shadow-primary/30">
                    Confirm Booking
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default BookRepair;
