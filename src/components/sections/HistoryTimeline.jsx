import { motion } from 'framer-motion';

const milestones = [
  {
    year: "2023",
    title: "Company Founded",
    description: "Launched as a merger between PixelAnnotation's technology and Talent.Africa's workforce network",
    icon: "🌱",
    accent: "from-emerald-100 to-emerald-50"
  },
  {
    year: "Q1 2024",
    title: "First Enterprise Client",
    description: "Secured contract with European autonomous vehicle company",
    icon: "🚀",
    accent: "from-amber-100 to-amber-50"
  },
  {
    year: "Q2 2024",
    title: "Team Expansion",
    description: "Grew to 50 full-time annotators and 5 management staff",
    icon: "👥",
    accent: "from-blue-100 to-blue-50"
  },
  {
    year: "Present",
    title: "Scaling Operations",
    description: "Currently serving 12 clients across 3 continents with 99.2% average accuracy",
    icon: "🌍",
    accent: "from-purple-100 to-purple-50"
  }
];

const HistoryTimeline = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full text-sm font-semibold">
              Our Evolution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-800">
                Milestone Journey
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The pivotal moments that define our growth and innovation
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Diagonal timeline path */}
          <div className="absolute hidden lg:block top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-emerald-300 to-emerald-500 transform -translate-x-1/2 rotate-12 origin-top"></div>
          
          {/* Mobile vertical line */}
          <div className="absolute lg:hidden top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-300 to-emerald-500"></div>

          <div className="space-y-16 lg:space-y-28 pl-4 lg:pl-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring" }}
                className={`relative flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}
              >
                {/* Year marker */}
                <div className="absolute lg:static -left-4 top-0 w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 border-4 border-white flex items-center justify-center text-white font-bold z-10 shadow-lg">
                  {milestone.icon}
                </div>

                {/* Content card */}
                <div className={`lg:w-5/12 p-8 rounded-2xl shadow-sm bg-gradient-to-br ${milestone.accent} border border-gray-100 hover:shadow-md transition-all duration-300 ${index % 2 === 0 ? 'lg:ml-16 lg:mr-4' : 'lg:mr-16 lg:ml-4'} mt-6 lg:mt-0`}>
                  <div className="absolute -top-3 left-6 lg:left-8 w-6 h-6 bg-white transform rotate-45 border-t border-l border-gray-200"></div>
                  <div className="text-xs font-bold text-emerald-600 mb-2">{milestone.year}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-emerald-100 opacity-10 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-amber-100 opacity-10 blur-3xl -z-10"></div>
      </div>
    </motion.section>
  );
};

export default HistoryTimeline;