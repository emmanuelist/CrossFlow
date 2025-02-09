// components/Dashboard/TransactionMonitor.tsx
import { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { WalletService } from '@/services/WalletService';
import toast from "react-hot-toast";

interface TransactionMonitorProps {
    walletService: WalletService;
}

interface Transaction {
    txId: string;
    type: 'send' | 'receive' | 'swap' | 'bridge';
    amount: string;
    network: string;
    status: TransferStatus;
    timestamp: number;
    chainSymbol: string;
    fromAddress?: string;
    toAddress?: string;
}

type TransferStatus = 'pending' | 'completed' | 'failed';

export const TransactionMonitor = ({ walletService }: TransactionMonitorProps) => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isMonitoring, setIsMonitoring] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const fetchTransactionUpdates = async () => {
        if (isLoading || !transactions.length) return;

        setIsLoading(true);
        try {
            const pendingTxs = transactions.filter(tx => tx.status === 'pending');
            if (!pendingTxs.length) return;

            const updatedTxs = await Promise.all(
                pendingTxs.map(async (tx) => {
                    try {
                        const transferStatus = await walletService.getTransactionStatus(
                            tx.chainSymbol,
                            tx.txId
                        );

                        if (!transferStatus) return tx;

                        // Update status based on transfer response
                        let newStatus: TransferStatus = 'pending';
                        if (transferStatus) {
                            newStatus = 'completed';
                        } else if (!transferStatus) {
                            newStatus = 'failed';
                        }

                        // If status changed to completed, show toast
                        if (newStatus === 'completed' && tx.status !== 'completed') {
                            toast.success(`Transaction ${tx.txId.slice(0, 6)}...${tx.txId.slice(-4)} has been completed.`,
                            );
                        } else if (newStatus === 'failed' && tx.status !== 'failed') {
                            toast.error(`Transaction ${tx.txId.slice(0, 6)}...${tx.txId.slice(-4)} has failed.`,
                            );
                        }

                        return {
                            ...tx,
                            status: newStatus
                        };
                    } catch (error) {
                        console.error(`Error updating transaction ${tx.txId}:`, error);
                        return tx;
                    }
                })
            );

            setTransactions(prev =>
                prev.map(tx => {
                    const updated = updatedTxs.find(u => u.txId === tx.txId);
                    return updated || tx;
                })
            );
        } catch (error) {
            console.error('Error updating transactions:', error);
            toast.error("Failed to update transaction statuses",
            );
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (isMonitoring) {
            fetchTransactionUpdates();
            const interval = setInterval(fetchTransactionUpdates, 15000);
            return () => clearInterval(interval);
        }
    }, [isMonitoring, transactions]);

    const getBadgeVariant = (status: TransferStatus): "default" | "secondary" | "destructive" | "outline" => {
        switch (status) {
            case 'completed':
                return 'default';
            case 'pending':
                return 'secondary';
            case 'failed':
                return 'destructive';
            default:
                return 'outline';
        }
    };

    const formatAddress = (address: string) => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle>Transaction Monitor</CardTitle>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMonitoring(!isMonitoring)}
                        disabled={isLoading}
                    >
                        {isMonitoring ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    </Button>
                </div>
                <CardDescription>
                    {isMonitoring ? 'Monitoring transactions in real-time' : 'Monitoring paused'}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {transactions.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        No transactions to display
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Network</TableHead>
                                    <TableHead>From</TableHead>
                                    <TableHead>To</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Time</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {transactions.map((tx) => (
                                    <TableRow key={tx.txId}>
                                        <TableCell className="capitalize">{tx.type}</TableCell>
                                        <TableCell>{tx.amount} USDC</TableCell>
                                        <TableCell>{tx.network}</TableCell>
                                        <TableCell>
                                            {tx.fromAddress ? formatAddress(tx.fromAddress) : '-'}
                                        </TableCell>
                                        <TableCell>
                                            {tx.toAddress ? formatAddress(tx.toAddress) : '-'}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={getBadgeVariant(tx.status)}>
                                                {tx.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            {new Date(tx.timestamp).toLocaleString()}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default TransactionMonitor;