import { motion } from 'framer-motion';
import Box from '../Pictures/boxes.png'
import Seg from '../Pictures/segmatation.png';


const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Image Annotation',
      description: 'Basic labeling of objects in images',
      detailedDescription: 'We provide precise labeling of objects within images to create high-quality training data for computer vision models. Our image annotation services include object identification, classification, and tagging with consistent labeling standards across your entire dataset.',
      image: 'https://keymakr.com/blog/content/images/2021/05/bbox.jpg'
    },
    {
      id: 2,
      title: '2D Bounding Boxes',
      description: 'Rectangular boundary labeling',
      detailedDescription: 'Our 2D bounding box annotation creates precise rectangular boundaries around objects of interest. This fundamental annotation type is ideal for object detection models, enabling your AI to recognize and locate items within images with high accuracy.',
      image: Box
    },
    {
      id: 3,
      title: '3D Cuboid Annotation',
      description: 'Volumetric labeling ',
       detailedDescription: 'Our 2D bounding box annotation creates precise rectangular boundaries around objects of interest. This fundamental annotation type is ideal for object detection models, enabling your AI to recognize and locate items within images with high accuracy.',
      image: 'https://alquinox.com/wp-content/uploads/2024/01/Cuboids-Annotation-1.jpg'
    },
    {
      id: 4,
      title: 'Polygon Annotation',
      description: 'Complex shape labeling ',
       detailedDescription: 'Our 2D bounding box annotation creates precise rectangular boundaries around objects of interest. This fundamental annotation type is ideal for object detection models, enabling your AI to recognize and locate items within images with high accuracy.',
      image: 'https://keymakr.com/blog/content/images/2021/05/Screenshot-from-2021-02-01-15-01-45.jpg'
    },
    {
      id: 5,
      title: 'Segmentation',
      description: 'Pixel-level labeling for d',
       detailedDescription: 'Our 2D bounding box annotation creates precise rectangular boundaries around objects of interest. This fundamental annotation type is ideal for object detection models, enabling your AI to recognize and locate items within images with high accuracy.',
      image: Seg
    },
    {
      id: 6,
      title: 'Key Point Annotation',
      description: 'Landmark labeling for p',
       detailedDescription: 'Our 2D bounding box annotation creates precise rectangular boundaries around objects of interest. This fundamental annotation type is ideal for object detection models, enabling your AI to recognize and locate items within images with high accuracy.',
      image: 'https://cdn.prod.website-files.com/65844ee8089ad9744a76677c/65ae1ca7b9eea4cecba3fcac_kickboxing-keypoints.jpg.webp'
    },
    {
      id: 7,
      title: 'Medical Data Annotation',
      description: 'Specialized labeling ',
       detailedDescription: 'Our 2D bounding box annotation creates precise rectangular boundaries around objects of interest. This fundamental annotation type is ideal for object detection models, enabling your AI to recognize and locate items within images with high accuracy.',
      image: 'https://infolks.info/images/usecases/medtech/microscopiccellanalysis.jpg'
    },
    {
      id: 8,
      title: 'Video Annotation',
      description: 'Temporal labeling ',
       detailedDescription: 'Our 2D bounding box annotation creates precise rectangular boundaries around objects of interest. This fundamental annotation type is ideal for object detection models, enabling your AI to recognize and locate items within images with high accuracy.',
      image: 'https://i.ytimg.com/vi/Ldbvlk4brO0/maxresdefault.jpg'
    },
    {
      id: 9,
      title: 'Audio Annotation',
      description: 'Sound labeling ',
       detailedDescription: 'Our 2D bounding box annotation creates precise rectangular boundaries around objects of interest. This fundamental annotation type is ideal for object detection models, enabling your AI to recognize and locate items within images with high accuracy.',
      image: 'https://exemplary.ai/img/blog/diarization/diarization.svg'
    },
    // ... other services with similar structure
    {
      id: 10,
      title: 'Text Annotation',
      description: 'Labeling for NLP applications',
      detailedDescription: 'Our text annotation services include entity recognition, sentiment analysis, intent detection, and semantic labeling. We help prepare textual data for NLP models with accurate tagging that captures linguistic nuances and contextual relationships.',
      image: 'https://i0.wp.com/spotintelligence.com/wp-content/uploads/2024/10/text-annotation-types.jpg?fit=1920%2C1080&ssl=1'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 pt-12 text-gray-900"
          >
            Professional Annotation Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            High-precision data labeling solutions tailored for your AI/ML projects
          </motion.p>
        </div>
      </div>

      {/* Services Grid with Detailed Explanations */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-white rounded-xl shadow-md p-6`}
            >
              <div className="md:w-1/2 h-64 overflow-hidden rounded-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#10B981] mr-2"></div>
                  <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#10B981]">
                  <p className="text-gray-700">{service.detailedDescription}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#10B981]/10 text-[#10B981] rounded-full text-sm">AI Training</span>
                  <span className="px-3 py-1 bg-[#10B981]/10 text-[#10B981] rounded-full text-sm">Machine Learning</span>
                  <span className="px-3 py-1 bg-[#10B981]/10 text-[#10B981] rounded-full text-sm">Data Labeling</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#F59E0B] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Custom Annotation Solutions?</h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Our team can create tailored labeling workflows to meet your specific project requirements
          </p>
          <button className="px-8 py-3 bg-white text-[#10B981] font-semibold rounded-lg text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;