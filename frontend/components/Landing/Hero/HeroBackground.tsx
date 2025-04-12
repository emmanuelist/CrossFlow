"use client";

import React from "react";

interface HeroBackgroundProps {
    children: React.ReactNode;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ children }) => {
    return (
        <section className="relative px-2 pt-20 pb-20 overflow-hidden flex items-center min-h-[90vh] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
            {/* Subtle accents */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-rose-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-500/5 rounded-full blur-3xl"></div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-10">
                <svg className="relative block w-full h-[40px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="fill-white dark:fill-gray-950"></path>
                </svg>
            </div>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>

            <div className="container mx-auto px-4 relative z-10">
                {children}
            </div>

            {/* Style tag for the background grid pattern */}
            <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(100, 100, 100, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 100, 100, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
        </section>
    );
};

export default HeroBackground;