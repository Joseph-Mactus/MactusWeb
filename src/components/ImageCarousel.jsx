import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full min-h-[350px] rounded-[2rem] overflow-hidden group shadow-2xl border border-white/10">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
              ? 'w-8 bg-[#e0006e] shadow-[0_0_10px_rgba(224,0,110,0.8)]'
              : 'bg-white/40 hover:bg-white/60'
              }`}
          />
        ))}
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#e0006e]/10 blur-3xl rounded-full -mr-16 -mt-16 z-0"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#e0006e]/10 blur-3xl rounded-full -ml-16 -mb-16 z-0"></div>

      {/* Premium Badge */}
      <div className="absolute top-6 left-6 z-20 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
        <p className="text-white/80 text-[10px] font-black tracking-[0.2em] uppercase">Mactus Visuals</p>
      </div>
    </div>
  );
};

export default ImageCarousel;
