import { ethers } from 'ethers';
import { AllbridgeCoreSdk, ChainSymbol, Messenger } from "@allbridge/bridge-core-sdk";
import {
    StellarWalletsKit,
    FREIGHTER_ID,
    WalletNetwork,
    allowAllModules
} from "@creit.tech/stellar-wallets-kit";

interface BridgeTransactionParams {
    amount: string;
    fromAddress: string;
    toAddress: string;
    sourceToken: any;
    destinationToken: any;
}

interface BridgeFeeParams {
    amount: string;
    sourceToken: any;
    destinationToken: any;
}

export class WalletService {
    private provider: ethers.BrowserProvider | null = null;
    private signer: ethers.Signer | null = null;
    private stellarKit: StellarWalletsKit | null = null;
    private allbridgeSdk: AllbridgeCoreSdk | null = null;
    private readonly SELECTED_WALLET_ID = "selectedWalletId";

    constructor() {
        this.initializeAllbridge();
        this.initializeStellarKit();
    }

    private validateEnvVariables() {
        const requiredEnvVars = {
            ETH: process.env.NEXT_PUBLIC_ETH_RPC_URL,
            BSC: process.env.NEXT_PUBLIC_BSC_RPC_URL,
            USDC_ETH_ADDRESS: process.env.NEXT_PUBLIC_USDC_ETH_ADDRESS,
            USDC_STELLAR_ISSUER: process.env.NEXT_PUBLIC_USDC_STELLAR_ISSUER
        };

        for (const [key, value] of Object.entries(requiredEnvVars)) {
            if (!value) {
                throw new Error(`Missing required environment variable: ${key}`);
            }
        }

        return requiredEnvVars as Record<string, string>;
    }

    private async initializeAllbridge() {
        try {
            const envVars = this.validateEnvVariables();

            this.allbridgeSdk = new AllbridgeCoreSdk({
                ETH: envVars.ETH,
                BSC: envVars.BSC,
            });
        } catch (error) {
            console.error('Failed to initialize Allbridge:', error);
            throw new Error('Allbridge initialization failed');
        }
    }

    private initializeStellarKit() {
        try {
            this.stellarKit = new StellarWalletsKit({
                modules: allowAllModules(),
                network: WalletNetwork.TESTNET,
                selectedWalletId: this.getSelectedWalletId() ?? FREIGHTER_ID,
            });
        } catch (error) {
            console.error('Failed to initialize Stellar Kit:', error);
            throw new Error('Stellar Kit initialization failed');
        }
    }

