import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const SettlementStep: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="flex justify-center mb-4">
                <motion.div
                    className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                >
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                    </motion.div>
                </motion.div>
            </div>
            <div className="text-center mb-4">
                <motion.div
                    className="text-lg font-semibold text-green-600 dark:text-green-400"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Transfer Complete!
                </motion.div>
                <motion.div
                    className="text-sm text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    300 USDC has been settled instantly
                </motion.div>
            </div>
            <div className="space-y-3">
                <div className="flex justify-between p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Transfer amount:</span>
                    <span className="font-medium">300 USDC</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Recipient:</span>
                    <span className="font-medium font-mono">GDQP2...X4AZ</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Network fee:</span>
                    <span className="font-medium text-green-600 dark:text-green-400">$0.01</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Time taken:</span>
                    <span className="font-medium">4.2 seconds</span>
                </div>
            </div>
        </div>
    );
};

export default SettlementStep;