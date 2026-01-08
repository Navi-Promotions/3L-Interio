import React from 'react';
import { Heart, Lightbulb, Users, Target } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Precision First",
    description: "We believe in the millimeter. Our engineering background dictates that every cut, joint, and edge must be perfect."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly upgrade our machinery and materials (from Ply to Boiling Water Proof MDF) to offer the best durability."
  },
  {
    icon: Heart,
    title: "Customer Obsession",
    description: "We don't just sell interiors; we build relationships. Our post-handover service is as rigorous as our installation."
  },
  {
    icon: Users,
    title: "Transparency",
    description: "No hidden costs. No material swapping. What we quote is exactly what we use, verified by you at our factory."
  }
];

const CoreValues: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">Our Ethos</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Core Values</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-secondary/50 transition-all group">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;