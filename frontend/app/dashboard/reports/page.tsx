"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    FileText,
    Download,
    Calendar,
    Filter,
    ArrowUpDown,
    BarChart,
    DollarSign,
    Share2,
    Mail,
    Plus,
    ChevronDown,
    Sparkles
} from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    BarChart as RechartsBarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Pie,
    Cell,
    PieChart as RechartsPieChart
} from 'recharts';
import DashboardLayout from '@/components/Dashboard2/DashboardLayout';

// Type definitions
interface Report {
    id: string;
    name: string;
    description: string;
    type: 'financial' | 'transactions' | 'analytics';
    frequency: 'one-time' | 'daily' | 'weekly' | 'monthly' | 'quarterly';
    lastRun?: string;
    nextRun?: string;
    status: 'scheduled' | 'completed' | 'failed';
    format: 'pdf' | 'csv' | 'excel';
}

// Mock reports data
const reportsData: Report[] = [
    {
        id: "rep-001",
        name: "Monthly Financial Summary",
        description: "A complete summary of your monthly financial activities including income, expenses, and transfers.",
        type: "financial",
        frequency: "monthly",
        lastRun: "2025-03-31",
        nextRun: "2025-04-30",
        status: "completed",
        format: "pdf"
    },
    {
        id: "rep-002",
        name: "Transaction History Export",
        description: "Complete record of all transactions within the selected date range.",
        type: "transactions",
        frequency: "one-time",
        lastRun: "2025-04-05",
        status: "completed",
        format: "csv"
    },
    {
        id: "rep-003",
        name: "Currency Exchange Analysis",
        description: "Analysis of your currency exchange rates, volumes, and savings over time.",
        type: "analytics",
        frequency: "quarterly",
        lastRun: "2025-03-31",
        nextRun: "2025-06-30",
        status: "scheduled",
        format: "pdf"
    },
    {
        id: "rep-004",
        name: "Weekly Spending Breakdown",
        description: "Detailed breakdown of your weekly spending categorized by purpose and recipient.",
        type: "financial",
        frequency: "weekly",
        lastRun: "2025-04-07",
        nextRun: "2025-04-14",
        status: "scheduled",
        format: "excel"
    },
    {
        id: "rep-005",
        name: "Tax Documentation Annual Report",
        description: "Comprehensive annual report suitable for tax filing purposes with categorized expenses and income.",
        type: "financial",
        frequency: "one-time",
        lastRun: "2025-01-15",
        status: "completed",
        format: "pdf"
    },
    {
        id: "rep-006",
        name: "Recipient Payment History",
        description: "Detailed history of all payments made to each of your saved recipients.",
        type: "transactions",
        frequency: "monthly",
        lastRun: "2025-03-31",
        nextRun: "2025-04-30",
        status: "completed",
        format: "excel"
    }
];

// Mock data for charts and tables
const monthlyTransactionData = [
    { month: 'Jan', sent: 2500, received: 3200 },
    { month: 'Feb', sent: 3000, received: 2800 },
    { month: 'Mar', sent: 2800, received: 3500 },
    { month: 'Apr', sent: 3200, received: 3100 },
    { month: 'May', sent: 2700, received: 2900 },
    { month: 'Jun', sent: 3100, received: 3400 },
    { month: 'Jul', sent: 3500, received: 3200 },
    { month: 'Aug', sent: 3300, received: 3800 },
    { month: 'Sep', sent: 3700, received: 3600 },
    { month: 'Oct', sent: 3200, received: 3300 },
    { month: 'Nov', sent: 3800, received: 3500 },
    { month: 'Dec', sent: 4000, received: 4200 },
];

