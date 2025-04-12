import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
    LayoutDashboard,
    ArrowRightLeft,
    BarChart3,
    Wallet,
    History,
    Settings,
    HelpCircle,
    ChevronDown,
    Globe,
    PiggyBank,
    CreditCard,
    Users,
    Bell,
    Shield,
    FileText
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface NavItemProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    collapsed: boolean;
    isActive?: boolean;
    hasSubmenu?: boolean;
    onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
    href,
    icon,
    label,
    collapsed,
    isActive,
    hasSubmenu = false,
    onClick
}) => {
    return (
        <TooltipProvider delayDuration={0}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link
                        href={href}
                        onClick={onClick}
                        className={cn(
                            "flex items-center py-2 px-4 text-sm font-medium rounded-lg transition-colors",
                            isActive
                                ? "bg-gradient-to-r from-rose-50 to-cyan-50 text-rose-600 dark:from-rose-950/30 dark:to-cyan-950/30 dark:text-rose-400"
                                : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900/60"
                        )}
                    >
                        <div className={cn(
                            "flex items-center",
                            collapsed ? "justify-center w-full" : "justify-start"
                        )}>
                            <div className={cn(
                                "flex-shrink-0",
                                isActive && "text-rose-600 dark:text-rose-400"
                            )}>
                                {icon}
                            </div>

                            <AnimatePresence initial={false}>
                                {!collapsed && (
                                    <motion.span
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: 'auto' }}
                                        exit={{ opacity: 0, width: 0 }}
                                        className="ml-3 truncate"
                                    >
                                        {label}
                                    </motion.span>
                                )}
                            </AnimatePresence>

                            {hasSubmenu && !collapsed && (
                                <ChevronDown className="w-4 h-4 ml-auto" />
                            )}
                        </div>
                    </Link>
                </TooltipTrigger>
                {collapsed && (
                    <TooltipContent side="right" className="ml-1">
                        {label}
                    </TooltipContent>
                )}
            </Tooltip>
        </TooltipProvider>
    );
};

interface SidebarNavigationProps {
    collapsed: boolean;
}

interface NavItem {
    href: string;
    icon: React.ReactNode;
    label: string;
    hasSubmenu?: boolean;
    section?: string;
}

interface SubMenuItem {
    href: string;
    icon: React.ReactNode;
    label: string;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ collapsed }) => {
    const pathname = usePathname();
    const [expandedSections, setExpandedSections] = useState<string[]>([]);

    const toggleSection = (section: string) => {
        setExpandedSections(prev =>
            prev.includes(section)
                ? prev.filter(s => s !== section)
                : [...prev, section]
        );
    };

    const isActive = (path: string) => pathname === path;
    const isInPath = (path: string) => pathname.startsWith(path);

    // Main navigation items
    const mainNav: NavItem[] = [
        { href: '/dashboard', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard' },
        { href: '/dashboard/transfer', icon: <ArrowRightLeft className="w-5 h-5" />, label: 'Transfers' },
        // { href: '/dashboard/wallets', icon: <Wallet className="w-5 h-5" />, label: 'Wallets', hasSubmenu: true, section: 'wallets' },
        { href: '/dashboard/wallets', icon: <Wallet className="w-5 h-5" />, label: 'Wallets' },
        { href: '/dashboard/analytics', icon: <BarChart3 className="w-5 h-5" />, label: 'Analytics' },
        { href: '/dashboard/history', icon: <History className="w-5 h-5" />, label: 'History' },
    ];

    // Transfer submenu items
    const transferSubMenu: SubMenuItem[] = [
        { href: '/dashboard/transfers/send', icon: <ArrowRightLeft className="w-4 h-4" />, label: 'Send Money' },
        { href: '/dashboard/transfers/receive', icon: <PiggyBank className="w-4 h-4" />, label: 'Receive Money' },
        { href: '/dashboard/transfers/exchange', icon: <Globe className="w-4 h-4" />, label: 'Currency Exchange' },
    ];

    // Wallets submenu items
    const walletsSubMenu: SubMenuItem[] = [
        { href: '/dashboard/wallets/personal', icon: <Wallet className="w-4 h-4" />, label: 'Personal Wallets' },
        { href: '/dashboard/wallets/business', icon: <CreditCard className="w-4 h-4" />, label: 'Business Accounts' },
        { href: '/dashboard/wallets/cards', icon: <CreditCard className="w-4 h-4" />, label: 'Cards' },
    ];

    // Finance navigation items
    const financeNav: NavItem[] = [
        { href: '/dashboard/reports', icon: <FileText className="w-5 h-5" />, label: 'Reports' },
        { href: '/dashboard/recipients', icon: <Users className="w-5 h-5" />, label: 'Recipients' },
        { href: '/dashboard/notifications', icon: <Bell className="w-5 h-5" />, label: 'Notifications' },
    ];

    // Account navigation items
    const accountNav: NavItem[] = [
        { href: '/dashboard/settings', icon: <Settings className="w-5 h-5" />, label: 'Settings', hasSubmenu: true, section: 'settings' },
        { href: '/dashboard/help', icon: <HelpCircle className="w-5 h-5" />, label: 'Help & Support' },
    ];

    // Settings submenu items
    const settingsSubMenu: SubMenuItem[] = [
        { href: '/dashboard/settings/profile', icon: <Users className="w-4 h-4" />, label: 'Profile' },
        { href: '/dashboard/settings/security', icon: <Shield className="w-4 h-4" />, label: 'Security' },
        { href: '/dashboard/settings/preferences', icon: <Settings className="w-4 h-4" />, label: 'Preferences' },
    ];

    // Render a submenu
    const renderSubmenu = (section: string, items: SubMenuItem[]) => {
        if (expandedSections.includes(section) && !collapsed) {
            return (
                <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-1 ml-4 pl-2 border-l border-gray-200 dark:border-gray-800 space-y-1"
                >
                    {items.map((subItem) => (
                        <li key={subItem.href}>
                            <Link
                                href={subItem.href}
                                className={cn(
                                    "flex items-center py-1.5 px-4 text-sm rounded-lg",
                                    isActive(subItem.href)
                                        ? "text-rose-600 dark:text-rose-400"
                                        : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900/60"
                                )}
                            >
                                <span className="mr-2">{subItem.icon}</span>
                                <span>{subItem.label}</span>
                            </Link>
                        </li>
                    ))}
                </motion.ul>
            );
        }
        return null;
    };

    return (
        <nav className="h-full overflow-y-auto py-4 px-2">
            {/* Main Navigation Section */}
            <div className="mb-6">
                <h3 className={cn(
                    "px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",
                    collapsed && "text-center"
                )}>
                    {!collapsed ? "Main" : "•••"}
                </h3>
                <ul className="space-y-1">
                    {mainNav.map((item) => {
                        const active = isActive(item.href);
                        const inPath = isInPath(item.href);

                        return (
                            <li key={item.href}>
                                <NavItem
                                    href={item.hasSubmenu ? "#" : item.href}
                                    icon={item.icon}
                                    label={item.label}
                                    collapsed={collapsed}
                                    isActive={active || (item.hasSubmenu && inPath)}
                                    hasSubmenu={item.hasSubmenu}
                                    onClick={item.hasSubmenu ? () => toggleSection(item.section || '') : undefined}
                                />

                                {/* Render appropriate submenu */}
                                {item.section === 'transfers' && renderSubmenu('transfers', transferSubMenu)}
                                {item.section === 'wallets' && renderSubmenu('wallets', walletsSubMenu)}
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Finance Section */}
            <div className="mb-6">
                <h3 className={cn(
                    "px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",
                    collapsed && "text-center"
                )}>
                    {!collapsed ? "Finance" : "•••"}
                </h3>
                <ul className="space-y-1">
                    {financeNav.map((item) => (
                        <li key={item.href}>
                            <NavItem
                                href={item.href}
                                icon={item.icon}
                                label={item.label}
                                collapsed={collapsed}
                                isActive={isActive(item.href)}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            {/* Account Section */}
            <div>
                <h3 className={cn(
                    "px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",
                    collapsed && "text-center"
                )}>
                    {!collapsed ? "Account" : "•••"}
                </h3>
                <ul className="space-y-1">
                    {accountNav.map((item) => (
                        <li key={item.href}>
                            <NavItem
                                href={item.hasSubmenu ? "#" : item.href}
                                icon={item.icon}
                                label={item.label}
                                collapsed={collapsed}
                                isActive={isActive(item.href) || (item.hasSubmenu && isInPath(item.href))}
                                hasSubmenu={item.hasSubmenu}
                                onClick={item.hasSubmenu ? () => toggleSection(item.section || '') : undefined}
                            />

                            {/* Settings submenu */}
                            {item.section === 'settings' && renderSubmenu('settings', settingsSubMenu)}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default SidebarNavigation;