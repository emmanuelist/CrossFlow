import { Clock, AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export const WithdrawalInfo = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Withdrawal Information</CardTitle>
                <CardDescription>Important details about withdrawals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                        <Clock className="h-6 w-6 text-teal-600 mt-1" />
                        <div>
                            <h4 className="font-semibold">Processing Times</h4>
                            <ul className="text-sm text-gray-600 space-y-1 mt-2">
                                <li>Bank Transfer: 1-2 business days</li>
                                <li>Mobile Money: Instant to 2 hours</li>
                                <li>Cash Pickup: Available immediately</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                        <AlertCircle className="h-6 w-6 text-teal-600 mt-1" />
                        <div>
                            <h4 className="font-semibold">Important Notes</h4>
                            <ul className="text-sm text-gray-600 space-y-1 mt-2">
                                <li>Minimum withdrawal: $10</li>
                                <li>Maximum withdrawal: $10,000 per day</li>
                                <li>KYC verification required for amounts over $1,000</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
