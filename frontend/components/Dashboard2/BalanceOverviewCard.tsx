import React, { useState } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data
const weeklyData = [
    { day: 'Mon', value: 500 },
    { day: 'Tue', value: 750 },
    { day: 'Wed', value: 800 },
    { day: 'Thu', value: 1200 },
    { day: 'Fri', value: 900 },
    { day: 'Sat', value: 1100 },
    { day: 'Sun', value: 1300 }
];

const monthlyData = [
    { day: 'Jan 1', value: 1200 },
    { day: 'Jan 8', value: 1800 },
    { day: 'Jan 15', value: 2400 },
    { day: 'Jan 22', value: 2200 },
    { day: 'Jan 29', value: 2000 },
    { day: 'Feb 5', value: 2800 },
    { day: 'Feb 12', value: 3200 }
];

const yearlyData = [
    { day: 'Jan', value: 5000 },
    { day: 'Feb', value: 7500 },
    { day: 'Mar', value: 8000 },
    { day: 'Apr', value: 10000 },
    { day: 'May', value: 9000 },
    { day: 'Jun', value: 11000 },
    { day: 'Jul', value: 10500 },
    { day: 'Aug', value: 12500 },
    { day: 'Sep', value: 14000 },
    { day: 'Oct', value: 15000 },
    { day: 'Nov', value: 16500 },
    { day: 'Dec', value: 18000 }
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
                <p className="text-gray-900 dark:text-white font-medium">{`${label}`}</p>
                <p className="text-rose-500 dark:text-rose-400 font-semibold">
                    ${payload[0].value.toLocaleString()}
                </p>
            </div>
        );
    }

    return null;
};

const BalanceOverviewCard: React.FC = () => {
    const [period, setPeriod] = useState('weekly');

    const data = {
        weekly: weeklyData,
        monthly: monthlyData,
        yearly: yearlyData
    }[period];

    return (
        <Card className="border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                        Balance Overview
                    </CardTitle>

                    <Tabs defaultValue="weekly" value={period} onValueChange={setPeriod}>
                        <TabsList className="bg-gray-100 dark:bg-gray-800">
                            <TabsTrigger value="weekly" className="text-xs">Weekly</TabsTrigger>
                            <TabsTrigger value="monthly" className="text-xs">Monthly</TabsTrigger>
                            <TabsTrigger value="yearly" className="text-xs">Yearly</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </CardHeader>

            <CardContent className="pt-4">
                <div className="flex items-baseline mb-6 space-x-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">$5,240.50</span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">+$1,234.20 (24.5%)</span>
                </div>

                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={data}
                            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                        >
                            <defs>
                                <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#F43F5E" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} vertical={false} />
                            <XAxis
                                dataKey="day"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#6B7280', fontSize: 12 }}
                            />
                            <YAxis
                                hide={true}
                                domain={['dataMin - 200', 'dataMax + 500']}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#F43F5E"
                                strokeWidth={2}
                                fill="url(#balanceGradient)"
                                activeDot={{ r: 6, fill: '#F43F5E', stroke: '#FFFFFF', strokeWidth: 2 }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default BalanceOverviewCard;