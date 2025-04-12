import React from 'react';
import { motion } from "framer-motion";

const LocalCurrencyStep: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="space-y-3">
                <div className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Choose your preferred local currency
                </div>

                <motion.div
                    className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-gray-800 border border-amber-200 dark:border-amber-800/30"
                    whileHover={{ x: 3 }}
                >
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center text-white font-bold text-sm mr-3">₦</div>
                        <div>
                            <div className="text-sm font-medium">Nigerian Naira</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">NGN</div>
                        </div>
                    </div>
                    <div className="text-sm font-medium">
                        ₦ 435,225
                    </div>
                </motion.div>

                <motion.div
                    className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    whileHover={{ x: 3 }}
                >
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 flex items-center justify-center text-white font-bold text-sm mr-3">KSh</div>
                        <div>
                            <div className="text-sm font-medium">Kenyan Shilling</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">KES</div>
                        </div>
                    </div>
                    <div className="text-sm font-medium">
                        KSh 44,520
                    </div>
                </motion.div>

                <motion.div
                    className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    whileHover={{ x: 3 }}
                >
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 flex items-center justify-center text-white font-bold text-sm mr-3">R</div>
                        <div>
                            <div className="text-sm font-medium">South African Rand</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">ZAR</div>
                        </div>
                    </div>
                    <div className="text-sm font-medium">
                        R 5,475
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LocalCurrencyStep;