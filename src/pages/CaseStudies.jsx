import { motion } from 'framer-motion';
import { useState } from 'react';
import CaseStudyCard from '../components/common/CaseStudyCard';
import FilterButtons from '../components/common/FilterButtons';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Autonomous Vehicle Dataset",
      client: "European AutoTech Startup",
      industry: "Transportation",
      challenge: "Required 500,000 high-precision labeled images for object detection in varying weather conditions",
      solution: "Our team delivered 99.4% accuracy with specialized QA processes for challenging conditions",
      results: [
        "Reduced model error rate by 32%",
        "Delivered 2 weeks ahead of schedule",
        "Cost 40% less than US-based providers"
      ],
      image: "/images/case-autonomous.jpg",
      tags: ["Computer Vision", "Large Scale"],
      detailedContent: {
        overview: "We partnered with a cutting-edge European AutoTech startup to provide high-quality labeled data for their autonomous vehicle perception system. The project required precise annotation of objects in diverse weather conditions including rain, fog, and snow.",
        approach: [
          "Developed custom annotation guidelines for challenging weather conditions",
          "Implemented multi-stage quality assurance process",
          "Used domain-specific tools for LiDAR and camera fusion data",
          "Trained specialized annotators in automotive safety standards"
        ],
        impact: "The dataset enabled our client to achieve industry-leading performance in object detection, particularly in edge cases that competitors struggled with. This directly contributed to their successful Series B funding round.",
        stats: [
          { value: "99.4%", label: "Annotation accuracy" },
          { value: "500K+", label: "Images labeled" },
          { value: "32%", label: "Error rate reduction" },
          { value: "40%", label: "Cost savings" }
        ]
      }
    },
    {
      id: 2,
      title: "Medical Imaging Annotation",
      client: "US Healthcare AI Company",
      industry: "Healthcare",
      challenge: "Needed specialized annotations for rare disease detection in X-ray images",
      solution: "Trained our team with medical professionals to ensure accurate labeling",
      results: [
        "Achieved 98.9% physician-approved accuracy",
        "Completed 100,000 image annotations",
        "Enabled FDA approval for their diagnostic tool"
      ],
      image: "/images/case-medical.jpg",
      tags: ["Healthcare", "High Precision"],
      detailedContent: {
        overview: "Collaborated with a healthcare AI company to annotate medical images for rare disease detection, requiring specialized knowledge and extreme precision.",
        approach: [
          "Medical expert-led training program for annotators",
          "Multi-physician review system",
          "DICOM-specific annotation tools",
          "HIPAA-compliant data handling"
        ],
        impact: "The resulting dataset powered an AI diagnostic tool that received FDA clearance, improving early detection rates for rare pulmonary conditions by 27%.",
        stats: [
          { value: "98.9%", label: "Physician-approved accuracy" },
          { value: "100K", label: "X-ray images annotated" },
          { value: "27%", label: "Improved detection rate" }
        ]
      }
    },
    {
      id: 3,
      title: "E-commerce Product Tagging",
      client: "African Retail Giant",
      industry: "Retail",
      challenge: "Classification of 1M+ product images across 200 categories",
      solution: "Developed custom taxonomy and trained specialized annotation team",
      results: [
        "Improved search relevance by 45%",
        "Reduced misclassifications by 28%",
        "Scaled team from 10 to 100 annotators in 2 weeks"
      ],
      image: "/images/case-ecommerce.jpg",
      tags: ["Classification", "Scalability"],
      detailedContent: {
        overview: "Supported a pan-African retail platform in organizing their massive product catalog through precise image classification and attribute tagging.",
        approach: [
          "Developed hierarchical classification system",
          "Created locale-specific attribute guidelines",
          "Implemented continuous quality monitoring",
          "Built rapid scaling infrastructure"
        ],
        impact: "The project transformed the client's search and recommendation systems, leading to a 18% increase in conversion rates and significantly improved user experience.",
        stats: [
          { value: "1M+", label: "Products classified" },
          { value: "45%", label: "Search relevance improvement" },
          { value: "18%", label: "Conversion rate increase" }
        ]
      }
    },
    {
      id: 4,
      title: "Sports Performance Analytics",
      client: "Global Sports Tech Company",
      industry: "Sports",
      challenge: "Required motion tracking data annotation for athlete performance analysis",
      solution: "Developed specialized annotation pipeline for sports movements",
      results: [
        "Achieved 97.5% accuracy in movement classification",
        "Processed 50,000 hours of video data",
        "Enabled real-time performance insights"
      ],
      image: "/images/case-sports.jpg",
      tags: ["Motion Tracking", "Real-time"],
      detailedContent: {
        overview: "Partnered with a sports technology leader to annotate athlete movements for performance analysis across multiple sports disciplines.",
        approach: [
          "Custom motion tracking annotation framework",
          "Former athlete consultants for domain expertise",
          "Real-time quality monitoring system",
          "Sport-specific movement taxonomies"
        ],
        impact: "Enabled coaches to identify performance improvements with data-driven insights, resulting in an average 15% performance enhancement across tracked metrics.",
        stats: [
          { value: "97.5%", label: "Movement classification accuracy" },
          { value: "50K", label: "Hours of video processed" },
          { value: "15%", label: "Performance improvement" },
          { value: "12", label: "Sports disciplines covered" }
        ]
      }
    }
  ];

  const industries = ["All", "Transportation", "Healthcare", "Retail", "Sports"];
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredCaseStudies = filter === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === filter);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    setSelectedCaseStudy(null);
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className=" text-black py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Case Studies</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover how we've helped companies across industries with their data annotation needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {selectedCaseStudy ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <button 
              onClick={() => setSelectedCaseStudy(null)}
              className="flex items-center text-[#10B981] hover:text-[#0E9F6E] mt-6 ml-6 transition"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to case studies
            </button>
            
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <motion.img 
                    src={selectedCaseStudy.image} 
                    alt={selectedCaseStudy.title}
                    className="rounded-lg shadow-md w-full h-auto mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                  
                  <motion.h2 
                    className="text-3xl font-bold text-gray-800 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {selectedCaseStudy.title}
                  </motion.h2>
                  
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Overview</h3>
                    <p className="text-gray-600">{selectedCaseStudy.detailedContent.overview}</p>
                  </motion.div>
                  
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Approach</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      {selectedCaseStudy.detailedContent.approach.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Impact</h3>
                    <p className="text-gray-600">{selectedCaseStudy.detailedContent.impact}</p>
                  </motion.div>
                </div>
                
                <div className="lg:w-1/3">
                  <motion.div 
                    className="bg-[#ECFDF5] rounded-xl p-6 mb-8 border border-[#10B981]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Highlights</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedCaseStudy.detailedContent.stats.map((stat, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center border border-[#F59E0B]">
                          <p className="text-2xl font-bold text-[#10B981]">{stat.value}</p>
                          <p className="text-sm text-gray-600">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-[#FFFBEB] rounded-xl p-6 border border-[#F59E0B]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Client</h3>
                    <p className="text-gray-600 mb-4">{selectedCaseStudy.client}</p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Industry</h3>
                    <p className="text-gray-600 mb-4">{selectedCaseStudy.industry}</p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Challenge</h3>
                    <p className="text-gray-600">{selectedCaseStudy.challenge}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <>
            {/* Filter Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <FilterButtons 
                filters={industries} 
                currentFilter={filter}
                onFilterChange={handleFilterChange}
                activeColor="#10B981"
                inactiveColor="#F59E0B"
              />
            </motion.section>

            {/* Case Studies Grid */}
            {filteredCaseStudies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCaseStudies.map((caseStudy, index) => (
                  <motion.div
                    key={caseStudy.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CaseStudyCard 
                      caseStudy={caseStudy} 
                      onClick={() => setSelectedCaseStudy(caseStudy)}
                      primaryColor="#10B981"
                      secondaryColor="#F59E0B"
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-600">No case studies found for this category</h3>
              </div>
            )}

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to discuss your project?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Our team is ready to help you with your data annotation needs, no matter how complex.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#10B981] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0E9F6E] transition"
              >
                Get in Touch
              </motion.button>
            </motion.section>
          </>
        )}
      </div>
    </div>
  );
};

export default CaseStudies;