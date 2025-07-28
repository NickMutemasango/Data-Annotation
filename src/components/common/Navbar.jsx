import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants
  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%" }
  };

  // Reusable mobile nav link component
  const MobileNavLink = ({ to, children }) => (
    <NavLink 
      to={to}
      onClick={() => {
        setIsOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className={({ isActive }) => 
        `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
          isActive 
            ? 'text-[#10B981] bg-[#10B981]/10 border-l-4 border-[#10B981]' 
            : 'text-gray-700 hover:text-[#10B981] hover:bg-gray-50'
        }`
      }
    >
      {children}
    </NavLink>
  );

  return (
    <nav className="shadow-lg bg-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold">DataLabel Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `relative text-gray-700 hover:text-[#10B981] transition-colors duration-300 ${
                  isActive ? 'text-[#10B981] font-medium' : ''
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Home
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-[#10B981]"
                      variants={underlineVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </>
              )}
            </NavLink>
            
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `relative text-gray-700 hover:text-[#10B981] transition-colors duration-300 ${
                  isActive ? 'text-[#10B981] font-medium' : ''
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Services
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-[#10B981]"
                      variants={underlineVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </>
              )}
            </NavLink>
            
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `relative text-gray-700 hover:text-[#10B981] transition-colors duration-300 ${
                  isActive ? 'text-[#10B981] font-medium' : ''
                }`
              }
            >
              {({ isActive }) => (
                <>
                  About
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-[#10B981]"
                      variants={underlineVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </>
              )}
            </NavLink>
            
            <NavLink 
              to="/case-studies" 
              className={({ isActive }) => 
                `relative text-gray-700 hover:text-[#10B981] transition-colors duration-300 ${
                  isActive ? 'text-[#10B981] font-medium' : ''
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Case Studies
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-[#10B981]"
                      variants={underlineVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </>
              )}
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `relative text-gray-700 hover:text-[#10B981] transition-colors duration-300 ${
                  isActive ? 'text-[#10B981] font-medium' : ''
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Contact
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-[#10B981]"
                      variants={underlineVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none transition-transform duration-300 hover:scale-110"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-2 pb-3 space-y-1">
                <MobileNavLink to="/">Home</MobileNavLink>
                <MobileNavLink to="/services">Services</MobileNavLink>
                <MobileNavLink to="/about">About</MobileNavLink>
                <MobileNavLink to="/case-studies">Case Studies</MobileNavLink>
                <MobileNavLink to="/contact">Contact</MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;