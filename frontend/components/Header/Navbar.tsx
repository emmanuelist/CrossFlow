"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import ThemeToggle from "../Themes/ThemeToggle";
import WalletButton from "../Wallet/WalletButton";
import { Menu, X, ChevronDown, Shield, Zap, ArrowRightLeft, Globe, ExternalLink } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  highlights?: string[];
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu when viewport changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!mounted) return null;

  const navLinks: NavLink[] = [
    {
      href: "#features",
      label: "Features",
      icon: <Shield className="w-4 h-4 mr-2" />,
      highlights: ["Cross-Chain Transfers", "Fiat On/Off Ramps", "Low Fees"]
    },
    // {
    //   href: "#how-it-works",
    //   label: "How It Works",
    //   icon: <Zap className="w-4 h-4 mr-2" />,
    //   highlights: ["Secure Bridge", "Instant Settlements", "Automated Routing"]
    // },
    {
      href: "#bridge",
      label: "Bridge",
      icon: <ArrowRightLeft className="w-4 h-4 mr-2" />,
      highlights: ["Ethereum ↔ Stellar", "USDC Transfers", "Full Custody"]
    },
    {
      href: "#impact",
      label: "Impact",
      icon: <Globe className="w-4 h-4 mr-2" />,
      highlights: ["African Markets", "Financial Inclusion", "Cross-Border Trade"]
    }
  ];

  const resourceLinks = [
    { label: "Documentation", href: "/docs", icon: <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" /> },
    { label: "API Reference", href: "/api", icon: <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" /> },
    { label: "Security", href: "/security", icon: <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" /> }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                className="relative h-8 w-8"
                whileHover={{ rotate: 12, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-cyan-500 rounded-full transform group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
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
              </motion.div>
              <span className="font-bold text-xl bg-gradient-to-r from-rose-500 to-cyan-500 bg-clip-text text-transparent">
                Cross<span className="text-black dark:text-white">Flow</span>
              </span>
            </Link>

            {/* Desktop Navigation with sophisticated animations */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                  onMouseEnter={() => setActiveLink(link.href)}
                  onMouseLeave={() => setActiveLink(null)}
                >
                  <Link
                    href={link.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors flex items-center py-2 px-3"
                  >
                    <span className="relative overflow-hidden group">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>

                  {/* Sophisticated dropdown for enterprise level */}
                  {link.highlights && activeLink === link.href && (
                    <motion.div
                      className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 min-w-[200px] z-50 border border-gray-100 dark:border-gray-800"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute top-0 left-5 -mt-2 w-4 h-4 bg-white dark:bg-gray-900 transform rotate-45 border-l border-t border-gray-100 dark:border-gray-800"></div>

                      <div className="space-y-2">
                        {link.highlights.map((highlight, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-2"></div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="ml-2"
              >
                <Link href="/dashboard">
                  <Button
                    className="bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white shadow-md hover:shadow-lg transition-shadow"
                    size="sm"
                  >
                    Dashboard
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Grouped Theme Toggle and Wallet Button */}

            <div className="flex items-center space-x-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <ThemeToggle />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <WalletButton isMobile={false} />
              </motion.div>

              {/* Mobile Menu Button - Separate from wallet button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="md:hidden block"
              >
                <WalletButton isMobile={true} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="md:hidden block"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                  aria-label="Menu"
                  onClick={toggleMobileMenu}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sophisticated Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop with elegant blur */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />

            {/* Enhanced Menu Content */}
            <motion.div
              className="absolute top-0 right-0 h-screen w-4/5 max-w-sm bg-white dark:bg-gray-900 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="overflow-y-auto h-full py-6 px-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
                  <Link href="/" className="flex items-center space-x-2 group">
                    <motion.div
                      className="relative h-8 w-8"
                      whileHover={{ rotate: 12, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-cyan-500 rounded-full transform group-hover:rotate-12 transition-transform duration-300"></div>
                      <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
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
                    </motion.div>
                    <span className="font-bold text-xl bg-gradient-to-r from-rose-500 to-cyan-500 bg-clip-text text-transparent">
                      Cross<span className="text-black dark:text-white">Flow</span>
                    </span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                    aria-label="Close Menu"
                    onClick={toggleMobileMenu}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Enhanced Mobile Navigation Links */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm flex items-center mb-4">
                      <span className="inline-block w-6 h-0.5 bg-gradient-to-r from-rose-500 to-cyan-500 mr-2"></span>
                      Main Navigation
                    </h3>
                    <div className="space-y-2">
                      {navLinks.map((link, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group"
                        >
                          <Link
                            href={link.href}
                            className="flex items-center py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/70 hover:text-rose-600 dark:hover:text-rose-400 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                            onClick={toggleMobileMenu}
                          >
                            <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 mr-3 group-hover:bg-rose-100 dark:group-hover:bg-rose-900/30 transition-colors">
                              {link.icon}
                            </div>
                            <div>
                              <span className="font-medium">{link.label}</span>
                              {link.highlights && (
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                  {link.highlights[0]}
                                </div>
                              )}
                            </div>
                            <motion.div
                              className="ml-auto opacity-50 group-hover:opacity-100"
                              initial={{ x: -5 }}
                              animate={{ x: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="w-4 h-4 transform -rotate-90" />
                            </motion.div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Secondary Links */}
                  <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm flex items-center mb-4">
                      <span className="inline-block w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-rose-500 mr-2"></span>
                      Resources
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {resourceLinks.map((link, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <Link
                            href={link.href}
                            className="flex items-center justify-between p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/70 hover:text-rose-600 dark:hover:text-rose-400 transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700"
                            onClick={toggleMobileMenu}
                          >
                            <span className="text-sm font-medium">{link.label}</span>
                            {link.icon}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Dashboard Button with enhanced styling */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="pt-4 mt-4"
                  >
                    <Link href="/dashboard" onClick={toggleMobileMenu}>
                      <Button className="w-full bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white py-6 text-base shadow-md">
                        Go to Dashboard
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="ml-2"
                        >
                          <ChevronDown className="h-4 w-4 transform -rotate-90" />
                        </motion.div>
                      </Button>
                    </Link>
                  </motion.div>

                  {/* Wallet Connect in Mobile Menu - Full sized button at the bottom */}
                  <motion.div
                    className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="mb-4 flex justify-center">
                      <WalletButton isMobile={false} /> {/* Full-sized in the menu */}
                    </div>
                  </motion.div>

                  {/* Contact Information with enhanced styling */}
                  <motion.div
                    className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                      <p className="mb-2 font-medium text-gray-700 dark:text-gray-300">Need assistance?</p>
                      <p>Contact our enterprise support team:</p>
                      <p className="mt-1 font-medium text-rose-600 dark:text-rose-400">support@crossflow.finance</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;