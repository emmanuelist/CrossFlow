import { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

export const SecurityCheck = () => {
    const [securityStatus, setSecurityStatus] = useState({
        walletSecure: false,
        networkSecure: false,
        contractSecure: false
    });

    useEffect(() => {
        checkSecurity();
    }, []);

    const checkSecurity = async () => {
        const isWalletSecure =
            typeof window !== 'undefined' &&
                window.ethereum &&
                window.ethereum.isMetaMask ? true : false;

        const isNetworkSecure = window.location.protocol === 'https:';
        const isContractSecure = await verifyContracts();

        setSecurityStatus({
            walletSecure: isWalletSecure,
            networkSecure: isNetworkSecure,
            contractSecure: isContractSecure
        });
    };

    const verifyContracts = async () => {
        // Add your contract verification logic here
        return true;
    };

    return (
        <Alert>
            <Shield className="h-4 w-4" />
            <AlertTitle>Security Status</AlertTitle>
            <AlertDescription>
                <div className="space-y-2 mt-2">
                    <div className="flex items-center gap-2">
                        <Badge variant={securityStatus.walletSecure ? "secondary" : "destructive"}>
                            {securityStatus.walletSecure ? "Secure" : "Warning"}
                        </Badge>
                        <span>Wallet Connection</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge variant={securityStatus.networkSecure ? "secondary" : "destructive"}>
                            {securityStatus.networkSecure ? "Secure" : "Warning"}
                        </Badge>
                        <span>Network Connection</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge variant={securityStatus.contractSecure ? "secondary" : "destructive"}>
                            {securityStatus.contractSecure ? "Secure" : "Warning"}
                        </Badge>
                        <span>Contract Verification</span>
                    </div>
                </div>
            </AlertDescription>
        </Alert>
    );
};
