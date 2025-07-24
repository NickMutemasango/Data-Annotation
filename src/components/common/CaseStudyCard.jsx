import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CaseStudyCard = ({ caseStudy }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col border border-gray-100 hover:border-[#10B981]/20 transition-all duration-300"
    >
      {/* Image with gradient overlay */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={caseStudy.image} 
          alt={caseStudy.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#10B981] text-white text-xs font-semibold px-3 py-1 rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{caseStudy.title}</h3>
          <p className="text-gray-500 font-medium">{caseStudy.client} • {caseStudy.industry}</p>
        </div>
        
        <p className="text-gray-600 mb-6 line-clamp-2">{caseStudy.challenge}</p>
        
        <div className="mt-auto">
          <Link 
            to={`/case-studies/${caseStudy.id}`}
            className="group inline-flex items-center font-semibold text-[#10B981] hover:text-[#0E9F6E] transition-colors"
          >
            <span className="relative">
              Read full case study
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#10B981]/30 group-hover:bg-[#10B981]/60 transition-all"></span>
            </span>
            <svg 
              className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-[#10B981] to-[#F59E0B]"></div>
    </motion.div>
  );
};

export default CaseStudyCard;