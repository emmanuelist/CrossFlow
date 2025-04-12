"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Wallet,
    ArrowRightLeft,
    Smartphone,
    CheckCircle,
    RefreshCw,
    ArrowRight,
    PiggyBank
} from "lucide-react";

const steps = [
    {
        icon: <Wallet className="h-6 w-6" />,
        title: "Connect Your Wallet",
        description: "Link your Ethereum or Stellar wallet to CrossFlow securely.",
        color: "from-rose-500 to-rose-400",
    },
    {
        icon: <ArrowRightLeft className="h-6 w-6" />,
        title: "Select Networks",
        description: "Choose between Ethereum and Stellar networks for your cross-chain transfer.",
        color: "from-cyan-500 to-blue-500",
    },
    {
        icon: <Smartphone className="h-6 w-6" />,
        title: "Set Transfer Details",
        description: "Enter the amount and recipient details for your cross-border transaction.",
        color: "from-violet-500 to-purple-500",
    },
    {
        icon: <RefreshCw className="h-6 w-6" />,
        title: "Bridge Conversion",
        description: "Your funds are securely bridged between blockchain networks with optimized fees.",
        color: "from-rose-500 to-cyan-500",
    },
    {
        icon: <PiggyBank className="h-6 w-6" />,
        title: "Local Currency Options",
        description: "Choose to receive funds in any of the supported African currencies.",
        color: "from-amber-500 to-yellow-500",
    },
    {
        icon: <CheckCircle className="h-6 w-6" />,
        title: "Instant Settlement",
        description: "Funds are settled instantly, eliminating traditional wait times for cross-border payments.",
        color: "from-emerald-500 to-green-500",
    },
];

