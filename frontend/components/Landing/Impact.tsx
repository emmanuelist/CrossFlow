import { CheckCircle2, ChevronRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const Impact = () => {
    return (
        <section id="impact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <Badge variant="outline" className="mb-4">Impact</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent">
                            Making a Difference in African Finance
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    title: "Financial Inclusion",
                                    description: "Enabling millions of Africans to access global financial services."
                                },
                                {
                                    title: "Cost Reduction",
                                    description: "Reducing transaction fees by up to 95% compared to traditional methods."
                                },
                                {
                                    title: "Economic Growth",
                                    description: "Facilitating cross-border trade and business expansion."
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="mt-1">
                                        <CheckCircle2 className="h-6 w-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:ml-auto">
                        <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border-none">
                            <CardHeader>
                                <CardTitle>Future Growth</CardTitle>
                                <CardDescription>Our roadmap for expanding impact</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {[
                                        "Pan-African expansion potential",
                                        "Business payment integration",
                                        "API ecosystem development",
                                        "Financial services platform"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <ChevronRight className="h-5 w-5 text-teal-600" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;