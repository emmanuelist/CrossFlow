"use client"

import React from 'react';
import { motion } from 'framer-motion';

import { ArrowRightLeft, PiggyBank, Users, Wallet } from 'lucide-react';
import StatCard from '@/components/Dashboard2/StatCard';
import BalanceOverviewCard from '@/components/Dashboard2/BalanceOverviewCard';
import RecentTransactionsCard from '@/components/Dashboard2/RecentTransactionsCard';
import QuickTransferCard from '@/components/Dashboard2/QuickTransferCard';
import CurrencyRatesCard from '@/components/Dashboard2/CurrencyRatesCard';
import ActivityCard from '@/components/Dashboard2/ActivityCard';
import DashboardLayout from '@/components/Dashboard2/DashboardLayout';

const Dashboard: React.FC = () => {
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
                            Welcome back, Jane
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Here's what's happening with your account today.
                        </p>
                    </div>

                    <div className="flex space-x-2 mt-4 md:mt-0">
                        <button className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            Export
                        </button>
                        <button className="px-4 py-2 bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 rounded-lg text-sm font-medium text-white transition-colors">
                            New Transfer
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div variants={item}>
                        <StatCard
                            title="Total Balance"
                            value="$5,240.50"
                            change="+12.5%"
                            trend="up"
                            icon={<Wallet className="h-5 w-5 text-rose-500" />}
                            bgClass="bg-gradient-to-br from-rose-50 to-cyan-50 dark:from-rose-950/30 dark:to-cyan-950/30"
                        />
                    </motion.div>

                    <motion.div variants={item}>
                        <StatCard
                            title="Total Transfers"
                            value="245"
                            change="+8.2%"
                            trend="up"
                            icon={<ArrowRightLeft className="h-5 w-5 text-cyan-500" />}
                            bgClass="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30"
                        />
                    </motion.div>

                    <motion.div variants={item}>
                        <StatCard
                            title="Active Wallets"
                            value="4"
                            change="0%"
                            trend="neutral"
                            icon={<PiggyBank className="h-5 w-5 text-amber-500" />}
                            bgClass="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30"
                        />
                    </motion.div>

                    <motion.div variants={item}>
                        <StatCard
                            title="Saved Recipients"
                            value="12"
                            change="+2"
                            trend="up"
                            icon={<Users className="h-5 w-5 text-violet-500" />}
                            bgClass="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30"
                        />
                    </motion.div>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <motion.div
                            variants={item}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.3 }}
                        >
                            <BalanceOverviewCard />
                        </motion.div>

                        <motion.div
                            variants={item}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.4 }}
                        >
                            <RecentTransactionsCard />
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <motion.div
                            variants={item}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.5 }}
                        >
                            <QuickTransferCard />
                        </motion.div>

                        <motion.div
                            variants={item}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.6 }}
                        >
                            <CurrencyRatesCard />
                        </motion.div>

                        <motion.div
                            variants={item}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.7 }}
                        >
                            <ActivityCard />
                        </motion.div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
