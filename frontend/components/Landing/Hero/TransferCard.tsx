"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const TransferCard: React.FC = () => {
    return (
        <div className="relative">
            <div className="relative z-10">
                <div className="w-full h-[400px] bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800">
                    {/* Header design */}
                    <div className="bg-gradient-to-r from-rose-500 to-cyan-500 h-1" />
                    <div className="p-6">
                        <div className="flex items-center mb-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-cyan-500 flex items-center justify-center text-white shadow-sm">
                                <Shield className="h-5 w-5" />
                            </div>
                            <div className="ml-3">
                                <div className="text-sm text-gray-500 dark:text-gray-400">Cross-Chain Transfer</div>
                                <div className="font-semibold text-lg">300 USDC</div>
                            </div>
                            <div className="ml-auto">
                                <span className="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-full border border-emerald-200 dark:border-emerald-800/30">
                                    Instant Transfer
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mb-6">
                            <div className="flex flex-col items-center">
                                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">From</div>
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white mb-1 shadow-sm">
                                    <svg width="20" height="20" viewBox="0 0 784 784" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M392 784C608.3 784 784 608.3 784 392C784 175.7 608.3 0 392 0C175.7 0 0 175.7 0 392C0 608.3 175.7 784 392 784Z" fill="white" />
                                        <path d="M392 392V0C175.7 0 0 175.7 0 392C0 608.3 175.7 784 392 784V392Z" fill="#6F7CFF" />
                                        <path d="M392 392V784C608.3 784 784 608.3 784 392C784 175.7 608.3 0 392 0V392Z" fill="#C9CBFF" />
                                    </svg>
                                </div>
                                <div className="font-medium text-xs">Ethereum</div>
                            </div>

                            <div className="flex-1 h-2 max-w-[120px] mx-4 relative">
                                <div className="absolute inset-0 h-0.5 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700"></div>
                                <motion.div
                                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-rose-500 shadow-sm"
                                    animate={{
                                        x: ['-5px', '120px', '-5px'],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">To</div>
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-700 to-cyan-600 flex items-center justify-center text-white mb-1 shadow-sm">
                                    <svg width="20" height="20" viewBox="0 0 260 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M130 0L143.019 89.1421H234.539L159.76 144.216L172.779 233.358L98 178.284L23.2215 233.358L36.2404 144.216L-38.539 89.1421H52.9808L65.9996 0H130Z" fill="white" />
                                    </svg>
                                </div>
                                <div className="font-medium text-xs">Stellar</div>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg mb-6 border border-gray-100 dark:border-gray-700/50">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Recipient:</div>
                                    <div className="text-xs font-mono bg-white/80 dark:bg-black/20 px-2 py-1 rounded-md border border-gray-100 dark:border-gray-700/50">
                                        GDQP2...X4AZ
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Network:</div>
                                    <div className="text-xs font-medium">Stellar Mainnet</div>
                                </div>
                                <div>
                                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Exchange Rate:</div>
                                    <div className="text-xs">1 USDC = 1 USDC</div>
                                </div>
                                <div>
                                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Fee:</div>
                                    <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400">0.00001 XLM</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm mb-4">
                            <span className="text-gray-500 dark:text-gray-400 font-medium">Status:</span>
                            <span className="font-medium text-cyan-600 dark:text-cyan-400 flex items-center">
                                <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 mr-1.5"></span>
                                Ready to Send
                            </span>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white shadow-sm">
                            Complete Transfer
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransferCard;