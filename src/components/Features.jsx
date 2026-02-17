import { motion } from 'framer-motion';
import { Wifi, ShieldCheck, Clock, Battery, Cpu, HardDrive, Wrench, Headphones } from 'lucide-react';
import SectionWrapper, { FadeIn } from './Animations';
import SectionHeading from './ui/SectionHeading';

const features = [
  { icon: ShieldCheck, title: "Genuine Parts", description: "100% authentic components directly from manufacturers." },
  { icon: Clock, title: "Express Repair", description: "Same-day service for most common issues." },
  { icon: Wrench, title: "Certified Techs", description: "Highly skilled professionals with years of experience." },
  { icon: Battery, title: "Battery Health", description: "Premium battery replacements with extended warranty." },
  { icon: HardDrive, title: "Data Privacy", description: "Your data is safe and secure during the repair process." },
  { icon: Cpu, title: "Chip Level", description: "Advanced motherboard diagnostics and repairs." },
  { icon: Wifi, title: "Pickup & Drop", description: "Convenient home pickup and delivery services." },
  { icon: Headphones, title: "24/7 Support", description: "Round-the-clock assistance for urgent queries." },
];

const FanCard = ({ feature, index, total }) => {
  // Calculate fan positioning
  const centerOffset = index - (total - 1) / 2;
  const rotateValue = centerOffset * 5; // Degrees to rotate
  const xValue = centerOffset * -40; // Pixels to pull inward (negative overlap)
  
  return (
    <motion.div
      variants={{
        idle: { 
          x: xValue, 
          rotate: rotateValue, 
          scale: 0.95,
          zIndex: total - Math.abs(Math.round(centerOffset)), // Center cards on top
          transition: { type: "spring", stiffness: 200, damping: 20 }
        },
        hover: { 
          x: 0, 
          rotate: 0, 
          scale: 1,
          zIndex: 10, // Ensure hover doesn't clip
          transition: { type: "spring", stiffness: 200, damping: 20 }
        }
      }}
      className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center h-80 w-64 relative shrink-0"
    >
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-6 mt-4 group-hover:bg-primary/10 transition-colors duration-300">
        <feature.icon size={28} className="text-secondary group-hover:text-primary transition-colors" />
      </div>
      <h3 className="text-lg font-bold text-secondary mb-3">{feature.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
      
      {/* Decorative card edge for stacked look */}
      <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none" />
    </motion.div>
  );
};

const FanRow = ({ features }) => {
  return (
    <motion.div 
      initial="idle"
      whileHover="hover"
      className="flex justify-center items-center h-96 relative perspective-1000"
    >
      {features.map((feature, index) => (
        <FanCard 
          key={index} 
          feature={feature} 
          index={index} 
          total={features.length} 
        />
      ))}
    </motion.div>
  );
};

const Features = () => {
  const row1 = features.slice(0, 4);
  const row2 = features.slice(4, 8);

  return (
    <SectionWrapper className="bg-gray-50 overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
        <FadeIn>
          <SectionHeading 
            title="Premium Facilities & Services" 
            subtitle="Why Choose Us"
            alignment="center"
            variant="default"
          />
          <p className="text-gray-500 text-lg mt-4">
            We go beyond standard repairs to provide a comprehensive care package for your digital life.
          </p>
        </FadeIn>
      </div>

      {/* Mobile Grid Layout (< lg) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
        {features.map((feature, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 flex flex-col items-center text-center h-full group"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <feature.icon size={32} className="text-secondary group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      {/* Desktop Fan Layout (>= lg) */}
      <div className="hidden lg:flex flex-col gap-8">
        <FadeIn delay={0.2}>
          <FanRow features={row1} />
        </FadeIn>
        <FadeIn delay={0.4}>
          <FanRow features={row2} />
        </FadeIn>
      </div>
    </SectionWrapper>
  );
};

export default Features;
