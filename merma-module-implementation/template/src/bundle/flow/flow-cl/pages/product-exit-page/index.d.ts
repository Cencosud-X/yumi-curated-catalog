import { Components } from '../../../../sdk';
import React from 'react';
export interface IProductEntryExtension extends Components.IPageExtensions {
    white_boxes: {
        red_box: React.ComponentClass;
    };
    triggers: {};
}
export interface IProps extends Components.IPageProps<{}, IProductEntryExtension> {
}
declare class ProductExitPage extends React.Component<IProps> {
    constructor(props: IProps);
    render(): JSX.Element;
}
export default ProductExitPage;
