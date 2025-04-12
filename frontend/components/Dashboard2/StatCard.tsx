import React, { ReactNode } from 'react';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
    title: string;
    value: string;
    change?: string;
    trend?: 'up' | 'down' | 'neutral';
    icon: ReactNode;
    bgClass?: string;
}

const StatCard: React.FC<StatCardProps> = ({
    title,
    value,
    change,
    trend = 'neutral',
    icon,
    bgClass = 'bg-white dark:bg-gray-800'
}) => {
    return (
        <div className={cn(
            "rounded-xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-200 hover:shadow-md",
            bgClass
        )}>
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    {icon}
                </div>

                {change && (
                    <div className={cn(
                        "flex items-center px-2 py-1 rounded-full text-xs font-medium",
                        trend === 'up' && "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
                        trend === 'down' && "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
                        trend === 'neutral' && "bg-gray-100 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400"
                    )}>
                        {trend === 'up' && <ArrowUp className="h-3 w-3 mr-1" />}
                        {trend === 'down' && <ArrowDown className="h-3 w-3 mr-1" />}
                        {trend === 'neutral' && <Minus className="h-3 w-3 mr-1" />}
                        {change}
                    </div>
                )}
            </div>

            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                {value}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
                {title}
            </p>
        </div>
    );
};

export default StatCard;