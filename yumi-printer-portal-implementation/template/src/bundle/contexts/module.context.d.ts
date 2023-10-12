import React from 'react';
import { StaticParams } from '../dtos';
declare type ModuleContextData = {
    country: string;
};
declare type IProps = {
    children: React.ReactNode;
    params: StaticParams;
};
export declare const ModuleContext: React.Context<ModuleContextData>;
export declare const ModuleContextProvider: React.FC<IProps>;
export {};
