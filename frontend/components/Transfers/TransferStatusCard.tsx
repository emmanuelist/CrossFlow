import React, { ReactNode } from 'react';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TransferStatusCardProps {
    title: string;
    amount: string;
    count: number;
    trend: 'up' | 'down' | 'neutral';
    trendValue: string;
    period: string;
    icon: ReactNode;
    bgClass: string;
}

const TransferStatusCard: React.FC<TransferStatusCardProps> = ({
    title,
    amount,
    count,
    trend,
    trendValue,
    period,
    icon,
    bgClass
}) => {
    return (
        <div className="relative overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            {/* Background icon */}
            <div className="absolute -bottom-4 -right-4 opacity-10">
                <div className="text-[100px]">
                    {icon}
                </div>
            </div>

            {/* Content */}
            <div className="relative">
                <div className="flex justify-between items-start mb-3">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {title}
                    </div>

                    <div className={cn(
                        "p-2 rounded-full",
                        bgClass
                    )}>
                        {icon}
                    </div>
                </div>

                <div className="mb-3">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {amount}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        {count} {count === 1 ? 'transaction' : 'transactions'}
                    </div>
                </div>

                <div className="flex items-center">
                    {trend === 'up' && (
                        <ArrowUp className="h-4 w-4 text-green-500 dark:text-green-400 mr-1" />
                    )}
                    {trend === 'down' && (
                        <ArrowDown className="h-4 w-4 text-red-500 dark:text-red-400 mr-1" />
                    )}
                    {trend === 'neutral' && (
                        <Minus className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
                    )}

                    <span className={cn(
                        "text-sm font-medium",
                        trend === 'up' ? "text-green-600 dark:text-green-400" :
                            trend === 'down' ? "text-red-600 dark:text-red-400" :
                                "text-gray-600 dark:text-gray-400"
                    )}>
                        {trendValue}
                    </span>

                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                        {period}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TransferStatusCard;