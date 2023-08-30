/// <reference types="react" />
import { Product } from '../../models/product';
interface IProps {
    position?: IPosition;
    disabled?: boolean;
    showOnboarding?: boolean;
    onOnboardingEnd?: () => void;
    onPositionChange?: (position: IPosition) => void;
    searchByCode: (code: string) => Promise<Product>;
    searchByText: (text: string) => Promise<Product[]>;
    mdhCenterUrl?: string;
}
interface IPosition {
    x: number;
    y: number;
}
declare const FloatingButton: React.FC<IProps>;
export default FloatingButton;
