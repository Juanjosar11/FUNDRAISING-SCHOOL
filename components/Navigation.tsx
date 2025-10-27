import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Speakers', href: '/speakers' },
    { label: 'Curriculum', href: '/curriculum' },
    { label: 'Q&A', href: '/faq' },
    { label: 'Apply', href: '/apply' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 ${className}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.12, 0.23, 0.5, 1] }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-white">
              Fundraising School
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white hover:text-blue-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden w-9 h-9 flex items-center justify-center"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 relative">
              <motion.span
                className="absolute w-full h-0.5 bg-white rounded-full"
                style={{ top: '25%' }}
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 6 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute w-full h-0.5 bg-white rounded-full"
                style={{ top: '50%' }}
                animate={{
                  opacity: isOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute w-full h-0.5 bg-white rounded-full"
                style={{ top: '75%' }}
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -6 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-black/95 backdrop-blur-md rounded-b-2xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-white hover:text-blue-400 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;