import { motion } from 'framer-motion';
import ContactForm from '../components/sections/ContactForm';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaHeadset } from 'react-icons/fa';

const Contact = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Header with Gradient Background */}
      <div className="bg-gradient-to-r from-[#10B981] to-[#059669] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Our team is ready to discuss your data annotation needs
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Contact Card 1 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="bg-[#10B981]/10 p-3 rounded-full w-max mb-4">
              <FaEnvelope className="text-2xl text-[#10B981]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">For general inquiries</p>
            <a 
              href="mailto:info@pixelannotation.africa" 
              className="text-[#10B981] font-medium hover:underline"
            >
              info@pixelannotation.africa
            </a>
          </motion.div>

          {/* Contact Card 2 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="bg-[#10B981]/10 p-3 rounded-full w-max mb-4">
              <FaHeadset className="text-2xl text-[#10B981]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak with our team</p>
            <a 
              href="tel:+254700123456" 
              className="text-[#10B981] font-medium hover:underline"
            >
              +254 700 123 456
            </a>
          </motion.div>

          {/* Contact Card 3 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="bg-[#10B981]/10 p-3 rounded-full w-max mb-4">
              <FaMapMarkerAlt className="text-2xl text-[#10B981]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-2">123 Tech Street</p>
            <p className="text-gray-600">Nairobi, Kenya</p>
          </motion.div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Send Us a Message
            </h2>
            <ContactForm />
          </motion.div>

          {/* Additional Info Section */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#10B981] text-white p-8 rounded-xl shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
              <div className="flex items-start mb-6">
                <FaClock className="text-xl mr-4 mt-1" />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-white/90">8:00 AM - 5:00 PM EAT</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaClock className="text-xl mr-4 mt-1" />
                <div>
                  <p className="font-medium">Saturday</p>
                  <p className="text-white/90">9:00 AM - 1:00 PM EAT</p>
                </div>
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808206679712!2d36.82115931475391!3d-1.2923598359807724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664fecf0f%3A0x7c5c991b4b5d1a1!2sNairobi%20Global%20Trade%20Centre!5e0!3m2!1sen!2ske!4v1623849207995!5m2!1sen!2ske"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Nairobi Office Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;