import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 block">
            {subtitle}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            {title}
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;