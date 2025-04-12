import React from 'react';
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

const BridgeConversionStep: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="flex justify-center mb-4">
                <div className="w-full max-w-xs">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs mr-1">E</div>
                            <span className="text-sm">Ethereum USDC</span>
                        </div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-6 h-6 mx-2"
                        >
                            <RefreshCw className="w-6 h-6 text-rose-500" />
                        </motion.div>
                        <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-rose-500 to-violet-500 flex items-center justify-center text-white text-xs mr-1">S</div>
                            <span className="text-sm">Stellar USDC</span>
                        </div>
                    </div>
                    <div className="relative w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-rose-500 to-cyan-500 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: "75%" }}
                            transition={{ duration: 2 }}
                        ></motion.div>

                        {/* Animated particles along the progress bar */}
                        <motion.div
                            className="absolute top-0 left-0 bottom-0 w-4 bg-white/70 dark:bg-white/30 blur-sm"
                            animate={{
                                left: ["-10%", "100%"],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                        ></motion.div>
                    </div>
                    <div className="text-center mt-2 text-sm font-medium text-rose-600 dark:text-rose-400">
                        Bridging in progress...
                    </div>
                </div>
            </div>

            <div className="space-y-2 text-center">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                    Estimated time remaining: <span className="font-medium">~30 seconds</span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                    Smart routing optimization applied: <span className="font-medium text-green-600 dark:text-green-400">94% fee reduction</span>
                </div>
            </div>
        </div>
    );
};

export default BridgeConversionStep;