const HowItWorksSection = () => {
    const [activeStep, setActiveStep] = useState(0);

    // Auto advance steps for demonstration
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="how-it-works" className="py-20 relative bg-gradient-to-br from-gray-50 via-slate-50 to-rose-50/30 dark:from-slate-950 dark:via-gray-950 dark:to-rose-950/20 overflow-hidden">
            {/* Top connection to previous section */}
            <div className="absolute top-0 left-0 right-0 w-full overflow-hidden">
                <svg className="relative block w-full h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0 C300,30 900,30 1200,0 L1200,50 L0,50 Z"
                        className="fill-white dark:fill-gray-950"></path>
                </svg>
            </div>

            {/* Animated background elements - more subtle */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/3 -right-20 w-[400px] h-[400px] rounded-full bg-rose-100/10 dark:bg-rose-800/5 blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.15, 0.1],
                        x: [-10, 10, -10],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-cyan-200/10 dark:bg-cyan-800/5 blur-3xl"
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                />
                <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-violet-100/5 dark:bg-violet-900/5 blur-3xl"
                    animate={{
                        scale: [1, 0.95, 1],
                        opacity: [0.05, 0.08, 0.05],
                    }}
                    transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                />

                {/* Circuit pattern background - very subtle */}
                <div className="absolute inset-0 bg-circuit-pattern opacity-3 dark:opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section heading with animated highlight */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-3"
                    >
                        <div className="px-5 py-1.5 rounded-full bg-rose-500/5 border border-rose-200/50 dark:bg-rose-500/10 dark:border-rose-700/30 text-rose-600 dark:text-rose-400 text-xs font-medium tracking-wide uppercase">
                            Simple Process, Powerful Results
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
                            How CrossFlow Works
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-gray-600 dark:text-gray-400 text-base max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Our platform streamlines cross-border payments with blockchain technology and local currency integration. Experience the future of African financial transactions.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    {/* Left side: Steps - More refined with subtle animations */}
                    <div className="w-full lg:w-5/12 space-y-2 relative">
                        {/* Connection line between steps - more refined gradient */}
                        <div className="absolute left-5 top-[64px] bottom-8 w-[1px] bg-gradient-to-b from-rose-300/30 via-cyan-400/30 to-violet-400/30 dark:from-rose-500/20 dark:via-cyan-500/20 dark:to-violet-500/20 rounded-full hidden sm:block"></div>

                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`p-3 rounded-xl cursor-pointer transition-all duration-200 border backdrop-blur-sm relative ${activeStep === index
                                    ? "bg-gradient-to-r from-rose-500/5 to-cyan-500/5 border-rose-500/20 dark:border-rose-500/10 shadow-sm"
                                    : "hover:bg-white/40 dark:hover:bg-gray-800/20 border-transparent hover:border-rose-300/20 dark:hover:border-rose-700/20"
                                    }`}
                                onClick={() => setActiveStep(index)}
                            >
                                <div className="flex items-center">
                                    <div
                                        className={`w-10 h-10 rounded-full ${activeStep === index
                                            ? "bg-gradient-to-br from-rose-500 to-cyan-500"
                                            : "bg-gradient-to-br from-rose-400/70 to-cyan-400/70 dark:from-rose-600/70 dark:to-cyan-600/70"
                                            } flex items-center justify-center text-white mr-3 flex-shrink-0 relative z-10`}
                                    >
                                        {activeStep === index ? (
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-0 rounded-full border border-rose-300/50 dark:border-rose-700/50 border-dashed"
                                            ></motion.div>
                                        ) : null}
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-base lg:text-lg mb-0.5 text-gray-900 dark:text-gray-100">{step.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm line-clamp-2">
                                            {step.description}
                                        </p>
                                    </div>
                                    {activeStep === index && (
                                        <ArrowRight className="h-4 w-4 text-rose-500 dark:text-rose-400 ml-2 hidden lg:block" />
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right side: Illustration with elegant glass effect */}
                    <div className="w-full lg:w-7/12">
                        <motion.div
                            className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100/80 dark:border-gray-700/30"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Top decorative gradient */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-violet-500 to-cyan-500 rounded-t-2xl"></div>

                            {/* Very subtle border glow */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500/10 to-cyan-500/10 rounded-2xl -z-10"></div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-2"
                                >
                                    <div className="mb-6 flex justify-center">
                                        <motion.div
                                            className={`w-16 h-16 rounded-full bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center text-white shadow-sm`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {steps[activeStep].icon}
                                        </motion.div>
                                    </div>

                                    <h3 className="text-xl font-semibold text-center mb-4 text-gray-900 dark:text-white">
                                        {steps[activeStep].title}
                                    </h3>

                                    {/* Step 1: Connect Wallet */}
                                    {activeStep === 0 && (
                                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                                            <div className="flex flex-col space-y-4">
                                                <div className="flex items-center justify-between p-3 bg-white/70 dark:bg-gray-800/70 rounded-lg border border-gray-200 dark:border-gray-700">
                                                    <div className="flex items-center">
                                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white mr-3">
                                                            <svg width="14" height="14" viewBox="0 0 784 784" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M392 784C608.3 784 784 608.3 784 392C784 175.7 608.3 0 392 0C175.7 0 0 175.7 0 392C0 608.3 175.7 784 392 784Z" fill="white" />
                                                                <path d="M392 392V0C175.7 0 0 175.7 0 392C0 608.3 175.7 784 392 784V392Z" fill="#6F7CFF" />
                                                                <path d="M392 392V784C608.3 784 784 608.3 784 392C784 175.7 608.3 0 392 0V392Z" fill="#C9CBFF" />
                                                            </svg>
                                                        </div>
                                                        <span className="font-medium text-sm">Ethereum Wallet</span>
                                                    </div>
                                                    <motion.div
                                                        className="px-2 py-1 text-xs bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-full"
                                                        animate={{ scale: [1, 1.05, 1] }}
                                                        transition={{ duration: 2, repeat: Infinity }}
                                                    >
                                                        Connect
                                                    </motion.div>
                                                </div>

                                                <div className="flex items-center justify-between p-3 bg-white/70 dark:bg-gray-800/70 rounded-lg border border-gray-200 dark:border-gray-700">
                                                    <div className="flex items-center">
                                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-violet-500 flex items-center justify-center text-white mr-3">
                                                            <svg width="14" height="14" viewBox="0 0 260 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M130 0L143.019 89.1421H234.539L159.76 144.216L172.779 233.358L98 178.284L23.2215 233.358L36.2404 144.216L-38.539 89.1421H52.9808L65.9996 0H130Z" fill="white" />
                                                            </svg>
                                                        </div>
                                                        <span className="font-medium text-sm">Stellar Wallet</span>
                                                    </div>
                                                    <motion.div
                                                        className="px-2 py-1 text-xs bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full"
                                                        animate={{ scale: [1, 1.05, 1] }}
                                                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                                                    >
                                                        Connect
                                                    </motion.div>
                                                </div>

                                                <div className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
                                                    Your wallet details remain secure and are never stored on our servers
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 2: Select Networks */}
                                    {activeStep === 1 && (
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
                                    )}

                                    {/* Step 3: Set Transfer Details */}
                                    {activeStep === 2 && (
                                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Amount (USDC)</div>
                                                    <div className="flex items-center bg-white dark:bg-gray-800/70 p-2 rounded-md border border-gray-200 dark:border-gray-700">
                                                        <input type="text" value="300" readOnly className="w-full bg-transparent border-none focus:outline-none text-lg font-medium p-0" />
                                                        <span className="text-sm text-gray-500 dark:text-gray-400">USDC</span>
                                                    </div>
                                                    <div className="text-xs text-right text-gray-500 dark:text-gray-400">
                                                        Balance: 1,245.00 USDC
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Recipient Address</div>
                                                    <div className="bg-white dark:bg-gray-800/70 p-2 rounded-md border border-gray-200 dark:border-gray-700 text-sm font-mono overflow-hidden text-ellipsis">
                                                        GDQP2KPQGKIHYJGXNUIYOMHARUWHXUDLQXRKHN...
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Transaction Fee</div>
                                                    <div className="flex justify-between">
                                                        <span className="text-sm">Estimated fee:</span>
                                                        <span className="text-sm font-medium text-green-600 dark:text-green-400">~$0.01</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 4: Bridge Conversion */}
                                    {activeStep === 3 && (
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
                                                            className="absolute top-0 left-0 bottom-0 w-1 bg-white/50"
                                                            animate={{
                                                                left: ["0%", "75%"],
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
                                    )}

                                    {/* Step 5: Local Currency Options */}
                                    {activeStep === 4 && (
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
                                    )}

                                    {/* Step 6: Instant Settlement */}
                                    {activeStep === 5 && (
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
                                    )}

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-6">
                                        {steps[activeStep].description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>

                {/* Stylish progress indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                    {steps.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveStep(idx)}
                            className={`w-2 h-2 rounded-full ${activeStep === idx
                                ? "bg-gradient-to-r from-rose-500 to-cyan-500 w-8"
                                : "bg-gray-300 dark:bg-gray-700 hover:bg-rose-300 dark:hover:bg-rose-700"
                                } transition-all duration-300`}
                            aria-label={`Go to step ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom connection to next section */}
            <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-full h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0 C300,30 900,30 1200,0 L1200,50 L0,50 Z"
                        className="fill-white dark:fill-gray-950 rotate-180"></path>
                </svg>
            </div>

            {/* Style for circuit pattern */}
            <style jsx>{`
        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
        }
      `}</style>
        </section>
    );
};

export default HowItWorksSection;