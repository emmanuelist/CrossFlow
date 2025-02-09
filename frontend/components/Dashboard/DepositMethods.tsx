import { CreditCard, Phone, LucideBanknote } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export const DepositMethods = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Deposit Methods</CardTitle>
                <CardDescription>Available options to add funds</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                        <LucideBanknote className="h-6 w-6 text-teal-600 mt-1" />
                        <div>
                            <h4 className="font-semibold">Bank Transfer</h4>
                            <p className="text-sm text-gray-600">
                                Direct bank transfer from your local bank account. Processing time: 1-2 business days.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                        <CreditCard className="h-6 w-6 text-teal-600 mt-1" />
                        <div>
                            <h4 className="font-semibold">Card Payment</h4>
                            <p className="text-sm text-gray-600">
                                Instant deposits using your debit or credit card. Additional card processing fees may apply.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                        <Phone className="h-6 w-6 text-teal-600 mt-1" />
                        <div>
                            <h4 className="font-semibold">Mobile Money</h4>
                            <p className="text-sm text-gray-600">
                                Use M-Pesa, MTN Mobile Money, or other local mobile payment services.
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};