import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

const TransactionHistory = () => {
    const transactions = [
        {
            id: 1,
            type: 'Deposit',
            amount: '+500 USDC',
            status: 'completed',
            date: '2024-02-09',
            network: 'Ethereum'
        },
        {
            id: 2,
            type: 'Send',
            amount: '-200 USDC',
            status: 'completed',
            date: '2024-02-08',
            network: 'Stellar'
        },
        {
            id: 3,
            type: 'Withdraw',
            amount: '-300 USDC',
            status: 'pending',
            date: '2024-02-08',
            network: 'Ethereum'
        }
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>Your recent transactions</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Type</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Network</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transactions.map((tx) => (
                            <TableRow key={tx.id}>
                                <TableCell>{tx.type}</TableCell>
                                <TableCell className={tx.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                                    {tx.amount}
                                </TableCell>
                                <TableCell>{tx.network}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={tx.status === 'completed' ? 'secondary' : 'outline'}
                                        className={tx.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                                    >
                                        {tx.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{tx.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default TransactionHistory;
