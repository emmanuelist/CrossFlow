import React from 'react';
import { motion } from "framer-motion";

const TechBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
                className="absolute -top-20 right-1/4 w-[300px] h-[300px] rounded-full bg-rose-200/10 dark:bg-rose-800/5 blur-3xl"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{ duration: 7, repeat: Infinity }}
            />
            <motion.div
                className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full bg-cyan-200/10 dark:bg-cyan-800/5 blur-3xl"
                animate={{
                    scale: [1, 0.9, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            />

            {/* Digital pattern background */}
            <div className="absolute inset-0 bg-digital-pattern opacity-5 dark:opacity-10"></div>
        </div>
    );
};

export default TechBackground;