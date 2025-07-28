import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import ServicesPreview from '../components/sections/ServicesPreview';
import WhyChooseUs from '../components/sections/WhyChooseUs';
// import ClientTestimonials from '../components/sections/ClientTestimonials';
import Stats from '../components/sections/Stats';
import CTA from '../components/sections/CTA';
import Tools from '../components/sections/Tools';


const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Preview */}
     <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="container mx-auto px-4">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-[30px] md:text-4xl font-bold mb-4 text-gray-900">
        Precision Annotation Services
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Delivering pixel-perfect data labeling for your AI models with human expertise
      </p>
    </motion.div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Image Annotation */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-80 z-10"></div>
        <img 
          src="https://avistos.com/images/services/skeleton.jpg" 
          alt="Image annotation"
          className="w-full  object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 p-6 z-20">
          <div className="bg-[#10B981] text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Image Annotation</h3>
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              2D/3D Bounding Boxes
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Semantic Segmentation
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Keypoint Annotation
            </li>
          </ul>
         <a href="/services">
           <button className="mt-4 px-4 py-2 bg-[#10B981] text-white rounded-lg text-sm font-medium hover:bg-[#0e9f72] transition-colors">
            Learn More
          </button>
         </a>
        </div>
      </motion.div>

      {/* Text Annotation */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-80 z-10"></div>
        <img 
          src="https://i0.wp.com/spotintelligence.com/wp-content/uploads/2024/10/text-annotation-types.jpg?fit=1920%2C1080&ssl=1" 
          alt="Text annotation"
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 p-6 z-20">
          <div className="bg-[#10B981] text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Text Annotation</h3>
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Named Entity Recognition
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Sentiment Analysis
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Intent Classification
            </li>
          </ul>
          <a href="/services">
          <button className="mt-4 px-4 py-2 bg-[#10B981] text-white rounded-lg text-sm font-medium hover:bg-[#0e9f72] transition-colors">
            Learn More
          </button>
          </a>
        </div>
      </motion.div>

      {/* Video Annotation */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-60 z-10"></div>
        <img 
          src="https://keymakr.com/blog/content/images/2024/06/KM66main.jpg" 
          alt="Video annotation"
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 p-6 z-20">
          <div className="bg-[#10B981] text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Video Annotation</h3>
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Object Tracking
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Activity Recognition
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Temporal Segmentation
            </li>
          </ul>
          <a href="/services"><button className="mt-4 px-4 py-2 bg-[#10B981] text-white rounded-lg text-sm font-medium hover:bg-[#0e9f72] transition-colors">
            Learn More
          </button></a>
        </div>
      </motion.div>
    </div>

    {/* Second Row - Audio and Other Services */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      {/* Audio Annotation */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-50 z-10"></div>
        <img 
          src="https://exemplary.ai/img/blog/diarization/diarization.svg" 
          alt="Audio annotation"
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 p-6 z-20">
          <div className="bg-[#10B981] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Audio Annotation</h3>
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Speech-to-Text
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Speaker Identification
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Emotion Detection
            </li>
          </ul>
          <a href="/services"><button className="mt-4 px-4 py-2 bg-[#10B981] text-white rounded-lg text-sm font-medium hover:bg-[#0e9f72] transition-colors">
            Learn More
          </button></a>
        </div>
      </motion.div>

      {/* Specialized Services */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-[#10B981]"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
        <div className="relative p-8 h-full flex flex-col justify-between z-20">
          <div>
            <div className="bg-white text-[#10B981] rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Specialized Services</h3>
            <ul className="space-y-3 text-gray-100">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Medical Imaging Annotation
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Autonomous Vehicle Data
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Sports Data Labeling
              </li>
            </ul>
          </div>
          <a href="/contact"><button className="mt-6 px-6 py-2 bg-white text-[#10B981] rounded-lg font-medium hover:bg-gray-100 transition-colors w-full text-center">
            Custom Solution Inquiry
          </button></a>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* Testimonials */}
      {/* <ClientTestimonials /> */}
      
      {/* Tools Section */}
      <Tools/>
      
      {/* Stats */}
      <Stats />
      
      {/* CTA */}
      <CTA />
    </div>
  );
};

export default Home;