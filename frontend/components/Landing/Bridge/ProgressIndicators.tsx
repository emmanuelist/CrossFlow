import { BridgeStep } from '@/types/bridge';
import React from 'react';

interface ProgressIndicatorsProps {
    steps: BridgeStep[];
    activeStep: number;
    setActiveStep: (index: number) => void;
}

const ProgressIndicators: React.FC<ProgressIndicatorsProps> = ({ steps, activeStep, setActiveStep }) => {
    return (
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
    );
};

export default ProgressIndicators;