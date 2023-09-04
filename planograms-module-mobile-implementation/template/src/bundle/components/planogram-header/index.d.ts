import React from 'react';
interface PlanogramHeaderProps {
    onBack: (() => void) | undefined;
    title: string;
    subTitle?: string;
    skeleton?: boolean;
}
export declare const PlanogramHeader: React.FC<PlanogramHeaderProps>;
export {};
