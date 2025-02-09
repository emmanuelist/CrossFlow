import { ChevronRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="pt-32 pb-20 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <Badge
                        variant="secondary"
                        className="mb-4 bg-white/50 text-teal-800 border-teal-200"
                    >
                        Revolutionizing African Payments
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent">
                        Bridging African Payments Through Stellar
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Enable seamless cross-border payments with reduced fees and instant settlements across Africa
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href={"/dashboard"}>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
                            >
                                Go to Dashboard
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>


                    </div>

                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "500K+", label: "Target Users" },
                            { number: "$100M", label: "Processing Volume" },
                            { number: "95%", label: "Lower Fees" },
                            { number: "10+", label: "African Currencies" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
