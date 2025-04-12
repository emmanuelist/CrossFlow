"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Sun,
    Moon,
    Bell,
    Mail,
    DollarSign,
    Globe,
    CreditCard,
    Calendar,
    Clock,
    Save,
    Monitor,
    FileText,
    Check
} from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import DashboardLayout from '@/components/Dashboard2/DashboardLayout';

const PreferencesSettingsPage: React.FC = () => {
    const [theme, setTheme] = useState<string>('system');
    const [currency, setCurrency] = useState<string>('usd');
    const [language, setLanguage] = useState<string>('en');
    const [timeFormat, setTimeFormat] = useState<string>('12h');
    const [dateFormat, setDateFormat] = useState<string>('mm/dd/yyyy');
    const [exportFormat, setExportFormat] = useState<string>('csv');
    const [autoExport, setAutoExport] = useState<boolean>(false);
    const [notificationVolume, setNotificationVolume] = useState<number>(70);
    const [showSuccessDialog, setShowSuccessDialog] = useState<boolean>(false);

    // Handle save preferences
    const handleSavePreferences = () => {
        // In a real app, you would save to the database here
        setShowSuccessDialog(true);
    };

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Preferences
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Customize your application experience
                        </p>
                    </div>

                    <div className="flex space-x-2 mt-4 md:mt-0">
                        <Button
                            className="flex items-center bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white"
                            onClick={handleSavePreferences}
                        >
                            <Save className="h-4 w-4 mr-2" />
                            Save Preferences
                        </Button>
                    </div>
                </div>

                {/* Appearance Card */}
                <Card className="border-gray-200 dark:border-gray-800">
                    <CardHeader>
                        <CardTitle>Appearance</CardTitle>
                        <CardDescription>Customize how the application looks and feels</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <Label>Theme</Label>
                            <RadioGroup
                                value={theme}
                                onValueChange={setTheme}
                                className="grid grid-cols-3 gap-4"
                            >
                                <Label
                                    htmlFor="theme-light"
                                    className={`flex flex-col items-center justify-center h-24 p-4 rounded-lg border-2 ${theme === 'light' ? 'border-rose-500 dark:border-rose-400' : 'border-gray-200 dark:border-gray-800'
                                        } cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/30`}
                                >
                                    <RadioGroupItem id="theme-light" value="light" className="sr-only" />
                                    <Sun className="h-8 w-8 mb-2 text-amber-500" />
                                    <span>Light</span>
                                </Label>
                                <Label
                                    htmlFor="theme-dark"
                                    className={`flex flex-col items-center justify-center h-24 p-4 rounded-lg border-2 ${theme === 'dark' ? 'border-rose-500 dark:border-rose-400' : 'border-gray-200 dark:border-gray-800'
                                        } cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/30`}
                                >
                                    <RadioGroupItem id="theme-dark" value="dark" className="sr-only" />
                                    <Moon className="h-8 w-8 mb-2 text-blue-500" />
                                    <span>Dark</span>
                                </Label>
                                <Label
                                    htmlFor="theme-system"
                                    className={`flex flex-col items-center justify-center h-24 p-4 rounded-lg border-2 ${theme === 'system' ? 'border-rose-500 dark:border-rose-400' : 'border-gray-200 dark:border-gray-800'
                                        } cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/30`}
                                >
                                    <RadioGroupItem id="theme-system" value="system" className="sr-only" />
                                    <Monitor className="h-8 w-8 mb-2 text-gray-500" />
                                    <span>System</span>
                                </Label>
                            </RadioGroup>
                        </div>

                        <Separator />

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label className="text-base">Reduce Motion</Label>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Minimize animations and transitions
                                    </p>
                                </div>
                                <Switch id="reduce-motion" />
                            </div>
                        </div>

                        <Separator />

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label className="text-base">High Contrast</Label>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Increase contrast for better visibility
                                    </p>
                                </div>
                                <Switch id="high-contrast" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Regional Settings Card */}
                <Card className="border-gray-200 dark:border-gray-800">
                    <CardHeader>
                        <CardTitle>Regional Settings</CardTitle>
                        <CardDescription>Customize language, date, time, and currency preferences</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="language">Language</Label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Globe className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <Select value={language} onValueChange={setLanguage}>
                                        <SelectTrigger id="language" className="pl-10">
                                            <SelectValue placeholder="Select language" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="en">English</SelectItem>
                                            <SelectItem value="es">Español</SelectItem>
                                            <SelectItem value="fr">Français</SelectItem>
                                            <SelectItem value="de">Deutsch</SelectItem>
                                            <SelectItem value="pt">Português</SelectItem>
                                            <SelectItem value="ja">日本語</SelectItem>
                                            <SelectItem value="zh">中文</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="currency">Default Currency</Label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <DollarSign className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <Select value={currency} onValueChange={setCurrency}>
                                        <SelectTrigger id="currency" className="pl-10">
                                            <SelectValue placeholder="Select currency" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="usd">USD - US Dollar</SelectItem>
                                            <SelectItem value="eur">EUR - Euro</SelectItem>
                                            <SelectItem value="gbp">GBP - British Pound</SelectItem>
                                            <SelectItem value="jpy">JPY - Japanese Yen</SelectItem>
                                            <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                                            <SelectItem value="aud">AUD - Australian Dollar</SelectItem>
                                            <SelectItem value="cny">CNY - Chinese Yuan</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="dateFormat">Date Format</Label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Calendar className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <Select value={dateFormat} onValueChange={setDateFormat}>
                                        <SelectTrigger id="dateFormat" className="pl-10">
                                            <SelectValue placeholder="Select date format" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="mm/dd/yyyy">MM/DD/YYYY (04/12/2025)</SelectItem>
                                            <SelectItem value="dd/mm/yyyy">DD/MM/YYYY (12/04/2025)</SelectItem>
                                            <SelectItem value="yyyy-mm-dd">YYYY-MM-DD (2025-04-12)</SelectItem>
                                            <SelectItem value="dd.mm.yyyy">DD.MM.YYYY (12.04.2025)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="timeFormat">Time Format</Label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Clock className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <Select value={timeFormat} onValueChange={setTimeFormat}>
                                        <SelectTrigger id="timeFormat" className="pl-10">
                                            <SelectValue placeholder="Select time format" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="12h">12-hour (2:30 PM)</SelectItem>
                                            <SelectItem value="24h">24-hour (14:30)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Notifications Card */}
                <Card className="border-gray-200 dark:border-gray-800">
                    <CardHeader>
                        <CardTitle>Notification Preferences</CardTitle>
                        <CardDescription>Manage what notifications you receive and how</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">In-App Notifications</Label>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Show notifications within the application
                                </p>
                            </div>
                            <Switch id="in-app-notifications" defaultChecked />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Email Notifications</Label>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Receive notifications via email
                                </p>
                            </div>
                            <Switch id="email-notifications" defaultChecked />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Push Notifications</Label>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Receive notifications on your device
                                </p>
                            </div>
                            <Switch id="push-notifications" defaultChecked />
                        </div>
                        <Separator />
                        <div className="space-y-3">
                            <Label className="text-base">Notification Sound Volume</Label>
                            <div className="flex items-center space-x-2">
                                <Bell className="h-4 w-4 text-gray-400" />
                                <Slider
                                    value={[notificationVolume]}
                                    onValueChange={([value]) => setNotificationVolume(value)}
                                    max={100}
                                    step={1}
                                    className="flex-1"
                                />
                                <span className="text-sm text-gray-500 dark:text-gray-400 w-8 text-right">{notificationVolume}%</span>
                            </div>
                        </div>
                        <Separator />
                        <div className="space-y-3">
                            <Label className="text-base">Notification Types</Label>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <Switch id="transaction-notifications" defaultChecked />
                                    <Label htmlFor="transaction-notifications">Transaction notifications</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Switch id="security-notifications" defaultChecked />
                                    <Label htmlFor="security-notifications">Security alerts</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Switch id="marketing-notifications" />
                                    <Label htmlFor="marketing-notifications">Marketing and promotions</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Switch id="announcement-notifications" defaultChecked />
                                    <Label htmlFor="announcement-notifications">Product announcements and updates</Label>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Export and Backup Card */}
                <Card className="border-gray-200 dark:border-gray-800">
                    <CardHeader>
                        <CardTitle>Export and Backup</CardTitle>
                        <CardDescription>Manage your data export preferences</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <Label htmlFor="exportFormat">Export Format</Label>
                            <RadioGroup
                                value={exportFormat}
                                onValueChange={setExportFormat}
                                className="grid grid-cols-3 gap-4"
                            >
                                <Label
                                    htmlFor="export-csv"
                                    className={`flex flex-col items-center justify-center h-20 p-4 rounded-lg border-2 ${exportFormat === 'csv' ? 'border-rose-500 dark:border-rose-400' : 'border-gray-200 dark:border-gray-800'
                                        } cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/30`}
                                >
                                    <RadioGroupItem id="export-csv" value="csv" className="sr-only" />
                                    <FileText className="h-6 w-6 mb-2 text-green-500" />
                                    <span>CSV</span>
                                </Label>
                                <Label
                                    htmlFor="export-excel"
                                    className={`flex flex-col items-center justify-center h-20 p-4 rounded-lg border-2 ${exportFormat === 'excel' ? 'border-rose-500 dark:border-rose-400' : 'border-gray-200 dark:border-gray-800'
                                        } cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/30`}
                                >
                                    <RadioGroupItem id="export-excel" value="excel" className="sr-only" />
                                    <FileText className="h-6 w-6 mb-2 text-blue-500" />
                                    <span>Excel</span>
                                </Label>
                                <Label
                                    htmlFor="export-pdf"
                                    className={`flex flex-col items-center justify-center h-20 p-4 rounded-lg border-2 ${exportFormat === 'pdf' ? 'border-rose-500 dark:border-rose-400' : 'border-gray-200 dark:border-gray-800'
                                        } cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/30`}
                                >
                                    <RadioGroupItem id="export-pdf" value="pdf" className="sr-only" />
                                    <FileText className="h-6 w-6 mb-2 text-red-500" />
                                    <span>PDF</span>
                                </Label>
                            </RadioGroup>
                        </div>

                        <Separator />

                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Automatic Monthly Export</Label>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Automatically export your transaction data monthly
                                </p>
                            </div>
                            <Switch
                                id="auto-export"
                                checked={autoExport}
                                onCheckedChange={setAutoExport}
                            />
                        </div>

                        {autoExport && (
                            <div className="space-y-2">
                                <Label htmlFor="exportEmail">Email for Exports</Label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <Select defaultValue="default">
                                        <SelectTrigger id="exportEmail" className="pl-10">
                                            <SelectValue placeholder="Select email" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="default">Use account email</SelectItem>
                                            <SelectItem value="custom">Use a different email</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        )}

                        <div className="flex justify-end space-x-2">
                            <Button variant="outline">
                                Export Current Data
                            </Button>
                            <Button variant="outline">
                                Backup Account
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Payment Settings Card */}
                <Card className="border-gray-200 dark:border-gray-800">
                    <CardHeader>
                        <CardTitle>Payment Preferences</CardTitle>
                        <CardDescription>Set your default payment methods and options</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="defaultPaymentMethod">Default Payment Method</Label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <CreditCard className="h-4 w-4 text-gray-400" />
                                </div>
                                <Select defaultValue="wallet-usd">
                                    <SelectTrigger id="defaultPaymentMethod" className="pl-10">
                                        <SelectValue placeholder="Select payment method" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="wallet-usd">USD Wallet</SelectItem>
                                        <SelectItem value="wallet-eur">EUR Wallet</SelectItem>
                                        <SelectItem value="wallet-gbp">GBP Wallet</SelectItem>
                                        <SelectItem value="card-visa">Visa Card (ending 4785)</SelectItem>
                                        <SelectItem value="card-mc">Mastercard (ending 5612)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Save Payment Methods</Label>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Automatically save new payment methods
                                </p>
                            </div>
                            <Switch id="save-payment-methods" defaultChecked />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Payment Confirmation</Label>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Always require confirmation before processing payments
                                </p>
                            </div>
                            <Switch id="payment-confirmation" defaultChecked />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Success Dialog */}
            <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Preferences Saved</DialogTitle>
                        <DialogDescription>
                            Your preferences have been successfully updated.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-center py-4">
                        <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3">
                            <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={() => setShowSuccessDialog(false)}>
                            Close
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </DashboardLayout>
    );
};

export default PreferencesSettingsPage;