    private getSelectedWalletId(): string | null {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(this.SELECTED_WALLET_ID);
        }
        return null;
    }

    private async setWallet(walletId: string) {
        if (typeof window !== 'undefined') {
            localStorage.setItem(this.SELECTED_WALLET_ID, walletId);
        }
        this.stellarKit?.setWallet(walletId);
    }

    // Ethereum Wallet Methods
    async connectEthereumWallet() {
        try {
            if (!window.ethereum) {
                throw new Error('MetaMask not installed');
            }

            this.provider = new ethers.BrowserProvider(window.ethereum);
            await this.provider.send('eth_requestAccounts', []);
            this.signer = await this.provider.getSigner();
            const address = await this.signer.getAddress();

            return {
                address,
                provider: this.provider,
                signer: this.signer
            };
        } catch (error) {
            console.error('Ethereum wallet connection error:', error);
            throw error;
        }
    }

    async disconnectEthereumWallet() {
        this.provider = null;
        this.signer = null;
    }

    async getEthereumChainId(): Promise<number> {
        if (!this.provider) throw new Error('Provider not initialized');
        const network = await this.provider.getNetwork();
        return Number(network.chainId);
    }

    // Stellar Wallet Methods
    async connectStellarWallet() {
        try {
            await this.stellarKit?.openModal({
                onWalletSelected: async (option) => {
                    try {
                        await this.setWallet(option.id);
                        const address = await this.getStellarPublicKey();
                        return option.id;
                    } catch (error) {
                        console.error('Stellar wallet connection error:', error);
                        throw error;
                    }
                }
            });
        } catch (error) {
            console.error('Stellar wallet connection error:', error);
            throw error;
        }
    }

    async getStellarPublicKey(): Promise<string | null> {
        if (!this.getSelectedWalletId()) return null;
        const { address } = await this.stellarKit!.getAddress();
        return address;
    }

    async signStellarTransaction(xdr: string): Promise<{ signedTxXdr: string; signerAddress?: string }> {
        if (!this.stellarKit) throw new Error('Stellar wallet not initialized');
        return this.stellarKit.signTransaction(xdr);
    }

    async disconnectStellarWallet() {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(this.SELECTED_WALLET_ID);
        }
        this.stellarKit?.disconnect();
    }

    // USDC Balance and Transfer Methods
    async getUSDCBalance(address: string, network: 'ethereum' | 'stellar') {
        try {
            if (network === 'ethereum') {
                if (!this.provider) throw new Error('Ethereum provider not initialized');
                const usdcContract = new ethers.Contract(
                    process.env.NEXT_PUBLIC_USDC_ETH_ADDRESS!,
                    ['function balanceOf(address) view returns (uint256)'],
                    this.provider
                );
                const balance = await usdcContract.balanceOf(address);
                return ethers.formatUnits(balance, 6);
            } else {
                // Fetch Stellar USDC balance
                const response = await fetch(`https://horizon-testnet.stellar.org/accounts/${address}`);
                const data = await response.json();
                const usdcBalance = data.balances.find((b: any) =>
                    b.asset_type === 'credit_alphanum4' &&
                    b.asset_code === 'USDC' &&
                    b.asset_issuer === process.env.NEXT_PUBLIC_USDC_STELLAR_ISSUER
                );
                return usdcBalance?.balance || '0';
            }
        } catch (error) {
            console.error('Balance check error:', error);
            throw error;
        }
    }

    // Bridge Transaction Methods
    async createBridgeTransaction(params: BridgeTransactionParams) {
        try {
            const { amount, fromAddress, toAddress, sourceToken, destinationToken } = params;

            // Check allowance first
            const allowanceCheck = await this.allbridgeSdk?.bridge.checkAllowance({
                token: sourceToken,
                owner: fromAddress,
                amount: amount
            });

            if (!allowanceCheck) {
                // Approve tokens first
                const approveTransaction = await this.allbridgeSdk?.bridge.rawTxBuilder.approve({
                    token: sourceToken,
                    owner: fromAddress
                });

                // Sign and send approve transaction
                if (this.signer && approveTransaction) {
                    const tx = await this.signer.sendTransaction(approveTransaction);
                    await tx.wait();
                }
            }

            // Create bridge transaction
            const bridgeTransaction = await this.allbridgeSdk?.bridge.rawTxBuilder.send({
                amount,
                fromAccountAddress: fromAddress,
                toAccountAddress: toAddress,
                sourceToken,
                destinationToken,
                messenger: Messenger.ALLBRIDGE
            });

            return bridgeTransaction;
        } catch (error) {
            console.error('Bridge transaction error:', error);
            throw error;
        }
    }

    async getBridgeFee(params: BridgeFeeParams) {
        try {
            const { amount, sourceToken, destinationToken } = params;

            const amountToReceive = await this.allbridgeSdk?.getAmountToBeReceived(
                amount,
                sourceToken,
                destinationToken
            );

            const gasFeeOptions = await this.allbridgeSdk?.getGasFeeOptions(
                sourceToken,
                destinationToken,
                Messenger.ALLBRIDGE
            );

            return {
                amountToReceive,
                gasFeeOptions
            };
        } catch (error) {
            console.error('Fee calculation error:', error);
            throw error;
        }
    }

    // Transaction Status Methods
    async getTransactionStatus(chainSymbol: string, txHash: string) {
        try {
            return await this.allbridgeSdk?.getTransferStatus(
                chainSymbol,
                txHash
            );
        } catch (error) {
            console.error('Transaction status check error:', error);
            throw error;
        }
    }
}

// Export service instance
export const walletService = new WalletService();