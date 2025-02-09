interface Window {
    ethereum?: {
        isMetaMask?: boolean;
        request: (args: { method: string; params?: any[] }) => Promise<any>;
        on: (event: string, callback: (params?: any) => void) => void;
        removeListener: (event: string, callback: (params?: any) => void) => void;
        selectedAddress: string | null;
        networkVersion: string;
        chainId: string;
        isConnected: () => boolean;
    };
}