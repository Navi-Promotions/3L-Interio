import React from 'react';
import { Quote, Star, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-dark-surface relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Client Stories</h2>
          <p className="text-gray-400 text-lg font-light">
            Real experiences from homeowners and businesses in Theni who chose factory-made precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-primary/50 backdrop-blur-sm p-8 rounded-sm border border-white/10 hover:border-secondary/50 flex flex-col relative transition-all duration-500 hover:-translate-y-2 group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-5 left-8 w-10 h-10 bg-secondary flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-primary fill-current" />
              </div>

              <div className="mt-6 mb-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-gray-300 italic text-base leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
                <div>
                  <h4 className="font-bold text-white text-lg tracking-wide">{testimonial.name}</h4>
                  <p className="text-xs text-secondary uppercase tracking-widest mt-1">{testimonial.projectType}</p>
                </div>
                <div className="flex items-center text-gray-500 text-xs">
                    <MapPin className="w-3 h-3 mr-1" />
                    {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;