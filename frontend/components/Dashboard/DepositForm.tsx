// components/Dashboard/DepositForm.tsx
import { BanknoteIcon, CreditCard, DollarSign, Phone } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { WalletService } from "@/services/WalletService";
import toast from "react-hot-toast";

interface DepositFormProps {
    walletService: WalletService;
    ethereumAccount: string | null;
}

interface DepositMethod {
    id: string;
    name: string;
    icon: JSX.Element;
}

const DepositForm = ({ walletService, ethereumAccount }: DepositFormProps) => {
    const [method, setMethod] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [network, setNetwork] = useState<string>('');
    const [isProcessing, setIsProcessing] = useState(false);

    const depositMethods: DepositMethod[] = [
        { id: 'bank', name: 'Bank Transfer', icon: <BanknoteIcon className="h-4 w-4" /> },
        { id: 'card', name: 'Card Payment', icon: <CreditCard className="h-4 w-4" /> },
        { id: 'mobile', name: 'Mobile Money', icon: <Phone className="h-4 w-4" /> },
        { id: 'ussd', name: 'USSD', icon: <Phone className="h-4 w-4" /> },
    ];

    const handleDeposit = async () => {
        if (!amount || !method || !network) return;

        setIsProcessing(true);
        try {
            // Implement deposit logic using walletService
            // This would typically involve Flutterwave integration
            toast.success("Please complete the payment process",
            );
        } catch (error: any) {
            console.error('Deposit error:', error);
            toast.error(error.message || "Failed to initiate deposit",
            );
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Deposit Funds</CardTitle>
                <CardDescription>Convert local currency to USDC</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label>Deposit Method</Label>
                    <Select value={method} onValueChange={setMethod}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select deposit method" />
                        </SelectTrigger>
                        <SelectContent>
                            {depositMethods.map((method) => (
                                <SelectItem key={method.id} value={method.id}>
                                    <div className="flex items-center gap-2">
                                        {method.icon}
                                        <span>{method.name}</span>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label>Amount (Local Currency)</Label>
                    <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                            type="number"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label>Target Network</Label>
                    <Select value={network} onValueChange={setNetwork}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select network" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ethereum">Ethereum</SelectItem>
                            <SelectItem value="stellar">Stellar</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Exchange Rate</span>
                        <span className="font-medium">1 USD = 460 NGN</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                        <span className="text-gray-600">Fee</span>
                        <span className="font-medium">2.5%</span>
                    </div>
                </div>

                <Button
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600"
                    onClick={handleDeposit}
                    disabled={isProcessing || !amount || !method || !network}
                >
                    {isProcessing ? 'Processing...' : 'Proceed to Payment'}
                </Button>
            </CardContent>
        </Card>
    );
};

export default DepositForm;