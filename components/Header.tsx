import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { NavProps } from '../types';
import Logo from './Logo';

const Header: React.FC<NavProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', view: 'home', id: 'home' },
    { name: 'About', view: 'about', id: 'top' },
    { name: 'Services', view: 'services', id: 'top' },
    { name: 'Why Us', view: 'why-us', id: 'top' },
    { name: 'Projects', view: 'projects', id: 'top' },
    { name: 'Contact', view: 'contact', id: 'top' },
  ];

  const handleNavClick = (view: 'home' | 'about' | 'services' | 'why-us' | 'projects' | 'contact', id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(view, id);
  };

  return (
    <>
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled || currentView !== 'home'
          ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10 shadow-2xl' 
          : 'bg-gradient-to-b from-black/80 to-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => handleNavClick('home', 'home')} className="relative z-50 group text-left">
          <Logo variant="light" className="transition-transform duration-300 group-hover:scale-105" />
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
            <nav className="flex space-x-8">
            {navItems.map((item) => (
                <button 
                  key={item.name} 
                  onClick={() => handleNavClick(item.view as any, item.id)}
                  className={`group relative text-sm font-medium tracking-widest transition-colors uppercase py-2 ${
                    currentView === item.view ? 'text-secondary' : 'text-gray-300 hover:text-secondary'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                    currentView === item.view ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
            ))}
            </nav>

            <div className="w-px h-6 bg-white/20"></div>

            <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Facebook className="w-4 h-4" /></a>
            </div>

            <a 
                href={`tel:${CONTACT_INFO.phone}`} 
                className="flex items-center bg-secondary hover:bg-white text-primary hover:text-primary px-5 py-2.5 rounded-sm transition-all duration-300 font-bold tracking-wide uppercase text-xs shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
                <Phone className="w-3 h-3 mr-2" />
                {CONTACT_INFO.phone}
            </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden z-50 p-2 text-secondary hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>
    </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary to-transparent pointer-events-none"></div>

        <nav className="flex flex-col space-y-6 text-center z-10">
          {navItems.map((item, idx) => (
            <button 
              key={item.name} 
              onClick={() => handleNavClick(item.view as any, item.id)}
              className="text-3xl font-bold text-white hover:text-secondary uppercase tracking-widest transition-transform hover:scale-110"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="mt-12 flex flex-col items-center space-y-6 z-10">
            <a 
                href={`tel:${CONTACT_INFO.phone}`} 
                className="flex items-center justify-center text-primary bg-secondary px-8 py-3 font-bold uppercase tracking-widest rounded-sm"
            >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
            </a>
            <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Instagram className="w-6 h-6" /></a>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Facebook className="w-6 h-6" /></a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;