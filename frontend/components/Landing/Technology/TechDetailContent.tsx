import React from 'react';
import { AnimatePresence } from "framer-motion";
import BridgeWorkflow from '../Bridge/BridgeWorkflow';
import CurrencyDisplay from '../Bridge/CurrencyDisplay';
import SecurityArchitecture from '../Bridge/SecurityArchitecture';
import MobileAccessMethods from '../Bridge/MobileAccessMethods';


interface TechDetailContentProps {
    techId: string;
}

const TechDetailContent: React.FC<TechDetailContentProps> = ({ techId }) => (
    <AnimatePresence>
        {techId === "bridge-protocol" && <BridgeWorkflow />}
        {techId === "fiat-ramp" && <CurrencyDisplay />}
        {techId === "security-layer" && <SecurityArchitecture />}
        {techId === "mobile-access" && <MobileAccessMethods />}
    </AnimatePresence>
);

export default TechDetailContent;