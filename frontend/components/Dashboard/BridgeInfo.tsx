import { CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export const BridgeInfo = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Bridge Information</CardTitle>
                <CardDescription>About our cross-chain bridge service</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-to-br from-teal-50 to-cyan-50">
                    <h4 className="font-semibold mb-2">How it works</h4>
                    <p className="text-sm text-gray-600">
                        Our bridge service uses Allbridge technology to securely swap your USDC between
                        Ethereum and Stellar networks. The process is fully automated and typically
                        completes within minutes.
                    </p>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-teal-600" />
                        <span>Automated cross-chain transfers</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-teal-600" />
                        <span>Competitive bridge fees</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-teal-600" />
                        <span>Secure and audited protocol</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};