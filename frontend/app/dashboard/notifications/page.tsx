"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Bell,
    Settings,
    Search,
    Filter,
    Check,
    CheckCheck,
    Trash,
    Clock,
    MailWarning,
    ShieldAlert,
    DollarSign,
    ArrowUpRight,
    ArrowDownLeft,
    RefreshCcw,
    Info,
    CheckCircle,
    AlertCircle,
    XCircle,
    Wallet,
    CreditCard,
    Calendar,
    Mail,
    Smartphone,
    BellOff
} from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import DashboardLayout from '@/components/Dashboard2/DashboardLayout';

// Type definitions
interface Notification {
    id: string;
    title: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error' | 'transaction';
    timestamp: string;
    read: boolean;
    actionLabel?: string;
    actionUrl?: string;
    category: 'transaction' | 'security' | 'account' | 'system';
}

// Mock notifications data
const notificationsData: Notification[] = [
    {
        id: "notif-001",
        title: "Money Received",
        message: "You have received $1,250.00 from Sarah Johnson.",
        type: "success",
        timestamp: "2025-04-11T14:30:00Z",
        read: false,
        actionLabel: "View Transaction",
        actionUrl: "/dashboard/history",
        category: "transaction"
    },
    {
        id: "notif-002",
        title: "Security Alert",
        message: "A new device was used to access your account. If this wasn't you, please secure your account immediately.",
        type: "warning",
        timestamp: "2025-04-10T09:15:00Z",
        read: false,
        actionLabel: "Review Activity",
        actionUrl: "/dashboard/settings/security",
        category: "security"
    },
    {
        id: "notif-003",
        title: "Transfer Completed",
        message: "Your transfer of $450.00 to John Smith has been completed successfully.",
        type: "success",
        timestamp: "2025-04-09T16:45:00Z",
        read: true,
        actionLabel: "View Details",
        actionUrl: "/dashboard/history",
        category: "transaction"
    },
    {
        id: "notif-004",
        title: "Account Verification Required",
        message: "Please verify your identity to continue using all features of your account.",
        type: "info",
        timestamp: "2025-04-08T11:20:00Z",
        read: true,
        actionLabel: "Verify Now",
        actionUrl: "/dashboard/settings/profile",
        category: "account"
    },
    {
        id: "notif-005",
        title: "Password Changed",
        message: "Your account password was recently changed. If you didn't make this change, please contact support immediately.",
        type: "info",
        timestamp: "2025-04-07T13:10:00Z",
        read: true,
        category: "security"
    },
    {
        id: "notif-006",
        title: "Transfer Failed",
        message: "Your transfer of $89.99 to WebHosting Inc. has failed. Please check your balance and try again.",
        type: "error",
        timestamp: "2025-04-06T08:30:00Z",
        read: false,
        actionLabel: "Retry Transfer",
        actionUrl: "/dashboard/transfers",
        category: "transaction"
    },
    {
        id: "notif-007",
        title: "New Feature Available",
        message: "We've added a new feature! You can now schedule recurring transfers to your favorite recipients.",
        type: "info",
        timestamp: "2025-04-05T15:45:00Z",
        read: true,
        actionLabel: "Learn More",
        actionUrl: "/dashboard/help",
        category: "system"
    },
    {
        id: "notif-008",
        title: "Exchange Rate Alert",
        message: "The USD to EUR exchange rate has improved by 2.5% since your last exchange.",
        type: "info",
        timestamp: "2025-04-04T10:20:00Z",
        read: false,
        actionLabel: "Exchange Now",
        actionUrl: "/dashboard/transfers/exchange",
        category: "transaction"
    },
    {
        id: "notif-009",
        title: "Suspicious Activity Detected",
        message: "We've detected unusual activity on your account. Please review recent transactions for any unauthorized charges.",
        type: "error",
        timestamp: "2025-04-03T09:15:00Z",
        read: false,
        actionLabel: "Review Transactions",
        actionUrl: "/dashboard/history",
        category: "security"
    },
    {
        id: "notif-010",
        title: "Low Balance Alert",
        message: "Your EUR wallet balance is below €100. Consider adding funds to avoid failed transactions.",
        type: "warning",
        timestamp: "2025-04-02T17:30:00Z",
        read: true,
        actionLabel: "Add Funds",
        actionUrl: "/dashboard/wallets",
        category: "account"
    }
];

