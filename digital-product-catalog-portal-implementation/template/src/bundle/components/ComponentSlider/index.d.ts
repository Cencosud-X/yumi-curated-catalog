import React from 'react';
import './index.less';
interface IProps {
    items: Array<any>;
    slidesPerView?: number;
    itemRender?: any;
    onItemRenderClick: (item: any) => void;
}
declare const SliderComponent: React.FC<IProps>;
export default SliderComponent;
