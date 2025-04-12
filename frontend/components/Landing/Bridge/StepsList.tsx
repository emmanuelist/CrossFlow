import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BridgeStep } from '@/types/bridge';

interface StepsListProps {
    steps: BridgeStep[];
    activeStep: number;
    setActiveStep: (index: number) => void;
}

const StepsList: React.FC<StepsListProps> = ({ steps, activeStep, setActiveStep }) => {
    return (
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
    );
};

export default StepsList;