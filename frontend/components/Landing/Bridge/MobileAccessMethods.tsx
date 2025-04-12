import React from 'react';
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

const MobileAccessMethods: React.FC = () => {
    return (
        <motion.div
            className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <h4 className="font-semibold mb-3">Access Methods:</h4>
            <div className="space-y-2">
                <motion.div
                    className="p-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ x: 5, backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white mr-3">
                        <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                        <span className="font-medium text-sm">Mobile App</span>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Progressive Web App for smartphones</p>
                    </div>
                </motion.div>

                <motion.div
                    className="p-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    whileHover={{ x: 5, backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white mr-3">
                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                            <path d="M22 8.5V12.5C22 14.5 21.5 15.5 20.5 16.5C19.5 17.5 18 17.5 16 17.5H15L11.4 21.1C11.3 21.2 11.2 21.3 11 21.3C10.8 21.3 10.7 21.2 10.6 21.1L7 17.5H6C4 17.5 2.5 17.5 1.5 16.5C0.5 15.5 0 14.5 0 12.5V6.5C0 4.5 0.5 3.5 1.5 2.5C2.5 1.5 4 1.5 6 1.5H12" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 7.5L14 7.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 11.5L14 11.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <span className="font-medium text-sm">USSD</span>
                        <p className="text-xs text-gray-500 dark:text-gray-400">*123# code access for feature phones</p>
                    </div>
                </motion.div>

                <motion.div
                    className="p-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    whileHover={{ x: 5, backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white mr-3">
                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                            <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 7H17" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <span className="font-medium text-sm">SMS</span>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Text message alerts and commands</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default MobileAccessMethods;