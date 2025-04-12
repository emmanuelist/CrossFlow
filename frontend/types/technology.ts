import { ReactNode } from 'react';

export interface Technology {
    id: string;
    name: string;
    description: string;
    features: string[];
    icon: ReactNode;
    color: string;
}