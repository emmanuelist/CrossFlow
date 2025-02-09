"use client"

import { useWallet } from "@/hooks/useWallet";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from 'lucide-react';
import { SecurityCheck } from '@/components/Dashboard/SecurityCheck';
import WalletDashboard from '@/components/Dashboard/WalletDashboard';
import { TransactionMonitor } from '@/components/Dashboard/TransactionMonitor';
import SendForm from '@/components/Dashboard/SendForm';
import { NetworkGuide } from '@/components/Dashboard/NetworkGuide';
import DepositForm from '@/components/Dashboard/DepositForm';
import { DepositMethods } from '@/components/Dashboard/DepositMethods';
import WithdrawForm from '@/components/Dashboard/WithdrawForm';
import { BridgeInfo } from '@/components/Dashboard/BridgeInfo';
import SwapForm from '@/components/Dashboard/SwapForm';
import { WithdrawalInfo } from '@/components/Dashboard/WithdrawalInfo';

const Dashboard = () => {
    const {
        ethereumAccount,
        stellarAccount,
        connectEthereum,
        connectStellar,
        loading,
        disconnectEthereum,
        disconnectStellar,
        walletService
    } = useWallet();

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-4 py-8">
                {/* Security Status */}
                <main className="mb-5">
                    <SecurityCheck />

                </main>

                {/* Wallet Dashboard */}
                <WalletDashboard
                    ethereumAccount={ethereumAccount}
                    loading={loading}
                    stellarAccount={stellarAccount}
                    onConnectEthereum={connectEthereum}
                    onConnectStellar={connectStellar}
                    onDisconnectEthereum={disconnectEthereum}
                    onDisconnectStellar={disconnectStellar}
                />

                {/* Transaction Monitor */}
                <div className="mt-6">
                    <TransactionMonitor walletService={walletService} />
                </div>

                {/* Main Operations */}
                <Tabs defaultValue="send" className="mt-6">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="send">Send</TabsTrigger>
                        <TabsTrigger value="deposit">Deposit</TabsTrigger>
                        <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
                        <TabsTrigger value="swap">Swap</TabsTrigger>
                    </TabsList>

                    <TabsContent value="send">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {ethereumAccount && stellarAccount ? (
                                <>
                                    <SendForm
                                        ethereumAccount={ethereumAccount}
                                        stellarAccount={stellarAccount}
                                        walletService={walletService}
                                    />
                                    <NetworkGuide />
                                </>
                            ) : (
                                <Alert>
                                    <AlertTriangle className="h-4 w-4" />
                                    <AlertTitle>Wallet Required</AlertTitle>
                                    <AlertDescription>
                                        Please connect both Ethereum and Stellar wallets to perform transfers
                                    </AlertDescription>
                                </Alert>
                            )}
                        </div>
                    </TabsContent>

                    <TabsContent value="deposit">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <DepositForm
                                walletService={walletService}
                                ethereumAccount={ethereumAccount}
                            />
                            <DepositMethods />
                        </div>
                    </TabsContent>

                    <TabsContent value="withdraw">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <WithdrawForm
                                walletService={walletService}
                                ethereumAccount={ethereumAccount}
                                stellarAccount={stellarAccount}
                            />
                            <WithdrawalInfo />
                        </div>
                    </TabsContent>

                    <TabsContent value="swap">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <SwapForm
                                walletService={walletService}
                                ethereumAccount={ethereumAccount}
                                stellarAccount={stellarAccount}
                            />
                            <BridgeInfo />
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Dashboard;
