import React from 'react';
import { motion } from "framer-motion";
import { Shield, Key } from "lucide-react";

const SecurityArchitecture: React.FC = () => {
    return (
        <motion.div
            className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <h4 className="font-semibold mb-3">Security Architecture:</h4>
            <div className="relative h-36 flex items-center justify-center">
                {/* Central node */}
                <motion.div
                    className="relative z-20"
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <div className="w-16 h-16 bg-purple-500/20 dark:bg-purple-500/30 rounded-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-purple-500/30 dark:bg-purple-500/50 rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                <Shield className="w-4 h-4 text-white" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Orbiting nodes */}
                <div className="absolute inset-0">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-8 h-8"
                            style={{
                                left: '50%',
                                top: '50%',
                                marginLeft: '-16px',
                                marginTop: '-16px',
                            }}
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "linear"
                            }}
                        >
                            <motion.div
                                className="relative"
                                style={{
                                    left: `${Math.cos(i * (2 * Math.PI / 5)) * 60}px`,
                                    top: `${Math.sin(i * (2 * Math.PI / 5)) * 60}px`,
                                }}
                            >
                                <motion.div
                                    className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <Key className="w-3 h-3 text-white" />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Connection lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.3" />
                            </linearGradient>
                        </defs>
                        {[...Array(5)].map((_, i) => {
                            const angle = i * (2 * Math.PI / 5);
                            const x = 100 + 60 * Math.cos(angle);
                            const y = 100 + 60 * Math.sin(angle);
                            return (
                                <motion.line
                                    key={i}
                                    x1="100"
                                    y1="100"
                                    x2={x}
                                    y2={y}
                                    stroke="url(#lineGradient)"
                                    strokeWidth="1.5"
                                    strokeDasharray="3,3"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                                />
                            );
                        })}
                    </svg>
                </div>
            </div>
        </motion.div>
    );
};

export default SecurityArchitecture;