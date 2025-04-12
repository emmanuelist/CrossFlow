import React from 'react';
import { motion } from "framer-motion";

const BackgroundElements: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
                className="absolute top-1/3 -right-20 w-[400px] h-[400px] rounded-full bg-rose-100/10 dark:bg-rose-800/5 blur-3xl"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.15, 0.1],
                    x: [-10, 10, -10],
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-cyan-200/10 dark:bg-cyan-800/5 blur-3xl"
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.05, 0.1, 0.05],
                }}
                transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            />
            <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-violet-100/5 dark:bg-violet-900/5 blur-3xl"
                animate={{
                    scale: [1, 0.95, 1],
                    opacity: [0.05, 0.08, 0.05],
                }}
                transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            />

            {/* Circuit pattern background - very subtle */}
            <div className="absolute inset-0 bg-circuit-pattern opacity-3 dark:opacity-5"></div>
        </div>
    );
};

export default BackgroundElements;