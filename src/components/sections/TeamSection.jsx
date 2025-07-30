import { motion } from 'framer-motion';
import Quality from '../../Pictures/Haz.jpg'
import CTO from '../../Pictures/Genius2.jpg'
import Founder from '../../Pictures/Tadie2.jpg';


const teamMembers = [
  {
    name: "Tadiwanashe",
    role: "CEO & Founder",
    bio: "Former AI researcher with 10+ years in computer vision and data labeling systems.",
    image: Founder
  },
  {
    name: "COO",
    role: "COO",
    bio: "Operations expert specializing in workforce development and quality management.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/001/589/630/small_2x/green-background-with-fading-square-and-dots-free-vector.jpg"
  },
  {
    name: "Nick",
    role: "CTO",
    bio: "Tech lead with extensive experience in building annotation platforms and tools.",
    image: CTO
  },
  {
    name: "Hezel",
    role: "Quality Director",
    bio: "Leads our QA processes and annotator training programs.",
    image: Quality
  }
];

const TeamSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="my-20"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Leadership</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
                        <img
  src={member.image} 
  alt={member.name} 
  className="w-full h-[352px] xl:h-[250px] object-cover object-center"
  style={{
    imageRendering: 'optimizeQuality',
    backfaceVisibility: 'hidden',
    transform: 'translateZ(0)'
  }}
/>
            <div className="p-6">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-indigo-600 mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TeamSection;