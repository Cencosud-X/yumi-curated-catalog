import React from 'react';
export interface IModuleContext {
    loadData: () => void;
}
export declare const Module: React.Context<IModuleContext>;
