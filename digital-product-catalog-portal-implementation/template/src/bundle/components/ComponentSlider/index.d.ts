import React from 'react';
import './index.less';
import 'swiper/css';
import 'swiper/css/navigation';
interface IProps {
    items: Array<any>;
    slidesPerView?: number;
    itemRender?: any;
    useNavigation?: boolean;
    onItemRenderClick: (item: any) => void;
}
declare const SliderComponent: React.FC<IProps>;
export default SliderComponent;
