import type React from "react";

interface ButtonProps {
  text?: string;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ text, className, icon }) => {
  return (
    <button
      className={`border py-2 px-7 flex items-center justify-center !cursor-pointer gap-2 rounded-md ${className}`}
    >
      {icon}
      {text || "Button"}
    </button>
  );
};

export default Button;
