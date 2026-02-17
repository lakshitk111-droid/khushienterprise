const PatternBackground = ({ variant = 'dots', className = '' }) => {
  if (variant === 'dots') {
    return (
      <div className={`absolute inset-0 z-0 pointer-events-none opacity-30 ${className}`}>
        <svg className="w-full h-full text-gray-200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
    );
  }
  
  if (variant === 'grid') {
    return (
      <div className={`absolute inset-0 z-0 pointer-events-none opacity-30 ${className}`}>
        <svg className="w-full h-full text-gray-200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    );
  }

  return null;
};

export default PatternBackground;
