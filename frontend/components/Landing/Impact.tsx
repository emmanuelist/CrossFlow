"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, BarChart4, PieChart, Globe, LineChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Impact = () => {
    const impactItems = [
        {
            title: "Financial Inclusion",
            description: "Enabling millions of Africans to access global financial services.",
            icon: <Globe className="h-6 w-6" />,
            color: "from-rose-500 to-rose-400",
            delay: 0.1
        },
        {
            title: "Cost Reduction",
            description: "Reducing transaction fees by up to 95% compared to traditional methods.",
            icon: <PieChart className="h-6 w-6" />,
            color: "from-cyan-500 to-blue-500",
            delay: 0.2
        },
        {
            title: "Economic Growth",
            description: "Facilitating cross-border trade and business expansion across Africa.",
            icon: <BarChart4 className="h-6 w-6" />,
            color: "from-amber-500 to-orange-500",
            delay: 0.3
        }
    ];

    const futureItems = [
        "Pan-African expansion to ten additional markets",
        "Business payment integration with major platforms",
        "Complete API ecosystem for developer adoption",
        "Financial services platform for underbanked regions",
        "Mobile money integrations for rural access"
    ];

    return (
        <section id="impact" className="py-20 relative bg-white dark:bg-gray-950 overflow-hidden">
            {/* Top connector wave */}
            <div className="absolute top-0 left-0 right-0 w-full overflow-hidden">
                <svg className="relative block w-full h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0 C300,30 900,30 1200,0 L1200,50 L0,50 Z"
                        className="fill-gray-50 dark:fill-slate-950"></path>
                </svg>
            </div>

            {/* Background accents */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-40 -right-20 w-[300px] h-[300px] rounded-full bg-rose-500/3 blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div
                    className="absolute bottom-40 -left-20 w-[300px] h-[300px] rounded-full bg-cyan-500/3 blur-3xl"
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge
                                className="mb-4 px-3 py-1.5 text-xs font-medium tracking-wide uppercase bg-gradient-to-r from-rose-100 to-cyan-100 text-rose-600 border-rose-200 dark:from-rose-900/20 dark:to-cyan-900/20 dark:text-rose-400 dark:border-cyan-900/50"
                            >
                                Social Impact
                            </Badge>
                        </motion.div>

                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-6 tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <span className="bg-gradient-to-r from-rose-500 to-cyan-500 bg-clip-text text-transparent">
                                Making a Difference in African Finance
                            </span>
                        </motion.h2>

                        <motion.p
                            className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-xl leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            CrossFlow is revolutionizing how money moves across borders in Africa, creating meaningful financial opportunities and driving economic growth.
                        </motion.p>

                        <div className="space-y-6">
                            {impactItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex gap-4 items-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: item.delay }}
                                >
                                    <div className="mt-1">
                                        <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${item.color} text-white shadow-sm`}>
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-gray-100">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="mt-10 flex"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <div className="flex gap-2 items-center px-4 py-2 border border-rose-200 dark:border-rose-800/50 rounded-full bg-white/50 dark:bg-gray-800/50 shadow-sm">
                                <LineChart className="h-5 w-5 text-rose-500 dark:text-rose-400" />
                                <span className="text-sm font-medium">
                                    <span className="text-rose-600 dark:text-rose-400 font-bold">2.3 million</span> transactions processed in 2025
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-5"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Card className="overflow-hidden relative border-0 shadow-lg">
                            {/* Gradient border effect */}
                            <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-br from-rose-500/20 via-transparent to-cyan-500/20"></div>

                            <div className="absolute h-1 top-0 inset-x-0 bg-gradient-to-r from-rose-500 to-cyan-500 z-10"></div>

                            <div className="relative bg-gradient-to-br from-white to-rose-50/50 dark:from-gray-900 dark:to-gray-900/90 p-1 rounded-lg">
                                <CardHeader className="pb-3">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-xl mb-1 text-gray-900 dark:text-white">Growth Roadmap</CardTitle>
                                            <CardDescription>Our strategy for expanding impact</CardDescription>
                                        </div>
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-cyan-500 text-white shadow-sm">
                                            <Globe className="h-5 w-5" />
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent>
                                    <div className="space-y-1">
                                        {futureItems.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                className="p-3 hover:bg-white dark:hover:bg-gray-800 rounded-lg transition-colors group"
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                                                whileHover={{ x: 3 }}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="rounded-full p-1 bg-gradient-to-br from-rose-500/10 to-cyan-500/10 dark:from-rose-500/20 dark:to-cyan-500/20 group-hover:from-rose-500/20 group-hover:to-cyan-500/20 transition-colors">
                                                        <ChevronRight className="h-4 w-4 text-rose-500 dark:text-rose-400" />
                                                    </div>
                                                    <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-800">
                                        <div className="flex justify-between items-center">
                                            <div className="text-xs text-gray-500 dark:text-gray-400">Implementation progress</div>
                                            <div className="text-xs font-medium text-rose-600 dark:text-rose-400">43%</div>
                                        </div>
                                        <div className="mt-2 h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-rose-500 to-cyan-500 rounded-full"
                                                initial={{ width: "0%" }}
                                                whileInView={{ width: "43%" }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.6 }}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </div>
                        </Card>

                        <motion.div
                            className="mt-6 text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                In partnership with <span className="font-medium text-rose-600 dark:text-rose-400">African Financial Alliance</span>
                            </span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Impact;