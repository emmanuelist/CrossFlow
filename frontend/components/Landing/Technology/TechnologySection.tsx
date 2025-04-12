"use client";

import { useState, useEffect, ReactNode } from "react";
import { Tabs } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import {
    Shield,
    ArrowRightLeft,
    Smartphone,
    Globe
} from "lucide-react";
import TechBackground from "./TechBackground";
import TechTabsList from "./TechTabsList";
import TechTabContent from "./TechTabContent";
import ProgressIndicators from "./ProgressIndicators";
import SectionHeader from "./SectionHeader";


interface Technology {
    id: string;
    name: string;
    description: string;
    features: string[];
    icon: ReactNode;
    color: string;
}

const technologies: Technology[] = [
    {
        id: "bridge-protocol",
        name: "Bridge Protocol",
        description: "A secure cross-chain bridge enabling seamless USDC transfers between Ethereum and Stellar networks with optimized gas fees.",
        features: [
            "Atomic swaps",
            "Multi-signature security",
            "Real-time transaction monitoring",
            "Gasless transfers on Stellar",
            "MEV protection"
        ],
        icon: <ArrowRightLeft className="w-12 h-12" />,
        color: "from-rose-500 to-cyan-500"
    },
    {
        id: "fiat-ramp",
        name: "Fiat On/Off Ramps",
        description: "Comprehensive payment infrastructure that integrates with local African payment systems to enable seamless fiat-to-crypto conversions.",
        features: [
            "Multi-currency support",
            "Mobile money integration",
            "Bank transfers",
            "USSD integration",
            "Card payments"
        ],
        icon: <Globe className="w-12 h-12" />,
        color: "from-amber-500 to-rose-500"
    },
    {
        id: "security-layer",
        name: "Security Protocol",
        description: "Enterprise-grade security system that ensures the safety of all transactions and user funds with advanced cryptographic techniques.",
        features: [
            "Multi-factor authentication",
            "Distributed key management",
            "Real-time fraud detection",
            "Byzantine fault tolerance",
            "Smart contract audits"
        ],
        icon: <Shield className="w-12 h-12" />,
        color: "from-purple-500 to-indigo-600"
    },
    {
        id: "mobile-access",
        name: "Mobile Infrastructure",
        description: "Mobile-first technology that enables users to access CrossFlow services through smartphones or basic feature phones using USSD.",
        features: [
            "Progressive web app",
            "USSD command interface",
            "SMS notifications",
            "Offline transaction signing",
            "Low-bandwidth optimization"
        ],
        icon: <Smartphone className="w-12 h-12" />,
        color: "from-green-500 to-teal-600"
    }
];

const TechnologySection = () => {
    const [activeTab, setActiveTab] = useState("bridge-protocol");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section id="technology" className="py-24 relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-rose-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-rose-950/30">
            {/* Top border curve */}
            <div className="absolute top-0 left-0 right-0 w-full overflow-hidden">
                <svg className="relative block w-full h-[70px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-rose-50 dark:fill-slate-900"></path>
                </svg>
            </div>

            {/* Animated background elements */}
            <TechBackground />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section heading */}
                {/* <SectionHeader /> */}
                <SectionHeader
                    title="Core Technologies"
                    subtitle="Our platform leverages advanced blockchain and fintech solutions to enable seamless cross-border transactions across African markets."
                    badge="Cutting-Edge Infrastructure"
                />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <Tabs defaultValue="bridge-protocol" className="w-full" onValueChange={setActiveTab}>
                        <TechTabsList technologies={technologies} activeTab={activeTab} />

                        <div className="relative">
                            <AnimatePresence mode="wait">
                                {technologies.map((tech) => (
                                    <TechTabContent
                                        key={tech.id}
                                        tech={tech}
                                        activeTab={activeTab}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                    </Tabs>
                </motion.div>

                {/* Circle progress indicators */}
                <ProgressIndicators technologies={technologies} activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* Style for digital pattern */}
            <style jsx>{`
                .bg-digital-pattern {
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 0h20L0 20z'/%3E%3Cpath d='M20 0v20H0z' fill-opacity='.2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                }
            `}</style>
        </section>
    );
};