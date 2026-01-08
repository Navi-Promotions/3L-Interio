import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../constants';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[100vh] w-full overflow-hidden bg-black text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 motion-safe:animate-[kenburns_20s_ease-out_infinite]"
            style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].image})` }}
          />
          
          {/* Professional Gradient Overlays */}
          {/* Darken the whole image slightly */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Gradient from bottom left */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          {/* Gradient from left side for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent" />

          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start z-10 pt-20">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-4xl"
            >
               {/* Subtitle with Gold line */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-1 w-12 bg-secondary"></div>
                <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm md:text-base">
                  {HERO_SLIDES[currentSlide].subtitle}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.1] text-white">
                {HERO_SLIDES[currentSlide].title.split(" ").map((word, i) => (
                    <span key={i} className={i === 1 ? "text-gold-gradient" : ""}>{word} </span>
                ))}
              </h1>
              
              <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-light border-l-4 border-white/20 pl-6">
                {HERO_SLIDES[currentSlide].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                    href="#contact"
                    className="inline-flex items-center justify-center bg-secondary hover:bg-white hover:text-primary text-black font-bold py-4 px-10 transition-all duration-300 tracking-wider uppercase text-sm"
                >
                    {HERO_SLIDES[currentSlide].cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a 
                    href="#services"
                    className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white font-bold py-4 px-10 transition-all duration-300 tracking-wider uppercase text-sm backdrop-blur-sm"
                >
                    View Services
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 right-10 z-20 flex space-x-2">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-500 ${
              index === currentSlide ? 'bg-secondary w-12' : 'bg-white/30 w-6 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;