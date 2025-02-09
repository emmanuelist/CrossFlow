import { CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export const NetworkGuide = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Network Selection Guide</CardTitle>
                <CardDescription>Choose the best network for your transfer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-teal-50 border border-teal-100">
                    <h4 className="font-semibold mb-2">Stellar Network</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-teal-600" />
                            <span>Lower transaction fees</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-teal-600" />
                            <span>Faster settlement times</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-teal-600" />
                            <span>Ideal for smaller transfers</span>
                        </li>
                    </ul>
                </div>

                <div className="p-4 rounded-lg bg-cyan-50 border border-cyan-100">
                    <h4 className="font-semibold mb-2">Ethereum Network</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                            <span>Wider wallet compatibility</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                            <span>Better for large transfers</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                            <span>More DeFi integration options</span>
                        </li>
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
};
