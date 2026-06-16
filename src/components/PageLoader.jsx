import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 0);
    // Prevent scrolling while loading overlay is active
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
    }, 600);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [location.pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white/100 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing effect */}
        <div className="absolute inset-0 rounded-full blur-2xl bg-primary/20 animate-pulse"></div>

        {/* Outer fast spinning ring */}
        <div className="w-24 h-24 border-4 border-transparent border-t-primary border-r-primary rounded-full animate-spin"></div>

        {/* Inner slow reverse spinning ring */}
        <div className="absolute w-16 h-16 border-4 border-transparent border-b-navy border-l-navy rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>

        {/* Center dot */}
        <div className="absolute w-4 h-4 bg-primary rounded-full animate-pulse"></div>
      </div>

      <div className="mt-8 relative">
        <h2 className="text-navy font-inter font-bold tracking-[0.4em] text-sm uppercase">
          Mactus
        </h2>
        <div className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent w-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default PageLoader;
