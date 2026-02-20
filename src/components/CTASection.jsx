import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import SectionWrapper, { FadeIn } from './Animations';

const CTASection = ({ title, subtitle, buttonText, buttonLink, backgroundImage }) => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - Applied via inline style for guaranteed render */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full">
        <SectionWrapper className="text-left md:text-center text-white">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              {title}
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mr-auto md:mx-auto font-light leading-relaxed">
              {subtitle}
            </p>
            <Button 
              href={buttonLink} 
              variant="primary" 
              size="lg"
              icon={ArrowRight}
            >
              {buttonText}
            </Button>
          </FadeIn>
        </SectionWrapper>
      </div>
    </section>
  );
};

export default CTASection;
