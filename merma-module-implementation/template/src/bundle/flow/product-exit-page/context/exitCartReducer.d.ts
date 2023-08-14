import { ProductsInformation } from '../../../core/client/mass-control-bff-models';
import { ExitCartState } from '../interfaces/types';
export declare type CartAction = {
    type: 'ADD_TO_CART';
    payload: ProductsInformation;
} | {
    type: 'REMOVE_FROM_CART';
    payload: {
        tally?: string;
        barcode?: string;
    };
} | {
    type: 'LOAD_ALL_PRODUCTS';
    payload: ProductsInformation[];
};
export declare const cartReducer: (state: ExitCartState, action: CartAction) => ExitCartState;