const currencyDistributionData = [
    { name: 'USD', value: 60 },
    { name: 'EUR', value: 25 },
    { name: 'GBP', value: 10 },
    { name: 'Others', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const recentTransactionsData = [
    { id: 'TX001', date: '2025-04-10', description: 'Payment to John Smith', amount: '-$450.00', status: 'completed' },
    { id: 'TX002', date: '2025-04-08', description: 'Received from Sarah Johnson', amount: '+$1,250.00', status: 'completed' },
    { id: 'TX003', date: '2025-04-05', description: 'Currency exchange USD to EUR', amount: '$600.00 → €552.00', status: 'completed' },
    { id: 'TX004', date: '2025-04-02', description: 'Payment to Emma Wilson', amount: '-$350.00', status: 'pending' },
    { id: 'TX005', date: '2025-03-30', description: 'Received from Mike Johnson', amount: '+$780.25', status: 'completed' },
];

// Report Card Component
const ReportCard: React.FC<{ report: Report }> = ({ report }) => {
    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'completed':
                return <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-0">Completed</Badge>;
            case 'scheduled':
                return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-0">Scheduled</Badge>;
            case 'failed':
                return <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-0">Failed</Badge>;
            default:
                return null;
        }
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'financial':
                return <DollarSign className="h-5 w-5 text-emerald-500" />;
            case 'transactions':
                return <ArrowUpDown className="h-5 w-5 text-blue-500" />;
            case 'analytics':
                return <BarChart className="h-5 w-5 text-purple-500" />;
            default:
                return null;
        }
    };

    const getFormatIcon = (format: string) => {
        switch (format) {
            case 'pdf':
                return <FileText className="h-4 w-4 text-red-500" />;
            case 'csv':
                return <FileText className="h-4 w-4 text-green-500" />;
            case 'excel':
                return <FileText className="h-4 w-4 text-blue-500" />;
            default:
                return null;
        }
    };

    return (
        <Card className="hover:shadow-md transition-shadow border-gray-200 dark:border-gray-800">
            <CardContent className="p-6">
                <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                            {getTypeIcon(report.type)}
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">{report.name}</h3>
                            <div className="flex items-center space-x-2 mt-1">
                                {getStatusBadge(report.status)}
                                <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                                    {getFormatIcon(report.format)}
                                    <span className="ml-1">{report.format.toUpperCase()}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem className="flex items-center">
                                <Download className="h-4 w-4 mr-2" />
                                <span>Download</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center">
                                <Mail className="h-4 w-4 mr-2" />
                                <span>Email Report</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2" />
                                <span>Schedule</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center">
                                <Share2 className="h-4 w-4 mr-2" />
                                <span>Share</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 line-clamp-2">
                    {report.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mt-5 text-sm">
                    <div>
                        <p className="text-gray-500 dark:text-gray-400">Frequency</p>
                        <p className="font-medium text-gray-900 dark:text-white capitalize">{report.frequency}</p>
                    </div>
                    <div>
                        <p className="text-gray-500 dark:text-gray-400">Last Run</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                            {report.lastRun ? new Date(report.lastRun).toLocaleDateString() : 'Never'}
                        </p>
                    </div>
                    {report.nextRun && (
                        <div className="col-span-2">
                            <p className="text-gray-500 dark:text-gray-400">Next Run</p>
                            <p className="font-medium text-gray-900 dark:text-white">
                                {new Date(report.nextRun).toLocaleDateString()}
                            </p>
                        </div>
                    )}
                </div>

                <div className="mt-5 flex justify-end">
                    <Button variant="outline" size="sm" className="mr-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        Schedule
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

// Create Report Component
const CreateReportSection: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Create New Report</h2>
            </div>

            <Card>
                <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="hover:shadow-md transition-shadow cursor-pointer border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600">
                            <CardContent className="p-6 text-center">
                                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <ArrowUpDown className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Transaction Report</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    Export all your transactions within a specific date range.
                                </p>
                                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-0">Popular</Badge>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-md transition-shadow cursor-pointer border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600">
                            <CardContent className="p-6 text-center">
                                <div className="h-12 w-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <DollarSign className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Financial Summary</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    Get a complete overview of your financial activities.
                                </p>
                                <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 border-0">Recommended</Badge>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-md transition-shadow cursor-pointer border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600">
                            <CardContent className="p-6 text-center">
                                <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BarChart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Analytics Report</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    In-depth analysis of your spending patterns and trends.
                                </p>
                                <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 border-0">Advanced</Badge>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="mt-6">
                        <Button className="w-full bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white">
                            <Plus className="h-4 w-4 mr-2" />
                            Create Custom Report
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

// Insights Component
const InsightsSection: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Insights & Analytics</h2>
                <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Transaction Volume Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle>Monthly Transaction Volume</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <RechartsBarChart
                                    data={monthlyTransactionData}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                                    <Legend />
                                    <Bar dataKey="sent" name="Sent" fill="#f43f5e" />
                                    <Bar dataKey="received" name="Received" fill="#06b6d4" />
                                </RechartsBarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Currency Distribution Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle>Currency Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-80 flex flex-col items-center justify-center">
                            <ResponsiveContainer width="100%" height="80%">
                                <RechartsPieChart>
                                    <Pie
                                        data={currencyDistributionData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {currencyDistributionData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                                    <Legend />
                                </RechartsPieChart>
                            </ResponsiveContainer>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Based on transaction volume over the last 12 months
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Transactions Table */}
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle>Recent Transactions</CardTitle>
                        <Button variant="outline" size="sm">View All</Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentTransactionsData.map((tx) => (
                                <TableRow key={tx.id}>
                                    <TableCell className="font-medium">{tx.id}</TableCell>
                                    <TableCell>{new Date(tx.date).toLocaleDateString()}</TableCell>
                                    <TableCell>{tx.description}</TableCell>
                                    <TableCell>
                                        <Badge
                                            className={`${tx.status === 'completed'
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                                    : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                                                } border-0`}
                                        >
                                            {tx.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className={`text-right ${tx.amount.startsWith('+')
                                            ? 'text-green-600 dark:text-green-400'
                                            : tx.amount.startsWith('-')
                                                ? 'text-rose-600 dark:text-rose-400'
                                                : ''
                                        }`}>
                                        {tx.amount}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

// Main Reports Page Component
const ReportsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("my-reports");
    const [typeFilter, setTypeFilter] = useState<string>('all');

    // Filter reports based on type
    const filteredReports = reportsData.filter(report => {
        return typeFilter === 'all' || report.type === typeFilter;
    });

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
                            Reports
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            View, manage, and generate reports for your financial activities
                        </p>
                    </div>

                    <div className="flex space-x-2 mt-4 md:mt-0">
                        <Button
                            variant="outline"
                            className="flex items-center"
                        >
                            <Download className="h-4 w-4 mr-2" />
                            Export
                        </Button>
                        <Button
                            className="flex items-center bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white"
                        >
                            <Sparkles className="h-4 w-4 mr-2" />
                            Generate Report
                        </Button>
                    </div>
                </div>

                {/* Tabs Navigation */}
                <Card className="border-gray-200 dark:border-gray-800">
                    <CardContent className="p-6">
                        <Tabs defaultValue="my-reports" value={activeTab} onValueChange={setActiveTab}>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-6">
                                <TabsList>
                                    <TabsTrigger value="my-reports">My Reports</TabsTrigger>
                                    <TabsTrigger value="create">Create Report</TabsTrigger>
                                    <TabsTrigger value="insights">Insights</TabsTrigger>
                                </TabsList>

                                {activeTab === 'my-reports' && (
                                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                                        <SelectTrigger className="w-[180px]">
                                            <div className="flex items-center">
                                                <Filter className="h-4 w-4 mr-2 text-gray-400" />
                                                <SelectValue placeholder="Filter by type" />
                                            </div>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Types</SelectItem>
                                            <SelectItem value="financial">Financial</SelectItem>
                                            <SelectItem value="transactions">Transactions</SelectItem>
                                            <SelectItem value="analytics">Analytics</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            </div>

                            <TabsContent value="my-reports">
                                {filteredReports.length > 0 ? (
                                    <motion.div
                                        variants={container}
                                        initial="hidden"
                                        animate="show"
                                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                    >
                                        {filteredReports.map((report) => (
                                            <motion.div key={report.id} variants={item}>
                                                <ReportCard report={report} />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <div className="text-center py-12">
                                        <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">No reports found</h3>
                                        <p className="text-gray-500 dark:text-gray-400 mb-6">
                                            {typeFilter !== 'all'
                                                ? `You don't have any ${typeFilter} reports yet.`
                                                : "You don't have any reports yet. Create your first report to get started."}
                                        </p>
                                        <Button
                                            className="bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white"
                                            onClick={() => setActiveTab('create')}
                                        >
                                            <Plus className="h-4 w-4 mr-2" />
                                            Create New Report
                                        </Button>
                                    </div>
                                )}
                            </TabsContent>
                            <TabsContent value="create">
                                <CreateReportSection />
                            </TabsContent>
                            <TabsContent value="insights">
                                <InsightsSection />
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default ReportsPage;