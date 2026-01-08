import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-dark-surface text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Process</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Connector Line */}
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-white/10 z-0">
                  <div className="absolute top-0 left-0 h-full bg-secondary w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                </div>
              )}

              <div className="relative z-10 bg-primary border border-white/10 p-8 rounded-sm hover:border-secondary transition-colors duration-300 h-full">
                <div className="text-5xl font-extrabold text-white/5 group-hover:text-secondary/20 transition-colors mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <a href="#contact" className="inline-flex items-center text-secondary hover:text-white font-bold tracking-widest uppercase text-sm transition-colors border-b border-secondary hover:border-white pb-1">
                 Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
             </a>
        </div>
      </div>
    </section>
  );
};

export default Process;