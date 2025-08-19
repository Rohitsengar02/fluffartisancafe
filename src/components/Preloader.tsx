import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  isLoading: boolean;
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading, onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.pointerEvents = 'none';
        }
        document.body.style.overflow = '';
        onComplete();
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <div 
          ref={containerRef}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-gray-900"
        >
          {/* Curtain */}
          <motion.div 
            className="absolute inset-0 bg-white dark:bg-gray-900 z-10"
            initial={{ y: 0 }}
            animate={{ y: '-100%' }}
            exit={{ y: '-100%' }}
            transition={{ 
              duration: 1.2, 
              ease: [0.77, 0, 0.175, 1],
              delay: 0.8
            }}
          >
            {/* Brand Name */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white text-center px-4">
                Fluff Artisan Café
              </h1>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
