/// <reference types="react" />
import './index.sass';
export interface IProps {
    icon: string;
    title: string;
    callback?: () => void;
}
declare const InventoryFunctionCard: React.FC<IProps>;
export default InventoryFunctionCard;
