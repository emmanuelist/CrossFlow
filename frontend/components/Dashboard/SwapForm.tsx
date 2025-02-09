// components/Dashboard/SwapForm.tsx
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ArrowRightLeft, DollarSign } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { WalletService } from "@/services/WalletService";

interface SwapFormProps {
    walletService: WalletService;
    ethereumAccount: string | null;
    stellarAccount: string | null;
}

const SwapForm = ({ walletService, ethereumAccount, stellarAccount }: SwapFormProps) => {
    const [fromNetwork, setFromNetwork] = useState<string>('');
    const [toNetwork, setToNetwork] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSwap = async () => {
        if (!amount || !fromNetwork || !toNetwork) return;

        setIsProcessing(true);
        try {
            // Implement swap logic here using walletService
            const sourceToken = {
                address: fromNetwork === 'ethereum' ? ethereumAccount : stellarAccount,
                network: fromNetwork
            };

            const destinationToken = {
                address: toNetwork === 'ethereum' ? ethereumAccount : stellarAccount,
                network: toNetwork
            };

            await walletService.createBridgeTransaction({
                amount,
                fromAddress: sourceToken.address!,
                toAddress: destinationToken.address!,
                sourceToken,
                destinationToken
            });
        } catch (error) {
            console.error('Swap error:', error);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Cross-Chain Swap</CardTitle>
                <CardDescription>Swap USDC between Ethereum and Stellar networks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label>From Network</Label>
                    <Select value={fromNetwork} onValueChange={setFromNetwork}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select source network" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ethereum">Ethereum USDC</SelectItem>
                            <SelectItem value="stellar">Stellar USDC</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex justify-center my-4">
                    <Button variant="ghost" size="icon">
                        <ArrowRightLeft className="h-6 w-6 text-teal-600" />
                    </Button>
                </div>

                <div className="space-y-2">
                    <Label>To Network</Label>
                    <Select value={toNetwork} onValueChange={setToNetwork}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select target network" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ethereum">Ethereum USDC</SelectItem>
                            <SelectItem value="stellar">Stellar USDC</SelectItem>
                        </SelectContent>
                    </Select>
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

                <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Bridge Fee</span>
                        <span className="font-medium">0.1%</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                        <span className="text-gray-600">Estimated Time</span>
                        <span className="font-medium">2-5 minutes</span>
                    </div>
                </div>

                <Button
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600"
                    onClick={handleSwap}
                    disabled={isProcessing || !amount || !fromNetwork || !toNetwork}
                >
                    {isProcessing ? 'Processing...' : 'Swap USDC'}
                </Button>
            </CardContent>
        </Card>
    );
};

export default SwapForm;