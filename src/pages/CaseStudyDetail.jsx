import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tag from '../Pictures/tag.jpg'

const CaseStudyDetail = () => {
  const { id } = useParams();
  
  // Case studies data
  const caseStudies = {
    1: {
      id: 1,
      title: "Autonomous Vehicle Dataset",
      client: "European AutoTech Startup",
      industry: "Transportation",
      challenge: "A European autonomous vehicle startup needed to train their object detection models with diverse, high-quality labeled data. They required 500,000 images annotated with bounding boxes and segmentation masks across various weather conditions (rain, fog, snow, etc.) and lighting scenarios.",
      solution: "We assembled a specialized team of 75 annotators with training in automotive applications. Implemented a multi-stage quality assurance process with domain experts reviewing challenging cases. Developed custom tools to handle edge cases like partial occlusions and reflections.",
      results: [
        "Achieved 99.4% accuracy rate (verified against ground truth dataset)",
        "Reduced model error rate by 32% compared to their previous dataset",
        "Delivered the complete dataset 2 weeks ahead of schedule",
        "Cost 40% less than quotes from US-based annotation providers"
      ],
      image: "https://www.labelvisor.com/content/images/2023/02/cuboid.jpg",
      tags: ["Computer Vision", "Large Scale", "Automotive"],
      stats: [
        { value: "500K", label: "Images annotated" },
        { value: "99.4%", label: "Accuracy" },
        { value: "32%", label: "Error reduction" },
        { value: "40%", label: "Cost savings" }
      ]
    },
    2: {
      id: 2,
      title: "Medical Imaging Annotation",
      client: "US Healthcare AI Company",
      industry: "Healthcare",
      challenge: "An AI diagnostics company needed precise annotations for detecting rare pulmonary conditions in chest X-rays. The challenge involved identifying subtle patterns across 100,000 DICOM images with variability in patient anatomy, image quality, and disease presentation.",
      solution: "We partnered with board-certified radiologists to develop annotation guidelines. Implemented a three-tier review system with medical experts. Created specialized tools for DICOM image analysis with windowing/leveling capabilities to ensure consistent annotations.",
      results: [
        "Achieved 98.9% accuracy validated against radiologist consensus",
        "Reduced false positives by 27% compared to previous annotations",
        "Enabled FDA clearance for their diagnostic AI system",
        "Completed project 3 weeks ahead of regulatory submission deadline"
      ],
      image: "https://keymakr.com/blog/content/images/2024/06/KM66main.jpg",
      tags: ["Healthcare", "Medical Imaging", "DICOM"],
      stats: [
        { value: "100K", label: "X-rays annotated" },
        { value: "98.9%", label: "Accuracy" },
        { value: "27%", label: "False positive reduction" },
        { value: "FDA", label: "Approval achieved" }
      ]
    },
    3: {
      id: 3,
      title: "E-commerce Product Tagging",
      client: "African Retail Giant",
      industry: "Retail",
      challenge: "A pan-African e-commerce platform needed to classify over 1 million product images across 200+ categories with locale-specific attributes. The challenge included handling poor quality vendor images, regional product variations, and multilingual requirements.",
      solution: "Developed a hierarchical taxonomy with regional adaptations. Trained annotators on locale-specific product knowledge. Implemented continuous quality monitoring with dynamic sampling. Built tools to handle bulk categorization and attribute tagging.",
      results: [
        "Improved search relevance by 45% within 3 months",
        "Reduced product misclassifications by 28%",
        "Enabled personalized recommendations increasing conversions by 18%",
        "Scaled annotation team from 10 to 100 within 2 weeks"
      ],
      image: Tag,
      tags: ["E-commerce", "Classification", "Scalability"],
      stats: [
        { value: "1M+", label: "Products classified" },
        { value: "200+", label: "Categories" },
        { value: "45%", label: "Search improvement" },
        { value: "18%", label: "Conversion lift" }
      ]
    },
    4: {
      id: 4,
      title: "Sports Performance Analytics",
      client: "Global Sports Tech Company",
      industry: "Sports",
      challenge: "A sports analytics firm needed motion tracking data for 12 different sports to train their AI models. The project required frame-by-frame annotation of athlete movements, equipment, and game situations across 50,000 hours of video footage.",
      solution: "Developed sport-specific annotation frameworks with input from professional coaches. Implemented real-time quality monitoring with instant feedback. Used former athletes as quality validators. Built tools to handle high-speed video and complex multi-object tracking.",
      results: [
        "Achieved 97.5% movement classification accuracy",
        "Reduced annotation time by 40% through optimized tools",
        "Enabled real-time performance insights during games",
        "Identified 15% performance improvement opportunities"
      ],
      image: "https://www.sblcorp.ai/wp-content/uploads/2024/05/sports-annotation.webp",
      tags: ["Sports Tech", "Motion Tracking", "Real-time"],
      stats: [
        { value: "50K", label: "Hours processed" },
        { value: "12", label: "Sports covered" },
        { value: "97.5%", label: "Accuracy" },
        { value: "15%", label: "Performance gain" }
      ]
    }
  };

  const caseStudy = caseStudies[id] || caseStudies[1]; // Default to first case study if invalid ID

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={caseStudy.image} 
            alt={caseStudy.title} 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-40" />
        </div>
        
        <div className="relative h-full flex items-end pb-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                {caseStudy.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-full shadow-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {caseStudy.title}
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-lg text-white opacity-90 font-medium">
                  <span className="font-bold">{caseStudy.client}</span> • {caseStudy.industry}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 -mt-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Challenge */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 bg-white p-8 rounded-xl shadow-md"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6 relative pb-4">
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-600"></span>
                The Challenge
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>{caseStudy.challenge}</p>
              </div>
            </motion.section>

            {/* Solution */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 bg-white p-8 rounded-xl shadow-md"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6 relative pb-4">
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-600"></span>
                Our Solution
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>{caseStudy.solution}</p>
              </div>
            </motion.section>

            {/* Results */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6 relative pb-4">
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-600"></span>
                The Results
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.results.map((result, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-700">{result}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg sticky top-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">Key Metrics</h3>
              
              <div className="space-y-6">
                {caseStudy.stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                      <p className="text-gray-600">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
              >
                Download Full Report
              </motion.button>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Share this case study</h4>
                <div className="flex space-x-3">
                  {['Twitter', 'LinkedIn', 'Facebook'].map((social, index) => (
                    <motion.button
                      key={social}
                      whileHover={{ y: -2 }}
                      className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition"
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        {/* Social icon paths would go here */}
                      </svg>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;