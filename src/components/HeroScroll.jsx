import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Button from './ui/Button';

const frameCount = 240;
// Module-level cache to prevent reloading images on navigation
const imagesCache = new Array(frameCount).fill(null);
let imagesLoadedCount = 0;

const HeroScroll = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(imagesLoadedCount === frameCount);
  const [loadingProgress, setLoadingProgress] = useState(
    Math.round((imagesLoadedCount / frameCount) * 100)
  );

  // Dynamic height calculation based on frames
  // 6px per frame provides a smooth scroll experience without being too tall
  const scrollHeight = frameCount * 6;

  // Scroll progress for the container
  // We use offset "start start" to "end end" to track the container's full scroll relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map scroll to frame index
  // The sticky phase lasts for the full duration of the scroll
  // We map the frames to complete by 1.0 progress
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);

  // Text animations
  // Phase 1: Intro (0% - 20%)
  const opacity1 = useTransform(smoothProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const scale1 = useTransform(smoothProgress, [0, 0.2], [1, 0.9]);
  const y1 = useTransform(smoothProgress, [0, 0.2], [0, -50]);

  // Phase 2: Specs (30% - 50%)
  const opacity2 = useTransform(smoothProgress, [0.3, 0.4, 0.5], [0, 1, 0]);
  const x2 = useTransform(smoothProgress, [0.3, 0.4, 0.5], [-50, 0, 50]);

  // Phase 3: Tagline (60% - 80%)
  const opacity3 = useTransform(smoothProgress, [0.6, 0.7, 0.8], [0, 1, 0]);
  const y3 = useTransform(smoothProgress, [0.6, 0.7, 0.8], [50, 0, -50]);

  // Phase 4: CTA (90% - 100%) - Stays visible until scroll away
  const opacityCTA = useTransform(smoothProgress, [0.9, 0.95], [0, 1]);
  const scaleCTA = useTransform(smoothProgress, [0.9, 1], [0.9, 1]);

  useEffect(() => {
    // Immediate viewport height calculation on mount
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
    
    // If already loaded, skip
    if (imagesLoadedCount === frameCount) {
      setImagesLoaded(true);
      return () => {
        window.removeEventListener('resize', setVH);
        window.removeEventListener('orientationchange', setVH);
      };
    }

    let isMounted = true;
    const loadImages = async () => {
      const promises = [];
      
      for (let i = 1; i <= frameCount; i++) {
        // Skip if already in cache
        if (imagesCache[i-1]) continue;

        const promise = new Promise((resolve) => {
          const img = new Image();
          const formattedIndex = i.toString().padStart(3, '0');
          img.src = `/ezgif-7e86dcac01610374-jpg/ezgif-frame-${formattedIndex}.jpg`;
          
          img.onload = () => {
            if (isMounted) {
              imagesLoadedCount++;
              setLoadingProgress(Math.round((imagesLoadedCount / frameCount) * 100));
            }
            imagesCache[i - 1] = img;
            resolve(img);
          };
          img.onerror = () => {
             // Resolve anyway to avoid blocking everything on one failed frame
             console.warn(`Failed to load frame ${i}`);
             resolve(null); 
          };
        });
        promises.push(promise);
      }

      await Promise.all(promises);
      if (isMounted) {
        setImagesLoaded(true);
      }
    };

    loadImages();
    
    return () => { 
      isMounted = false; 
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);

  useEffect(() => {
    // If we're loading, we still want to set up the canvas if it's available
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d', { alpha: false }); // Optimize for non-transparent canvas
    
    // Set canvas dimensions to window size for high quality
    const renderFrame = (index) => {
      // Safety check for index bounds
      if (index < 0 || index >= frameCount) return;
      
      const img = imagesCache[index];
      if (img) {
        // Calculate aspect ratio to cover (contain-like or cover-like behavior)
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio); // 'cover' behavior
        
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        // Use requestAnimationFrame for smoother rendering if needed, 
        // but direct draw is fine for scroll-based animation usually.
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          img, 
          0, 0, img.width, img.height,
          centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
        );
      }
    };

    const updateCanvasSize = () => {
      // Re-calculate VH on resize to be safe
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      
      // Ensure canvas matches the visual viewport size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Force immediate render of current frame
      // If loading, render frame 0 if available
      renderFrame(Math.round(frameIndex.get()));
    };

    // Initial setup
    updateCanvasSize();
    
    // Try to render the first frame immediately if available in cache (for repeat visits)
    if (imagesCache[0]) {
      renderFrame(0);
    }
    
    // Use ResizeObserver for robust size tracking
    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });
    resizeObserver.observe(document.body); // Observe body size changes

    // Traditional resize listener as backup
    window.addEventListener('resize', updateCanvasSize);
    
    // Force a resize after load to fix partial render issues
    window.addEventListener('load', updateCanvasSize);
    
    // Additional safeguard: force resize after a short delay
    const timeoutId = setTimeout(() => {
      updateCanvasSize();
    }, 100);
    
    // Another safeguard for mobile address bar transitions
    const timeoutId2 = setTimeout(() => {
      updateCanvasSize();
    }, 500);

    // Subscribe to frame index changes
    const unsubscribe = frameIndex.on("change", (latest) => {
      renderFrame(Math.round(latest));
    });

    // Initial render
    renderFrame(0);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('load', updateCanvasSize);
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
      unsubscribe();
    };
  }, [imagesLoaded, frameIndex]); // Re-run when loading completes to ensure full quality

  return (
    <>
      {/* Loading Overlay - Always present in DOM until loaded, but fades out */}
      <div 
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-1000 ${imagesLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-hidden={imagesLoaded}
      >
        <div className="text-center w-full max-w-md px-4">
          <div className="mb-8 text-4xl font-bold tracking-tighter animate-pulse">
            KHUSHI<span className="text-primary">ENTERPRISES</span>
          </div>
          <div className="h-1 w-full bg-gray-900 rounded-full overflow-hidden mb-4">
            <motion.div 
              className="h-full bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 uppercase tracking-widest font-mono">
            <span>System Initialization</span>
            <span>{loadingProgress}%</span>
          </div>
        </div>
      </div>

      {/* Main Content - Always in DOM to ensure layout calculations are correct */}
      <section 
        ref={containerRef} 
        className={`relative w-full bg-black transition-opacity duration-700 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ height: `calc((var(--vh, 1vh) * 100) + ${scrollHeight}px)` }}
      >
        <div 
          className="sticky top-0 w-full overflow-hidden flex items-center justify-center"
          style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
        >
          {/* Layer 1: Background Animation (Canvas) */}
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60 pointer-events-none z-10" />
          
          {/* Layer 2: Content Layer (Text, CTA) */}
          <div className="relative z-20 flex flex-col justify-center items-start md:items-center h-full w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none">
            
            {/* 0% Scroll: Intro */}
            <motion.div 
              style={{ opacity: opacity1, scale: scale1, y: y1 }} 
              className="text-left md:text-center absolute flex flex-col items-start md:items-center justify-center w-full"
            >
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/80 text-xs md:text-sm uppercase tracking-widest">
                Premium Repair Services
              </div>
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter drop-shadow-2xl">
                Khushi <span className="text-primary">Enterprises</span>
              </h1>
              <p className="text-xl md:text-3xl text-gray-200 font-light tracking-wide max-w-3xl">
                Expert Laptop Repair & Advanced Diagnostics
              </p>
            </motion.div>

            {/* 40% Scroll: Specs (Left) */}
            <motion.div 
              style={{ opacity: opacity2, x: x2 }} 
              className="absolute left-4 md:left-20 top-1/2 -translate-y-1/2 max-w-xl text-left"
            >
              <div className="text-primary font-mono text-sm md:text-base mb-2">PRECISION ENGINEERING</div>
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-4 leading-tight">
                Chip-Level
                <span className="block text-3xl md:text-5xl text-gray-400 mt-2 font-normal">Mastery</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed border-l-2 border-primary pl-4">
                Advanced motherboard diagnostics and component-level repairs. We fix what others can't.
              </p>
            </motion.div>

            {/* 70% Scroll: Vision (Right) */}
            <motion.div 
              style={{ opacity: opacity3, y: y3 }} 
              className="absolute right-4 md:right-20 top-1/2 -translate-y-1/2 max-w-xl text-right"
            >
              <div className="text-primary font-mono text-sm md:text-base mb-2">TRUSTED SERVICE</div>
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Built for <br/>
                <span className="italic">Reliability.</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                From complete restoration to performance upgrades. 
                Your device, performing at its peak.
              </p>
            </motion.div>

            {/* 95% Scroll: CTA */}
            <motion.div 
              style={{ opacity: opacityCTA, scale: scaleCTA }} 
              className="absolute inset-x-0 bottom-32 flex flex-col items-start md:items-center justify-center text-left md:text-center pointer-events-auto px-4 md:px-0"
            >
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Ready to Restore Your Device?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                From chip-level repairs to complete device restoration — precision, speed, and trust.
              </p>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <Button href="/book-repair" variant="primary" size="lg" className="px-10 py-4 text-lg bg-primary hover:bg-primary-dark text-white border-none shadow-xl shadow-primary/20">
                  Book Repair
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="px-10 py-4 text-lg border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            style={{ opacity: opacity1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center pointer-events-none z-20"
          >
            <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-4">Scroll to Explore</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-primary/0 via-primary to-primary/0 animate-pulse"></div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroScroll;