// Notification Item Component
const NotificationItem: React.FC<{
    notification: Notification;
    onMarkAsRead: (id: string) => void;
    onDelete: (id: string) => void;
}> = ({ notification, onMarkAsRead, onDelete }) => {
    const getNotificationIcon = (type: string) => {
        switch (type) {
            case 'info':
                return <Info className="h-5 w-5 text-blue-500" />;
            case 'success':
                return <CheckCircle className="h-5 w-5 text-green-500" />;
            case 'warning':
                return <AlertCircle className="h-5 w-5 text-amber-500" />;
            case 'error':
                return <XCircle className="h-5 w-5 text-red-500" />;
            case 'transaction':
                return <DollarSign className="h-5 w-5 text-purple-500" />;
            default:
                return <Bell className="h-5 w-5 text-gray-500" />;
        }
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'transaction':
                return <ArrowUpRight className="h-4 w-4 text-purple-500" />;
            case 'security':
                return <ShieldAlert className="h-4 w-4 text-red-500" />;
            case 'account':
                return <Wallet className="h-4 w-4 text-blue-500" />;
            case 'system':
                return <Settings className="h-4 w-4 text-gray-500" />;
            default:
                return <Info className="h-4 w-4 text-gray-500" />;
        }
    };

    // Format timestamp to relative time
    const formatRelativeTime = (timestamp: string) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

        if (diffInSeconds < 60) {
            return 'Just now';
        } else if (diffInSeconds < 3600) {
            const minutes = Math.floor(diffInSeconds / 60);
            return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
        } else if (diffInSeconds < 86400) {
            const hours = Math.floor(diffInSeconds / 3600);
            return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
        } else if (diffInSeconds < 604800) {
            const days = Math.floor(diffInSeconds / 86400);
            return `${days} ${days === 1 ? 'day' : 'days'} ago`;
        } else {
            return date.toLocaleDateString();
        }
    };

    return (
        <div className={`p-4 border-b border-gray-200 dark:border-gray-800 ${!notification.read ? 'bg-gray-50 dark:bg-gray-800/50' : ''}`}>
            <div className="flex items-start">
                <div className={`p-2 rounded-full ${notification.type === 'info' ? 'bg-blue-100 dark:bg-blue-900/30' :
                        notification.type === 'success' ? 'bg-green-100 dark:bg-green-900/30' :
                            notification.type === 'warning' ? 'bg-amber-100 dark:bg-amber-900/30' :
                                notification.type === 'error' ? 'bg-red-100 dark:bg-red-900/30' :
                                    'bg-purple-100 dark:bg-purple-900/30'
                    } mr-4 flex-shrink-0`}>
                    {getNotificationIcon(notification.type)}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className={`font-medium ${!notification.read ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                                {notification.title}
                            </h3>
                            <div className="flex items-center mt-1 space-x-2">
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {formatRelativeTime(notification.timestamp)}
                                </span>
                                <span className="text-gray-300 dark:text-gray-600">•</span>
                                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                    {getCategoryIcon(notification.category)}
                                    <span className="ml-1 capitalize">{notification.category}</span>
                                </div>
                                {!notification.read && (
                                    <>
                                        <span className="text-gray-300 dark:text-gray-600">•</span>
                                        <Badge variant="outline" className="text-xs bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400 border-0">
                                            New
                                        </Badge>
                                    </>
                                )}
                            </div>
                        </div>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                        <circle cx="12" cy="12" r="1" />
                                        <circle cx="12" cy="5" r="1" />
                                        <circle cx="12" cy="19" r="1" />
                                    </svg>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {!notification.read ? (
                                    <DropdownMenuItem onClick={() => onMarkAsRead(notification.id)}>
                                        <Check className="h-4 w-4 mr-2" />
                                        <span>Mark as read</span>
                                    </DropdownMenuItem>
                                ) : (
                                    <DropdownMenuItem onClick={() => onMarkAsRead(notification.id)}>
                                        <Clock className="h-4 w-4 mr-2" />
                                        <span>Mark as unread</span>
                                    </DropdownMenuItem>
                                )}
                                <DropdownMenuItem onClick={() => onDelete(notification.id)}>
                                    <Trash className="h-4 w-4 mr-2" />
                                    <span>Delete</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {notification.message}
                    </p>

                    {notification.actionLabel && (
                        <div className="mt-3">
                            <Button variant="outline" size="sm" className="text-sm">
                                {notification.actionLabel}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Notification Settings Tab
const NotificationSettingsTab: React.FC = () => {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Email Notifications</CardTitle>
                    <CardDescription>Manage which email notifications you receive</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label className="text-base">Transaction Alerts</Label>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Receive notifications for all transactions
                            </p>
                        </div>
                        <Switch id="email-transactions" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label className="text-base">Security Alerts</Label>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Get notified about security events like password changes
                            </p>
                        </div>
                        <Switch id="email-security" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label className="text-base">Account Updates</Label>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Receive notifications about account changes
                            </p>
                        </div>
                        <Switch id="email-account" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label className="text-base">Marketing Communications</Label>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Receive promotions, tips, and product updates
                            </p>
                        </div>
                        <Switch id="email-marketing" />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>App Notifications</CardTitle>
                    <CardDescription>Manage your in-app notification preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label className="text-base">Push Notifications</Label>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Enable push notifications on your devices
                            </p>
                        </div>
                        <Switch id="push-all" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label className="text-base">Transaction Notifications</Label>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Get notified when you send or receive money
                            </p>
                        </div>
                        <Switch id="push-transactions" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label className="text-base">Security Alerts</Label>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Receive important security notifications
                            </p>
                        </div>
                        <Switch id="push-security" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label className="text-base">Feature Updates</Label>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Get notified about new features and improvements
                            </p>
                        </div>
                        <Switch id="push-features" defaultChecked />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Notification Channels</CardTitle>
                    <CardDescription>Manage how you receive different types of notifications</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-800 text-left">
                                    <th className="py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Notification Type</th>
                                    <th className="py-3 px-4 font-medium text-gray-500 dark:text-gray-400 text-center">Email</th>
                                    <th className="py-3 px-4 font-medium text-gray-500 dark:text-gray-400 text-center">Push</th>
                                    <th className="py-3 px-4 font-medium text-gray-500 dark:text-gray-400 text-center">SMS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-200 dark:border-gray-800">
                                    <td className="py-4 px-4 font-medium text-gray-900 dark:text-white">
                                        <div className="flex items-center">
                                            <DollarSign className="h-4 w-4 mr-2 text-purple-500" />
                                            Transactions
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <Switch id="transactions-email" defaultChecked />
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <Switch id="transactions-push" defaultChecked />
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <Switch id="transactions-sms" />
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-800">
                                    <td className="py-4 px-4 font-medium text-gray-900 dark:text-white">
                                        <div className="flex items-center">
                                            <ShieldAlert className="h-4 w-4 mr-2 text-red-500" />
                                            Security
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <Switch id="security-email" defaultChecked />
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <Switch id="security-push" defaultChecked />
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <Switch id="security-sms" defaultChecked />
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-800">
                                    <td className="py-4 px-4 font-medium text-gray-900 dark:text-white">
                                        <div className="flex items-center">
                                            <Wallet className="h-4 w-4 mr-2 text-blue-500" />
                                            Account
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <Switch id="account-email" defaultChecked />
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <Switch id="account-push" defaultChecked />
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <Switch id="account-sms" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-4 font-medium text-gray-900 dark:text-white">
                                        <div className="flex items-center">
                                            <Settings className="h-4 w-4 mr-2 text-gray-500" />
                                            System
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <Switch id="system-email" defaultChecked />
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <Switch id="system-push" defaultChecked />
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <Switch id="system-sms" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="ml-auto bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white">
                        Save Preferences
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

// Main Notifications Page Component
const NotificationsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [notifications, setNotifications] = useState<Notification[]>(notificationsData);

    // Count unread notifications
    const unreadCount = notifications.filter(n => !n.read).length;

    // Filter notifications based on tab and search
    const filteredNotifications = notifications.filter(notification => {
        const matchesSearch = searchQuery === '' ||
            notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            notification.message.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesTab = activeTab === 'all' ||
            (activeTab === 'unread' && !notification.read) ||
            (activeTab === notification.category);

        return matchesSearch && matchesTab;
    });

    // Mark notification as read/unread
    const toggleReadStatus = (id: string) => {
        setNotifications(prev =>
            prev.map(notification =>
                notification.id === id
                    ? { ...notification, read: !notification.read }
                    : notification
            )
        );
    };

    // Delete notification
    const deleteNotification = (id: string) => {
        setNotifications(prev => prev.filter(notification => notification.id !== id));
    };

    // Mark all as read
    const markAllAsRead = () => {
        setNotifications(prev =>
            prev.map(notification => ({ ...notification, read: true }))
        );
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Notifications
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Stay updated with activity on your account
                        </p>
                    </div>

                    <div className="flex space-x-2 mt-4 md:mt-0">
                        <Button
                            variant="outline"
                            className="flex items-center"
                        >
                            <Check className="h-4 w-4 mr-2" />
                            Mark All as Read
                        </Button>
                        <Button
                            className="flex items-center bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white"
                            onClick={() => setActiveTab('settings')}
                        >
                            <Settings className="h-4 w-4 mr-2" />
                            Notification Settings
                        </Button>
                    </div>
                </div>

                {/* Notifications Content */}
                <Card className="border-gray-200 dark:border-gray-800">
                    <CardContent className="p-6">
                        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-6">
                                <TabsList>
                                    <TabsTrigger value="all">
                                        All
                                        <Badge className="ml-2 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-100">{notifications.length}</Badge>
                                    </TabsTrigger>
                                    <TabsTrigger value="unread">
                                        Unread
                                        {unreadCount > 0 && (
                                            <Badge className="ml-2 bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400 hover:bg-rose-100">{unreadCount}</Badge>
                                        )}
                                    </TabsTrigger>
                                    <TabsTrigger value="transaction">Transaction</TabsTrigger>
                                    <TabsTrigger value="security">Security</TabsTrigger>
                                    <TabsTrigger value="settings">Settings</TabsTrigger>
                                </TabsList>

                                {activeTab !== 'settings' && (
                                    <div className="relative w-full sm:w-auto">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Search className="h-4 w-4 text-gray-400" />
                                        </div>
                                        <Input
                                            className="pl-10 w-full sm:w-[250px]"
                                            placeholder="Search notifications..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                    </div>
                                )}
                            </div>

                            <TabsContent value="all">
                                {filteredNotifications.length > 0 ? (
                                    <motion.div
                                        variants={container}
                                        initial="hidden"
                                        animate="show"
                                        className="divide-y divide-gray-200 dark:divide-gray-800"
                                    >
                                        {filteredNotifications.map((notification) => (
                                            <motion.div key={notification.id} variants={item}>
                                                <NotificationItem
                                                    notification={notification}
                                                    onMarkAsRead={toggleReadStatus}
                                                    onDelete={deleteNotification}
                                                />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <div className="text-center py-12">
                                        <BellOff className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">No notifications found</h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            {searchQuery ?
                                                "No notifications match your search criteria." :
                                                "You don't have any notifications at the moment."
                                            }
                                        </p>
                                    </div>
                                )}
                            </TabsContent>

                            <TabsContent value="unread">
                                {filteredNotifications.length > 0 ? (
                                    <motion.div
                                        variants={container}
                                        initial="hidden"
                                        animate="show"
                                        className="divide-y divide-gray-200 dark:divide-gray-800"
                                    >
                                        {filteredNotifications.map((notification) => (
                                            <motion.div key={notification.id} variants={item}>
                                                <NotificationItem
                                                    notification={notification}
                                                    onMarkAsRead={toggleReadStatus}
                                                    onDelete={deleteNotification}
                                                />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <div className="text-center py-12">
                                        <CheckCheck className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">All caught up!</h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            You don't have any unread notifications at the moment.
                                        </p>
                                    </div>
                                )}
                            </TabsContent>

                            <TabsContent value="transaction">
                                {filteredNotifications.length > 0 ? (
                                    <motion.div
                                        variants={container}
                                        initial="hidden"
                                        animate="show"
                                        className="divide-y divide-gray-200 dark:divide-gray-800"
                                    >
                                        {filteredNotifications.map((notification) => (
                                            <motion.div key={notification.id} variants={item}>
                                                <NotificationItem
                                                    notification={notification}
                                                    onMarkAsRead={toggleReadStatus}
                                                    onDelete={deleteNotification}
                                                />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <div className="text-center py-12">
                                        <ArrowUpRight className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">No transaction notifications</h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            You don't have any transaction notifications at the moment.
                                        </p>
                                    </div>
                                )}
                            </TabsContent>

                            <TabsContent value="security">
                                {filteredNotifications.length > 0 ? (
                                    <motion.div
                                        variants={container}
                                        initial="hidden"
                                        animate="show"
                                        className="divide-y divide-gray-200 dark:divide-gray-800"
                                    >
                                        {filteredNotifications.map((notification) => (
                                            <motion.div key={notification.id} variants={item}>
                                                <NotificationItem
                                                    notification={notification}
                                                    onMarkAsRead={toggleReadStatus}
                                                    onDelete={deleteNotification}
                                                />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <div className="text-center py-12">
                                        <ShieldAlert className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">No security notifications</h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            You don't have any security notifications at the moment.
                                        </p>
                                    </div>
                                )}
                            </TabsContent>

                            <TabsContent value="settings">
                                <NotificationSettingsTab />
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default NotificationsPage;