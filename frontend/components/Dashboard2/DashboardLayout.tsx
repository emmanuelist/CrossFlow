import React, { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';


interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
            {/* Sidebar */}
            <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />

            {/* Main Content */}
            <div className={cn(
                "flex-1 flex flex-col overflow-hidden transition-all duration-300",
                sidebarCollapsed ? "ml-0" : "ml-0"
            )}>
                {/* Dashboard Header */}
                <DashboardHeader />

                {/* Dashboard Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-6">
                    <div className="container mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;