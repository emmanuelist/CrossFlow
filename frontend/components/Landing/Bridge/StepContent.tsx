import React from 'react';
import { motion } from "framer-motion";
import { BridgeStep } from '@/types/bridge';
import ConnectWalletStep from './ConnectWalletStep';
import SelectNetworksStep from './SelectNetworksStep';
import TransferDetailsStep from './TransferDetailsStep';
import BridgeConversionStep from './BridgeConversionStep';
import LocalCurrencyStep from './LocalCurrencyStep';
import SettlementStep from './SettlementStep';


interface StepContentProps {
    activeStep: number;
    steps: BridgeStep[];
}

const StepContent: React.FC<StepContentProps> = ({ activeStep, steps }) => {
    return (
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

            {/* Different step content based on active step */}
            {activeStep === 0 && <ConnectWalletStep />}
            {activeStep === 1 && <SelectNetworksStep />}
            {activeStep === 2 && <TransferDetailsStep />}
            {activeStep === 3 && <BridgeConversionStep />}
            {activeStep === 4 && <LocalCurrencyStep />}
            {activeStep === 5 && <SettlementStep />}

            <p className="text-gray-600 dark:text-gray-400 text-sm mt-6">
                {steps[activeStep].description}
            </p>
        </motion.div>
    );
};

export default StepContent;