"use client";

import React, { useState, useEffect } from "react";
import { ArrowRightLeft } from "lucide-react";

interface ExchangeRateProps {
    className?: string;
}

const ExchangeRateIndicator: React.FC<ExchangeRateProps> = ({ className = "" }) => {
    // Exchange rate animation (simulated)
    const [exchangeRate, setExchangeRate] = useState({
        from: "USDC",
        to: "NGN",
        rate: 1450.75,
        change: "+0.3%"
    });

    useEffect(() => {
        const currencies = [
            { from: "USDC", to: "NGN", rate: 1450.75, change: "+0.3%" },
            { from: "USDC", to: "KES", rate: 148.40, change: "+0.2%" },
            { from: "USDC", to: "ZAR", rate: 18.25, change: "-0.1%" },
            { from: "USDC", to: "GHS", rate: 15.65, change: "+0.4%" }
        ];

        let index = 0;
        const rateInterval = setInterval(() => {
            index = (index + 1) % currencies.length;
            setExchangeRate(currencies[index]);
        }, 4000);

        return () => clearInterval(rateInterval);
    }, []);

    return (
        <div className={`inline-flex items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-sm border border-gray-100 dark:border-gray-700 ${className}`}>
            <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-rose-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xs mr-2">
                    <ArrowRightLeft className="h-3 w-3" />
                </div>
                <span className="text-sm font-medium">
                    {exchangeRate.from} / {exchangeRate.to}:{" "}
                    <span className="text-rose-500 dark:text-rose-400">
                        {exchangeRate.rate.toLocaleString()}
                    </span>
                </span>
                <div className={`ml-2 px-1.5 py-0.5 text-xs rounded ${exchangeRate.change.startsWith('+') ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-400' : 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-400'}`}>
                    {exchangeRate.change}
                </div>
            </div>
        </div>
    );
};

export default ExchangeRateIndicator;