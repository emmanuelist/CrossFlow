import React from 'react';
import { motion } from "framer-motion";
import { Technology } from '@/types/technology';

interface TechHeaderProps {
    tech: Technology;
}

const TechHeader: React.FC<TechHeaderProps> = ({ tech }) => (
    <>
        <div className="flex items-center mb-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-white mr-4`}
            >
                {tech.icon}
            </motion.div>
            <motion.h3
                className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {tech.name}
            </motion.h3>
        </div>

        <motion.p
            className="text-gray-600 dark:text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            {tech.description}
        </motion.p>

        <motion.h4
            className="font-semibold mb-3 text-gray-900 dark:text-gray-100 relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            Key Features:
            <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${tech.color}`}></div>
        </motion.h4>
    </>
);

export default TechHeader;