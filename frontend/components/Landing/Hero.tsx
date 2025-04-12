"use client";

import React, { useState, useEffect } from "react";
import HeroBackground from "./Hero/HeroBackground";
import ExchangeRateIndicator from "./Hero/ExchangeRateIndicator";
import HeroContent from "./Hero/HeroContent";
import TransferCard from "./Hero/TransferCard";


const HeroSection: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    // Set loaded state after component mounts to enable animations
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <HeroBackground>
            <div className="flex flex-col gap-3 py-6">
                {/* <ExchangeRateIndicator className="self-start" /> */}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6">
                        <ExchangeRateIndicator className="self-start mb-8" />
                        <HeroContent isLoaded={isLoaded} />
                    </div>

                    <div className="lg:col-span-6">
                        <TransferCard />
                    </div>
                </div>
            </div>
        </HeroBackground>
    );
};

export default HeroSection;