import React from 'react';
import { motion } from "framer-motion";
import { ArrowRightLeft } from "lucide-react";

const SelectNetworksStep: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
                <div className="p-3 bg-white/70 dark:bg-gray-800/70 rounded-lg border border-cyan-200 dark:border-cyan-800/50">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white mr-3">
                                <svg width="14" height="14" viewBox="0 0 784 784" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M392 784C608.3 784 784 608.3 784 392C784 175.7 608.3 0 392 0C175.7 0 0 175.7 0 392C0 608.3 175.7 784 392 784Z" fill="white" />
                                    <path d="M392 392V0C175.7 0 0 175.7 0 392C0 608.3 175.7 784 392 784V392Z" fill="#6F7CFF" />
                                    <path d="M392 392V784C608.3 784 784 608.3 784 392C784 175.7 608.3 0 392 0V392Z" fill="#C9CBFF" />
                                </svg>
                            </div>
                            <span className="font-medium text-sm">Ethereum</span>
                        </div>
                        <div className="w-4 h-4 rounded-full border-2 border-cyan-500 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                        </div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 ml-11">
                        Send from Ethereum network
                    </div>
                </div>

                <div className="flex justify-center">
                    <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ArrowRightLeft className="rotate-90 text-gray-400 dark:text-gray-600" />
                    </motion.div>
                </div>

                <div className="p-3 bg-white/70 dark:bg-gray-800/70 rounded-lg border border-rose-200 dark:border-rose-800/50">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-violet-500 flex items-center justify-center text-white mr-3">
                                <svg width="14" height="14" viewBox="0 0 260 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M130 0L143.019 89.1421H234.539L159.76 144.216L172.779 233.358L98 178.284L23.2215 233.358L36.2404 144.216L-38.539 89.1421H52.9808L65.9996 0H130Z" fill="white" />
                                </svg>
                            </div>
                            <span className="font-medium text-sm">Stellar</span>
                        </div>
                        <div className="w-4 h-4 rounded-full border-2 border-rose-500 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                        </div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 ml-11">
                        Receive on Stellar network
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectNetworksStep;