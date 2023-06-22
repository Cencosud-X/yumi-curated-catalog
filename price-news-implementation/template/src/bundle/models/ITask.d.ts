import IProduct from './IProduct';
export default interface ITask {
    id: string;
    type: 'PRICE_NEW';
    state: 'PENDING' | 'COMPLETED';
    section: {
        id: string;
        name: string;
        symbol: 'store-food-sm' | 'stiff-meat-sm' | 'juices-liquids-sm' | 'fish-meat-sm';
    };
    category: {
        id: string;
        name: string;
    };
    product: IProduct;
}
