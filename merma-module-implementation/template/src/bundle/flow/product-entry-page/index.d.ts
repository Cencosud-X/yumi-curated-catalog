import React from 'react';
import { Components } from '../../sdk';
export interface IProductEntryExtension extends Components.IPageExtensions {
    white_boxes: {
        red_box: React.ComponentClass;
    };
    triggers: {};
}
export interface IProps extends Components.IPageProps<{}, IProductEntryExtension> {
}
declare class ProductEntryPage extends React.Component<IProps> {
    constructor(props: IProps);
    render(): JSX.Element;
}
export default ProductEntryPage;
