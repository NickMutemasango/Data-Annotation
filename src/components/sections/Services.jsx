import { motion } from 'framer-motion';

const ServiceDetail = ({ service, reverse }) => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      id={service.id}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start`}
    >
      <div className="md:w-1/2">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
          <p className="text-lg text-gray-600 mb-6">{service.description}</p>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Annotation Types:</h3>
            <ul className="space-y-2">
              {service.subtypes.map((subtype, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  {subtype}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="md:w-1/2">
        <div className="bg-indigo-50 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">Industry Applications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Autonomous Vehicles',
              'Medical Imaging',
              'Retail Analytics',
              'Agriculture Tech',
              'Industrial Automation',
              'Security Systems'
            ].map((industry, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-indigo-600 font-medium">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceDetail;