import { motion } from 'framer-motion';
import TeamSection from '../components/sections/TeamSection';
import MissionVision from '../components/sections/MissionVision';
import HistoryTimeline from '../components/sections/HistoryTimeline';





const About = () => {
  return (
    <div className="min-h-screen bg-emerald-50">
      {/* Hero Section */}
      <section className="relative  text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://grainy.dev/images/noise.png')] opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-black">
                About DataLabel Pro
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-black ">
              Empowering AI innovation through high-quality data annotation services with global standards and African expertise.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-emerald-50 to-transparent"></div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Our Story */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block mb-4 px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
                Our Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Building the Future of AI Training Data</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2023, DataLabel Pro emerged from the fusion of PixelAnnotation's technical expertise and 
                Talent.Africa's workforce development platform. We recognized the growing need for high-quality, 
                cost-effective data labeling services that leverage Africa's talented workforce.
              </p>
              <p className="text-lg text-gray-600">
                Today, we serve clients worldwide across industries including autonomous vehicles, healthcare AI, 
                e-commerce, and financial technology, delivering accurate annotations with rapid turnaround times.
              </p>
              <div className="mt-8 flex gap-4">
                <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1">
                  Meet Our Team
                </button>
                <a href="/case-studies">
                <button className="px-4 py-2 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition-colors duration-300">
                  View Case Studies
                </button>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-emerald-100 rounded-2xl -z-10 rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Our team working" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <MissionVision />

        {/* Our Team */}
        <TeamSection />

        {/* History Timeline */}
        <HistoryTimeline />

        {/* Values */}
        <section className="my-28">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
              Our Foundation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Core Values That Drive Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every service we deliver
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description: "We maintain 99%+ accuracy through rigorous QA processes",
                icon: "🏆",
                bg: "bg-emerald-50",
                border: "border-emerald-200"
              },
              {
                title: "Ethical AI",
                description: "We ensure fair, unbiased data labeling practices",
                icon: "🤝",
                bg: "bg-amber-50",
                border: "border-amber-200"
              },
              {
                title: "Continuous Learning",
                description: "We invest in our team's ongoing training and development",
                icon: "📚",
                bg: "bg-blue-50",
                border: "border-blue-200"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-2xl shadow-sm border ${value.bg} ${value.border} hover:shadow-md transition-shadow duration-300`}
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="my-20 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl px-7 py-12 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your AI Models?</h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
              Partner with us for high-quality training data that delivers results.
            </p>
            <a href="/contact">
            <button className="px-8 py-4 bg-white text-emerald-700 hover:bg-gray-100 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
            </a>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;