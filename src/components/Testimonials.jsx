import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionWrapper, { FadeIn } from './Animations';
import SectionHeading from './ui/SectionHeading';
import bgImage from '../assets/bg2.jpg';

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Graphic Designer",
    text: "Saved my MacBook from water damage when everyone else said it was impossible. The team is incredibly professional and transparent about costs.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Software Engineer",
    text: "Ordered a battery for my Dell XPS. It arrived the next day and was 100% genuine. The installation guide they provided was also very helpful.",
    rating: 5
  },
  {
    name: "Amit Kumar",
    role: "Business Owner",
    text: "Their annual maintenance contract for our office laptops has been a game changer. Downtime is virtually zero now. Highly recommended!",
    rating: 4
  },
  {
    name: "Sneha Gupta",
    role: "Freelance Writer",
    text: "The data recovery service was a lifesaver! I thought I lost months of work, but they managed to retrieve everything. Forever grateful!",
    rating: 5
  },
  {
    name: "Vikram Singh",
    role: "Student",
    text: "Fast, affordable, and reliable. Fixed my broken screen in less than 2 hours. The quality is just like the original.",
    rating: 5
  }
];

const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide logic
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Smooth & calm interval
    
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <SectionWrapper className="relative py-12 md:py-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'contrast(1.05) brightness(0.95)'
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6))',
            backdropFilter: 'blur(2px)'
          }}
        />
      </div>

      <div className="relative z-10 text-left md:text-center max-w-2xl mx-auto mb-10">
        <FadeIn>
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Testimonials"
            alignment="center"
            variant="default"
          />
        </FadeIn>
      </div>

      <div 
        className="relative z-10 max-w-3xl mx-auto px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Carousel Container */}
        <div className="relative min-h-[350px] flex items-center justify-center py-4">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Smooth easing
              className="w-full"
            >
              <div 
                className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100/50 flex flex-col items-start md:items-center text-left md:text-center relative mx-auto max-w-2xl group cursor-default card-transition card-hover testimonial-glow glass-card"
              >
                
                {/* Profile Icon */}
                <div 
                  className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-5 shadow-inner text-lg font-bold text-primary border border-primary/20 group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 icon-hover"
                >
                  {getInitials(testimonials[currentIndex].name)}
                </div>

                {/* Name & Role */}
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  {testimonials[currentIndex].role}
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < testimonials[currentIndex].rating ? "currentColor" : "none"} 
                      className={i < testimonials[currentIndex].rating ? "text-primary" : "text-gray-200"} 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <div className="relative z-10 w-full">
                  <Quote className="absolute -top-4 -left-2 text-gray-200 opacity-50 group-hover:opacity-100 group-hover:text-primary/20 transform -scale-x-100 transition-all duration-300" size={32} />
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium relative z-10 px-6">
                    {testimonials[currentIndex].text}
                  </p>
                  <Quote className="absolute -bottom-4 -right-2 text-gray-200 opacity-50 group-hover:opacity-100 group-hover:text-primary/20 transition-all duration-300" size={32} />
                </div>
                
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-start md:justify-center mt-6 gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentIndex ? 'w-6 bg-primary' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
