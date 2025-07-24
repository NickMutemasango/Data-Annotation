import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'react-feather';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCaseStudiesHovered, setIsCaseStudiesHovered] = useState(false);

  // Animation variants
  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%" }
  };

  return (
    <nav className="shadow-lg bg-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold ">DataLabel Pro</span>
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
            
            {/* Case Studies Dropdown */}
            {/* <div 
              className="relative"
              onMouseEnter={() => setIsCaseStudiesHovered(true)}
              onMouseLeave={() => setIsCaseStudiesHovered(false)}
            >
              <button className={`relative flex items-center text-gray-700 hover:text-[#10B981] transition-colors duration-300 ${
                window.location.pathname.includes('/case-studies') ? 'text-[#10B981] font-medium' : ''
              }`}>
                Case Studies
                {isCaseStudiesHovered ? (
                  <ChevronUp className="ml-1 h-4 w-4 transition-transform duration-200" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                )}
              </button>

              {window.location.pathname.includes('/case-studies') && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#10B981]"
                  variants={underlineVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.3 }}
                />
              )}

              <AnimatePresence>
                {isCaseStudiesHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-100"
                  >
                    <div className="py-1">
                      <NavLink
                        to="/case-studies"
                        className={({ isActive }) => 
                          `relative block px-4 py-2 text-gray-700 hover:text-[#10B981] transition-colors duration-200 ${
                            isActive ? 'text-[#10B981] font-medium' : ''
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            All Case Studies
                            {isActive && (
                              <motion.div
                                className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#10B981]"
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
                        to="/case-studies/1"
                        className={({ isActive }) => 
                          `relative block px-4 py-2 text-gray-700 hover:text-[#10B981] transition-colors duration-200 ${
                            isActive ? 'text-[#10B981] font-medium' : ''
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            Autonomous Vehicles
                            {isActive && (
                              <motion.div
                                className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#10B981]"
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
                        to="/case-studies/2"
                        className={({ isActive }) => 
                          `relative block px-4 py-2 text-gray-700 hover:text-[#10B981] transition-colors duration-200 ${
                            isActive ? 'text-[#10B981] font-medium' : ''
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            Medical Imaging
                            {isActive && (
                              <motion.div
                                className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#10B981]"
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
                        to="/case-studies/3"
                        className={({ isActive }) => 
                          `relative block px-4 py-2 text-gray-700 hover:text-[#10B981] transition-colors duration-200 ${
                            isActive ? 'text-[#10B981] font-medium' : ''
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            E-commerce
                            {isActive && (
                              <motion.div
                                className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#10B981]"
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div> */}

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
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-[#10B981] bg-[#10B981]/10 border-l-4 border-[#10B981]' 
                        : 'text-gray-700 hover:text-[#10B981] hover:bg-gray-50'
                    }`
                  }
                >
                  Home
                </NavLink>
                
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-[#10B981] bg-[#10B981]/10 border-l-4 border-[#10B981]' 
                        : 'text-gray-700 hover:text-[#10B981] hover:bg-gray-50'
                    }`
                  }
                >
                  Services
                </NavLink>
                
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-[#10B981] bg-[#10B981]/10 border-l-4 border-[#10B981]' 
                        : 'text-gray-700 hover:text-[#10B981] hover:bg-gray-50'
                    }`
                  }
                >
                  About
                </NavLink>
                
                {/* Mobile Case Studies Dropdown */}
                <div className="pl-3">
                  <div className={`block px-3 py-2 rounded-md text-base font-medium ${
                    window.location.pathname.includes('/case-studies')
                      ? 'text-[#10B981] bg-[#10B981]/10 border-l-4 border-[#10B981]'
                      : 'text-gray-700'
                  }`}>
                    Case Studies
                  </div>
                  <div className="pl-4 space-y-1">
                    <NavLink 
                      to="/case-studies" 
                      className={({ isActive }) => 
                        `block py-2 text-sm transition-colors duration-300 ${
                          isActive 
                            ? 'text-[#10B981] font-medium' 
                            : 'text-gray-600 hover:text-[#10B981]'
                        }`
                      }
                    >
                      All Case Studies
                    </NavLink>
                    <NavLink 
                      to="/case-studies/1" 
                      className={({ isActive }) => 
                        `block py-2 text-sm transition-colors duration-300 ${
                          isActive 
                            ? 'text-[#10B981] font-medium' 
                            : 'text-gray-600 hover:text-[#10B981]'
                        }`
                      }
                    >
                      Autonomous Vehicles
                    </NavLink>
                    <NavLink 
                      to="/case-studies/2" 
                      className={({ isActive }) => 
                        `block py-2 text-sm transition-colors duration-300 ${
                          isActive 
                            ? 'text-[#10B981] font-medium' 
                            : 'text-gray-600 hover:text-[#10B981]'
                        }`
                      }
                    >
                      Medical Imaging
                    </NavLink>
                    <NavLink 
                      to="/case-studies/3" 
                      className={({ isActive }) => 
                        `block py-2 text-sm transition-colors duration-300 ${
                          isActive 
                            ? 'text-[#10B981] font-medium' 
                            : 'text-gray-600 hover:text-[#10B981]'
                        }`
                      }
                    >
                      E-commerce
                    </NavLink>
                  </div>
                </div>
                
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-[#10B981] bg-[#10B981]/10 border-l-4 border-[#10B981]' 
                        : 'text-gray-700 hover:text-[#10B981] hover:bg-gray-50'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;