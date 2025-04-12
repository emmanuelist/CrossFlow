"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Download, Search, Filter, Clock, ArrowUpRight, ArrowDownLeft, Check, X, AlertCircle, MoreHorizontal } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DashboardLayout from '@/components/Dashboard2/DashboardLayout';

// Type definitions
interface Transaction {
    id: string;
    date: string;
    description: string;
    type: 'sent' | 'received' | 'exchange';
    status: 'completed' | 'pending' | 'failed';
    amount: string;
    currency: string;
    recipient?: string;
    sender?: string;
}

// Mock data for transactions
const mockTransactions: Transaction[] = [
    {
        id: 'TRX-001',
        date: '2025-03-28 14:30',
        description: 'Payment to John Doe',
        type: 'sent',
        status: 'completed',
        amount: '$450.00',
        currency: 'USD',
        recipient: 'John Doe'
    },
    {
        id: 'TRX-002',
        date: '2025-03-27 10:15',
        description: 'Received from Sarah Smith',
        type: 'received',
        status: 'completed',
        amount: '$1,250.00',
        currency: 'USD',
        sender: 'Sarah Smith'
    },
    {
        id: 'TRX-003',
        date: '2025-03-25 16:45',
        description: 'Currency exchange USD to EUR',
        type: 'exchange',
        status: 'completed',
        amount: '$600.00 → €552.00',
        currency: 'USD/EUR'
    },
    {
        id: 'TRX-004',
        date: '2025-03-22 09:20',
        description: 'Payment to Emma Wilson',
        type: 'sent',
        status: 'pending',
        amount: '$350.00',
        currency: 'USD',
        recipient: 'Emma Wilson'
    },
    {
        id: 'TRX-005',
        date: '2025-03-20 13:10',
        description: 'Received from Mike Johnson',
        type: 'received',
        status: 'completed',
        amount: '$780.25',
        currency: 'USD',
        sender: 'Mike Johnson'
    },
    {
        id: 'TRX-006',
        date: '2025-03-18 11:30',
        description: 'Payment to WebHosting Inc.',
        type: 'sent',
        status: 'failed',
        amount: '$89.99',
        currency: 'USD',
        recipient: 'WebHosting Inc.'
    },
    {
        id: 'TRX-007',
        date: '2025-03-15 15:45',
        description: 'Currency exchange USD to GBP',
        type: 'exchange',
        status: 'completed',
        amount: '$500.00 → £392.50',
        currency: 'USD/GBP'
    },
    {
        id: 'TRX-008',
        date: '2025-03-12 17:20',
        description: 'Received from Robert Brown',
        type: 'received',
        status: 'completed',
        amount: '$1,500.00',
        currency: 'USD',
        sender: 'Robert Brown'
    },
    {
        id: 'TRX-009',
        date: '2025-03-10 08:15',
        description: 'Payment to Amazon',
        type: 'sent',
        status: 'completed',
        amount: '$245.67',
        currency: 'USD',
        recipient: 'Amazon'
    },
    {
        id: 'TRX-010',
        date: '2025-03-05 12:40',
        description: 'Currency exchange USD to JPY',
        type: 'exchange',
        status: 'completed',
        amount: '$300.00 → ¥44,760',
        currency: 'USD/JPY'
    }
];

// Helper functions for rendering
const getStatusBadge = (status: string) => {
    switch (status) {
        case 'completed':
            return <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-100 border-0 flex items-center"><Check className="h-3 w-3 mr-1" /> Completed</Badge>;
        case 'pending':
            return <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 hover:bg-amber-100 border-0 flex items-center"><Clock className="h-3 w-3 mr-1" /> Pending</Badge>;
        case 'failed':
            return <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 hover:bg-red-100 border-0 flex items-center"><X className="h-3 w-3 mr-1" /> Failed</Badge>;
        default:
            return null;
    }
};

const getTypeIcon = (type: string) => {
    switch (type) {
        case 'sent':
            return <div className="bg-rose-100 dark:bg-rose-900/30 p-2 rounded-full"><ArrowUpRight className="h-4 w-4 text-rose-600 dark:text-rose-400" /></div>;
        case 'received':
            return <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full"><ArrowDownLeft className="h-4 w-4 text-green-600 dark:text-green-400" /></div>;
        case 'exchange':
            return <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full"><Filter className="h-4 w-4 text-blue-600 dark:text-blue-400" /></div>;
        default:
            return null;
    }
};

// DateRangeSelect component
const DateRangeSelect: React.FC = () => {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-4 w-4 text-gray-400" />
            </div>
            <Input
                className="pl-10"
                placeholder="Select date range"
                value="Last 30 days"
                readOnly
            />
        </div>
    );
};

const HistoryPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [typeFilter, setTypeFilter] = useState<string>('all');
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 5;

    // Filter transactions based on search and filters
    const filteredTransactions = mockTransactions.filter(transaction => {
        // Search filter
        const matchesSearch = searchQuery === '' ||
            transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            transaction.id.toLowerCase().includes(searchQuery.toLowerCase());

        // Type filter
        const matchesType = typeFilter === 'all' || transaction.type === typeFilter;

        // Status filter
        const matchesStatus = statusFilter === 'all' || transaction.status === statusFilter;

        return matchesSearch && matchesType && matchesStatus;
    });

    // Pagination
    const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedTransactions = filteredTransactions.slice(startIndex, startIndex + itemsPerPage);

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
                            Transaction History
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            View and manage all your transaction records.
                        </p>
                    </div>

                    <div className="flex space-x-2 mt-4 md:mt-0">
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

                {/* Filters */}
                <Card className="border-gray-200 dark:border-gray-800">
                    <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-1">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-4 w-4 text-gray-400" />
                                </div>
                                <Input
                                    className="pl-10"
                                    placeholder="Search transactions..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            <Select
                                value={typeFilter}
                                onValueChange={setTypeFilter}
                            >
                                <SelectTrigger className="w-full md:w-[180px]">
                                    <div className="flex items-center">
                                        <Filter className="h-4 w-4 mr-2 text-gray-400" />
                                        <SelectValue placeholder="Type" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Types</SelectItem>
                                    <SelectItem value="sent">Sent</SelectItem>
                                    <SelectItem value="received">Received</SelectItem>
                                    <SelectItem value="exchange">Exchange</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select
                                value={statusFilter}
                                onValueChange={setStatusFilter}
                            >
                                <SelectTrigger className="w-full md:w-[180px]">
                                    <div className="flex items-center">
                                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                                        <SelectValue placeholder="Status" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Status</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="failed">Failed</SelectItem>
                                </SelectContent>
                            </Select>

                            <DateRangeSelect />
                        </div>
                    </CardContent>
                </Card>

                {/* Transactions Table */}
                <motion.div
                    variants={item}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.3 }}
                >
                    <Card className="border-gray-200 dark:border-gray-800">
                        <CardContent className="p-0">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                                            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                Transaction
                                            </th>
                                            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                Date
                                            </th>
                                            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                Description
                                            </th>
                                            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th className="py-3 px-6 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                Amount
                                            </th>
                                            <th className="py-3 px-6 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                        {paginatedTransactions.length > 0 ? (
                                            paginatedTransactions.map((transaction) => (
                                                <tr
                                                    key={transaction.id}
                                                    className="hover:bg-gray-50 dark:hover:bg-gray-800/30"
                                                >
                                                    <td className="py-4 px-6">
                                                        <div className="flex items-center">
                                                            {getTypeIcon(transaction.type)}
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                                    {transaction.id}
                                                                </div>
                                                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                                                    {transaction.type === 'sent' ? 'To: ' + transaction.recipient :
                                                                        transaction.type === 'received' ? 'From: ' + transaction.sender :
                                                                            'Exchange'}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <div className="text-sm text-gray-900 dark:text-white">
                                                            {new Date(transaction.date).toLocaleDateString()}
                                                        </div>
                                                        <div className="text-xs text-gray-500 dark:text-gray-400">
                                                            {new Date(transaction.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <div className="text-sm text-gray-900 dark:text-white">
                                                            {transaction.description}
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        {getStatusBadge(transaction.status)}
                                                    </td>
                                                    <td className="py-4 px-6 text-right">
                                                        <div className={`text-sm font-medium ${transaction.type === 'sent' ? 'text-rose-600 dark:text-rose-400' :
                                                                transaction.type === 'received' ? 'text-green-600 dark:text-green-400' :
                                                                    'text-gray-900 dark:text-white'
                                                            }`}>
                                                            {transaction.amount}
                                                        </div>
                                                        <div className="text-xs text-gray-500 dark:text-gray-400">
                                                            {transaction.currency}
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-6 text-center">
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                                    <MoreHorizontal className="h-4 w-4" />
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                                                <DropdownMenuItem>Download Receipt</DropdownMenuItem>
                                                                {transaction.status === 'pending' && (
                                                                    <DropdownMenuItem>Cancel</DropdownMenuItem>
                                                                )}
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={6} className="py-8 text-center text-gray-500 dark:text-gray-400">
                                                    <div className="flex flex-col items-center">
                                                        <AlertCircle className="h-8 w-8 mb-2" />
                                                        <p>No transactions found matching your filters.</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            {filteredTransactions.length > 0 && (
                                <div className="py-4 px-6 border-t border-gray-200 dark:border-gray-800">
                                    <Pagination>
                                        <PaginationContent>
                                            <PaginationItem>
                                                <PaginationPrevious
                                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                                    className={`cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                />
                                            </PaginationItem>

                                            {Array.from({ length: totalPages }).map((_, i) => (
                                                <PaginationItem key={i}>
                                                    <Button
                                                        variant={currentPage === i + 1 ? "default" : "outline"}
                                                        size="sm"
                                                        onClick={() => setCurrentPage(i + 1)}
                                                        className={currentPage === i + 1 ? "bg-gradient-to-r from-rose-500 to-cyan-500 text-white border-0" : ""}
                                                    >
                                                        {i + 1}
                                                    </Button>
                                                </PaginationItem>
                                            ))}

                                            <PaginationItem>
                                                <PaginationNext
                                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                                    className={`cursor-pointer ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                />
                                            </PaginationItem>
                                        </PaginationContent>
                                    </Pagination>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </DashboardLayout>
    );
};

export default HistoryPage;