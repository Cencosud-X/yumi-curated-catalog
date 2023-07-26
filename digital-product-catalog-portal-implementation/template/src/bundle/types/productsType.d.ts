import { Interfaces } from '@digital-product-catalog/models';
interface ICart {
    totalPrice: number;
    products: Interfaces.ProductsInterfaces.IProduct[];
}
export type { ICart };
