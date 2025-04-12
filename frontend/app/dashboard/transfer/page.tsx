"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, ArrowDownLeft, Plus, Search, Filter, Calendar, Clock, AlertCircle } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import DashboardLayout from '@/components/Dashboard2/DashboardLayout';
import TransferStatusCard from '../../../components/Transfers/TransferStatusCard';
import TransferList from '@/components/Transfers/TransferList';


// Mock date range picker component
// In a real app, you would use a proper date picker component
const DateRangeSelect = () => {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-4 w-4 text-gray-400" />
            </div>
            <Input
                className="pl-10"
                placeholder="Select date range"
                value="Last 7 days"
                readOnly
            />
        </div>
    );
};

const TransfersPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('all');

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
                            Transfers
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Send, receive, and manage your cross-border transfers.
                        </p>
                    </div>

                    <div className="flex space-x-2 mt-4 md:mt-0">
                        <Button
                            variant="outline"
                            className="flex items-center"
                        >
                            <ArrowDownLeft className="h-4 w-4 mr-2" />
                            Receive
                        </Button>
                        <Button
                            className="flex items-center bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white"
                        >
                            <ArrowUpRight className="h-4 w-4 mr-2" />
                            Send Money
                        </Button>
                    </div>
                </div>

                {/* Status Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div variants={item}>
                        <TransferStatusCard
                            title="Total Sent"
                            amount="$2,530.75"
                            count={12}
                            trend="up"
                            trendValue="+15.3%"
                            period="vs last month"
                            icon={<ArrowUpRight className="h-5 w-5 text-white" />}
                            bgClass="bg-rose-500"
                        />
                    </motion.div>

                    <motion.div variants={item}>
                        <TransferStatusCard
                            title="Total Received"
                            amount="$4,320.50"
                            count={8}
                            trend="up"
                            trendValue="+22.7%"
                            period="vs last month"
                            icon={<ArrowDownLeft className="h-5 w-5 text-white" />}
                            bgClass="bg-green-500"
                        />
                    </motion.div>

                    <motion.div variants={item}>
                        <TransferStatusCard
                            title="Pending"
                            amount="$750.00"
                            count={3}
                            trend="down"
                            trendValue="-5.2%"
                            period="vs last month"
                            icon={<Clock className="h-5 w-5 text-white" />}
                            bgClass="bg-amber-500"
                        />
                    </motion.div>

                    <motion.div variants={item}>
                        <TransferStatusCard
                            title="Failed"
                            amount="$120.25"
                            count={1}
                            trend="down"
                            trendValue="-12.5%"
                            period="vs last month"
                            icon={<AlertCircle className="h-5 w-5 text-white" />}
                            bgClass="bg-red-500"
                        />
                    </motion.div>
                </motion.div>

                {/* Transfers List */}
                <motion.div
                    variants={item}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.4 }}
                >
                    <Card className="border-gray-200 dark:border-gray-800 shadow-sm">
                        <CardContent className="p-6">
                            <div className="mb-6">
                                <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                                        <TabsList>
                                            <TabsTrigger value="all">All Transfers</TabsTrigger>
                                            <TabsTrigger value="sent">Sent</TabsTrigger>
                                            <TabsTrigger value="received">Received</TabsTrigger>
                                            <TabsTrigger value="exchange">Exchange</TabsTrigger>
                                        </TabsList>

                                        <Button variant="outline" size="sm" className="flex items-center">
                                            <Plus className="h-4 w-4 mr-1" />
                                            Add Filter
                                        </Button>
                                    </div>

                                    {/* Filters */}
                                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                        <div className="relative flex-1">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Search className="h-4 w-4 text-gray-400" />
                                            </div>
                                            <Input
                                                className="pl-10"
                                                placeholder="Search transfers..."
                                            />
                                        </div>

                                        <Select defaultValue="all-status">
                                            <SelectTrigger className="w-[180px]">
                                                <div className="flex items-center">
                                                    <Filter className="h-4 w-4 mr-2 text-gray-400" />
                                                    <SelectValue placeholder="Status" />
                                                </div>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all-status">All Status</SelectItem>
                                                <SelectItem value="completed">Completed</SelectItem>
                                                <SelectItem value="pending">Pending</SelectItem>
                                                <SelectItem value="failed">Failed</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        <DateRangeSelect />
                                    </div>

                                    {/* Transfers Table */}
                                    <TabsContent value="all" className="mt-6">
                                        <TransferList activeTab="all" />
                                    </TabsContent>

                                    <TabsContent value="sent" className="mt-6">
                                        <TransferList activeTab="sent" />
                                    </TabsContent>

                                    <TabsContent value="received" className="mt-6">
                                        <TransferList activeTab="received" />
                                    </TabsContent>

                                    <TabsContent value="exchange" className="mt-6">
                                        <TransferList activeTab="exchange" />
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </DashboardLayout>
    );
};

export default TransfersPage;