import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-primary">
        {/* Gold Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-primary to-primary z-0"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0"></div>
        
        {/* Animated Shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto border border-secondary/30 bg-black/40 backdrop-blur-xl p-10 md:p-16 rounded-sm shadow-[0_0_50px_rgba(251,191,36,0.1)]">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to <span className="text-gold-gradient">Upgrade</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Don't settle for manual carpentry. Experience the durability and precision of factory-made interiors. Visit our Theni showroom today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="w-full sm:w-auto bg-secondary hover:bg-white text-primary text-lg font-bold py-4 px-12 rounded-sm shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center justify-center uppercase tracking-wider"
              >
                <Phone className="mr-3 w-5 h-5" />
                Call Now
              </a>
              <a 
                href={CONTACT_INFO.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-transparent border border-white/30 hover:border-secondary text-white hover:text-secondary text-lg font-bold py-4 px-12 rounded-sm transition-all duration-300 flex items-center justify-center uppercase tracking-wider"
              >
                Get Directions
                <ArrowRight className="ml-3 w-5 h-5" />
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;