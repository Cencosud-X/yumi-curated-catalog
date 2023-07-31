import { Interfaces } from '../models';
interface ICart {
    totalPrice: number;
    products: Interfaces.ProductsInterfaces.IProduct[];
}
export type { ICart };
