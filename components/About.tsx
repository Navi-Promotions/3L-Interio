import React from 'react';
import { Settings, Factory, Building2, Ruler, ShieldCheck, PenTool } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/5 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-1/2 relative">
             <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-secondary/50 hidden md:block"></div>
             <div className="relative rounded-sm overflow-hidden shadow-2xl group">
               <img 
                 src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" 
                 alt="3L Interio Showroom" 
                 className="w-full h-[500px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
             </div>
             <div className="absolute -bottom-6 -right-6 bg-black text-white p-8 shadow-2xl border-l-4 border-secondary">
                <p className="text-5xl font-extrabold text-secondary">9+</p>
                <p className="text-sm uppercase tracking-[0.2em] mt-1">Years of<br/>Trust</p>
             </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm block mb-4">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Engineering Precision in <br /> Every Square Inch.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At 3L Interio, we don't just build furniture; we engineer lifestyle solutions. 
              Founded on the principles of mechanical precision, we have revolutionized the interior market in Theni by shifting from traditional carpentry to <strong>state-of-the-art factory manufacturing</strong>.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We ensure that every module—from your kitchen cabinet to your wardrobe slider—is machine-cut, edge-banded, and finished to perfection before it ever reaches your home.
            </p>

            <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                    <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-primary">Durability</h4>
                        <p className="text-xs text-gray-500">Built to last generations</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3">
                    <Ruler className="w-6 h-6 text-secondary flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-primary">Precision</h4>
                        <p className="text-xs text-gray-500">MM-level accuracy</p>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-24 relative">
            <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-primary">Our Milestones</h3>
                <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

                {/* 2015 */}
                <div className="bg-gray-50 p-8 border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-12 h-12 bg-primary text-secondary flex items-center justify-center font-bold rounded-full border-4 border-white shadow-lg mx-auto mb-6 relative z-10">2015</div>
                    <div className="text-center">
                        <PenTool className="w-8 h-8 text-secondary mx-auto mb-4" />
                        <h4 className="text-xl font-bold mb-2">Inception</h4>
                        <p className="text-gray-600 text-sm">Started as a dedicated team of interior contractors in Theni, focusing on quality craftsmanship.</p>
                    </div>
                </div>

                {/* 2018 */}
                <div className="bg-primary text-white p-8 border border-gray-800 relative group hover:-translate-y-2 transition-transform duration-300 shadow-2xl transform scale-105">
                    <div className="w-12 h-12 bg-secondary text-primary flex items-center justify-center font-bold rounded-full border-4 border-primary shadow-lg mx-auto mb-6 relative z-10">2018</div>
                    <div className="text-center">
                        <Factory className="w-8 h-8 text-secondary mx-auto mb-4" />
                        <h4 className="text-xl font-bold mb-2 text-secondary">Factory Setup</h4>
                        <p className="text-gray-300 text-sm">Established our own manufacturing unit with German machinery for ply & MDF processing.</p>
                    </div>
                </div>

                {/* 2024 */}
                <div className="bg-gray-50 p-8 border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-12 h-12 bg-primary text-secondary flex items-center justify-center font-bold rounded-full border-4 border-white shadow-lg mx-auto mb-6 relative z-10">2024</div>
                    <div className="text-center">
                        <Building2 className="w-8 h-8 text-secondary mx-auto mb-4" />
                        <h4 className="text-xl font-bold mb-2">Grand Showroom</h4>
                        <p className="text-gray-600 text-sm">Launched our exclusive experience center in Theni for clients to touch and feel our quality.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Factory Info Block */}
        <div className="bg-dark-surface text-white rounded-none p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                <div className="md:w-1/2">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">The Factory Advantage</h3>
                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-secondary">
                                <Settings className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Automated Precision</h4>
                                <p className="text-gray-400 text-sm mt-1">Our German-engineered machinery ensures cuts are accurate to the millimeter, eliminating gaps seen in manual carpentry.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-secondary">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Edge-Banding Technology</h4>
                                <p className="text-gray-400 text-sm mt-1">Machine-pressed edge banding provides a moisture-resistant seal that prevents peeling and increases longevity.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="md:w-1/2 w-full">
                    <img 
                        src="https://images.unsplash.com/photo-1581092921461-eab62e97a783?auto=format&fit=crop&w=800&q=80" 
                        alt="Factory Machinery" 
                        className="rounded-sm shadow-2xl border border-white/10 w-full"
                    />
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;