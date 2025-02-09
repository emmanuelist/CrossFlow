// components/Dashboard/SendForm.tsx
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { DollarSign } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { WalletService } from "@/services/WalletService";
import toast from "react-hot-toast"

interface SendFormProps {
    walletService: WalletService;
    ethereumAccount: string | null;
    stellarAccount: string | null;
}

const SendForm = ({ walletService, ethereumAccount, stellarAccount }: SendFormProps) => {
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [network, setNetwork] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSend = async () => {
        if (!amount || !recipient || !network) return;

        setIsProcessing(true);
        try {
            const sourceAddress = network === 'ethereum' ? ethereumAccount : stellarAccount;
            if (!sourceAddress) {
                throw new Error('Source wallet not connected');
            }

            const sourceToken = {
                address: sourceAddress,
                network
            };

            await walletService.createBridgeTransaction({
                amount,
                fromAddress: sourceAddress,
                toAddress: recipient,
                sourceToken,
                destinationToken: sourceToken // Same network transfer
            });

            toast.success("Your transfer has been initiated successfully",
            );
        } catch (error: any) {
            console.error('Send error:', error);
            toast.error(error.message || "Failed to send tokens",
            );
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Send USDC</CardTitle>
                <CardDescription>Transfer USDC to another wallet</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label>Recipient Address</Label>
                    <Input
                        placeholder="Enter recipient's wallet address"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Amount USDC</Label>
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
                    <Label>Network</Label>
                    <Select value={network} onValueChange={setNetwork}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select network" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ethereum">Ethereum (Higher fees, wider adoption)</SelectItem>
                            <SelectItem value="stellar">Stellar (Lower fees, faster)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Network Fee</span>
                        <span className="font-medium">$2.50</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                        <span className="text-gray-600">Estimated Time</span>
                        <span className="font-medium">~2 minutes</span>
                    </div>
                </div>

                <Button
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600"
                    onClick={handleSend}
                    disabled={isProcessing || !amount || !recipient || !network}
                >
                    {isProcessing ? 'Processing...' : 'Send USDC'}
                </Button>
            </CardContent>
        </Card>
    );
};

export default SendForm;