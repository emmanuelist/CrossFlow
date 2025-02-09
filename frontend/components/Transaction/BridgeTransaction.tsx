import { useWallet } from "@/hooks/useWallet";
import { useState } from "react";
import toast from "react-hot-toast";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export const BridgeTransaction = ({
    amount,
    sourceToken,
    destinationToken,
    fromAddress,
    toAddress,
    onSuccess
}: {
    amount: string;
    sourceToken: any;
    destinationToken: any;
    fromAddress: string;
    toAddress: string;
    onSuccess: (txHash: string) => void;
}) => {
    const [processing, setProcessing] = useState(false);
    const { walletService } = useWallet();

    const handleBridge = async () => {
        setProcessing(true);
        try {
            // Get bridge fees first
            const { amountToReceive, gasFeeOptions } = await walletService.getBridgeFee({
                amount,
                sourceToken,
                destinationToken
            });

            // Create and execute bridge transaction
            const bridgeTransaction = await walletService.createBridgeTransaction({
                amount,
                fromAddress,
                toAddress,
                sourceToken,
                destinationToken
            });

            if (bridgeTransaction) {
                onSuccess(bridgeTransaction.hash);
                toast.success("Your tokens have been bridged successfully");
            }
        } catch (error: any) {
            console.error('Bridge error:', error);
            toast.error(error.message || "Failed to bridge tokens");
        } finally {
            setProcessing(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Bridge Transaction</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span>Amount</span>
                        <span className="font-medium">{amount} USDC</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>From</span>
                        <span className="font-medium">{fromAddress.slice(0, 6)}...{fromAddress.slice(-4)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>To</span>
                        <span className="font-medium">{toAddress.slice(0, 6)}...{toAddress.slice(-4)}</span>
                    </div>
                    <Button
                        onClick={handleBridge}
                        disabled={processing}
                        className="w-full bg-gradient-to-r from-teal-600 to-cyan-600"
                    >
                        {processing ? 'Processing...' : 'Bridge Tokens'}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};