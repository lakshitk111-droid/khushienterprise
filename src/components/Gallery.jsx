import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';
import SectionWrapper, { FadeIn } from './Animations';
import Button from './ui/Button';
import Image from './ui/Image';

// Demo posts simulating a real Instagram feed
const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Laptop motherboard repair close-up"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
    alt: "Internal components and battery replacement"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a783?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Technician working on a device"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Screen replacement service"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Electronics repair workspace"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Restored laptop looking brand new"
  }
];

const Gallery = () => {
  return (
    <SectionWrapper className="bg-gray-50 py-16">
      <div className="text-left md:text-center mb-12">
        <FadeIn>
          <div className="flex items-center justify-start md:justify-center space-x-2 mb-4 text-primary">
            <Instagram size={24} />
            <a 
              href="https://www.instagram.com/khushienterprises241/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold tracking-widest uppercase text-sm hover:underline"
            >
              @khushienterprises241
            </a>
          </div>
          <h2 className="text-3xl font-bold text-secondary mb-4">Follow Us on Instagram</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Real repairs. Real results. Trusted by hundreds.</p>
        </FadeIn>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {instagramPosts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 0.1}>
              <motion.a 
                href="https://www.instagram.com/khushienterprises241/"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-square group overflow-hidden cursor-pointer rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <Image src={post.image} alt={post.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                  <Instagram className="text-white drop-shadow-lg" size={32} />
                  <span className="text-white text-xs font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    View Post
                  </span>
                </div>
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="text-white/80" size={16} />
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
      
      <div className="text-left md:text-center mt-12">
        <Button 
          href="https://www.instagram.com/khushienterprises241/" 
          variant="outline" 
          icon={Instagram} 
          iconPosition="left"
          className="text-secondary border-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm"
        >
          Follow on Instagram
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default Gallery;
