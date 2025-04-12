"use client"

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    User,
    Mail,
    Phone,
    Calendar,
    Home,
    Lock,
    Key,
    Smartphone,
    Globe,
    Eye,
    EyeOff,
    Moon,
    Sun
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
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DashboardLayout from '@/components/Dashboard2/DashboardLayout';

// Profile Tab Content
const ProfileTab: React.FC = () => {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details and contact information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Profile Photo */}
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="/avatar-placeholder.jpg" alt="Profile" />
                            <AvatarFallback className="bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200 text-xl">JD</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1.5">
                            <h3 className="text-lg font-medium dark:text-white">Profile Photo</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">JPG, GIF or PNG. 1MB max size.</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <Button variant="outline" size="sm">Upload New</Button>
                                <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">Remove</Button>
                            </div>
                        </div>
                    </div>

                    <Separator />

                    {/* Personal Info Form */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name</Label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-4 w-4 text-gray-400" />
                                </div>
                                <Input
                                    id="fullName"
                                    className="pl-10"
                                    placeholder="Your full name"
                                    defaultValue="Jane Doe"
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-4 w-4 text-gray-400" />
                                </div>
                                <Input
                                    id="email"
                                    type="email"
                                    className="pl-10"
                                    placeholder="Your email address"
                                    defaultValue="jane.doe@example.com"
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Phone className="h-4 w-4 text-gray-400" />
                                </div>
                                <Input
                                    id="phone"
                                    className="pl-10"
                                    placeholder="Your phone number"
                                    defaultValue="+1 (555) 123-4567"
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="dob">Date of Birth</Label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Calendar className="h-4 w-4 text-gray-400" />
                                </div>
                                <Input
                                    id="dob"
                                    type="date"
                                    className="pl-10"
                                    defaultValue="1990-01-01"
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="address">Address</Label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Home className="h-4 w-4 text-gray-400" />
                                </div>
                                <Input
                                    id="address"
                                    className="pl-10"
                                    placeholder="Your address"
                                    defaultValue="123 Main St, New York, NY 10001"
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="language">Preferred Language</Label>
                            <Select defaultValue="en" disabled={!isEditing}>
                                <SelectTrigger id="language" className="pl-10 relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Globe className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <SelectValue placeholder="Select language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="en">English</SelectItem>
                                    <SelectItem value="es">Spanish</SelectItem>
                                    <SelectItem value="fr">French</SelectItem>
                                    <SelectItem value="de">German</SelectItem>
                                    <SelectItem value="zh">Chinese</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    {isEditing ? (
                        <>
                            <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                            <Button onClick={() => setIsEditing(false)}>Save Changes</Button>
                        </>
                    ) : (
                        <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
};

// Security Tab Content
const SecurityTab: React.FC = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState<boolean>(false);
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    return (
        <div className="space-y-6">
            {/* Password Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>Change your password to secure your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-4 w-4 text-gray-400" />
                            </div>
                            <Input
                                id="currentPassword"
                                type={showCurrentPassword ? "text" : "password"}
                                className="pl-10 pr-10"
                                placeholder="Enter current password"
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                className="absolute right-0 top-0 h-full px-3"
                            >
                                {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Key className="h-4 w-4 text-gray-400" />
                            </div>
                            <Input
                                id="newPassword"
                                type={showNewPassword ? "text" : "password"}
                                className="pl-10 pr-10"
                                placeholder="Enter new password"
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="absolute right-0 top-0 h-full px-3"
                            >
                                {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Key className="h-4 w-4 text-gray-400" />
                            </div>
                            <Input
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                className="pl-10 pr-10"
                                placeholder="Confirm new password"
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-0 top-0 h-full px-3"
                            >
                                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Update Password</Button>
                </CardFooter>
            </Card>

            {/* Two-Factor Authentication */}
            <Card>
                <CardHeader>
                    <CardTitle>Two-Factor Authentication</CardTitle>
                    <CardDescription>Add an extra layer of security to your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="font-medium dark:text-white">Authenticator App</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Use an authenticator app to generate verification codes</div>
                        </div>
                        <Switch id="2fa" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="font-medium dark:text-white">SMS Authentication</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Receive verification codes via SMS</div>
                        </div>
                        <Switch id="sms-auth" />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="font-medium dark:text-white">Email Verification</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Receive verification codes via email</div>
                        </div>
                        <Switch id="email-auth" />
                    </div>
                </CardContent>
            </Card>

            {/* Login Sessions */}
            <Card>
                <CardHeader>
                    <CardTitle>Active Sessions</CardTitle>
                    <CardDescription>Manage your active login sessions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                                    <Smartphone className="h-5 w-5 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <div className="font-medium dark:text-white">Current Device - Chrome on MacOS</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">New York, USA • Last active just now</div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-xs px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full mr-4">Current</span>
                            </div>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                                    <Smartphone className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                                </div>
                                <div>
                                    <div className="font-medium dark:text-white">iPhone 13 - Safari</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Chicago, USA • Last active 2 hours ago</div>
                                </div>
                            </div>
                            <Button variant="outline" size="sm">Logout</Button>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                                    <Smartphone className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                                </div>
                                <div>
                                    <div className="font-medium dark:text-white">Windows PC - Firefox</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Boston, USA • Last active yesterday</div>
                                </div>
                            </div>
                            <Button variant="outline" size="sm">Logout</Button>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">Logout All Other Devices</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

// Preferences Tab Content
const PreferencesTab: React.FC = () => {
    return (
        <div className="space-y-6">
            {/* Theme Settings */}
            <Card>
                <CardHeader>
                    <CardTitle>Appearance</CardTitle>
                    <CardDescription>Customize how the application looks and feels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-1.5">
                        <Label htmlFor="theme">Theme</Label>
                        <div className="grid grid-cols-3 gap-3">
                            <Button variant="outline" className="flex flex-col items-center justify-center h-24 p-4 gap-2 border-2 border-rose-500">
                                <Sun className="h-6 w-6 text-amber-500" />
                                <span>Light</span>
                            </Button>
                            <Button variant="outline" className="flex flex-col items-center justify-center h-24 p-4 gap-2">
                                <Moon className="h-6 w-6 text-blue-500" />
                                <span>Dark</span>
                            </Button>
                            <Button variant="outline" className="flex flex-col items-center justify-center h-24 p-4 gap-2">
                                <div className="flex">
                                    <Sun className="h-6 w-6 text-amber-500" />
                                    <Moon className="h-6 w-6 text-blue-500 -ml-1" />
                                </div>
                                <span>System</span>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card>
                <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>Configure how and when you want to be notified</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="font-medium dark:text-white">Email Notifications</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Receive notifications via email</div>
                        </div>
                        <Switch id="email-notifications" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="font-medium dark:text-white">Push Notifications</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Receive notifications on your device</div>
                        </div>
                        <Switch id="push-notifications" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="font-medium dark:text-white">Transaction Alerts</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Get notified about new transactions</div>
                        </div>
                        <Switch id="transaction-alerts" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="font-medium dark:text-white">Marketing Communications</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Receive updates about new features and promotions</div>
                        </div>
                        <Switch id="marketing-communications" />
                    </div>
                </CardContent>
            </Card>

            {/* Privacy Settings */}
            <Card>
                <CardHeader>
                    <CardTitle>Privacy & Data</CardTitle>
                    <CardDescription>Manage your privacy settings and data usage</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="font-medium dark:text-white">Data Analytics</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Allow us to collect anonymous usage data to improve our services</div>
                        </div>
                        <Switch id="data-analytics" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="font-medium dark:text-white">Show Account Balance</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Display your account balance on the dashboard</div>
                        </div>
                        <Switch id="show-balance" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="font-medium dark:text-white">Cookie Preferences</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Manage cookies and tracking preferences</div>
                        </div>
                        <Button variant="outline" size="sm">Manage</Button>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">Delete My Account</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

const SettingsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("profile");

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Settings
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Manage your account settings and preferences
                        </p>
                    </div>
                </div>

                {/* Settings Tabs */}
                <Card className="border-gray-200 dark:border-gray-800">
                    <CardContent className="p-6">
                        <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab}>
                            <TabsList className="mb-6">
                                <TabsTrigger value="profile">Profile</TabsTrigger>
                                <TabsTrigger value="security">Security</TabsTrigger>
                                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                            </TabsList>

                            <TabsContent value="profile">
                                <ProfileTab />
                            </TabsContent>
                            <TabsContent value="security">
                                <SecurityTab />
                            </TabsContent>
                            <TabsContent value="preferences">
                                <PreferencesTab />
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default SettingsPage;