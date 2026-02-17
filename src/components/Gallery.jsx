import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import SectionWrapper, { FadeIn } from './Animations';
import Button from './ui/Button';

const images = [
  "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
];

const Gallery = () => {
  return (
    <SectionWrapper className="bg-gray-50 py-16">
      <div className="text-center mb-12">
        <FadeIn>
          <div className="flex items-center justify-center space-x-2 mb-4 text-primary">
            <Instagram size={24} />
            <span className="font-bold tracking-widest uppercase text-sm">@LaptopCare</span>
          </div>
          <h2 className="text-3xl font-bold text-secondary mb-4">Follow Us on Instagram</h2>
          <p className="text-gray-500">Capture the moments. Share the vibe.</p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {images.map((src, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-square group overflow-hidden cursor-pointer"
          >
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="text-white" size={32} />
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button 
          href="#" 
          variant="white" 
          icon={Instagram} 
          iconPosition="left"
          className="text-secondary border-gray-200 hover:bg-primary hover:text-white hover:border-primary"
        >
          Follow Us
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default Gallery;
