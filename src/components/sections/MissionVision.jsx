import { motion } from 'framer-motion';

const MissionVision = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative  overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-emerald-50/30"></div>
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-amber-50/30"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-200/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="container mx-auto  max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full text-sm font-semibold shadow-md">
            Our Core
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Driving <span className="text-emerald-600">Innovation</span> Forward
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The principles that guide our journey and shape our future
          </p>
        </motion.div>

        {/* Vertical Split Layout */}
        <div className="flex flex-col lg:flex-row min-h-[500px] rounded-2xl overflow-hidden shadow-xl">
          {/* Mission - Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 bg-gradient-to-br from-emerald-600 to-emerald-700 p-12 flex flex-col justify-center relative"
          >
            <div className="absolute top-8 right-8 text-8xl text-emerald-500/20 font-bold">01</div>
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-lg text-emerald-100 leading-relaxed mb-8">
                To democratize access to high-quality AI training data by connecting global AI innovators with Africa's 
                talented workforce, delivering exceptional value through accurate, scalable, and ethical data annotation 
                services.
              </p>
              <div className="flex items-center text-emerald-200">
                <span className="w-4 h-4 bg-white rounded-full mr-3"></span>
                <span className="font-medium">Core Objective</span>
              </div>
            </div>
          </motion.div>

          {/* Vision - Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:w-1/2 bg-gradient-to-br from-amber-500 to-amber-600 p-12 flex flex-col justify-center relative"
          >
            <div className="absolute top-8 left-8 text-8xl text-amber-400/20 font-bold">02</div>
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-lg text-amber-100 leading-relaxed mb-8">
                To become Africa's leading data annotation platform while creating meaningful employment opportunities 
                for thousands of skilled professionals across the continent, fueling the next generation of AI innovation.
              </p>
              <div className="flex items-center text-amber-200">
                <span className="w-4 h-4 bg-white rounded-full mr-3"></span>
                <span className="font-medium">Future Aspiration</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Connecting Element */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 rounded-full bg-white border-8 border-emerald-100 shadow-xl flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-amber-500"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MissionVision;