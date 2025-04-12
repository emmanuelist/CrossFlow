import React from 'react';
import { motion } from "framer-motion";

interface SectionHeaderProps {
    title: string;
    subtitle: string;
    badge?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, badge }) => {
    return (
        <div className="text-center max-w-3xl mx-auto mb-14">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-3"
            >
                <div className="px-5 py-1.5 rounded-full bg-rose-500/5 border border-rose-200/50 dark:bg-rose-500/10 dark:border-rose-700/30 text-rose-600 dark:text-rose-400 text-xs font-medium tracking-wide uppercase">
                    {badge || "Simple Process, Powerful Results"}
                </div>
            </motion.div>

            <motion.h2
                className="text-3xl md:text-4xl font-bold mb-3 tracking-tight"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <span className="bg-gradient-to-r from-rose-500 to-cyan-500 bg-clip-text text-transparent">
                    {title}
                </span>
            </motion.h2>

            <motion.p
                className="text-gray-600 dark:text-gray-400 text-base max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {subtitle}
            </motion.p>
        </div>
    );
};

export default SectionHeader;