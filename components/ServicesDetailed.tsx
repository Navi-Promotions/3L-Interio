import React from 'react';
import { SERVICES } from '../constants';
import { ChefHat, DoorClosed, BedDouble, Tv, Sparkles, LayoutDashboard, Check } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ChefHat: <ChefHat className="w-6 h-6" />,
  DoorClosed: <DoorClosed className="w-6 h-6" />,
  BedDouble: <BedDouble className="w-6 h-6" />,
  Tv: <Tv className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  LayoutDashboard: <LayoutDashboard className="w-6 h-6" />
};

const ServicesDetailed: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {SERVICES.map((service, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 mb-24 last:mb-0`}
          >
            {/* Image Side */}
            <div className="lg:w-1/2 w-full relative group">
              {/* Decorative Frame */}
              <div className={`absolute -inset-4 border-2 border-secondary/20 rounded-sm transform ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'} group-hover:rotate-0 transition-transform duration-500`}></div>
              
              <div className="relative rounded-sm overflow-hidden shadow-2xl h-[400px]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2 w-full">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                   {iconMap[service.icon]}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">{service.title}</h2>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8 border-l-4 border-secondary/30 pl-6">
                {service.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="flex items-center space-x-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Premium Finish</span>
                 </div>
                 <div className="flex items-center space-x-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>5-Year Warranty</span>
                 </div>
                 <div className="flex items-center space-x-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Custom Sizing</span>
                 </div>
                 <div className="flex items-center space-x-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Factory Precision</span>
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesDetailed;