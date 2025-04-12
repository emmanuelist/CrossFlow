"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Wallet,
    CreditCard,
    Plus,
    Search,
    DollarSign,
    Euro,
    PoundSterling,
    EyeOff,
    EyeIcon,
    MoreHorizontal,
    ArrowUpRight
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import DashboardLayout from '@/components/Dashboard2/DashboardLayout';

// Type definitions
interface WalletProps {
    currency: string;
    balance: string;
    name: string;
    icon: React.ReactNode;
    color: string;
}

interface BankCardProps {
    name: string;
    last4: string;
    expiry: string;
    type: string;
    network: string;
}

// Wallet Card Component
const WalletCard: React.FC<WalletProps> = ({ currency, balance, name, icon, color }) => {
    const [isHidden, setIsHidden] = useState<boolean>(false);

    return (
        <Card className="border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
                <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${color}`}>
                            {icon}
                        </div>
                        <div>
                            <h3 className="font-medium dark:text-white">{name}</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                {currency}
                            </p>
                        </div>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Add funds</DropdownMenuItem>
                            <DropdownMenuItem>Transfer</DropdownMenuItem>
                            <DropdownMenuItem>View details</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="mt-6">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Available balance</p>
                        <Button variant="ghost" size="sm" onClick={() => setIsHidden(!isHidden)} className="h-8 w-8 p-0">
                            {isHidden ? <EyeIcon className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                        </Button>
                    </div>
                    <div className="mt-1">
                        {isHidden ? (
                            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-28"></div>
                        ) : (
                            <h2 className="text-2xl font-bold dark:text-white">{balance}</h2>
                        )}
                    </div>
                </div>

                <div className="mt-6 flex space-x-2">
                    <Button variant="outline" className="flex-1 text-sm">
                        Add funds
                    </Button>
                    <Button className="flex-1 text-sm bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        Transfer
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

// Bank Card Component
const BankCard: React.FC<BankCardProps> = ({ name, last4, expiry, type, network }) => {
    return (
        <Card className="overflow-hidden border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 p-6 bg-gradient-to-r from-rose-500 to-cyan-500 text-white flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-xs opacity-80">Card name</p>
                        <h3 className="font-medium">{name}</h3>
                    </div>
                    <div className="text-right">
                        <p className="text-xs opacity-80">Network</p>
                        <h3 className="font-medium">{network}</h3>
                    </div>
                </div>
                <div>
                    <p className="text-xs opacity-80 mb-1">Card number</p>
                    <div className="flex space-x-2">
                        <div className="w-10 h-5 bg-white/20 rounded"></div>
                        <div className="w-10 h-5 bg-white/20 rounded"></div>
                        <div className="w-10 h-5 bg-white/20 rounded"></div>
                        <div className="flex items-center">
                            <span className="text-sm font-medium">•••• {last4}</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-xs opacity-80 mb-1">Expiry date</p>
                        <p className="font-medium">{expiry}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs opacity-80 mb-1">Type</p>
                        <p className="font-medium">{type}</p>
                    </div>
                </div>
            </div>
            <CardContent className="p-4 bg-white dark:bg-gray-800">
                <div className="flex justify-between">
                    <Button variant="outline" size="sm">
                        View details
                    </Button>
                    <Button variant="outline" size="sm">
                        Freeze card
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

const WalletsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('all');

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

    // Mock wallet data
    const wallets = [
        {
            id: 1,
            name: "Main Wallet",
            currency: "USD",
            balance: "$3,240.50",
            icon: <DollarSign className="h-5 w-5 text-white" />,
            color: "bg-blue-500"
        },
        {
            id: 2,
            name: "Euro Wallet",
            currency: "EUR",
            balance: "€1,450.00",
            icon: <Euro className="h-5 w-5 text-white" />,
            color: "bg-amber-500"
        },
        {
            id: 3,
            name: "UK Wallet",
            currency: "GBP",
            balance: "£950.75",
            icon: <PoundSterling className="h-5 w-5 text-white" />,
            color: "bg-rose-500"
        }
    ];

    // Mock card data
    const cards = [
        {
            id: 1,
            name: "Jane Doe",
            last4: "4785",
            expiry: "05/27",
            type: "Physical",
            network: "Visa"
        },
        {
            id: 2,
            name: "Jane Doe",
            last4: "5612",
            expiry: "08/26",
            type: "Virtual",
            network: "Mastercard"
        }
    ];

    // Render content based on active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'wallets':
                return (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {wallets.map((wallet) => (
                            <motion.div key={wallet.id} variants={item}>
                                <WalletCard
                                    currency={wallet.currency}
                                    balance={wallet.balance}
                                    name={wallet.name}
                                    icon={wallet.icon}
                                    color={wallet.color}
                                />
                            </motion.div>
                        ))}
                        <motion.div variants={item}>
                            <Card className="border-dashed border-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 h-full flex items-center justify-center">
                                <CardContent className="p-6 text-center">
                                    <div className="mx-auto h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                                        <Plus className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                    </div>
                                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">Add New Wallet</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Create a new currency wallet</p>
                                    <Button variant="outline">
                                        Create Wallet
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                );

            case 'cards':
                return (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {cards.map((card) => (
                            <motion.div key={card.id} variants={item}>
                                <BankCard
                                    name={card.name}
                                    last4={card.last4}
                                    expiry={card.expiry}
                                    type={card.type}
                                    network={card.network}
                                />
                            </motion.div>
                        ))}
                        <motion.div variants={item}>
                            <Card className="border-dashed border-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 h-full flex items-center justify-center">
                                <CardContent className="p-6 text-center">
                                    <div className="mx-auto h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                                        <Plus className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                    </div>
                                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">Add New Card</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Order a physical or virtual card</p>
                                    <Button variant="outline">
                                        Order Card
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                );

            default: // 'all' tab
                return (
                    <div className="space-y-10">
                        {/* Wallets Section */}
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Your Wallets</h2>
                                <Button variant="outline" size="sm" className="flex items-center">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Wallet
                                </Button>
                            </div>

                            <motion.div
                                variants={container}
                                initial="hidden"
                                animate="show"
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {wallets.map((wallet) => (
                                    <motion.div key={wallet.id} variants={item}>
                                        <WalletCard
                                            currency={wallet.currency}
                                            balance={wallet.balance}
                                            name={wallet.name}
                                            icon={wallet.icon}
                                            color={wallet.color}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Cards Section */}
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Your Cards</h2>
                                <Button variant="outline" size="sm" className="flex items-center">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Order Card
                                </Button>
                            </div>

                            <motion.div
                                variants={container}
                                initial="hidden"
                                animate="show"
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {cards.map((card) => (
                                    <motion.div key={card.id} variants={item}>
                                        <BankCard
                                            name={card.name}
                                            last4={card.last4}
                                            expiry={card.expiry}
                                            type={card.type}
                                            network={card.network}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Wallets & Cards
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Manage your digital wallets and payment cards.
                        </p>
                    </div>

                    <div className="flex space-x-2 mt-4 md:mt-0">
                        <Button
                            variant="outline"
                            className="flex items-center"
                        >
                            <CreditCard className="h-4 w-4 mr-2" />
                            Add Card
                        </Button>
                        <Button
                            className="flex items-center bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white"
                        >
                            <Wallet className="h-4 w-4 mr-2" />
                            Add Wallet
                        </Button>
                    </div>
                </div>

                {/* Tabs */}
                <Card className="border-gray-200 dark:border-gray-800">
                    <CardContent className="p-6">
                        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-6">
                                <TabsList>
                                    <TabsTrigger value="all">All</TabsTrigger>
                                    <TabsTrigger value="wallets">Wallets</TabsTrigger>
                                    <TabsTrigger value="cards">Cards</TabsTrigger>
                                </TabsList>

                                <div className="relative w-full sm:w-auto">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Search className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <Input
                                        className="pl-10 w-full sm:w-[250px]"
                                        placeholder="Search wallets or cards..."
                                    />
                                </div>
                            </div>

                            <TabsContent value="all">
                                {renderTabContent()}
                            </TabsContent>
                            <TabsContent value="wallets">
                                {renderTabContent()}
                            </TabsContent>
                            <TabsContent value="cards">
                                {renderTabContent()}
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default WalletsPage;