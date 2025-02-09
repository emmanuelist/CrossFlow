import { Shield } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    const socialLinks = [
        { icon: <FaFacebook className="h-5 w-5" />, href: "#", label: "Facebook" },
        { icon: <FaTwitter className="h-5 w-5" />, href: "#", label: "Twitter" },
        { icon: <FaInstagram className="h-5 w-5" />, href: "#", label: "Instagram" },
        { icon: <FaLinkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" }
    ];

    const footerLinks = [
        {
            title: "Product",
            links: ["Features", "Security", "Pricing", "Documentation"]
        },
        {
            title: "Company",
            links: ["About Us", "Careers", "Press", "News"]
        },
        {
            title: "Resources",
            links: ["Blog", "Newsletter", "Events", "Help Center"]
        }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Shield className="h-8 w-8 text-teal-500" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                                CrossFlow
                            </span>
                        </div>
                        <p className="text-gray-400 mb-4 max-w-sm">
                            Bridging African Payments Through Stellar. Making cross-border payments faster, cheaper, and more accessible.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="text-gray-400 hover:text-teal-500 transition-colors"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {footerLinks.map((section, index) => (
                        <div key={index} className="col-span-1">
                            <h3 className="font-semibold mb-4 text-lg">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-teal-500 transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="col-span-2 md:col-span-1">
                        <h3 className="font-semibold mb-4 text-lg">Contact</h3>
                        <address className="text-gray-400 not-italic">
                            <p>Email: info@stellarbridge.africa</p>
                            <p>Phone: +234 800 STELLAR</p>
                            <p>Lagos, Nigeria</p>
                        </address>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} StellarBridge Africa. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-400 hover:text-teal-500 text-sm transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-teal-500 text-sm transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-teal-500 text-sm transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;