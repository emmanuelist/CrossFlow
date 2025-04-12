"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface HeroContentProps {
    isLoaded: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ isLoaded }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
        >
            <Badge
                className="mb-4 bg-gradient-to-r from-rose-100 to-cyan-100 text-rose-600 border-rose-200 dark:from-rose-900/30 dark:to-cyan-900/30 dark:text-rose-400 dark:border-cyan-900/50 px-3 py-1.5 text-sm"
            >
                Revolutionizing African Payments
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-8 tracking-tight  leading-tight">
                <span className="bg-gradient-to-r from-rose-500 to-cyan-500 bg-clip-text text-transparent">
                    Cross-Border Payments
                </span>{" "}
                <br />
                <span>
                    Reimagined for{" "}
                    <span className="text-cyan-600 dark:text-cyan-400 relative inline-block">
                        Africa
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-rose-500 dark:bg-rose-400"></span>
                    </span>
                </span>
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl leading-relaxed">
                Experience seamless, low-fee USDC transfers between Ethereum and Stellar
                networks, with integrated fiat on/off ramps for African currencies.
            </p>

            <div className="flex flex-row flex-wrap w-full gap-4">
                <Link href="/dashboard">
                    <Button
                        className="bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white shadow-md"
                    >
                        Go to Dashboard
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
                <Button
                    variant="outline"
                    className="border-2 border-cyan-200 dark:border-cyan-800 hover:bg-cyan-500/5 hover:border-cyan-500/50 transition-colors"
                >
                    Learn More
                </Button>
            </div>
        </motion.div>
    );
};

export default HeroContent;