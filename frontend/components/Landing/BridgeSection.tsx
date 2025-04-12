"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { steps } from './Bridge/data/bridgeSteps';
import SectionConnectors from './Bridge/SectionConnectors';
import BackgroundElements from './Bridge/BackgroundElements';
import SectionHeader from './Bridge/SectionHeader';
import StepsList from './Bridge/StepsList';
import StepContent from './Bridge/StepContent';
import ProgressIndicators from './Bridge/ProgressIndicators';



const BridgeSection: React.FC = () => {
    const [activeStep, setActiveStep] = useState<number>(0);

    // Auto advance steps for demonstration
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="bridge" className="py-20 relative bg-gradient-to-br from-gray-50 via-slate-50 to-rose-50/30 dark:from-slate-950 dark:via-gray-950 dark:to-rose-950/20 overflow-hidden">
            {/* Top connection to previous section */}
            <SectionConnectors position="top" />

            {/* Animated background elements */}
            <BackgroundElements />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section heading with animated highlight */}
                <SectionHeader
                    title="How CrossFlow Works"
                    subtitle="Our platform streamlines cross-border payments with blockchain technology and local currency integration. Experience the future of African financial transactions."
                    badge="Simple Process, Powerful Results"
                />

                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    {/* Left side: Steps list */}
                    <StepsList
                        steps={steps}
                        activeStep={activeStep}
                        setActiveStep={setActiveStep}
                    />

                    {/* Right side: Step content */}
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
                                <StepContent
                                    activeStep={activeStep}
                                    steps={steps}
                                />
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>

                {/* Stylish progress indicators */}
                <ProgressIndicators
                    steps={steps}
                    activeStep={activeStep}
                    setActiveStep={setActiveStep}
                />
            </div>

            {/* Bottom connection to next section */}
            <SectionConnectors position="bottom" />

            {/* Style for circuit pattern */}
            <style jsx>{`
                .bg-circuit-pattern {
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1z');
                }
            `}</style>
        </section>
    );
};

export default BridgeSection;