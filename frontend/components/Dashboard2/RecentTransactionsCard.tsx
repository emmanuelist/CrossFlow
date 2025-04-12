import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ArrowUpRight,
    ArrowDownLeft,
    MoreHorizontal,
    ArrowRightLeft,
    ExternalLink,
    RefreshCw
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';

interface Transaction {
    id: string;
    type: 'send' | 'receive' | 'exchange';
    status: 'completed' | 'pending' | 'failed';
    amount: string;
    currency: string;
    recipient: string;
    date: string;
    icon: React.ReactNode;
}

const transactions: Transaction[] = [
    {
        id: '1',
        type: 'send',
        status: 'completed',
        amount: '-$320',
        currency: 'USD',
        recipient: 'John Doe',
        date: 'Today, 12:30 PM',
        icon: <ArrowUpRight className="h-4 w-4 text-white" />
    },
    {
        id: '2',
        type: 'receive',
        status: 'completed',
        amount: '+$750',
        currency: 'USD',
        recipient: 'Sarah Johnson',
        date: 'Yesterday, 3:45 PM',
        icon: <ArrowDownLeft className="h-4 w-4 text-white" />
    },
    {
        id: '3',
        type: 'exchange',
        status: 'pending',
        amount: '-$500',
        currency: 'USD to EUR',
        recipient: 'Currency Exchange',
        date: 'Yesterday, 2:15 PM',
        icon: <ArrowRightLeft className="h-4 w-4 text-white" />
    },
    {
        id: '4',
        type: 'send',
        status: 'failed',
        amount: '-$120',
        currency: 'USD',
        recipient: 'Mike Williams',
        date: 'Mar 15, 9:20 AM',
        icon: <ArrowUpRight className="h-4 w-4 text-white" />
    },
    {
        id: '5',
        type: 'receive',
        status: 'completed',
        amount: '+$425',
        currency: 'USD',
        recipient: 'Emma Thompson',
        date: 'Mar 14, 5:30 PM',
        icon: <ArrowDownLeft className="h-4 w-4 text-white" />
    }
];

const TransactionRow: React.FC<{ transaction: Transaction }> = ({ transaction }) => {
    return (
        <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
                <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0",
                    transaction.type === 'send' ? "bg-rose-500" :
                        transaction.type === 'receive' ? "bg-green-500" :
                            "bg-cyan-500"
                )}>
                    {transaction.icon}
                </div>

                <div>
                    <div className="flex items-center">
                        <h4 className="font-medium text-gray-900 dark:text-white">
                            {transaction.type === 'send' ? 'Sent to ' :
                                transaction.type === 'receive' ? 'Received from ' :
                                    'Exchanged '}
                            {transaction.recipient}
                        </h4>
                        <Badge
                            variant="outline"
                            className={cn(
                                "ml-2 text-xs",
                                transaction.status === 'completed' ? "border-green-500 bg-green-50 text-green-600 dark:border-green-700 dark:bg-green-900/20 dark:text-green-400" :
                                    transaction.status === 'pending' ? "border-amber-500 bg-amber-50 text-amber-600 dark:border-amber-700 dark:bg-amber-900/20 dark:text-amber-400" :
                                        "border-red-500 bg-red-50 text-red-600 dark:border-red-700 dark:bg-red-900/20 dark:text-red-400"
                            )}
                        >
                            {transaction.status === 'pending' && <RefreshCw className="h-3 w-3 mr-1 animate-spin" />}
                            {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                        </Badge>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {transaction.date}
                    </p>
                </div>
            </div>

            <div className="flex items-center">
                <span className={cn(
                    "font-semibold",
                    transaction.type === 'send' ? "text-rose-600 dark:text-rose-400" :
                        transaction.type === 'receive' ? "text-green-600 dark:text-green-400" :
                            "text-cyan-600 dark:text-cyan-400"
                )}>
                    {transaction.amount}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">{transaction.currency}</span>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 ml-2">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Download Receipt</DropdownMenuItem>
                        {transaction.status === 'failed' && (
                            <DropdownMenuItem>Retry Transaction</DropdownMenuItem>
                        )}
                        <DropdownMenuItem>Report an Issue</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

const RecentTransactionsCard: React.FC = () => {
    return (
        <Card className="border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    Recent Transactions
                </CardTitle>

                <Button variant="ghost" size="sm" className="text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300">
                    <span>View All</span>
                    <ExternalLink className="h-4 w-4 ml-1" />
                </Button>
            </CardHeader>

            <CardContent>
                <div className="space-y-1 divide-y divide-gray-200 dark:divide-gray-800">
                    {transactions.map((transaction) => (
                        <TransactionRow key={transaction.id} transaction={transaction} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default RecentTransactionsCard;