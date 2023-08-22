import { PropsWithChildren } from 'react';
import { CartAction } from './exitCartReducer';
import { ExitCartState } from '../interfaces/types';
interface IExitBulkContext {
    state: ExitCartState;
    dispatch: React.Dispatch<CartAction>;
}
export declare const ExitBulkContext: import("react").Context<IExitBulkContext>;
export declare const ExitBulkContextProvider: React.FC<PropsWithChildren>;
export {};
