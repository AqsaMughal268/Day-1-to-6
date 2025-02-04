import React from 'react';

interface ButtonProps {
  text: string;
  classNames?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, classNames, onClick }) => {
  return (
    <button 
      className={`bg-blue-500 text-white font-bold ${classNames} hover:bg-blue-600 transition-all duration-300`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
