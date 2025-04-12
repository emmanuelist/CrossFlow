import React from 'react';
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Technology } from '@/types/technology';

interface TechTabsListProps {
    technologies: Technology[];
    activeTab: string;
}

const TechTabsList: React.FC<TechTabsListProps> = ({ technologies, activeTab }) => (
    <div className="flex justify-center mb-8">
        <TabsList className="h-full w-full flex flex-col md:flex-row gap-4 p-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
            {technologies.map((tech) => (
                <TabsTrigger
                    key={tech.id}
                    value={tech.id}
                    className={`
                        data-[state=active]:bg-gradient-to-r transition-all duration-300
                        relative overflow-hidden
                        ${activeTab === tech.id ? tech.color : 'hover:bg-white/50 dark:hover:bg-gray-700/50'}
                        data-[state=active]:text-white
                    `}
                >
                    <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 hover:opacity-10 transition-opacity duration-300`}></div>
                    <span className="relative z-10">{tech.name}</span>
                </TabsTrigger>
            ))}
        </TabsList>
    </div>
);

export default TechTabsList;