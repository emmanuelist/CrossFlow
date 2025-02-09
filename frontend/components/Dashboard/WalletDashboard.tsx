// components/Dashboard/WalletDashboard.tsx
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Wallet, RefreshCw } from "lucide-react";
import { walletService } from "@/services/WalletService";
import toast from "react-hot-toast";

interface WalletDashboardProps {
    ethereumAccount: string | null;
    stellarAccount: string | null;
    loading: boolean;
    onConnectEthereum: () => Promise<string>;
    onConnectStellar: () => Promise<string | undefined>;
    onDisconnectEthereum: () => Promise<void>;
    onDisconnectStellar: () => Promise<void>;
}

interface Balances {
    ethereum: string;
    stellar: string;
    total: string;
}

const WalletDashboard = ({
    ethereumAccount,
    stellarAccount,
    loading,
    onConnectEthereum,
    onConnectStellar,
    onDisconnectEthereum,
    onDisconnectStellar
}: WalletDashboardProps) => {
    const [balances, setBalances] = useState<Balances>({
        ethereum: '0',
        stellar: '0',
        total: '0'
    });
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchBalances = async () => {
        setIsRefreshing(true);
        try {
            if (ethereumAccount) {
                const ethBalance = await walletService.getUSDCBalance(
                    ethereumAccount,
                    'ethereum'
                );
                setBalances(prev => ({
                    ...prev,
                    ethereum: ethBalance,
                    total: (parseFloat(ethBalance) + parseFloat(prev.stellar)).toString()
                }));
            }
            if (stellarAccount) {
                const stellarBalance = await walletService.getUSDCBalance(
                    stellarAccount,
                    'stellar'
                );
                setBalances(prev => ({
                    ...prev,
                    stellar: stellarBalance,
                    total: (parseFloat(prev.ethereum) + parseFloat(stellarBalance)).toString()
                }));
            }
        } catch (error) {
            console.error('Error fetching balances:', error);
            toast.error(
                "Failed to fetch balances",
            );
        } finally {
            setIsRefreshing(false);
        }
    };

    useEffect(() => {
        fetchBalances();
    }, [ethereumAccount, stellarAccount]);

    const handleConnectEthereum = async () => {
        try {
            await onConnectEthereum();
        } catch (error) {
            toast.error("Failed to connect Ethereum wallet",
            );
        }
    };

    const handleConnectStellar = async () => {
        try {
            await onConnectStellar();
        } catch (error) {
            toast.error("Failed to connect Stellar wallet",
            );
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="bg-gradient-to-br from-teal-50 to-cyan-50">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle>Total Balance</CardTitle>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={fetchBalances}
                            disabled={isRefreshing || (!ethereumAccount && !stellarAccount)}
                        >
                            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                        </Button>
                    </div>
                    <CardDescription>Combined USDC across networks</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold text-teal-900">
                        ${parseFloat(balances.total).toLocaleString()}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Ethereum USDC</CardTitle>
                    <Wallet className="h-4 w-4 text-teal-600" />
                </CardHeader>
                <CardContent>
                    {ethereumAccount ? (
                        <>
                            <div className="text-2xl font-bold">
                                ${parseFloat(balances.ethereum).toLocaleString()}
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-xs text-gray-500">
                                    {ethereumAccount.slice(0, 6)}...{ethereumAccount.slice(-4)}
                                </p>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={onDisconnectEthereum}
                                    disabled={loading}
                                >
                                    Disconnect
                                </Button>
                            </div>
                        </>
                    ) : (
                        <Button
                            onClick={handleConnectEthereum}
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600"
                        >
                            Connect Ethereum
                        </Button>
                    )}
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Stellar USDC</CardTitle>
                    <Wallet className="h-4 w-4 text-cyan-600" />
                </CardHeader>
                <CardContent>
                    {stellarAccount ? (
                        <>
                            <div className="text-2xl font-bold">
                                ${parseFloat(balances.stellar).toLocaleString()}
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-xs text-gray-500">
                                    {stellarAccount.slice(0, 6)}...{stellarAccount.slice(-4)}
                                </p>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={onDisconnectStellar}
                                    disabled={loading}
                                >
                                    Disconnect
                                </Button>
                            </div>
                        </>
                    ) : (
                        <Button
                            onClick={handleConnectStellar}
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600"
                        >
                            Connect Stellar
                        </Button>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default WalletDashboard;