import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    ArrowUpRight,
    ArrowDownLeft,
    ArrowRightLeft,
    MoreHorizontal,
    ExternalLink,
    RefreshCw,
    AlertTriangle,
    CheckCircle
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Transfer {
    id: string;
    type: 'send' | 'receive' | 'exchange';
    status: 'completed' | 'pending' | 'failed';
    date: string;
    amount: string;
    currency: string;
    fee: string;
    recipient: {
        name: string;
        image?: string;
        initials: string;
    };
    paymentMethod: string;
    reference: string;
}

const transfers: Transfer[] = [
    {
        id: 'TRX-001',
        type: 'send',
        status: 'completed',
        date: 'Apr 23, 2023 • 10:45 AM',
        amount: '$320.00',
        currency: 'USD',
        fee: '$3.20',
        recipient: {
            name: 'John Doe',
            initials: 'JD'
        },
        paymentMethod: 'Ethereum Wallet',
        reference: 'INV2023001'
    },
    {
        id: 'TRX-002',
        type: 'receive',
        status: 'completed',
        date: 'Apr 22, 2023 • 02:30 PM',
        amount: '$750.50',
        currency: 'USD',
        fee: '$0.00',
        recipient: {
            name: 'Sarah Johnson',
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            initials: 'SJ'
        },
        paymentMethod: 'Stellar Wallet',
        reference: 'PAY2023045'
    },
    {
        id: 'TRX-003',
        type: 'exchange',
        status: 'pending',
        date: 'Apr 22, 2023 • 11:15 AM',
        amount: '$500.00',
        currency: 'USD to EUR',
        fee: '$5.00',
        recipient: {
            name: 'Currency Exchange',
            initials: 'CE'
        },
        paymentMethod: 'Ethereum Wallet',
        reference: 'EXC2023012'
    },
    {
        id: 'TRX-004',
        type: 'send',
        status: 'failed',
        date: 'Apr 21, 2023 • 09:20 AM',
        amount: '$120.75',
        currency: 'USD',
        fee: '$1.21',
        recipient: {
            name: 'Mike Williams',
            initials: 'MW'
        },
        paymentMethod: 'Stellar Wallet',
        reference: 'INV2023089'
    },
    {
        id: 'TRX-005',
        type: 'receive',
        status: 'completed',
        date: 'Apr 20, 2023 • 05:30 PM',
        amount: '$425.20',
        currency: 'USD',
        fee: '$0.00',
        recipient: {
            name: 'Emma Thompson',
            image: 'https://randomuser.me/api/portraits/women/65.jpg',
            initials: 'ET'
        },
        paymentMethod: 'Ethereum Wallet',
        reference: 'PAY2023067'
    }
];

interface TransferListProps {
    activeTab: 'all' | 'sent' | 'received' | 'exchange';
}

const getStatusBadge = (status: Transfer['status']) => {
    switch (status) {
        case 'completed':
            return (
                <Badge className="bg-green-50 border-green-500 text-green-600 dark:bg-green-900/20 dark:border-green-700 dark:text-green-400">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Completed
                </Badge>
            );
        case 'pending':
            return (
                <Badge className="bg-amber-50 border-amber-500 text-amber-600 dark:bg-amber-900/20 dark:border-amber-700 dark:text-amber-400">
                    <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                    Pending
                </Badge>
            );
        case 'failed':
            return (
                <Badge className="bg-red-50 border-red-500 text-red-600 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Failed
                </Badge>
            );
        default:
            return null;
    }
};

const getTypeIcon = (type: Transfer['type']) => {
    switch (type) {
        case 'send':
            return (
                <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white">
                    <ArrowUpRight className="h-4 w-4" />
                </div>
            );
        case 'receive':
            return (
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                    <ArrowDownLeft className="h-4 w-4" />
                </div>
            );
        case 'exchange':
            return (
                <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white">
                    <ArrowRightLeft className="h-4 w-4" />
                </div>
            );
        default:
            return null;
    }
};

const TransferList: React.FC<TransferListProps> = ({ activeTab }) => {
    // Filter transfers based on active tab
    const filteredTransfers = transfers.filter(transfer => {
        if (activeTab === 'all') return true;
        if (activeTab === 'sent') return transfer.type === 'send';
        if (activeTab === 'received') return transfer.type === 'receive';
        if (activeTab === 'exchange') return transfer.type === 'exchange';
        return true;
    });

    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Recipient</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredTransfers.map((transfer) => (
                        <TableRow key={transfer.id}>
                            <TableCell className="font-medium">{transfer.id}</TableCell>
                            <TableCell>
                                <div className="flex items-center space-x-2">
                                    {getTypeIcon(transfer.type)}
                                    <span className="capitalize">{transfer.type}</span>
                                </div>
                            </TableCell>
                            <TableCell>{transfer.date}</TableCell>
                            <TableCell>
                                <div className="flex flex-col">
                                    <span className={cn(
                                        "font-semibold",
                                        transfer.type === 'send' ? "text-rose-600 dark:text-rose-400" :
                                            transfer.type === 'receive' ? "text-green-600 dark:text-green-400" :
                                                "text-cyan-600 dark:text-cyan-400"
                                    )}>
                                        {transfer.type === 'send' ? '-' : transfer.type === 'receive' ? '+' : ''}
                                        {transfer.amount}
                                    </span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        Fee: {transfer.fee}
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center space-x-2">
                                    <Avatar className="h-7 w-7">
                                        {transfer.recipient.image ? (
                                            <AvatarImage src={transfer.recipient.image} alt={transfer.recipient.name} />
                                        ) : null}
                                        <AvatarFallback className="bg-gradient-to-br from-rose-500 to-cyan-500 text-white text-xs">
                                            {transfer.recipient.initials}
                                        </AvatarFallback>
                                    </Avatar>
                                    <span>{transfer.recipient.name}</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                {getStatusBadge(transfer.status)}
                            </TableCell>
                            <TableCell className="text-right">
                                <div className="flex items-center justify-end gap-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => window.open(`/dashboard/transfers/${transfer.id}`, '_blank')}
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                    </Button>

                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>View Details</DropdownMenuItem>
                                            <DropdownMenuItem>Download Receipt</DropdownMenuItem>
                                            {transfer.status === 'failed' && (
                                                <DropdownMenuItem>Retry Transaction</DropdownMenuItem>
                                            )}
                                            <DropdownMenuItem>Report an Issue</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {filteredTransfers.length === 0 && (
                <div className="text-center p-8">
                    <p className="text-gray-500 dark:text-gray-400">No transfers found</p>
                </div>
            )}
        </div>
    );
};

export default TransferList;