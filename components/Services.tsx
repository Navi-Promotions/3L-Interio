import React from 'react';
import { ChefHat, DoorClosed, BedDouble, Tv, Sparkles, LayoutDashboard, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  ChefHat: <ChefHat className="w-6 h-6" />,
  DoorClosed: <DoorClosed className="w-6 h-6" />,
  BedDouble: <BedDouble className="w-6 h-6" />,
  Tv: <Tv className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  LayoutDashboard: <LayoutDashboard className="w-6 h-6" />
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-surface relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
                <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm block mb-3">
                    Factory-Made Excellence
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Crafting <span className="text-secondary">Luxury</span> <br/> Living Spaces.
                </h2>
            </div>
            <p className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed text-right md:text-left">
                Precision-engineered modular solutions for homes and offices in Theni. 
                Durability meets design in every millimeter.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-primary rounded-sm overflow-hidden border border-white/5 hover:border-secondary/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 bg-secondary/90 backdrop-blur text-black p-3 rounded-none shadow-lg z-20">
                  {iconMap[service.icon]}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                 {/* Decorative line */}
                 <div className="absolute top-0 left-8 w-12 h-1 bg-secondary transform -translate-y-1/2"></div>
                 
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <a href="#contact" className="inline-flex items-center text-xs font-bold text-white group-hover:text-secondary transition-colors uppercase tracking-widest border-b border-transparent group-hover:border-secondary pb-1">
                    Enquire Now <ArrowRight className="ml-2 w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;