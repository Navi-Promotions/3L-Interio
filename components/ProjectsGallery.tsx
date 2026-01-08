import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { X, ArrowRight, Maximize2, Check } from 'lucide-react';
import { ProjectItem } from '../types';

const categories = ['All', 'Kitchen', 'Wardrobe', 'Living', 'Commercial'];

const ProjectsGallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === filter);

  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === cat 
                  ? 'bg-primary text-white shadow-lg transform scale-105' 
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-secondary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
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
                className="group relative bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white">
                        <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-secondary text-primary text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center text-secondary text-xs font-bold uppercase tracking-wider">
                    View Details <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-sm flex flex-col md:flex-row relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-black hover:text-white p-2 rounded-full transition-colors text-black/50 backdrop-blur-md"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Image Section */}
                <div className="md:w-3/5 h-[300px] md:h-auto relative">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 md:hidden">
                        <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                    </div>
                </div>

                {/* Content Section */}
                <div className="md:w-2/5 p-8 md:p-12 flex flex-col bg-white">
                  <div className="hidden md:block mb-6">
                    <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-2 block">
                        Project Overview
                    </span>
                    <h2 className="text-3xl font-bold text-primary">{selectedProject.title}</h2>
                  </div>

                  <div className="space-y-6 flex-grow">
                    <div>
                        <h4 className="font-bold text-primary mb-2 text-sm uppercase tracking-wide">Description</h4>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            {selectedProject.description}
                            <br/><br/>
                            Designed with our signature engineering precision, this project exemplifies the perfect balance of aesthetics and functionality. Built at our Theni factory and installed in just 48 hours.
                        </p>
                    </div>

                    <div>
                         <h4 className="font-bold text-primary mb-3 text-sm uppercase tracking-wide">Specifications</h4>
                         <ul className="space-y-2">
                             <li className="flex items-start text-sm text-gray-600">
                                <Check className="w-4 h-4 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                                <span>Material: High Density Water Resistant Ply</span>
                             </li>
                             <li className="flex items-start text-sm text-gray-600">
                                <Check className="w-4 h-4 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                                <span>Finish: Premium Acrylic / Veneer</span>
                             </li>
                             <li className="flex items-start text-sm text-gray-600">
                                <Check className="w-4 h-4 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                                <span>Hardware: Blum Soft-Close Systems</span>
                             </li>
                             <li className="flex items-start text-sm text-gray-600">
                                <Check className="w-4 h-4 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                                <span>Warranty: 10 Years on Mechanism</span>
                             </li>
                         </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-100">
                     <p className="text-center text-gray-400 text-xs mb-4">Inspired by this design?</p>
                     <a 
                        href="#contact" 
                        onClick={() => setSelectedProject(null)}
                        className="block w-full bg-primary hover:bg-secondary hover:text-primary text-white text-center font-bold py-4 rounded-sm transition-all duration-300 uppercase tracking-widest text-sm"
                     >
                        Get a Free Quote
                     </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsGallery;