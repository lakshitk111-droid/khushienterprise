import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href, 
  onClick, 
  icon: Icon,
  iconPosition = 'right',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light shadow-lg hover:shadow-primary/30 focus:ring-primary border border-transparent",
    secondary: "bg-secondary text-white hover:bg-secondary-light shadow-lg hover:shadow-secondary/30 focus:ring-secondary border border-transparent",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    outlineWhite: "bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white",
    white: "bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl focus:ring-white border border-transparent",
    soft: "bg-gray-100 text-secondary hover:bg-primary hover:text-white shadow-sm hover:shadow-md border border-transparent",
    glass: "bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20 focus:ring-white/50 shadow-lg",
    ghost: "bg-transparent text-primary hover:bg-primary/5 hover:text-primary-dark shadow-none",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-full",
    lg: "px-8 py-4 text-lg rounded-full",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={20} className="mr-2" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={20} className="ml-2" />}
    </>
  );

  if (href) {
    return (
      <Link to={href} className={combinedStyles} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}
      className={combinedStyles} 
      onClick={onClick} 
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
