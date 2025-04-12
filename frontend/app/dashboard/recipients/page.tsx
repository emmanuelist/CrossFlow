"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Search,
    Plus,
    Filter,
    User,
    Building,
    Star,
    MoreHorizontal,
    Trash,
    Edit,
    Copy,
    ArrowUpRight,
    Users,
} from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
interface Recipient {
    id: string;
    name: string;
    email: string;
    accountNumber?: string;
    bankName?: string;
    bankCode?: string;
    address?: string;
    country: string;
    currency: string;
    type: 'individual' | 'business';
    favorite: boolean;
    transferCount: number;
    lastTransfer?: string;
}

// Mock recipients data
const recipientsData: Recipient[] = [
    {
        id: "rec-001",
        name: "John Smith",
        email: "john.smith@example.com",
        accountNumber: "1234567890",
        bankName: "Chase Bank",
        bankCode: "CHASUS33",
        address: "123 Main St, New York, NY 10001",
        country: "United States",
        currency: "USD",
        type: "individual",
        favorite: true,
        transferCount: 12,
        lastTransfer: "2025-03-25"
    },
    {
        id: "rec-002",
        name: "Sarah Johnson",
        email: "sarah.j@example.com",
        accountNumber: "9876543210",
        bankName: "Bank of America",
        bankCode: "BOFAUS3N",
        address: "456 Oak Ave, San Francisco, CA 94102",
        country: "United States",
        currency: "USD",
        type: "individual",
        favorite: true,
        transferCount: 8,
        lastTransfer: "2025-04-02"
    },
    {
        id: "rec-003",
        name: "Acme Corporation",
        email: "payments@acmecorp.com",
        accountNumber: "2468135790",
        bankName: "Citibank",
        bankCode: "CITIUS33",
        address: "789 Business Blvd, Chicago, IL 60601",
        country: "United States",
        currency: "USD",
        type: "business",
        favorite: false,
        transferCount: 15,
        lastTransfer: "2025-04-05"
    },
    {
        id: "rec-004",
        name: "Maria Garcia",
        email: "maria.garcia@example.com",
        accountNumber: "ES9121000418450200051332",
        bankName: "Santander",
        bankCode: "BSCHESMMXXX",
        address: "Calle Mayor 7, Madrid, 28013",
        country: "Spain",
        currency: "EUR",
        type: "individual",
        favorite: false,
        transferCount: 5,
        lastTransfer: "2025-03-10"
    },
    {
        id: "rec-005",
        name: "Global Traders Ltd",
        email: "accounts@globaltraders.co.uk",
        accountNumber: "GB29NWBK60161331926819",
        bankName: "NatWest",
        bankCode: "NWBKGB2L",
        address: "10 Trading St, London, E14 9GE",
        country: "United Kingdom",
        currency: "GBP",
        type: "business",
        favorite: true,
        transferCount: 22,
        lastTransfer: "2025-04-01"
    },
    {
        id: "rec-006",
        name: "Robert Chen",
        email: "robert.chen@example.com",
        accountNumber: "3579514682",
        bankName: "TD Bank",
        bankCode: "TDOMCATTTOR",
        address: "25 Maple Drive, Toronto, ON M4B 1B3",
        country: "Canada",
        currency: "CAD",
        type: "individual",
        favorite: false,
        transferCount: 3,
        lastTransfer: "2025-02-15"
    }
];

