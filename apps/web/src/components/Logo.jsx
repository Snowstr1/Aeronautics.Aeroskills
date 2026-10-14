import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <img
      src="/images/logos/aeronautics-logo.png"
      alt="Aeronautics Minimalist Logo"
      className={`h-10 sm:h-12 w-auto object-contain transition-all duration-300 ${className}`}
    />
  );
};

export default Logo;