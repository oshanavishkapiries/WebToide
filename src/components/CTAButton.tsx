
import React from "react";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded transition-all duration-200";
  
  const variantClasses = {
    primary: "bg-nova-blue text-white hover:bg-blue-600 shadow-sm hover:shadow-md",
    secondary: "bg-white text-nova-blue border border-nova-blue hover:bg-nova-lightgray",
    outline: "bg-transparent text-nova-blue border border-nova-blue hover:bg-nova-lightgray",
  };
  
  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-5 py-2.5",
    lg: "text-lg px-6 py-3",
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default CTAButton;
