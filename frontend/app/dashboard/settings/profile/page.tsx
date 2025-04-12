"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    User,
    Mail,
    Phone,
    Calendar,
    Home,
    Globe,
    Upload,
    Trash,
    Save,
    X,
    Check,
    CheckCircle,
    Clock,
    Shield,
    DollarSign
} from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import DashboardLayout from '@/components/Dashboard2/DashboardLayout';

// Mock user data
const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+1 (555) 123-4567",
    dob: "1990-01-01",
    address: "123 Main St, New York, NY 10001",
    country: "United States",
    language: "en",
    verified: true,
    joinDate: "2023-05-15"
};

// Profile Settings Page Component
const ProfileSettingsPage: React.FC = () => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [formData, setFormData] = useState(userData);
    const [verificationStatus, setVerificationStatus] = useState<'verified' | 'pending' | 'unverified'>(
        userData.verified ? 'verified' : 'unverified'
    );
    const [showSuccessDialog, setShowSuccessDialog] = useState<boolean>(false);

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    // Handle select change
    const handleSelectChange = (id: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    // Save changes
    const handleSaveChanges = () => {
        // In a real app, you would save to the database here
        setIsEditing(false);
        setShowSuccessDialog(true);
    };

    // Cancel editing
    const handleCancelEdit = () => {
        setFormData(userData);
        setIsEditing(false);
    };

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Profile Settings
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Manage your personal details and account information
                        </p>
                    </div>

                    <div className="flex space-x-2 mt-4 md:mt-0">
                        {isEditing ? (
                            <>
                                <Button
                                    variant="outline"
                                    className="flex items-center"
                                    onClick={handleCancelEdit}
                                >
                                    <X className="h-4 w-4 mr-2" />
                                    Cancel
                                </Button>
                                <Button
                                    className="flex items-center bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white"
                                    onClick={handleSaveChanges}
                                >
                                    <Save className="h-4 w-4 mr-2" />
                                    Save Changes
                                </Button>
                            </>
                        ) : (
                            <Button
                                className="flex items-center bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white"
                                onClick={() => setIsEditing(true)}
                            >
                                <User className="h-4 w-4 mr-2" />
                                Edit Profile
                            </Button>
                        )}
                    </div>
                </div>

                {/* Profile Photo Card */}
                <Card className="border-gray-200 dark:border-gray-800">
                    <CardHeader>
                        <CardTitle>Profile Photo</CardTitle>
                        <CardDescription>This will be displayed on your profile and in the app</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="/avatar-placeholder.jpg" alt="Profile" />
                            <AvatarFallback className="bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200 text-xl">JD</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1.5">
                            <h3 className="text-lg font-medium dark:text-white">Upload a new photo</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">JPG, GIF or PNG. 1MB max size.</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <Button variant="outline" size="sm" className="flex items-center">
                                    <Upload className="h-4 w-4 mr-2" />
                                    Upload New
                                </Button>
                                <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                                    <Trash className="h-4 w-4 mr-2" />
                                    Remove
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Personal Information Card */}
                <Card className="border-gray-200 dark:border-gray-800">
                    <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                        <CardDescription>Update your personal details and contact information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Personal Info Form */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <Input
                                        id="name"
                                        className="pl-10"
                                        placeholder="Your full name"
                                        value={formData.name}
                                        onChange={handleInputChange}
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
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="flex items-center mt-1">
                                    {verificationStatus === 'verified' ? (
                                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-0 flex items-center">
                                            <CheckCircle className="h-3 w-3 mr-1" />
                                            Verified
                                        </Badge>
                                    ) : verificationStatus === 'pending' ? (
                                        <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border-0">
                                            Verification Pending
                                        </Badge>
                                    ) : (
                                        <Button variant="outline" size="sm" className="text-xs h-7">
                                            Verify Email
                                        </Button>
                                    )}
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
                                        value={formData.phone}
                                        onChange={handleInputChange}
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
                                        value={formData.dob}
                                        onChange={handleInputChange}
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
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="country">Country</Label>
                                <Select
                                    disabled={!isEditing}
                                    value={formData.country}
                                    onValueChange={(value) => handleSelectChange('country', value)}
                                >
                                    <SelectTrigger id="country" className="pl-10 relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Globe className="h-4 w-4 text-gray-400" />
                                        </div>
                                        <SelectValue placeholder="Select country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="United States">United States</SelectItem>
                                        <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                                        <SelectItem value="Canada">Canada</SelectItem>
                                        <SelectItem value="Australia">Australia</SelectItem>
                                        <SelectItem value="Germany">Germany</SelectItem>
                                        <SelectItem value="France">France</SelectItem>
                                        <SelectItem value="Japan">Japan</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="language">Preferred Language</Label>
                                <Select
                                    disabled={!isEditing}
                                    value={formData.language}
                                    onValueChange={(value) => handleSelectChange('language', value)}
                                >
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
                                        <SelectItem value="ja">Japanese</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <Separator />

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Account Created</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {new Date(userData.joinDate).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                            {verificationStatus === 'verified' && (
                                <div className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Verified Account</span>
                                </div>
                            )}
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t border-gray-200 dark:border-gray-800 pt-5">
                        {isEditing ? (
                            <>
                                <Button variant="outline" onClick={handleCancelEdit}>Cancel</Button>
                                <Button
                                    className="bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white"
                                    onClick={handleSaveChanges}
                                >
                                    Save Changes
                                </Button>
                            </>
                        ) : (
                            <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                        )}
                    </CardFooter>
                </Card>

                {/* Identity Verification Card */}
                <Card className="border-gray-200 dark:border-gray-800">
                    <CardHeader>
                        <CardTitle>Identity Verification</CardTitle>
                        <CardDescription>Verify your identity to unlock all features</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {verificationStatus === 'verified' ? (
                            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/30 rounded-lg p-4 flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                                <div>
                                    <h3 className="font-medium text-green-800 dark:text-green-400">Verification Complete</h3>
                                    <p className="text-sm text-green-700 dark:text-green-500 mt-1">
                                        Your identity has been successfully verified. You now have full access to all features.
                                    </p>
                                </div>
                            </div>
                        ) : verificationStatus === 'pending' ? (
                            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900/30 rounded-lg p-4 flex items-start">
                                <Clock className="h-5 w-5 text-amber-500 mr-3 mt-0.5" />
                                <div>
                                    <h3 className="font-medium text-amber-800 dark:text-amber-400">Verification in Progress</h3>
                                    <p className="text-sm text-amber-700 dark:text-amber-500 mt-1">
                                        We're currently reviewing your verification documents. This process typically takes 1-2 business days.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900/30 rounded-lg p-4">
                                    <h3 className="font-medium text-blue-800 dark:text-blue-400">Why verify your identity?</h3>
                                    <p className="text-sm text-blue-700 dark:text-blue-500 mt-1">
                                        Identity verification helps us keep your account secure and comply with regulations.
                                        It's quick and only needs to be done once.
                                    </p>
                                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                                        <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                                            <Shield className="h-6 w-6 text-blue-500 mb-2" />
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">Increased Security</span>
                                        </div>
                                        <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                                            <DollarSign className="h-6 w-6 text-blue-500 mb-2" />
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">Higher Limits</span>
                                        </div>
                                        <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                                            <CheckCircle className="h-6 w-6 text-blue-500 mb-2" />
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">Full Access</span>
                                        </div>
                                    </div>
                                </div>
                                <Button className="w-full bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white">
                                    Start Verification Process
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>

            {/* Success Dialog */}
            <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Profile Updated</DialogTitle>
                        <DialogDescription>
                            Your profile information has been successfully updated.
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

export default ProfileSettingsPage;