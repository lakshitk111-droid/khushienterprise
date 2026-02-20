import { motion } from 'framer-motion';

const SectionHeading = ({ 
  title, 
  subtitle, 
  alignment = 'center', // 'left', 'center', 'right'
  variant = 'default', // 'default', 'creative', 'minimal'
  className = '' 
}) => {
  
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-left items-start md:text-center md:items-center',
    right: 'text-left items-start md:text-right md:items-end'
  };

  return (
    <div className={`flex flex-col mb-12 ${alignClass[alignment]} ${className}`}>
      {variant === 'creative' && (
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '4rem' }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-primary mb-4"
        />
      )}
      
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block"
        >
          {subtitle}
        </motion.span>
      )}
      
      <div className="relative">
        {variant === 'creative' && (
          <span className="absolute -top-6 -left-6 text-6xl md:text-8xl font-bold text-gray-100 -z-10 opacity-50 select-none hidden md:block">
            {title.split(' ')[0]}
          </span>
        )}
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-secondary relative z-10 leading-tight"
        >
          {title}
        </motion.h2>
      </div>
      
      {variant === 'default' && (
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '5rem', opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`h-1.5 bg-primary mt-4 rounded-full ${alignment === 'center' ? 'md:mx-auto' : ''}`}
        />
      )}

      {/* Decorative dots for creative variant */}
      {variant === 'creative' && (
        <div className="flex gap-1 mt-4">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-2 h-2 rounded-full bg-primary"
          />
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="w-2 h-2 rounded-full bg-primary/60"
          />
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="w-2 h-2 rounded-full bg-primary/30"
          />
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
