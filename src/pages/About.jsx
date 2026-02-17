import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionWrapper, { FadeIn } from '../components/Animations';

const About = () => {
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
            Our Story
          </motion.h1>
        </div>
      </div>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8">Building Trust Through Technology</h2>
            <div className="prose prose-lg text-gray-500">
              <p className="mb-6">
                Founded in 2015, LaptopCare began as a small workshop with a single technician and a passion for hardware. 
                We noticed a gap in the market: laptop repairs were often slow, unreliable, and opaque. 
                We wanted to change that.
              </p>
              <p className="mb-6">
                Today, we have grown into a premier service center with a team of certified experts. 
                We treat every device as if it were our own, ensuring data privacy, using only genuine parts, 
                and providing transparent pricing.
              </p>
              <p>
                Our mission is simple: To keep you connected to what matters most by ensuring your technology 
                works seamlessly. Whether it's a student's thesis on a crashed hard drive or a CEO's presentation 
                on a broken screen, we understand the urgency and the value of your work.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <FadeIn delay={0.2} className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">8+</div>
              <div className="text-gray-500">Years Experience</div>
            </FadeIn>
            <FadeIn delay={0.4} className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">15k+</div>
              <div className="text-gray-500">Repairs Completed</div>
            </FadeIn>
            <FadeIn delay={0.6} className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="text-gray-500">Customer Rating</div>
            </FadeIn>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default About;
