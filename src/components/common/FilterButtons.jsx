import { useState } from 'react';
import { motion } from 'framer-motion';

const FilterButtons = ({ filters }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {filters.map((filter) => (
        <motion.button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeFilter === filter
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterButtons;