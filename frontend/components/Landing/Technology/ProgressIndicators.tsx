import { Technology } from '@/types/technology';
import React from 'react';

interface ProgressIndicatorsProps {
    technologies: Technology[];
    activeTab: string;
    setActiveTab: (id: string) => void;
}

const ProgressIndicators: React.FC<ProgressIndicatorsProps> = ({ technologies, activeTab, setActiveTab }) => (
    <div className="flex justify-center mt-8 space-x-2">
        {technologies.map((tech) => (
            <button
                key={tech.id}
                onClick={() => setActiveTab(tech.id)}
                className={`w-2 h-2 rounded-full ${activeTab === tech.id
                    ? `bg-gradient-to-r ${tech.color} w-8`
                    : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                    } transition-all duration-300`}
                aria-label={`Go to ${tech.name}`}
            />
        ))}
    </div>
);

export default ProgressIndicators;