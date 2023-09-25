import React from 'react';
interface IProps {
    onBack: (() => void) | undefined;
    title: string;
    subTitle?: string;
    skeleton?: boolean;
}
export declare const Header: React.FC<IProps>;
export {};