// Recipient list item component
const RecipientItem: React.FC<{ recipient: Recipient; onFavoriteToggle: (id: string) => void }> = ({ recipient, onFavoriteToggle }) => {
    return (
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/30 rounded-lg">
            <div className="flex items-center space-x-4">
                <Avatar>
                    {recipient.type === 'individual' ? (
                        <AvatarFallback className="bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200">
                            {recipient.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                    ) : (
                        <AvatarFallback className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">
                            {recipient.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                    )}
                </Avatar>
                <div>
                    <div className="flex items-center">
                        <h3 className="font-medium dark:text-white">{recipient.name}</h3>
                        {recipient.favorite && (
                            <Star className="h-4 w-4 ml-2 text-amber-500 fill-amber-500" />
                        )}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-2">
                        <span>{recipient.email}</span>
                        <span>•</span>
                        <span>{recipient.currency}</span>
                        <Badge variant="outline" className="ml-2 text-xs">
                            {recipient.type === 'individual' ? 'Individual' : 'Business'}
                        </Badge>
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <div className="text-right mr-4 hidden md:block">
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                        {recipient.transferCount} transfers
                    </div>
                    {recipient.lastTransfer && (
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                            Last: {new Date(recipient.lastTransfer).toLocaleDateString()}
                        </div>
                    )}
                </div>
                <div className="flex space-x-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onFavoriteToggle(recipient.id)}
                        className={recipient.favorite ? "text-amber-500" : "text-gray-400"}
                    >
                        <Star className={`h-5 w-5 ${recipient.favorite ? "fill-amber-500" : ""}`} />
                    </Button>
                    <Button variant="outline" size="sm" className="hidden md:flex items-center">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        Send Money
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <ArrowUpRight className="h-4 w-4 mr-2" />
                                <span>Send Money</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Copy className="h-4 w-4 mr-2" />
                                <span>Copy Details</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-500 focus:text-red-700 dark:text-red-400 dark:focus:text-red-300">
                                <Trash className="h-4 w-4 mr-2" />
                                <span>Delete</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
};

// Add Recipient Form Dialog
const AddRecipientDialog: React.FC<{ open: boolean; onOpenChange: (open: boolean) => void; onAddRecipient: () => void }> = ({
    open,
    onOpenChange,
    onAddRecipient
}) => {
    const [recipientType, setRecipientType] = useState<string>('individual');

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Add New Recipient</DialogTitle>
                    <DialogDescription>
                        Add a new recipient to send money to. Fill in the required information below.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-2">
                    <div className="flex space-x-4 mb-4">
                        <Button
                            variant={recipientType === 'individual' ? 'default' : 'outline'}
                            className={`flex-1 flex items-center justify-center ${recipientType === 'individual' ? 'bg-gradient-to-r from-rose-500 to-cyan-500 text-white' : ''}`}
                            onClick={() => setRecipientType('individual')}
                        >
                            <User className="h-4 w-4 mr-2" />
                            Individual
                        </Button>
                        <Button
                            variant={recipientType === 'business' ? 'default' : 'outline'}
                            className={`flex-1 flex items-center justify-center ${recipientType === 'business' ? 'bg-gradient-to-r from-rose-500 to-cyan-500 text-white' : ''}`}
                            onClick={() => setRecipientType('business')}
                        >
                            <Building className="h-4 w-4 mr-2" />
                            Business
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2 col-span-2">
                            <Label htmlFor="name">{recipientType === 'individual' ? 'Full Name' : 'Business Name'}</Label>
                            <Input id="name" placeholder={recipientType === 'individual' ? "John Doe" : "Acme Corporation"} />
                        </div>

                        <div className="space-y-2 col-span-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="email@example.com" />
                        </div>

                        <div className="space-y-2 col-span-2">
                            <Label htmlFor="accountNumber">Account Number / IBAN</Label>
                            <Input id="accountNumber" placeholder="Account number or IBAN" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="bankName">Bank Name</Label>
                            <Input id="bankName" placeholder="Bank name" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="bankCode">Bank / Swift Code</Label>
                            <Input id="bankCode" placeholder="SWIFTCODE" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <Select defaultValue="us">
                                <SelectTrigger id="country">
                                    <SelectValue placeholder="Select country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="us">United States</SelectItem>
                                    <SelectItem value="ca">Canada</SelectItem>
                                    <SelectItem value="uk">United Kingdom</SelectItem>
                                    <SelectItem value="eu">European Union</SelectItem>
                                    <SelectItem value="au">Australia</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="currency">Currency</Label>
                            <Select defaultValue="usd">
                                <SelectTrigger id="currency">
                                    <SelectValue placeholder="Select currency" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="usd">USD - US Dollar</SelectItem>
                                    <SelectItem value="eur">EUR - Euro</SelectItem>
                                    <SelectItem value="gbp">GBP - British Pound</SelectItem>
                                    <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                                    <SelectItem value="aud">AUD - Australian Dollar</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
                    <Button onClick={() => {
                        onAddRecipient();
                        onOpenChange(false);
                    }}>
                        Add Recipient
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

const RecipientsPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [typeFilter, setTypeFilter] = useState<string>('all');
    const [showAddDialog, setShowAddDialog] = useState<boolean>(false);
    const [recipients, setRecipients] = useState<Recipient[]>(recipientsData);

    // Filter recipients based on search and type
    const filteredRecipients = recipients.filter(recipient => {
        const matchesSearch = searchQuery === '' ||
            recipient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            recipient.email.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesType = typeFilter === 'all' ||
            (typeFilter === 'favorites' && recipient.favorite) ||
            (typeFilter === 'individual' && recipient.type === 'individual') ||
            (typeFilter === 'business' && recipient.type === 'business');

        return matchesSearch && matchesType;
    });

    // Toggle favorite status for a recipient
    const toggleFavorite = (id: string) => {
        setRecipients(prev =>
            prev.map(recipient =>
                recipient.id === id
                    ? { ...recipient, favorite: !recipient.favorite }
                    : recipient
            )
        );
    };

    // Add new recipient
    const handleAddRecipient = () => {
        // In a real app, this would add the new recipient to the database
        // For now, we'll just show a success message
        console.log('New recipient added');
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
                            Recipients
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Manage your saved transfer recipients
                        </p>
                    </div>

                    <div className="flex space-x-2 mt-4 md:mt-0">
                        <Button
                            className="flex items-center bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white"
                            onClick={() => setShowAddDialog(true)}
                        >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Recipient
                        </Button>
                    </div>
                </div>

                {/* Search and Filter */}
                <Card className="border-gray-200 dark:border-gray-800">
                    <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-1">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-4 w-4 text-gray-400" />
                                </div>
                                <Input
                                    className="pl-10"
                                    placeholder="Search recipients..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            <div className="md:w-[200px]">
                                <Select value={typeFilter} onValueChange={setTypeFilter}>
                                    <SelectTrigger>
                                        <div className="flex items-center">
                                            <Filter className="h-4 w-4 mr-2 text-gray-400" />
                                            <SelectValue placeholder="Filter" />
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Recipients</SelectItem>
                                        <SelectItem value="favorites">Favorites</SelectItem>
                                        <SelectItem value="individual">Individuals</SelectItem>
                                        <SelectItem value="business">Businesses</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Recipients List */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <Card className="border-gray-200 dark:border-gray-800">
                        <CardContent className="p-6">
                            {filteredRecipients.length > 0 ? (
                                <div className="space-y-2">
                                    {filteredRecipients.map((recipient) => (
                                        <motion.div key={recipient.id} variants={item}>
                                            <RecipientItem
                                                recipient={recipient}
                                                onFavoriteToggle={toggleFavorite}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <Users className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">No recipients found</h3>
                                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                                        {searchQuery ?
                                            "No recipients match your search criteria." :
                                            "You don't have any recipients yet. Add your first recipient to get started."
                                        }
                                    </p>
                                    <Button
                                        className="bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white"
                                        onClick={() => setShowAddDialog(true)}
                                    >
                                        <Plus className="h-4 w-4 mr-2" />
                                        Add New Recipient
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </motion.div>
            </div>

            {/* Add Recipient Dialog */}
            <AddRecipientDialog
                open={showAddDialog}
                onOpenChange={setShowAddDialog}
                onAddRecipient={handleAddRecipient}
            />
        </DashboardLayout>
    );
};

export default RecipientsPage;