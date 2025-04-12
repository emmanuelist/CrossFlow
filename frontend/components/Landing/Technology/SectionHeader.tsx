import React from 'react';
import { motion } from "framer-motion";

interface SectionHeaderProps {
    title: string;
    subtitle: string;
    badge?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, badge }) => {
    return (
        <div className="text-center max-w-3xl mx-auto mb-12">
            {badge && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-2"
                >
                    <div className="px-4 py-1 rounded-full bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 text-sm font-medium">
                        {badge}
                    </div>
                </motion.div>
            )}

            <motion.h2
                className="text-3xl font-bold mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <span className="bg-gradient-to-r from-rose-600 via-rose-600 to-cyan-600 bg-clip-text text-transparent">
                    {title}
                </span>
            </motion.h2>

            <motion.p
                className="text-gray-600 dark:text-gray-400 text-sm md:text-base"
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