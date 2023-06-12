import { Components } from '../../sdk';
import React from 'react';
export interface ILQUA {
    id: string;
    name: string;
    sku: string;
    ean: string;
    price: number;
    stock: number;
    shelf_life: string;
    type_alert: 'warning' | 'error' | 'neutral' | 'success' | 'info';
    label: string;
    provider: string;
    brand: string;
    average_sale: number;
    expiration_date: string;
    total_weight: number;
    image: string;
    origin?: 'DC' | 'EXTERNAL_PROVIDER';
    expiration_days: number;
}
export interface IProductManagementContext {
    redirectTo: (path: string) => void;
}
export interface IProductManagementExtension extends Components.IPageExtensions {
    white_boxes: {
        red_box: React.ComponentClass;
    };
    triggers: {};
}
export declare const ProductManagementContext: React.Context<IProductManagementContext | null>;
export interface IProps extends Components.IPageProps<{}, IProductManagementExtension> {
}
declare class ProductManagementPage extends React.Component<IProps> {
    constructor(props: IProps);
    render(): JSX.Element;
    redirectTo(goTo: string): void;
}
export default ProductManagementPage;
