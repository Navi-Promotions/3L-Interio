import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { NavProps } from '../types';
import Logo from './Logo';

const Footer: React.FC<NavProps> = ({ onNavigate }) => {
  return (
    <footer id="contact" className="bg-black text-gray-400 border-t border-white/10">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Logo variant="light" />
            <p className="text-sm leading-relaxed text-gray-500">
              The premier destination for factory-made interiors in Theni. Engineering precision meets aesthetic design for your home and office.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onNavigate('home', 'home')} className="hover:text-secondary transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('about', 'top')} className="hover:text-secondary transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('services', 'top')} className="hover:text-secondary transition-colors">Services</button></li>
              <li><button onClick={() => onNavigate('why-us', 'top')} className="hover:text-secondary transition-colors">Why Choose Us</button></li>
              <li><button onClick={() => onNavigate('projects', 'top')} className="hover:text-secondary transition-colors">Projects</button></li>
              <li><button onClick={() => onNavigate('contact', 'top')} className="hover:text-secondary transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Our Expertise</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onNavigate('services', 'top')} className="hover:text-secondary transition-colors text-left">Factory-Made Interiors</button></li>
              <li><button onClick={() => onNavigate('services', 'top')} className="hover:text-secondary transition-colors text-left">Precision Engineering</button></li>
              <li><button onClick={() => onNavigate('services', 'top')} className="hover:text-secondary transition-colors text-left">Commercial Projects</button></li>
              <li><button onClick={() => onNavigate('services', 'top')} className="hover:text-secondary transition-colors text-left">Custom Furniture</button></li>
              <li><button onClick={() => onNavigate('services', 'top')} className="hover:text-secondary transition-colors text-left">Interior Design Consultation</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Visit Us</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-secondary mr-4 mt-1 flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-secondary mr-4 flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors text-white font-semibold">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-secondary mr-4 flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
              </li>
            </ul>
            <a 
              href={CONTACT_INFO.mapLink}
              target="_blank"
              rel="noopener noreferrer" 
              className="mt-8 inline-block text-xs font-bold uppercase tracking-wider text-black bg-secondary px-6 py-3 hover:bg-white transition-all"
            >
              Get Directions
            </a>
          </div>

        </div>
      </div>
      <div className="border-t border-white/5 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} 3L Interio. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-secondary">Privacy Policy</a>
            <a href="#" className="hover:text-secondary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;