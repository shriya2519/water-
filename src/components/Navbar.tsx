
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, BarChart2, BookOpen, Home, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WaterDropIcon } from './WaterDropIcon';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { path: '/', label: 'Home', icon: <Home className="w-4 h-4 mr-2" /> },
    { path: '/predictor', label: 'Predictor', icon: <WaterDropIcon className="w-4 h-4 mr-2" /> },
    { path: '/dashboard', label: 'Dashboard', icon: <BarChart2 className="w-4 h-4 mr-2" /> },
    { path: '/guide', label: 'Guide', icon: <BookOpen className="w-4 h-4 mr-2" /> },
    { path: '/about', label: 'About', icon: <Settings className="w-4 h-4 mr-2" /> }
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? 'glass shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <WaterDropIcon size={28} className="text-blue-600" />
          </motion.div>
          <span className="text-xl font-semibold tracking-tight text-gradient-blue">Water Quality Predictor</span>
        </NavLink>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors ${
                  isActive 
                    ? 'text-blue-700 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 dark:text-gray-300 dark:hover:text-blue-300'
                }`
              }
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden glass px-2 py-4 shadow-lg"
        >
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `px-4 py-3 rounded-md text-sm font-medium flex items-center ${
                    isActive 
                      ? 'text-blue-700 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 dark:text-gray-300 dark:hover:text-blue-300'
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.icon}
                {link.label}
              </NavLink>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};
