import React, { useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useWallet } from '@/hooks/useWallet';
import toast from "react-hot-toast"


// Payment Processing Component
export const PaymentProcessor = ({
    amount,
    currency,
    email,
    onSuccess
}: {
    amount: string;
    currency: string;
    email: string;
    onSuccess: (response: any) => void;
}) => {
    const [processing, setProcessing] = useState(false);
    const { ethereumAccount } = useWallet();

    const config = {
        public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY!,
        tx_ref: Date.now().toString(),
        amount: parseFloat(amount),
        currency,
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email,
            phone_number: '',
            name: ethereumAccount || 'User',
        },
        customizations: {
            title: 'StellarBridge Payment',
            description: 'USDC Purchase',
            logo: 'https://your-logo-url.com/logo.png',
        },
    };

    const handleFlutterPayment = useFlutterwave(config);

    const initiatePayment = () => {
        setProcessing(true);
        handleFlutterPayment({
            callback: (response) => {
                if (response.status === 'successful') {
                    onSuccess(response);
                    toast.success("Your payment has been processed successfully",
                    );
                } else {
                    toast.error("There was an error processing your payment",
                    );
                }
                closePaymentModal();
                setProcessing(false);
            },
            onClose: () => {
                setProcessing(false);
            },
        });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Payment Details</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span>Amount</span>
                        <span className="font-medium">
                            {amount} {currency}
                        </span>
                    </div>
                    <Button
                        onClick={initiatePayment}
                        disabled={processing}
                        className="w-full bg-gradient-to-r from-teal-600 to-cyan-600"
                    >
                        {processing ? 'Processing...' : 'Proceed to Payment'}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};