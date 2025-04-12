import React from 'react';
import { Search, Bell, Moon, Sun, ChevronDown, ArrowRightLeft } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import ThemeToggle from '../Themes/ThemeToggle';

const DashboardHeader: React.FC = () => {
    const { theme, setTheme } = useTheme();

    return (
        <header className="sticky top-0 z-20 flex justify-between items-center h-16 px-4 md:px-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            {/* Left Side: Page Title */}
            <div className="flex items-center">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
            </div>

            {/* Right Side: Search, Notifications, Theme Toggle, Profile */}
            <div className="flex items-center space-x-4">
                {/* Search Box (Hidden on mobile) */}
                <div className="hidden md:flex relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 w-64 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 focus-within:border-rose-400 dark:focus-within:border-rose-500"
                    />
                </div>

                {/* Notifications Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon" className="relative">
                            <Bell className="h-5 w-5" />
                            <Badge className="h-5 w-5 absolute -top-2 -right-2 flex items-center justify-center p-0 bg-rose-500 text-white text-xs">
                                3
                            </Badge>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80">
                        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <div className="max-h-[400px] overflow-y-auto">
                            {/* Notification Items */}
                            {[1, 2, 3].map((item) => (
                                <DropdownMenuItem key={item} className="cursor-pointer flex items-start p-3 hover:bg-gray-50 dark:hover:bg-gray-900">
                                    <div className="w-9 h-9 rounded-full bg-rose-100 dark:bg-rose-900 flex items-center justify-center mr-3 flex-shrink-0">
                                        <ArrowRightLeft className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-800 dark:text-white">Transfer Completed</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Your transfer of 500 USDC to John Doe completed successfully.
                                        </p>
                                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">2 hours ago</p>
                                    </div>
                                </DropdownMenuItem>
                            ))}
                        </div>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-center cursor-pointer text-rose-600 dark:text-rose-400 font-medium">
                            View all notifications
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>


                <ThemeToggle />

                {/* Profile Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="p-1 flex items-center">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-cyan-500 flex items-center justify-center text-white text-sm font-medium">
                                    JS
                                </div>
                                <div className="hidden md:flex flex-col items-start ml-2">
                                    <span className="text-sm font-medium">Jane Smith</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">Admin</span>
                                </div>
                                <ChevronDown className="hidden md:block h-4 w-4 ml-1 text-gray-500" />
                            </div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-rose-600 dark:text-rose-400">Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};

export default DashboardHeader;