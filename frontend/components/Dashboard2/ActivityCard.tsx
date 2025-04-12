import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle, Clock, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ActivityItem {
    id: string;
    type: 'success' | 'warning' | 'info' | 'pending';
    message: string;
    timestamp: string;
}

const activities: ActivityItem[] = [
    {
        id: '1',
        type: 'success',
        message: 'Transfer to John Doe completed successfully',
        timestamp: '10 minutes ago'
    },
    {
        id: '2',
        type: 'warning',
        message: 'Failed login attempt detected',
        timestamp: '45 minutes ago'
    },
    {
        id: '3',
        type: 'pending',
        message: 'Waiting for confirmation from Sarah Johnson',
        timestamp: '1 hour ago'
    },
    {
        id: '4',
        type: 'info',
        message: 'Exchange rate updated for NGN',
        timestamp: '2 hours ago'
    },
    {
        id: '5',
        type: 'success',
        message: 'KYC verification approved',
        timestamp: '3 hours ago'
    }
];

const ActivityIcon: React.FC<{ type: ActivityItem['type'] }> = ({ type }) => {
    switch (type) {
        case 'success':
            return <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400" />;
        case 'warning':
            return <AlertCircle className="h-5 w-5 text-amber-500 dark:text-amber-400" />;
        case 'info':
            return <Info className="h-5 w-5 text-blue-500 dark:text-blue-400" />;
        case 'pending':
            return <Clock className="h-5 w-5 text-gray-500 dark:text-gray-400" />;
        default:
            return null;
    }
};

const ActivityCard: React.FC = () => {
    return (
        <Card className="border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    Recent Activity
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className="space-y-4">
                    {activities.map((activity) => (
                        <div
                            key={activity.id}
                            className="flex items-start space-x-3"
                        >
                            <div className="flex-shrink-0 pt-1">
                                <ActivityIcon type={activity.type} />
                            </div>

                            <div>
                                <p className={cn(
                                    "text-sm font-medium",
                                    activity.type === 'success' ? "text-gray-900 dark:text-white" :
                                        activity.type === 'warning' ? "text-amber-700 dark:text-amber-400" :
                                            activity.type === 'info' ? "text-blue-700 dark:text-blue-400" :
                                                "text-gray-700 dark:text-gray-300"
                                )}>
                                    {activity.message}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {activity.timestamp}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default ActivityCard;