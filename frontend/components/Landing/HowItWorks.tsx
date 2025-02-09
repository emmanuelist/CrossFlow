import { ChevronRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Connect Your Wallet",
            description: "Link your wallet to access the StellarBridge platform securely."
        },
        {
            number: "02",
            title: "Choose Payment Method",
            description: "Select your preferred local payment method or cryptocurrency."
        },
        {
            number: "03",
            title: "Send Money",
            description: "Transfer funds instantly with minimal fees and maximum security."
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4">Process</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent">
                        How It Works
                    </h2>
                    <p className="text-gray-600">
                        Get started with StellarBridge in three simple steps
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            <Card className="h-full">
                                <CardHeader>
                                    <div className="text-6xl font-bold text-teal-100 mb-4">
                                        {step.number}
                                    </div>
                                    <CardTitle>{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">{step.description}</p>
                                </CardContent>
                            </Card>
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-teal-300">
                                    <ChevronRight className="w-8 h-8" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
