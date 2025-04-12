import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRightLeft, Shield, Smartphone } from "lucide-react";
import { Technology } from '@/types/technology';
import TechHeader from './TechHeader';
import TechFeatureList from './TechFeatureList';
import TechDetailContent from './TechDetailContent';
import TechVisual from './TechVisual';


interface TechTabContentProps {
    tech: Technology;
    activeTab: string;
}

const TechTabContent: React.FC<TechTabContentProps> = ({ tech, activeTab }) => (
    <TabsContent value={tech.id} className="mt-0">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
        >
            {/* Animated gradient border */}
            <div className="relative h-2 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color}`}></div>
                <motion.div
                    className="absolute inset-0 bg-white/30 dark:bg-white/10"
                    animate={{
                        x: ['-100%', '100%'],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror"
                    }}
                />
            </div>

            <div className="p-8 flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-2/3">
                    <TechHeader tech={tech} />
                    <TechFeatureList tech={tech} />
                    <TechDetailContent techId={tech.id} />
                </div>

                <TechVisual tech={tech} />
            </div>

            {/* Action button */}
            <div className="px-8 pb-8 flex justify-end">
                <motion.button
                    className={`text-sm flex items-center px-5 py-2 rounded-full bg-gradient-to-r ${tech.color} text-white font-medium shadow-lg ${tech.id === 'bridge-protocol' ? 'shadow-rose-500/20' : tech.id === 'fiat-ramp' ? 'shadow-amber-500/20' : tech.id === 'security-layer' ? 'shadow-purple-500/20' : 'shadow-green-500/20'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Learn more about {tech.name}
                    <ChevronRight className="h-4 w-4 ml-1" />
                </motion.button>
            </div>
        </motion.div>
    </TabsContent>
);


export default TechTabContent;
