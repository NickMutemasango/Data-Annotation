import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#10B981] to-[#3B82F6]">
                PixelAnnotation
              </span>
              <span className="ml-2 px-2 py-1 bg-[#10B981]/10 text-[#10B981] text-xs font-bold rounded">
                AFRICA
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              High-quality data annotation services powered by African talent and global standards.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {['twitter', 'linkedin', 'github'].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#10B981] transition-colors"
                >
                  <span className="sr-only">{platform}</span>
                  <img 
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${platform}.svg`} 
                    alt={platform} 
                    className="w-5 h-5 filter invert"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-[#10B981] rounded-full mr-2"></span>
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Image Annotation", path: "/services#image" },
                { name: "Text Annotation", path: "/services#text" },
                { name: "Video Annotation", path: "/services#video" },
                { name: "Audio Annotation", path: "/services#audio" },
                { name: "Specialized Labeling", path: "/services#specialized" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={item.path} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-[#3B82F6] rounded-full mr-2"></span>
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Case Studies", path: "/case-studies" },
                { name: "Our Team", path: "/team" },
                { name: "Careers", path: "/careers" },
                { name: "Blog", path: "/blog" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={item.path} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-[#F59E0B] rounded-full mr-2"></span>
              Contact
            </h4>
            <address className="text-gray-400 not-italic space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p>123 Tech Street</p>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@pixelannotation.africa" className="hover:text-white">info@pixelannotation.africa</a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+254700123456" className="hover:text-white">+254 700 123 456</a>
              </div>
            </address>
          </motion.div>
        </div>

        {/* Divider & Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PixelAnnotation Africa. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;