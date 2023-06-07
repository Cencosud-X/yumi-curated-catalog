export default interface ISection {
    id: string;
    name: string;
    symbol: 'store-food-sm' | 'stiff-meat-sm' | 'juices-liquids-sm' | 'fish-meat-sm';
    alerts: number;
}
