import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'light' }) => {
  // Brand colors
  const strokeColor = "#fbbf24"; // The yellow/gold from the image
  const textColor = variant === 'light' ? '#FFFFFF' : '#0a0a0a';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Geometric Icon */}
      <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
        <path 
          d="M50 15 L85 50 L50 85 L15 50 Z" 
          stroke={strokeColor} 
          strokeWidth="8" 
          strokeLinecap="square"
        />
        <path 
          d="M50 28 L72 50 L50 72 L28 50 Z" 
          stroke={strokeColor} 
          strokeWidth="6" 
        />
      </svg>
      
      {/* Text */}
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-extrabold tracking-tighter leading-none" style={{ color: textColor }}>
          3L INTERIO
        </h1>
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-90" style={{ color: variant === 'light' ? '#fbbf24' : '#d97706' }}>
          Factory - Made
        </span>
      </div>
    </div>
  );
};

export default Logo;