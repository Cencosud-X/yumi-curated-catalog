import React, { PropsWithChildren } from 'react';
interface IProps {
    visible: boolean;
    quantity: number;
    onContractModalCart?: (isExpand: boolean) => void;
    title: string;
    buttonFinishText: string;
    buttonContinueText: string;
    onFinish: () => void;
    size: 's' | 'm' | 'l';
}
export declare const XModalCart: React.FC<PropsWithChildren<IProps>>;
export {};
