"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    PieChart,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Pie,
    Cell
} from 'recharts';
import { Calendar, Download, Filter, TrendingUp, TrendingDown, DollarSign, CircleDollarSign, Percent } from 'lucide-react';
import DashboardLayout from '@/components/Dashboard2/DashboardLayout';

// Mock data for charts
const monthlySpendingData = [
    { name: 'Jan', amount: 1200 },
    { name: 'Feb', amount: 1900 },
    { name: 'Mar', amount: 1500 },
    { name: 'Apr', amount: 2100 },
    { name: 'May', amount: 1800 },
    { name: 'Jun', amount: 2400 },
    { name: 'Jul', amount: 2200 },
    { name: 'Aug', amount: 2600 },
    { name: 'Sep', amount: 2100 },
    { name: 'Oct', amount: 2500 },
    { name: 'Nov', amount: 2800 },
    { name: 'Dec', amount: 3000 },
];

const categoryData = [
    { name: 'Transfers', value: 45 },
    { name: 'Subscriptions', value: 20 },
    { name: 'Shopping', value: 15 },
    { name: 'Bills', value: 10 },
    { name: 'Others', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const currencyComparisonData = [
    { name: 'USD', current: 1.00, previous: 1.00 },
    { name: 'EUR', current: 0.92, previous: 0.94 },
    { name: 'GBP', current: 0.78, previous: 0.81 },
    { name: 'JPY', current: 149.2, previous: 145.7 },
    { name: 'CAD', current: 1.35, previous: 1.38 },
];

const AnalyticsPage: React.FC = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Analytics
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Track your financial performance and insights.
                        </p>
                    </div>

                    <div className="flex space-x-2 mt-4 md:mt-0">
                        <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center"
                        >
                            <Calendar className="h-4 w-4 mr-2" />
                            Last 12 months
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center"
                        >
                            <Download className="h-4 w-4 mr-2" />
                            Export
                        </Button>
                    </div>
                </div>

                {/* Summary Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    <motion.div variants={item}>
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Total Spending</p>
                                        <h3 className="text-2xl font-bold mt-1 dark:text-white">$24,500</h3>
                                        <div className="flex items-center mt-1 text-green-500">
                                            <TrendingUp className="h-4 w-4 mr-1" />
                                            <span className="text-xs font-medium">+15.3% vs last year</span>
                                        </div>
                                    </div>
                                    <div className="h-12 w-12 bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                        <DollarSign className="h-6 w-6 text-green-500 dark:text-green-400" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={item}>
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Average Transaction</p>
                                        <h3 className="text-2xl font-bold mt-1 dark:text-white">$485</h3>
                                        <div className="flex items-center mt-1 text-red-500">
                                            <TrendingDown className="h-4 w-4 mr-1" />
                                            <span className="text-xs font-medium">-2.5% vs last year</span>
                                        </div>
                                    </div>
                                    <div className="h-12 w-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                        <CircleDollarSign className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={item}>
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Transaction Count</p>
                                        <h3 className="text-2xl font-bold mt-1 dark:text-white">245</h3>
                                        <div className="flex items-center mt-1 text-green-500">
                                            <TrendingUp className="h-4 w-4 mr-1" />
                                            <span className="text-xs font-medium">+8.7% vs last year</span>
                                        </div>
                                    </div>
                                    <div className="h-12 w-12 bg-purple-50 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                                        <Filter className="h-6 w-6 text-purple-500 dark:text-purple-400" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={item}>
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Savings Rate</p>
                                        <h3 className="text-2xl font-bold mt-1 dark:text-white">18.5%</h3>
                                        <div className="flex items-center mt-1 text-green-500">
                                            <TrendingUp className="h-4 w-4 mr-1" />
                                            <span className="text-xs font-medium">+3.2% vs last year</span>
                                        </div>
                                    </div>
                                    <div className="h-12 w-12 bg-rose-50 dark:bg-rose-900/30 rounded-full flex items-center justify-center">
                                        <Percent className="h-6 w-6 text-rose-500 dark:text-rose-400" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Monthly Spending Chart */}
                    <motion.div
                        className="lg:col-span-2"
                        variants={item}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.3 }}
                    >
                        <Card className="border-gray-200 dark:border-gray-800 shadow-sm">
                            <CardHeader>
                                <CardTitle>Monthly Spending</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="h-80">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            data={monthlySpendingData}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip
                                                formatter={(value) => [`$${value}`, 'Amount']}
                                                labelFormatter={(label) => `Month: ${label}`}
                                            />
                                            <Legend />
                                            <Bar dataKey="amount" fill="#0ea5e9" name="Spending" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Category Distribution */}
                    <motion.div
                        variants={item}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.4 }}
                    >
                        <Card className="border-gray-200 dark:border-gray-800 shadow-sm">
                            <CardHeader>
                                <CardTitle>Spending by Category</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="h-80">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={categoryData}
                                                cx="50%"
                                                cy="50%"
                                                labelLine={false}
                                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                                outerRadius={80}
                                                fill="#8884d8"
                                                dataKey="value"
                                            >
                                                {categoryData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                                            <Legend />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Currency Comparison */}
                <motion.div
                    variants={item}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.5 }}
                >
                    <Card className="border-gray-200 dark:border-gray-800 shadow-sm">
                        <CardHeader>
                            <CardTitle>Currency Exchange Rates</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-200 dark:border-gray-800">
                                            <th className="py-3 px-6 text-left font-medium text-gray-500 dark:text-gray-400">Currency</th>
                                            <th className="py-3 px-6 text-left font-medium text-gray-500 dark:text-gray-400">Current Rate</th>
                                            <th className="py-3 px-6 text-left font-medium text-gray-500 dark:text-gray-400">Previous Month</th>
                                            <th className="py-3 px-6 text-left font-medium text-gray-500 dark:text-gray-400">Change</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currencyComparisonData.map((currency, index) => {
                                            const change = ((currency.current - currency.previous) / currency.previous * 100).toFixed(2);
                                            const isPositive = currency.current < currency.previous;

                                            return (
                                                <tr key={index} className="border-b border-gray-200 dark:border-gray-800">
                                                    <td className="py-4 px-6 font-medium dark:text-white">{currency.name}</td>
                                                    <td className="py-4 px-6 dark:text-white">{currency.current.toFixed(2)}</td>
                                                    <td className="py-4 px-6 text-gray-500 dark:text-gray-400">{currency.previous.toFixed(2)}</td>
                                                    <td className={`py-4 px-6 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                                                        <div className="flex items-center">
                                                            {isPositive
                                                                ? <TrendingDown className="h-4 w-4 mr-1" />
                                                                : <TrendingUp className="h-4 w-4 mr-1" />
                                                            }
                                                            <span>{change}%</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </DashboardLayout>
    );
};

export default AnalyticsPage;