import React from 'react';
import { motion } from "framer-motion";

const BridgeWorkflow: React.FC = () => {
    return (
        <motion.div
            className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <h4 className="font-semibold mb-3">Bridge Workflow:</h4>
            <div className="flex items-center justify-between relative">
                {/* Progress steps */}
                <div className="text-center z-10">
                    <motion.div
                        className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white mb-2"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className="text-xs">ETH</span>
                    </motion.div>
                    <div className="text-xs">Ethereum</div>
                </div>

                <div className="text-center z-10">
                    <motion.div
                        className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-rose-500 to-cyan-500 flex items-center justify-center text-white mb-2"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className="text-xs">CF</span>
                    </motion.div>
                    <div className="text-xs">CrossFlow</div>
                </div>

                <div className="text-center z-10">
                    <motion.div
                        className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white mb-2"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className="text-xs">XLM</span>
                    </motion.div>
                    <div className="text-xs">Stellar</div>
                </div>

                {/* Animated connection lines */}
                <div className="absolute top-6 left-0 right-0 h-0.5 flex items-center justify-center">
                    {/* Ethereum to CrossFlow line */}
                    <div className="w-1/3 relative h-0.5">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-rose-500"></div>
                        <motion.div
                            className="absolute top-0 bottom-0 w-4 bg-white/70 dark:bg-white/30 blur-sm"
                            animate={{
                                left: ["-10%", "100%"],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                        />
                    </div>

                    {/* CrossFlow to Stellar line */}
                    <div className="w-1/3 relative h-0.5">
                        <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-blue-500"></div>
                        <motion.div
                            className="absolute top-0 bottom-0 w-4 bg-white/70 dark:bg-white/30 blur-sm"
                            animate={{
                                left: ["-10%", "100%"],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop",
                                delay: 1
                            }}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default BridgeWorkflow;