import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const categories = ['All', 'Kitchen', 'Wardrobe', 'Living', 'Commercial'];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
       {/* Background Accents */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
       <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
       
       <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <div className="max-w-2xl">
                <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm block mb-3">
                   Our Portfolio
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                   Recent <span className="text-secondary">Masterpieces</span>
                </h2>
             </div>
             
             {/* Filters */}
             <div className="flex flex-wrap gap-4 md:gap-8">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`text-sm md:text-base font-medium transition-colors uppercase tracking-wider relative group pb-1 ${
                      filter === cat ? 'text-secondary' : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    {cat}
                    {filter === cat && (
                      <motion.div 
                        layoutId="underline" 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"
                      />
                    )}
                  </button>
                ))}
             </div>
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer border border-white/5 hover:border-secondary/30"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-secondary text-xs uppercase tracking-widest font-bold mb-2">
                       {project.category}
                    </p>
                    <div className="flex justify-between items-start">
                        <h3 className="text-white text-xl font-bold max-w-[80%] leading-tight">
                            {project.title}
                        </h3>
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-secondary hover:text-primary">
                            <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </div>
                    <p className="text-gray-300 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 line-clamp-2">
                        {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
       </div>
    </section>
  );
};

export default Projects;