import IProduct from './IProduct';
export default interface ICategory {
    id: string;
    name: string;
    alerts: number;
    products: IProduct[];
}
