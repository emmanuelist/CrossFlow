"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {

    Mail,
    MapPin,
    Phone,
    ArrowUpRight,
    Shield,
    ArrowRightLeft,

} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    useEffect(() => {
        // Add any initialization logic here if needed
    }, []);

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaTwitter size={18} />, href: "#", label: "Twitter" },
        { icon: <FaFacebook size={18} />, href: "#", label: "Facebook" },
        { icon: <FaInstagram size={18} />, href: "#", label: "Instagram" },
        { icon: <FaLinkedin size={18} />, href: "#", label: "LinkedIn" }
    ];

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-gray-950 text-white pt-16 pb-8 z-50 overflow-hidden">
            {/* Sophisticated background elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Circuit board pattern */}
                <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>

                {/* Animated particles */}
                <div className="absolute top-0 right-0 w-full h-full">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-rose-500"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                            }}
                            animate={{
                                opacity: [0.1, 0.5, 0.1],
                                scale: [1, 1.5, 1]
                            }}
                            transition={{
                                duration: 3 + Math.random() * 5,
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }}
                        />
                    ))}
                </div>

                {/* Gradient orbs */}
                <motion.div
                    className="absolute -top-20 -right-20 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl"
                    animate={{
                        opacity: [0.1, 0.15, 0.1],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-0 left-1/4 w-60 h-60 bg-cyan-600/10 rounded-full blur-3xl"
                    animate={{
                        opacity: [0.1, 0.2, 0.1],
                        scale: [0.9, 1, 0.9]
                    }}
                    transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                />
            </div>

            {/* 3D grid on the background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Logo & Description with enhanced design */}
                    <motion.div
                        className="col-span-1 md:col-span-1"
                        variants={itemVariants}
                    >
                        <Link href="/" className="flex items-center space-x-2 mb-5 group">
                            <div className="relative h-9 w-9">
                                <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-cyan-500 rounded-full transform rotate-12 group-hover:rotate-45 transition-transform duration-300"></div>
                                <div className="absolute inset-1 bg-gray-900 dark:bg-black rounded-full flex items-center justify-center">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                    >
                                        <Shield className="h-4 w-4 text-rose-500 dark:text-rose-400" />
                                    </motion.div>
                                </div>
                            </div>
                            <span className="font-bold text-xl bg-gradient-to-r from-rose-500 to-cyan-500 bg-clip-text text-transparent">
                                Cross<span className="text-white">Flow</span>
                            </span>
                        </Link>
                        <p className="text-gray-300 dark:text-gray-400 text-sm mb-5 leading-relaxed">
                            Revolutionizing cross-border payments in Africa with blockchain technology for faster,
                            cheaper, and more accessible financial transactions.
                        </p>
                        <div className="flex space-x-3 mb-6">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    className="w-9 h-9 rounded-full bg-gray-800 dark:bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-rose-500 hover:text-white transition-colors duration-300"
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>

                        {/* Contact information */}
                        <div className="space-y-3">
                            <div className="flex items-center text-gray-400 hover:text-gray-200 transition-colors text-xs">
                                <Mail className="h-4 w-4 mr-2" />
                                <span>support@crossflow.africa</span>
                            </div>
                            <div className="flex items-center text-gray-400 hover:text-gray-200 transition-colors text-xs">
                                <Phone className="h-4 w-4 mr-2" />
                                <span>+234 800 CROSSFLOW</span>
                            </div>
                            <div className="flex items-start text-gray-400 hover:text-gray-200 transition-colors text-xs">
                                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                                <span>Lagos, Nigeria</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Enhanced Links Sections with animations */}
                    <motion.div variants={itemVariants}>
                        <h3 className="font-semibold mb-5 text-white flex items-center">
                            <span className="inline-block w-6 h-0.5 bg-rose-500 mr-2"></span>
                            Product
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Features", path: "/#features" },
                                { name: "How It Works", path: "/#how-it-works" },
                                { name: "Bridge", path: "/#bridge" },
                                { name: "Technology", path: "/#technology" },
                                { name: "Pricing", path: "/pricing" }
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <Link
                                        href={item.path}
                                        className="text-gray-400 hover:text-rose-400 text-sm flex items-center group"
                                    >
                                        <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-rose-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="font-semibold mb-5 text-white flex items-center">
                            <span className="inline-block w-6 h-0.5 bg-rose-500 mr-2"></span>
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Documentation", path: "/docs" },
                                { name: "API Reference", path: "/api" },
                                { name: "Blog", path: "/blog" },
                                { name: "FAQ", path: "/faq" },
                                { name: "Community", path: "/community" }
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <Link
                                        href={item.path}
                                        className="text-gray-400 hover:text-rose-400 text-sm flex items-center group"
                                    >
                                        <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-rose-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="font-semibold mb-5 text-white flex items-center">
                            <span className="inline-block w-6 h-0.5 bg-rose-500 mr-2"></span>
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "About Us", path: "/about" },
                                { name: "Contact", path: "/contact" },
                                { name: "Careers", path: "/careers" },
                                { name: "Partners", path: "/partners" },
                                { name: "Legal", path: "/legal" }
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <Link
                                        href={item.path}
                                        className="text-gray-400 hover:text-rose-400 text-sm flex items-center group"
                                    >
                                        <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-rose-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Newsletter sign-up */}
                        <div className="mt-8 p-4 bg-gray-800/50 dark:bg-black/30 rounded-lg border border-gray-700/50 backdrop-blur-sm">
                            <h4 className="text-sm font-medium text-white mb-2">Stay Updated</h4>
                            <p className="text-xs text-gray-400 mb-3">Get the latest news and updates</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 bg-gray-700/50 border border-gray-600 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-rose-500 text-white placeholder-gray-500"
                                />
                                <button className="bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white px-3 py-2 rounded-r-md text-sm">
                                    <ArrowUpRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Enhanced footer bottom with animation */}
                <motion.div
                    className="mt-12 pt-8 border-t border-gray-700/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <motion.div
                                className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center mr-2"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            >
                                <ArrowRightLeft className="h-3 w-3 text-rose-500" />
                            </motion.div>
                            <p className="text-gray-400 text-sm">
                                &copy; {currentYear} CrossFlow. All rights reserved.
                            </p>
                        </div>
                        <div className="flex flex-wrap space-x-6">
                            {["Privacy Policy", "Terms of Service", "Cookies"].map((item, index) => (
                                <Link
                                    key={index}
                                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-gray-400 hover:text-rose-400 text-sm flex items-center"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Style for patterns */}
            <style jsx>{`
                .bg-circuit-pattern {
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23f43f5e' fill-opacity='0.4' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
                }
                
                .bg-grid-pattern {
                    background-size: 50px 50px;
                    background-image: 
                        linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
                    transform: perspective(500px) rotateX(60deg);
                    transform-origin: center top;
                }
            `}</style>
        </footer>
    );
};

export default Footer;