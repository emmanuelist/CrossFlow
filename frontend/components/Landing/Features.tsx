import { ArrowRightLeft, Wallet, Zap } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Features = () => {
  const features = [
    {
      icon: <Wallet className="h-12 w-12 text-teal-600" />,
      title: "Local Currency Integration",
      description:
        "Direct mobile money integration with support for major African currencies and USSD accessibility.",
    },
    {
      icon: <ArrowRightLeft className="h-12 w-12 text-cyan-600" />,
      title: "Smart Routing System",
      description:
        "Automatic fee optimization with cross-chain bridging and batch processing for Ethereum transactions.",
    },
    {
      icon: <Zap className="h-12 w-12 text-teal-600" />,
      title: "Instant Settlements",
      description:
        "Lightning-fast transactions with real-time confirmation and tracking across networks.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent">
            Why Choose CrossFlow?
          </h2>
          <p className="text-gray-600">
            Our platform provides cutting-edge solutions for cross-border
            payments in Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
