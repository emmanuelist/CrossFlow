import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Technology } from '@/types/technology';

interface TechFeatureListProps {
    tech: Technology;
}

const TechFeatureList: React.FC<TechFeatureListProps> = ({ tech }) => {
    const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

    return (
        <motion.ul
            className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            {tech.features.map((feature, idx) => (
                <motion.li
                    key={idx}
                    className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
                    onMouseEnter={() => setHoveredFeature(`${tech.id}-${idx}`)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    whileHover={{ x: 5 }}
                >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color}`}></div>
                    <span className="text-sm relative">
                        {feature}
                        {hoveredFeature === `${tech.id}-${idx}` && (
                            <motion.div
                                className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gray-300 dark:bg-gray-600"
                                layoutId="featureHighlight"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 0.2 }}
                            />
                        )}
                    </span>
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default TechFeatureList;