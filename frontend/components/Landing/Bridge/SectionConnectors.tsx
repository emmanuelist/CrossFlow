import { SectionConnectorsProps } from '@/types/bridge';
import React from 'react';

const SectionConnectors: React.FC<SectionConnectorsProps> = ({ position }) => {
    if (position === "top") {
        return (
            <div className="absolute top-0 left-0 right-0 w-full overflow-hidden">
                <svg className="relative block w-full h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M0,0 C300,30 900,30 1200,0 L1200,50 L0,50 Z"
                        className="fill-white dark:fill-gray-950"
                    ></path>
                </svg>
            </div>
        );
    } else {
        return (
            <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-full h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M0,0 C300,30 900,30 1200,0 L1200,50 L0,50 Z"
                        className="fill-white dark:fill-gray-950 rotate-180"
                    ></path>
                </svg>
            </div>
        );
    }
};

export default SectionConnectors;