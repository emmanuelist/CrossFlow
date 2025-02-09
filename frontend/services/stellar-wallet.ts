import {
    allowAllModules,
    FREIGHTER_ID,
    StellarWalletsKit,
    WalletNetwork
} from "@creit.tech/stellar-wallets-kit";

const SELECTED_WALLET_ID = "selectedWalletId";

export class StellarWalletService {
    private kit: StellarWalletsKit;

    constructor() {
        this.kit = new StellarWalletsKit({
            modules: allowAllModules(),
            network: WalletNetwork.TESTNET,
            selectedWalletId: this.getSelectedWalletId() ?? FREIGHTER_ID,
        });
    }

    private getSelectedWalletId(): string | null {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(SELECTED_WALLET_ID);
        }
        return null;
    }

    async connect(callback?: () => Promise<void>) {
        await this.kit.openModal({
            onWalletSelected: async (option) => {
                try {
                    await this.setWallet(option.id);
                    if (callback) await callback();
                } catch (error) {
                    console.error('Wallet connection error:', error);
                    throw error;
                }
                return option.id;
            },
        });
    }

    async getPublicKey(): Promise<string | null> {
        if (!this.getSelectedWalletId()) return null;
        const { address } = await this.kit.getAddress();
        return address;
    }

    private async setWallet(walletId: string) {
        if (typeof window !== 'undefined') {
            localStorage.setItem(SELECTED_WALLET_ID, walletId);
        }
        this.kit.setWallet(walletId);
    }

    async disconnect() {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(SELECTED_WALLET_ID);
        }
        this.kit.disconnect();
    }

    async signTransaction(xdr: string): Promise<{ signedTxXdr: string; signerAddress?: string }> {
        return this.kit.signTransaction(xdr);
    }
}