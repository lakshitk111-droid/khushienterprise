import { useState } from 'react';
import { motion } from 'framer-motion';
import fallbackSrc from '../../assets/image.jpg';

const Image = ({ src, alt, className = '', ...props }) => {
  const [errored, setErrored] = useState(false);
  const [lastSrc, setLastSrc] = useState(src);

  if (src !== lastSrc) {
    setLastSrc(src);
    setErrored(false);
  }

  const currentSrc = errored ? fallbackSrc : src;

  const handleError = () => {
    if (!errored) {
      setErrored(true);
    }
  };

  // Check if className already has object-fit
  const hasObjectFit = className.includes('object-contain') || className.includes('object-cover') || className.includes('object-fill') || className.includes('object-none') || className.includes('object-scale-down');
  
  // Default to object-cover if not specified
  const finalClassName = hasObjectFit ? className : `${className} object-cover`;

  return (
    <motion.img
      src={currentSrc}
      alt={alt || "Image"}
      className={finalClassName}
      onError={handleError}
      {...props}
    />
  );
};

export default Image;