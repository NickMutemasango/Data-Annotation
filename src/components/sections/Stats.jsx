import { motion } from 'framer-motion';

const stats = [
  { value: 99, label: "Annotation Accuracy", color: "#10B981" },
  { value: 500, label: "Trained Annotators", color: "#3B82F6" },
  { value: 100, label: "Project Support", color: "#F59E0B" },
  { value: 1, unit: "M+", label: "Data Points Labeled", color: "#8B5CF6" }
];

const RadialProgress = ({ value, color, unit }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-36 h-36">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background track */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#F3F4F6"
          strokeWidth="10"
        />
        {/* Animated progress */}
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          transform="rotate(-90 50 50)"
        />
        {/* Glow effect */}
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="15"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference, opacity: 0 }}
          animate={{ strokeDashoffset, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          transform="rotate(-90 50 50)"
          filter="url(#glow)"
        />
        <defs>
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      </svg>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex items-end">
          <motion.span 
            className="text-3xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {value > 100 ? "500+" : value}
          </motion.span>
          {unit && (
            <motion.span 
              className="text-xl font-medium text-gray-500 ml-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              {unit}
            </motion.span>
          )}
        </div>
        {value <= 100 && (
          <motion.span 
            className="text-sm text-gray-500 mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            %
          </motion.span>
        )}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our <span className="text-[#10B981]">Metrics</span> That Matter
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quantifying excellence in every data annotation project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <RadialProgress 
                value={stat.value > 100 ? 100 : stat.value} 
                color={stat.color} 
                unit={stat.unit} 
              />
              <motion.h3 
                className="mt-6 text-xl font-semibold text-gray-800 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
              >
                {stat.label}
              </motion.h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#10B981] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0e9f72] transition-all shadow-lg"
          >
            See Our Quality Standards
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-5 h-5 ml-2 inline" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;