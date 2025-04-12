import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Recipient {
    id: string;
    name: string;
    image?: string;
    initials: string;
    lastTransferred: string;
}

const recipients: Recipient[] = [
    {
        id: '1',
        name: 'John Doe',
        initials: 'JD',
        lastTransferred: '2 days ago'
    },
    {
        id: '2',
        name: 'Sarah Johnson',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        initials: 'SJ',
        lastTransferred: '1 week ago'
    },
    {
        id: '3',
        name: 'Michael Brown',
        initials: 'MB',
        lastTransferred: '3 days ago'
    },
    {
        id: '4',
        name: 'Emily Davis',
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        initials: 'ED',
        lastTransferred: '2 weeks ago'
    }
];

const QuickTransferCard: React.FC = () => {
    return (
        <Card className="border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    Quick Transfer
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className="space-y-4">
                    {/* Recent Recipients */}
                    <div>
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                            Recent Recipients
                        </h4>

                        <div className="flex space-x-2 overflow-x-auto pb-2">
                            {recipients.map((recipient) => (
                                <div
                                    key={recipient.id}
                                    className="flex flex-col items-center space-y-1 cursor-pointer group"
                                >
                                    <Avatar className="h-12 w-12 border-2 border-transparent group-hover:border-rose-500 transition-colors">
                                        {recipient.image ? (
                                            <AvatarImage src={recipient.image} alt={recipient.name} />
                                        ) : null}
                                        <AvatarFallback className="bg-gradient-to-br from-rose-500 to-cyan-500 text-white">
                                            {recipient.initials}
                                        </AvatarFallback>
                                    </Avatar>
                                    <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                                        {recipient.name.split(' ')[0]}
                                    </span>
                                </div>
                            ))}

                            <div className="flex flex-col items-center space-y-1 cursor-pointer group">
                                <div className="h-12 w-12 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-700 group-hover:border-rose-500 transition-colors flex items-center justify-center">
                                    <svg className="h-6 w-6 text-gray-400 group-hover:text-rose-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                                <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">New</span>
                            </div>
                        </div>
                    </div>

                    {/* Transfer Form */}
                    <form className="space-y-4">
                        <div className="space-y-3">
                            <div>
                                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Amount
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-gray-500 dark:text-gray-400">$</span>
                                    </div>
                                    <Input
                                        id="amount"
                                        type="number"
                                        placeholder="0.00"
                                        className="pl-7"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="currency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Currency
                                </label>
                                <Select defaultValue="usd">
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select currency" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="usd">USD - US Dollar</SelectItem>
                                        <SelectItem value="eur">EUR - Euro</SelectItem>
                                        <SelectItem value="gbp">GBP - British Pound</SelectItem>
                                        <SelectItem value="ngn">NGN - Nigerian Naira</SelectItem>
                                        <SelectItem value="kes">KES - Kenyan Shilling</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Recipient
                                </label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select recipient" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {recipients.map((recipient) => (
                                            <SelectItem key={recipient.id} value={recipient.id}>
                                                <div className="flex items-center">
                                                    <Avatar className="h-6 w-6 mr-2">
                                                        {recipient.image ? (
                                                            <AvatarImage src={recipient.image} alt={recipient.name} />
                                                        ) : null}
                                                        <AvatarFallback className="bg-gradient-to-br from-rose-500 to-cyan-500 text-white text-xs">
                                                            {recipient.initials}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <span>{recipient.name}</span>
                                                </div>
                                            </SelectItem>
                                        ))}
                                        <SelectItem value="new">
                                            <div className="flex items-center text-rose-600 dark:text-rose-400">
                                                <span className="mr-2">+</span>
                                                <span>Add new recipient</span>
                                            </div>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white"
                        >
                            Send Money
                        </Button>
                    </form>
                </div>
            </CardContent>
        </Card>
    );
};

export default QuickTransferCard;