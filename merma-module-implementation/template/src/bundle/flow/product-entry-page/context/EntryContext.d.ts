import { PropsWithChildren } from 'react';
import { CartAction, CartState } from './cartReducer';
interface IEntryContext {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
}
export declare const EntryContext: import("react").Context<IEntryContext>;
export declare const EntryContextProvider: React.FC<PropsWithChildren>;
export {};
