"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Lock,
    Key,
    Shield,
    Smartphone,
    Eye,
    EyeOff,
    Clock,
    AlertTriangle,
    CheckCircle,
    RefreshCw
} from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import DashboardLayout from '@/components/Dashboard2/DashboardLayout';

// Mock session data
const sessionData = [
    {
        id: "session-001",
        device: "Chrome on MacOS",
        location: "New York, USA",
        ip: "192.168.1.1",
        lastActive: "2025-04-12T10:30:00Z",
        current: true
    },
    {
        id: "session-002",
        device: "Safari on iPhone",
        location: "Chicago, USA",
        ip: "192.168.1.2",
        lastActive: "2025-04-11T14:20:00Z",
        current: false
    },
    {
        id: "session-003",
        device: "Firefox on Windows",
        location: "Boston, USA",
        ip: "192.168.1.3",
        lastActive: "2025-04-10T09:15:00Z",
        current: false
    }
];

// Security Settings Page Component
const SecuritySettingsPage: React.FC = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState<boolean>(false);
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [passwordStrength, setPasswordStrength] = useState<number>(0);
    const [twoFactorEnabled, setTwoFactorEnabled] = useState<boolean>(true);
    const [showQRCode, setShowQRCode] = useState<boolean>(false);
    const [showLogoutDialog, setShowLogoutDialog] = useState<boolean>(false);
    const [sessionToLogout, setSessionToLogout] = useState<string | null>(null);

    // Handle password change
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        // Simple password strength calculation (for demo)
        let strength = 0;
        if (password.length > 0) strength += 20;
        if (password.length >= 8) strength += 20;
        if (/[A-Z]/.test(password)) strength += 20;
        if (/[0-9]/.test(password)) strength += 20;
        if (/[^A-Za-z0-9]/.test(password)) strength += 20;
        setPasswordStrength(strength);
    };

    // Get strength text and color
    const getStrengthInfo = (strength: number) => {
        if (strength === 0) return { text: "", color: "" };
        if (strength <= 20) return { text: "Very Weak", color: "text-red-500" };
        if (strength <= 40) return { text: "Weak", color: "text-orange-500" };
        if (strength <= 60) return { text: "Medium", color: "text-yellow-500" };
        if (strength <= 80) return { text: "Strong", color: "text-blue-500" };
        return { text: "Very Strong", color: "text-green-500" };
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

    // Handle session logout
    const handleLogoutSession = (sessionId: string) => {
        setSessionToLogout(sessionId);
        setShowLogoutDialog(true);
    };

    // Confirm logout
    const confirmLogout = () => {
        // In a real app, you would send a request to the server here
        console.log(`Logging out session: ${sessionToLogout}`);
        setShowLogoutDialog(false);
        setSessionToLogout(null);
    };

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Security Settings
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Manage your account security and authentication settings
                        </p>
                    </div>

                    <div className="flex space-x-2 mt-4 md:mt-0">
                        <Button
                            variant="outline"
                            className="flex items-center"
                        >
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Security Checkup
                        </Button>
                    </div>
                </div>

                {/* Password Change Card */}
                <Card className="border-gray-200 dark:border-gray-800">
                    <CardHeader>
                        <CardTitle>Change Password</CardTitle>
                        <CardDescription>Update your password to keep your account secure</CardDescription>
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
                                    onChange={handlePasswordChange}
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
                            {passwordStrength > 0 && (
                                <div className="space-y-1 mt-1">
                                    <Progress value={passwordStrength} className="h-1" />
                                    <p className={`text-xs ${getStrengthInfo(passwordStrength).color}`}>
                                        {getStrengthInfo(passwordStrength).text}
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
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

                {/* Two-Factor Authentication Card */}
                <Card className="border-gray-200 dark:border-gray-800">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle>Two-Factor Authentication</CardTitle>
                                <CardDescription>Add an extra layer of security to your account</CardDescription>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch
                                    id="2fa-toggle"
                                    checked={twoFactorEnabled}
                                    onCheckedChange={setTwoFactorEnabled}
                                />
                                <Label htmlFor="2fa-toggle" className="sr-only">
                                    Enable Two-Factor Authentication
                                </Label>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {twoFactorEnabled ? (
                                <>
                                    <div className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                        <p className="text-sm text-green-700 dark:text-green-300">
                                            Two-factor authentication is enabled for your account
                                        </p>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-center justify-between py-3 border-b border-gray-200 dark:border-gray-800">
                                        <div className="flex items-center space-x-3">
                                            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                                                <Smartphone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Authenticator App</h4>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Use Google Authenticator, Authy, or other apps
                                                </p>
                                            </div>
                                        </div>
                                        <Button
                                            variant="outline"
                                            className="mt-2 md:mt-0"
                                            onClick={() => setShowQRCode(!showQRCode)}
                                        >
                                            {showQRCode ? "Hide QR Code" : "View QR Code"}
                                        </Button>
                                    </div>

                                    {showQRCode && (
                                        <div className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg mt-4">
                                            <div className="bg-white p-3 rounded-lg mb-3">
                                                {/* Placeholder for QR code - in a real app, this would be a dynamic QR code */}
                                                <div className="w-40 h-40 bg-gray-200 flex items-center justify-center">
                                                    <span className="text-sm text-gray-600">QR Code Placeholder</span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                                                Scan this QR code with your authenticator app to set up 2FA
                                            </p>
                                        </div>
                                    )}

                                    <div className="space-y-2">
                                        <Label htmlFor="backupCodes">Recovery Codes</Label>
                                        <Button variant="outline" className="w-full justify-between">
                                            Generate New Recovery Codes
                                            <Shield className="h-4 w-4 ml-2" />
                                        </Button>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Recovery codes can be used to access your account if you lose your 2FA device
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <div className="flex items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                                    <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3" />
                                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                                        Two-factor authentication is currently disabled. We strongly recommend enabling it for additional security.
                                    </p>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Active Sessions Card */}
                <Card className="border-gray-200 dark:border-gray-800">
                    <CardHeader>
                        <CardTitle>Active Sessions</CardTitle>
                        <CardDescription>Manage devices and locations where you're currently logged in</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Device</TableHead>
                                    <TableHead>Location</TableHead>
                                    <TableHead>Last Active</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {sessionData.map((session) => (
                                    <TableRow key={session.id}>
                                        <TableCell className="font-medium">
                                            <div className="flex items-center">
                                                {session.device}
                                                {session.current && (
                                                    <Badge variant="outline" className="ml-2 text-xs">
                                                        Current
                                                    </Badge>
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span>{session.location}</span>
                                                <span className="text-xs text-gray-500">{session.ip}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-gray-500">
                                                <Clock className="h-3 w-3 mr-1" />
                                                <span>{formatRelativeTime(session.lastActive)}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            {!session.current && (
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleLogoutSession(session.id)}
                                                    className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                                                >
                                                    Log Out
                                                </Button>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Don't recognize a session? Log it out and change your password immediately.
                        </p>
                        <Button variant="destructive">
                            Log Out All Other Sessions
                        </Button>
                    </CardFooter>
                </Card>

                {/* Logout confirmation dialog */}
                <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Confirm Session Logout</DialogTitle>
                            <DialogDescription>
                                Are you sure you want to log out this session? This will immediately terminate access from this device.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button
                                variant="outline"
                                onClick={() => setShowLogoutDialog(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="destructive"
                                onClick={confirmLogout}
                            >
                                Log Out Session
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </DashboardLayout>
    );
};

export default SecuritySettingsPage;