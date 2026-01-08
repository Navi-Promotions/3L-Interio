import React from 'react';
import { Award, Briefcase, GraduationCap, Quote } from 'lucide-react';

const Founder: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-white rounded-none shadow-xl overflow-hidden border border-gray-100">
          
          {/* Left: Image/Profile Area */}
          <div className="lg:w-1/3 bg-primary text-white p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
             {/* Abstract BG */}
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary to-transparent"></div>
             
             <div className="w-40 h-40 bg-dark-surface rounded-full border-4 border-secondary/30 mb-6 flex items-center justify-center relative z-10 shadow-2xl">
                <Award className="w-16 h-16 text-secondary" />
             </div>
             
             <h3 className="text-2xl font-bold tracking-wide relative z-10">Mr. Founder Name</h3>
             <p className="text-secondary text-sm font-medium tracking-widest uppercase mt-2 relative z-10">Founder & Chief Engineer</p>
             
             <div className="mt-8 relative z-10">
                 <Quote className="w-8 h-8 text-secondary/40 mx-auto mb-2 rotate-180" />
                 <p className="text-gray-400 italic text-sm">
                    "My vision is to bring world-class engineering standards to every home in Theni."
                 </p>
             </div>
          </div>

          {/* Right: Content Area */}
          <div className="lg:w-2/3 p-10 md:p-14 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Technical Leadership</h2>
            
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              3L Interio is built on a foundation of engineering excellence. Unlike traditional design firms, our leadership is rooted in mechanical precision. With over a decade of technical expertise, we ensure that every project is not just artistically pleasing but structurally sound.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start p-4 bg-gray-50 rounded border border-gray-100 hover:border-secondary/30 transition-colors">
                <div className="bg-white p-3 rounded shadow-sm mr-4 text-secondary">
                    <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Education</h4>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      <li>• B.E Mechanical (2007)</li>
                      <li>• M.E Mechanical (2009)</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start p-4 bg-gray-50 rounded border border-gray-100 hover:border-secondary/30 transition-colors">
                <div className="bg-white p-3 rounded shadow-sm mr-4 text-secondary">
                    <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Global Experience</h4>
                  <p className="text-sm text-primary font-medium mt-1">Tyco Fire & Security LLP, Abu Dhabi (2010)</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Extensive experience in Quality Control and Safety Standards in international environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;