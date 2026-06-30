
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const CTAButton = ({ children, className = '', onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#ea6b42] hover:bg-[#d45a33] text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};