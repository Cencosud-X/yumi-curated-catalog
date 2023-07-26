import { ICart } from '../../types/productsType';
interface IAction {
    type: string;
    payload: any;
}
declare const cartReducer: (state: ICart, action: IAction) => {
    products: any;
    totalPrice: number;
} | {
    totalPrice: any;
    products: import("dist/libs/models/src/interfaces/producstinterface").IProduct[];
};
export default cartReducer;
