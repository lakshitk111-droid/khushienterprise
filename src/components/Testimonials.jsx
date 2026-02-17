import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionWrapper, { FadeIn } from './Animations';
import SectionHeading from './ui/SectionHeading';

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    text: "Saved my MacBook from water damage when everyone else said it was impossible. The team is incredibly professional and transparent about costs.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    text: "Ordered a battery for my Dell XPS. It arrived the next day and was 100% genuine. The installation guide they provided was also very helpful.",
    rating: 5
  },
  {
    name: "Amit Kumar",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    text: "Their annual maintenance contract for our office laptops has been a game changer. Downtime is virtually zero now. Highly recommended!",
    rating: 4
  },
  {
    name: "Sneha Gupta",
    role: "Freelance Writer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    text: "The data recovery service was a lifesaver! I thought I lost months of work, but they managed to retrieve everything. Forever grateful!",
    rating: 5
  },
  {
    name: "Vikram Singh",
    role: "Student",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    text: "Fast, affordable, and reliable. Fixed my broken screen in less than 2 hours. The quality is just like the original.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide logic
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Calculate visible items based on current index and itemsPerView
  // We want to create an infinite loop effect visually
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % testimonials.length;
      items.push(testimonials[index]);
    }
    return items;
  };

  return (
    <SectionWrapper className="bg-white overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-12">
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
        className="relative px-4 md:px-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Navigation Arrows */}
        <button 
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg text-secondary hover:text-primary hover:scale-110 transition-all border border-gray-100 hidden md:flex items-center justify-center"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg text-secondary hover:text-primary hover:scale-110 transition-all border border-gray-100 hidden md:flex items-center justify-center"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden py-8 -mx-4 px-4">
          <motion.div 
            className="flex gap-6"
            initial={false}
            animate={{ x: 0 }} // We handle movement by shifting data, simpler for infinite loop simulation without complex x calculations
          >
            <AnimatePresence mode='popLayout'>
              {getVisibleItems().map((testimonial, idx) => (
                <motion.div
                  key={`${currentIndex}-${idx}`} // Key changes to trigger animation
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`flex-shrink-0 w-full ${
                    itemsPerView === 1 ? 'w-full' : 
                    itemsPerView === 2 ? 'w-[calc(50%-12px)]' : 
                    'w-[calc(33.333%-16px)]'
                  }`}
                >
                  <div className={`h-full bg-gray-50 p-8 rounded-2xl relative flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 group`}>
                    <Quote className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors" size={48} />
                    
                    <div className="flex items-center space-x-4 mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                      />
                      <div>
                        <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="flex mb-4 text-accent-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < testimonial.rating ? "currentColor" : "none"} className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} />
                      ))}
                    </div>

                    <p className="text-gray-600 italic leading-relaxed flex-grow">"{testimonial.text}"</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300 hover:bg-gray-400'
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
