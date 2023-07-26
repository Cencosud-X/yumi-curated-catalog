/// <reference types="react" />
import './index.less';
interface Props {
    customClass?: string;
    imgUrl: string;
    imgMiniUrl: string;
    width?: number | string;
    height?: number | string;
}
declare const FlatImgBoxComponent: React.FC<Props>;
export default FlatImgBoxComponent;
