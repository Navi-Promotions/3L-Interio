import React from 'react';
import { CheckCircle, Shield, Clock, Ruler, PenTool, Users, Award, Cpu } from 'lucide-react';
import { WHY_CHOOSE_US } from '../constants';

const icons = [Ruler, Cpu, Shield, PenTool, Users, Award, Clock, CheckCircle];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-[#050505] text-white relative overflow-hidden">
      {/* Engineering Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
             backgroundSize: '50px 50px' 
           }}>
      </div>
      
      {/* Radar/Scan Effect Animation */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-[scan_8s_linear_infinite] opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block font-mono">
            // TECHNICAL SPECIFICATIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            The <span className="text-secondary">Engineering</span> Edge
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Why settle for approximation when you can have precision? We replace guesswork with German engineering standards.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-12 items-start">
          
          {/* Left: Visual Unit */}
          <div className="xl:w-5/12 w-full sticky top-24">
             <div className="relative group rounded-sm overflow-hidden border border-white/10 bg-white/5">
                
                {/* Image */}
                <div className="relative h-[600px] w-full overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>
                   <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                    alt="Engineering Precision" 
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" 
                  />
                </div>

                {/* Floating Technical Stats */}
                <div className="absolute bottom-8 left-8 right-8 z-20 space-y-3">
                   {/* Stat 1 */}
                   <div className="flex items-center justify-between bg-black/80 backdrop-blur-md p-4 border-l-4 border-secondary">
                      <div>
                        <p className="text-gray-400 text-[10px] uppercase tracking-widest font-mono">TOLERANCE</p>
                        <p className="text-white font-bold text-xl">±0.5 mm</p>
                      </div>
                      <Ruler className="text-secondary w-6 h-6 opacity-80" />
                   </div>
                   
                   {/* Stat 2 */}
                   <div className="flex items-center justify-between bg-black/80 backdrop-blur-md p-4 border-l-4 border-white">
                      <div>
                        <p className="text-gray-400 text-[10px] uppercase tracking-widest font-mono">MATERIAL DENSITY</p>
                        <p className="text-white font-bold text-xl">High Grade</p>
                      </div>
                      <Shield className="text-white w-6 h-6 opacity-80" />
                   </div>
                </div>

                {/* Decorative Crosshairs */}
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-secondary opacity-50"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-secondary opacity-50"></div>
             </div>
          </div>

          {/* Right: Specifications Grid */}
          <div className="xl:w-7/12 w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            {WHY_CHOOSE_US.map((item, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <div 
                  key={index} 
                  className="group relative bg-white/[0.02] border border-white/5 p-6 hover:bg-white/[0.05] hover:border-secondary/30 transition-all duration-300 flex flex-col items-start rounded-sm"
                >
                   {/* Number Watermark */}
                   <div className="absolute top-2 right-4 text-4xl font-black text-white/[0.02] group-hover:text-secondary/[0.05] transition-colors">
                      0{index + 1}
                   </div>

                   <div className="mb-4 p-3 bg-black border border-white/10 rounded-sm group-hover:border-secondary group-hover:shadow-[0_0_15px_rgba(251,191,36,0.15)] transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-secondary transition-colors" />
                   </div>

                   <h3 className="text-lg font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                     {item.title}
                   </h3>
                   
                   <p className="text-sm text-gray-500 leading-relaxed">
                     {item.description}
                   </p>

                   {/* Tech Corner Accent */}
                   <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[8px] border-t-transparent border-r-[8px] border-r-white/10 group-hover:border-r-secondary transition-all duration-300"></div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;