import { ProductCart } from '../../client/mass-control-bff-models';
export declare type CartAction = {
    type: 'ADD_TO_CART';
    payload: ProductCart;
} | {
    type: 'UPDATE_CART';
    payload: any;
} | {
    type: 'ERROR';
    payload: number;
} | {
    type: 'IS_LOADING';
    payload: boolean;
} | {
    type: 'RESET_ERROR';
} | {
    type: 'UPDATE_ITEM_CART';
    payload: ProductCart;
};
export declare type CartState = {
    cart: ProductCart[];
    error: number;
    isLoading: boolean;
};
export declare const cartReducer: (state: CartState, action: CartAction) => CartState;
