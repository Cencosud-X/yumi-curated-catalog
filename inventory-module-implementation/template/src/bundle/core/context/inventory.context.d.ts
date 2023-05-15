import { PropsWithChildren } from 'react';
import { IInventory } from '../interfaces';
export declare type InventoryContextData = {
    inventory: IInventory | undefined;
    setInventory(inventory: IInventory): void;
};
declare type InventoryProviderProps = {};
export declare const InventoryContext: import("react").Context<InventoryContextData>;
export declare const InventoryProvider: ({ children, }: PropsWithChildren<InventoryProviderProps>) => JSX.Element;
export declare function useInventoryContext(): InventoryContextData;
export {};
