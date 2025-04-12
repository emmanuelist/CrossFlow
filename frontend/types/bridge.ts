import { ReactNode } from 'react';

export interface BridgeStep {
    icon: ReactNode;
    title: string;
    description: string;
    color: string;
}

export interface SectionConnectorsProps {
    position: "top" | "bottom";
}