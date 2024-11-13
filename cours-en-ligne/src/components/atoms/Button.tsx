import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  className = '', 
  type = 'button',
  disabled = false
}) => {
  return (
    <button 
      onClick={onClick} 
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;