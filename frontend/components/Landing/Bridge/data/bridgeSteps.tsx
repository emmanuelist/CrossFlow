import React from 'react';
import {
    Wallet,
    ArrowRightLeft,
    Smartphone,
    CheckCircle,
    RefreshCw,
    PiggyBank
} from "lucide-react";
import { BridgeStep } from '@/types/bridge';

export const steps: BridgeStep[] = [
    {
        icon: <Wallet className="h-6 w-6" />,
        title: "Connect Your Wallet",
        description: "Link your Ethereum or Stellar wallet to CrossFlow securely with non-custodial access.",
        color: "from-rose-500 to-rose-400",
    },
    {
        icon: <ArrowRightLeft className="h-6 w-6" />,
        title: "Select Networks",
        description: "Choose between Ethereum and Stellar networks for your cross-chain USDC transfer.",
        color: "from-cyan-500 to-rose-500",
    },
    {
        icon: <Smartphone className="h-6 w-6" />,
        title: "Set Transfer Details",
        description: "Enter the amount and recipient details for your cross-border transaction.",
        color: "from-violet-500 to-purple-500",
    },
    {
        icon: <RefreshCw className="h-6 w-6" />,
        title: "Bridge Conversion",
        description: "Your USDC is securely bridged between blockchain networks with optimized fees.",
        color: "from-rose-500 to-cyan-500",
    },
    {
        icon: <PiggyBank className="h-6 w-6" />,
        title: "Local Currency Options",
        description: "Choose to receive funds in any of the supported African currencies.",
        color: "from-amber-500 to-yellow-500",
    },
    {
        icon: <CheckCircle className="h-6 w-6" />,
        title: "Instant Settlement",
        description: "Funds are settled instantly, eliminating traditional wait times for cross-border payments.",
        color: "from-emerald-500 to-green-500",
    },
];