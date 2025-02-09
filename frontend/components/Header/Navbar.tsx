// "use client";

// import { Shield, Menu, ChevronRight } from "lucide-react";
// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import {
//     Sheet,
//     SheetContent,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
// } from "@/components/ui/sheet";
// import { ethers } from "ethers";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [walletAddress, setWalletAddress] = useState<string | null>(null);

//     // Function to connect to Ethereum wallet
//     const connectWallet = async () => {
//         if (window.ethereum) {
//             try {
//                 // Request account access
//                 const provider = new ethers.BrowserProvider(window.ethereum);
//                 await provider.send("eth_requestAccounts", []);
//                 const signer = await provider.getSigner();
//                 const address = await signer.getAddress();

//                 // Set the wallet address
//                 setWalletAddress(address);
//                 console.log("Connected to Ethereum wallet:", address);
//             } catch (error) {
//                 console.error("Error connecting to Ethereum wallet:", error);
//             }
//         } else {
//             console.error("MetaMask or Ethereum wallet not detected.");
//             alert("Please install MetaMask or another Ethereum wallet to connect.");
//         }
//     };

//     return (
//         <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-teal-100">
//             <div className="container mx-auto px-4">
//                 <div className="flex h-16 items-center justify-between">
// <div className="flex items-center gap-8">
//     <a href="/" className="flex items-center space-x-2">
//         <Shield className="h-8 w-8 text-teal-600" />
//         <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
//             CrossFlow
//         </span>
//     </a>

//     <NavigationMenu className="hidden md:flex">
//         <NavigationMenuList>
//             <NavigationMenuItem>
//                 <NavigationMenuTrigger>Features</NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                     <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
//                         <li className="row-span-3">
//                             <NavigationMenuLink asChild>
//                                 <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-teal-50 to-cyan-50 p-6 no-underline outline-none focus:shadow-md">
//                                     <Shield className="h-6 w-6 text-teal-600" />
//                                     <div className="mb-2 mt-4 text-lg font-medium">
//                                         Cross-Chain Payments
//                                     </div>
//                                     <p className="text-sm leading-tight text-gray-600">
//                                         Seamless transactions across multiple blockchain networks
//                                     </p>
//                                 </a>
//                             </NavigationMenuLink>
//                         </li>
//                         <li>
//                             <NavigationMenuLink asChild>
//                                 <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-50 focus:bg-teal-50">
//                                     <div className="text-sm font-medium leading-none">
//                                         Local Currency Support
//                                     </div>
//                                     <p className="line-clamp-2 text-sm leading-snug text-gray-600">
//                                         Convert between African currencies and stablecoins
//                                     </p>
//                                 </a>
//                             </NavigationMenuLink>
//                         </li>
//                         <li>
//                             <NavigationMenuLink asChild>
//                                 <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-50 focus:bg-teal-50">
//                                     <div className="text-sm font-medium leading-none">
//                                         Smart Routing
//                                     </div>
//                                     <p className="line-clamp-2 text-sm leading-snug text-gray-600">
//                                         Optimized transaction paths for lowest fees
//                                     </p>
//                                 </a>
//                             </NavigationMenuLink>
//                         </li>
//                     </ul>
//                 </NavigationMenuContent>
//             </NavigationMenuItem>
//         </NavigationMenuList>
//     </NavigationMenu>
// </div>

//                     <div className="flex items-center gap-4">
//                         <Button
//                             variant="outline"
//                             className="hidden md:inline-flex"
//                             onClick={connectWallet}
//                         >
//                             {walletAddress
//                                 ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
//                                 : "Connect Wallet"}
//                         </Button>

//                         <Sheet>
//                             <SheetTrigger asChild>
//                                 <Button variant="ghost" size="icon" className="md:hidden">
//                                     <Menu className="h-6 w-6" />
//                                 </Button>
//                             </SheetTrigger>
//                             <SheetContent>
//                                 <SheetHeader>
//                                     <SheetTitle>Menu</SheetTitle>
//                                 </SheetHeader>
//                                 <nav className="flex flex-col gap-4 mt-4">
//                                     {["Features", "How It Works", "Impact", "Contact"].map((item) => (
//                                         <a
//                                             key={item}
//                                             href={`#${item.toLowerCase().replace(" ", "-")}`}
//                                             className="text-lg font-medium hover:text-teal-600 transition-colors"
//                                         >
//                                             {item}
//                                         </a>
//                                     ))}
//                                     <div className="flex flex-col gap-2 mt-4">
//                                         <Button variant="outline" onClick={connectWallet}>
//                                             {walletAddress
//                                                 ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
//                                                 : "Connect Wallet"}
//                                         </Button>
//                                     </div>
//                                 </nav>
//                             </SheetContent>
//                         </Sheet>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Navbar;

"use client";

import { Shield, Menu, ChevronRight, Wallet } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useWallet } from "@/hooks/useWallet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const WalletButton = () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="hidden md:inline-flex">
          {ethereumAccount || stellarAccount ? (
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
                  >
                    ×
                  </Button>
                </div>
              )}
            </div>
          ) : (
            "Connect Wallet"
          )}
        </Button>
      </DialogTrigger>
      <DialogContent>
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
            className="w-full"
          >
            <Wallet className="mr-2 h-4 w-4" />
            {ethereumAccount ? "Ethereum Connected" : "Connect Ethereum"}
          </Button>
          <Button
            onClick={connectStellar}
            disabled={loading || !!stellarAccount}
            className="w-full"
          >
            <Wallet className="mr-2 h-4 w-4" />
            {stellarAccount ? "Stellar Connected" : "Connect Stellar"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-teal-100">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-teal-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                CrossFlow
              </span>
            </a>

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-teal-50 to-cyan-50 p-6 no-underline outline-none focus:shadow-md">
                            <Shield className="h-6 w-6 text-teal-600" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Cross-Chain Payments
                            </div>
                            <p className="text-sm leading-tight text-gray-600">
                              Seamless transactions across multiple blockchain
                              networks
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-50 focus:bg-teal-50">
                            <div className="text-sm font-medium leading-none">
                              Local Currency Support
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                              Convert between African currencies and stablecoins
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-50 focus:bg-teal-50">
                            <div className="text-sm font-medium leading-none">
                              Smart Routing
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                              Optimized transaction paths for lowest fees
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-4">
            <WalletButton />

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-4">
                {["Features", "How It Works", "Impact", "Contact"].map((item) => (
                                        <a
                                            key={item}
                                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                                            className="text-lg font-medium hover:text-teal-600 transition-colors"
                                        >
                                            {item}
                                        </a>
                                    ))}

                  <div className="flex flex-col gap-2 mt-4">
                    <WalletButton />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
