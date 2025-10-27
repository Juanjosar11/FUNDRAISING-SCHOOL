import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glassy';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon,
  className = '',
  disabled = false,
}) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2 
    font-medium rounded-full transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `;

  const variantClasses = {
    primary: `
      bg-white text-black border border-blue-600
      hover:bg-blue-600 hover:text-white hover:border-white
    `,
    secondary: `
      bg-transparent text-white border border-white
      hover:bg-white hover:text-black
    `,
    glassy: `
      bg-white/12 text-white border border-white/12 backdrop-blur-sm
      hover:bg-white hover:text-black
    `,
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant as keyof typeof variantClasses]} ${sizeClasses[size as keyof typeof sizeClasses]} ${className}`;

  const buttonContent = (
    <>
      {children}
      {icon && (
        <motion.div
          className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600"
          whileHover={{ rotate: 0 }}
          initial={{ rotate: -45 }}
        >
          {icon}
        </motion.div>
      )}
    </>
  );

  if (href) {
    // Handle external links
    if (href.startsWith('http')) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {buttonContent}
        </motion.a>
      );
    }
    
    // Handle internal links
    return (
      <Link href={href}>
        <motion.div
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {buttonContent}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;