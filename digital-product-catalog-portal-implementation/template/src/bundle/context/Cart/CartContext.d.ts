import React from 'react';
import { Interfaces } from '../../models';
declare const CartContext: React.Context<any>;
interface IProps {
    children: React.ReactNode;
}
declare const CartContextProvider: React.FC<IProps>;
interface IReducer {
    cart: Interfaces.ProductsInterfaces.IProduct[];
    totalPrice: number;
    isOpenModal: boolean;
    setIsOpenModal: (value: boolean) => void;
    dispath: ({ type, payload }: {
        type: string;
        payload: any;
    }) => void;
    addToCart: (productData: Interfaces.ProductsInterfaces.IProduct, quantity: number) => void;
    updateCart: (productData: Interfaces.ProductsInterfaces.IProduct[]) => void;
    updateQuantity: (productData: Interfaces.ProductsInterfaces.IProduct, quantity: number) => void;
    deleteFromCart: (item: Interfaces.ProductsInterfaces.IProduct) => void;
    increaseQuantity: (item: Interfaces.ProductsInterfaces.IProduct) => void;
    decreaseQuantity: (item: Interfaces.ProductsInterfaces.IProduct) => void;
    setTotalPrice: (price: number) => void;
    clearCart: () => void;
}
declare const useCartContext: () => IReducer;
export default CartContext;
export { CartContextProvider, useCartContext };
