import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Play } from 'react-feather';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative h-[100vh]  w-full flex justify-center items-center text-white ">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
          alt="Data annotation workspace"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-80"></div>
      </div>

      {/* Floating elements */}
      <motion.div 
        animate={{
          x: [0, 20, 0],
          y: [0, 15, 0],
          transition: { duration: 15, repeat: Infinity, ease: "linear" }
        }}
        className="absolute top-20 left-20 w-32 h-32 rounded-full bg-amber-500 opacity-20 blur-xl"
      />
      <motion.div 
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
          transition: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
        className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-emerald-500 opacity-20 blur-xl"
      />

      <div className="px-4 md:py-36 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={variants} className="mb-6">
            <span className="inline-block bg-white text-gray-900 bg-opacity-90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium">
              Trusted by AI teams worldwide
            </span>
          </motion.div>

          <motion.h1 
            variants={variants}
            className="text-[30px] sm:text-5xl md:text-6xl  mb-6 leading-tight"
          >
            <span className="text-white">
              Precision Data Annotation
            </span>
            <br />
            <span className="text-amber-400">For Smarter AI Models</span>
          </motion.h1>

          <motion.p 
            variants={variants}
            className="md:text-2xl text-lg mb-8 text-gray-300 max-w-3xl mx-auto"
          >
            Human-verified datasets with industry-leading quality control, delivering the clean data your machine learning models deserve.
          </motion.p>

          <motion.div 
            variants={variants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
           <a href="/contact"><motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-amber-500 text-gray-900 px-8  py-2 rounded-lg font-bold hover:bg-amber-400 transition"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.button></a>
            
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 border-2 border-white px-8  py-2 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </motion.button> */}
          </motion.div>

          <motion.div 
            variants={variants}
            className="mt-12 flex flex-wrap justify-center gap-6 text-gray-300"
          >
            {/* {[
              "99.9% Accuracy Guarantee",
              "ISO 27001 Certified",
              "24/7 Support",
              "Enterprise-Grade Security"
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <svg className="w-5 h-5 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))} */}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"
      />
    </section>
  );
};

export default Hero;