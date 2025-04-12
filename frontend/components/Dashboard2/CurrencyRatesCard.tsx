import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CurrencyRate {
    currency: string;
    code: string;
    flag: string;
    rate: number;
    change: number;
}

const currencyRates: CurrencyRate[] = [
    {
        currency: 'Nigeria',
        code: 'NGN',
        flag: '🇳🇬',
        rate: 1470.25,
        change: 0.75
    },
    {
        currency: 'Kenya',
        code: 'KES',
        flag: '🇰🇪',
        rate: 128.50,
        change: -0.32
    },
    {
        currency: 'Ghana',
        code: 'GHS',
        flag: '🇬🇭',
        rate: 12.45,
        change: 1.24
    },
    {
        currency: 'South Africa',
        code: 'ZAR',
        flag: '🇿🇦',
        rate: 18.73,
        change: -0.58
    },
    {
        currency: 'Euro',
        code: 'EUR',
        flag: '🇪🇺',
        rate: 0.92,
        change: 0.05
    }
];

const CurrencyRatesCard: React.FC = () => {
    return (
        <Card className="border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    Currency Rates
                </CardTitle>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <RefreshCw className="h-3 w-3 mr-1" />
                    <span>Updated 5m ago</span>
                </div>
            </CardHeader>

            <CardContent>
                <div className="space-y-1">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        1 USD equals
                    </div>

                    <div className="space-y-3">
                        {currencyRates.map((rate, index) => (
                            <div key={rate.code} className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 flex items-center justify-center text-lg mr-3">
                                        {rate.flag}
                                    </div>

                                    <div>
                                        <div className="flex items-center">
                                            <span className="font-medium text-gray-900 dark:text-white">
                                                {rate.currency}
                                            </span>
                                            <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
                                                ({rate.code})
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <span className="font-semibold text-gray-900 dark:text-white mr-2">
                                        {rate.rate.toLocaleString()}
                                    </span>

                                    <Badge
                                        variant="outline"
                                        className={cn(
                                            "text-xs",
                                            rate.change > 0
                                                ? "border-green-500 bg-green-50 text-green-600 dark:border-green-700 dark:bg-green-900/20 dark:text-green-400"
                                                : "border-red-500 bg-red-50 text-red-600 dark:border-red-700 dark:bg-red-900/20 dark:text-red-400"
                                        )}
                                    >
                                        {rate.change > 0 ? (
                                            <ArrowUp className="h-3 w-3 mr-1" />
                                        ) : (
                                            <ArrowDown className="h-3 w-3 mr-1" />
                                        )}
                                        {Math.abs(rate.change).toFixed(2)}%
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default CurrencyRatesCard;