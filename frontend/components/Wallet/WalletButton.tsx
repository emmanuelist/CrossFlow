"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useWallet } from "@/hooks/useWallet";

interface WalletButtonProps {
    isMobile?: boolean;
}

const WalletButton: React.FC<WalletButtonProps> = ({ isMobile = false }) => {
    const {
        ethereumAccount,
        stellarAccount,
        connectEthereum,
        connectStellar,
        disconnectEthereum,
        disconnectStellar,
        loading,
    } = useWallet();

    const handleDisconnect = async (type: "ethereum" | "stellar") => {
        if (type === "ethereum") {
            await disconnectEthereum();
        } else {
            await disconnectStellar();
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className={`${isMobile ? "w-10 h-10 p-0" : "hidden md:inline-flex"} border border-rose-200 dark:border-rose-800 hover:bg-rose-50 dark:hover:bg-rose-900/30 transition-all`}
                    onClick={(e) => {
                        if (ethereumAccount || stellarAccount) {
                            // If wallet is connected, navigate to dashboard instead of opening dialog
                            e.preventDefault();
                            window.location.href = "/dashboard";
                        }
                    }}
                >
                    {ethereumAccount || stellarAccount ? (
                        isMobile ? (
                            <Wallet className="w-5 h-5 text-rose-500 dark:text-rose-400" />
                        ) : (
                            <div className="flex gap-2">
                                {ethereumAccount && (
                                    <div className="flex items-center gap-1">
                                        ETH: {ethereumAccount.slice(0, 4)}...
                                        {ethereumAccount.slice(-4)}
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDisconnect("ethereum");
                                            }}
                                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                        >
                                            ×
                                        </Button>
                                    </div>
                                )}
                                {stellarAccount && (
                                    <div className="flex items-center gap-1">
                                        XLM: {stellarAccount.slice(0, 4)}...{stellarAccount.slice(-4)}
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDisconnect("stellar");
                                            }}
                                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                        >
                                            ×
                                        </Button>
                                    </div>
                                )}
                            </div>
                        )
                    ) : (
                        isMobile ? (
                            <Wallet className="w-5 h-5 text-rose-500 dark:text-rose-400" />
                        ) : (
                            <div className="flex items-center">
                                <Wallet className="w-4 h-4 mr-2 text-rose-500 dark:text-rose-400" />
                                Connect Wallet
                            </div>
                        )
                    )}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Connect Wallet</DialogTitle>
                    <DialogDescription>
                        Choose your preferred wallet to connect
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Button
                        onClick={connectEthereum}
                        disabled={loading || !!ethereumAccount}
                        className="w-full bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600 text-white shadow-md hover:shadow-lg transition-shadow"
                    >
                        <Wallet className="mr-2 h-4 w-4" />
                        {ethereumAccount ? "Ethereum Connected" : "Connect Ethereum"}
                    </Button>
                    <Button
                        onClick={connectStellar}
                        disabled={loading || !!stellarAccount}
                        className="w-full bg-gradient-to-r from-cyan-500 to-rose-500 hover:from-cyan-600 hover:to-rose-600 text-white shadow-md hover:shadow-lg transition-shadow"
                    >
                        <Wallet className="mr-2 h-4 w-4" />
                        {stellarAccount ? "Stellar Connected" : "Connect Stellar"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default WalletButton;