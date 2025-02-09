import { walletService } from "@/services/WalletService";
import { useState, useCallback, useEffect } from "react";
import toast from "react-hot-toast";

interface WalletError extends Error {
    code?: number;
}

export const useWallet = () => {
    const [ethereumAccount, setEthereumAccount] = useState<string | null>(null);
    const [stellarAccount, setStellarAccount] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // Check for existing connections on mount
    useEffect(() => {
        const checkExistingConnections = async () => {
            try {
                // Check Ethereum connection
                if (window.ethereum?.selectedAddress) {
                    const { address } = await walletService.connectEthereumWallet();
                    setEthereumAccount(address);
                }

                // Check Stellar connection
                const stellarPublicKey = await walletService.getStellarPublicKey();
                if (stellarPublicKey) {
                    setStellarAccount(stellarPublicKey);
                }
            } catch (error) {
                console.error('Error checking existing connections:', error);
            }
        };

        checkExistingConnections();
    }, []);

    const connectEthereum = async () => {
        setLoading(true);
        try {
            const { address } = await walletService.connectEthereumWallet();
            setEthereumAccount(address);
            toast.success(
                "Ethereum wallet connected successfully",
            );
            return address;
        } catch (error) {
            const walletError = error as WalletError;
            if (walletError.code === 4001) {
                toast.success("Please approve the connection request in your wallet");
            } else {
                toast.error("Failed to connect Ethereum wallet",
                );
            }
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const connectStellar = async () => {
        setLoading(true);
        try {
            await walletService.connectStellarWallet();
            const publicKey = await walletService.getStellarPublicKey();
            if (publicKey) {
                setStellarAccount(publicKey);
                toast.success("Stellar wallet connected successfully",
                );
                return publicKey;
            }
        } catch (error) {
            console.error('Stellar connection error:', error);
            toast.error("Failed to connect Stellar wallet",
            );
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const disconnectEthereum = async () => {
        try {
            await walletService.disconnectEthereumWallet();
            setEthereumAccount(null);
            toast.success("Ethereum wallet disconnected successfully",
            );
        } catch (error) {
            console.error('Ethereum disconnect error:', error);
            toast.error("Failed to disconnect Ethereum wallet",
            );
        }
    };

    const disconnectStellar = async () => {
        try {
            await walletService.disconnectStellarWallet();
            setStellarAccount(null);
            toast.success("Stellar wallet disconnected successfully",
            );
        } catch (error) {
            console.error('Stellar disconnect error:', error);
            toast.error("Failed to disconnect Stellar wallet",
            );
        }
    };

    const disconnectAll = useCallback(async () => {
        setLoading(true);
        try {
            if (ethereumAccount) await disconnectEthereum();
            if (stellarAccount) await disconnectStellar();
        } finally {
            setLoading(false);
        }
    }, [ethereumAccount, stellarAccount]);

    // Listen for account changes
    useEffect(() => {
        if (window.ethereum) {
            const handleAccountsChanged = (accounts: string[]) => {
                if (accounts.length === 0) {
                    setEthereumAccount(null);
                    toast.success("Ethereum wallet was disconnected",
                    );
                } else if (accounts[0] !== ethereumAccount) {
                    setEthereumAccount(accounts[0]);
                    toast.error("Ethereum account was changed",
                    );
                }
            };

            window.ethereum.on('accountsChanged', handleAccountsChanged);
            return () => {
                window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
            };
        }
    }, [ethereumAccount]);

    return {
        ethereumAccount,
        stellarAccount,
        loading,
        connectEthereum,
        connectStellar,
        disconnectEthereum,
        disconnectStellar,
        disconnectAll,
        walletService,
        isConnected: Boolean(ethereumAccount || stellarAccount)
    };
};