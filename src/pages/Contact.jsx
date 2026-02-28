import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionWrapper, { FadeIn } from '../components/Animations';
import ContactInfoCard from '../components/ContactInfoCard';
import Button from '../components/ui/Button';
import PageHero from '../components/PageHero';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      alert('Please fill in the required fields.');
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="bg-gray-50 font-sans text-secondary overflow-x-hidden">
      <Navbar />

      {/* Page Hero Section */}
      <PageHero 
        title="Get in Touch"
        subtitle="Have questions? We'd love to hear from you. Send us a message or give us a call."
        backgroundImage="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Info Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactInfoCard 
            icon={MapPin} 
            title="Service Area" 
            delay={0.3}
            content={
              <>
                <p>Gurugram & Delhi NCR</p>
                <p>Door-to-Door Service</p>
              </>
            }
          />
          <ContactInfoCard 
            icon={Phone} 
            title="Contact Us" 
            delay={0.4}
            content={
              <>
                <p>+91 98680 22297</p>
                <p>+91 98107 76852</p>
              </>
            }
          />
          <ContactInfoCard 
            icon={Clock} 
            title="Open Hours" 
            delay={0.5}
            content={
              <>
                <p>Mon - Sat: 09:00 AM - 08:00 PM</p>
                <p>Sunday: Closed</p>
              </>
            }
          />
        </div>
      </div>

      {/* Contact Details + Form Section */}
      <SectionWrapper className="bg-gray-50 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* LEFT SIDE: Contact Details Card */}
          <FadeIn direction="right" className="lg:col-span-2">
            <div className="bg-secondary text-white p-10 rounded-3xl shadow-xl h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-tr-full -ml-8 -mb-8"></div>
              
              <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Details</h3>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin size={18} className="text-primary-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Service Area</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Gurugram & Delhi NCR <br/>(Door-to-Door Service)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone size={18} className="text-primary-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                    <p className="text-gray-400 text-sm">
                      Call for immediate assistance. <br/>
                      <a href="tel:+919868022297" className="hover:text-white transition-colors">+91 98680 22297</a> <br/>
                      <a href="tel:+919810776852" className="hover:text-white transition-colors">+91 98107 76852</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail size={18} className="text-primary-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Address</h4>
                    <p className="text-gray-400 text-sm">
                      Khushienterprises241@gmail.com                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT SIDE: Contact Form */}
          <FadeIn direction="left" delay={0.2} className="lg:col-span-3">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
              {submitted ? (
                <div className="flex flex-col items-start md:items-center justify-center h-full text-left md:text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">Message Sent!</h3>
                  <p className="text-gray-500">We'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-secondary mb-8">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-600">First Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-3.5 text-gray-400" size={18} />
                          <input 
                            type="text" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="John" 
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-600">Last Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-3.5 text-gray-400" size={18} />
                          <input 
                            type="text" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Doe" 
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-600">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-3.5 text-gray-400" size={18} />
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com" 
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-600">Subject</label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-3.5 text-gray-400" size={18} />
                          <select 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all cursor-pointer appearance-none text-gray-500"
                          >
                            <option value="">Select a subject</option>
                            <option value="Repair Inquiry">Repair Inquiry</option>
                            <option value="Spare Parts">Spare Parts</option>
                            <option value="Feedback">Feedback</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-600">Message</label>
                      <textarea 
                        rows="5" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?" 
                        className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        required
                      ></textarea>
                    </div>

                    <Button 
                      type="submit" 
                      variant="primary"
                      size="lg"
                      icon={Send}
                      iconPosition="left"
                      className="w-full md:w-auto rounded-xl"
                    >
                      Send Message
                    </Button>
                  </form>
                </>
              )}
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Contact;
