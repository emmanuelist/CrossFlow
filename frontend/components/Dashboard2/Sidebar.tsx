import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Shield } from 'lucide-react';
import SidebarNavigation from './SidebarNavigation';

interface SidebarProps {
    collapsed: boolean;
    onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
    const pathname = usePathname();

    return (
        <div
            className={cn(
                "h-screen sticky left-0 top-0 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 z-30 transition-all duration-300 ease-in-out overflow-hidden",
                collapsed ? "w-20" : "w-64"
            )}
        >
            <div className="flex flex-col h-full">
                {/* Logo Section */}
                <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-800">
                    <Link href="/" className="flex items-center gap-3">
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

                        <AnimatePresence initial={false}>
                            {!collapsed && (
                                <motion.span
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: 'auto' }}
                                    exit={{ opacity: 0, width: 0 }}
                                    className="font-bold text-xl bg-gradient-to-r from-rose-600 to-cyan-600 bg-clip-text text-transparent"
                                >
                                    Cross<span className="text-gray-800 dark:text-white">Flow</span>
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </Link>

                    <button
                        onClick={onToggle}
                        className="text-gray-500 hover:text-gray-800 dark:hover:text-white p-1"
                    >
                        <svg
                            className={`w-5 h-5 transition-transform ${collapsed ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={collapsed ? "M13 5l7 7-7 7" : "M11 19l-7-7 7-7"}
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation Section */}
                <div className="flex-1 overflow-y-auto py-4">
                    <SidebarNavigation collapsed={collapsed} />
                </div>

                {/* User Section */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-cyan-500 flex items-center justify-center text-white text-sm font-medium">
                                JS
                            </div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white dark:border-gray-950"></div>
                        </div>

                        <AnimatePresence initial={false}>
                            {!collapsed && (
                                <motion.div
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: 'auto' }}
                                    exit={{ opacity: 0, width: 0 }}
                                    className="ml-3 flex-1 overflow-hidden"
                                >
                                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Jane Smith</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">jane@crossflow.finance</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;