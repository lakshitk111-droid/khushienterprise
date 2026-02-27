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





const Features = () => {
  return (
    <SectionWrapper className="bg-gray-50">
      <div className="text-left md:text-center max-w-3xl mx-auto mb-8 md:mb-16">
        <FadeIn>
          <SectionHeading 
            title="Premium Facilities & Services" 
            subtitle="Why Choose Us"
            alignment="center"
            variant="default"
          />
          <p className="text-gray-500 text-lg mt-4 text-left md:text-center">
            We go beyond standard repairs to provide a comprehensive care package for your digital life.
          </p>
        </FadeIn>
      </div>

      {/* Simple Grid Layout - All Devices */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start md:items-center text-left md:text-center h-full group card-transition card-hover glow-border">
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6 icon-hover">
                <feature.icon size={32} className="text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Features;
