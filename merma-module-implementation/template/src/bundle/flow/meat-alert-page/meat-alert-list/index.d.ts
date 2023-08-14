/// <reference types="react" />
import { ProductUnitInformation } from '../../../core/client/mass-control-bff-models';
interface IMeatAlertListProps {
    onClickItem: (alertId: string, product: ProductUnitInformation, barcode: string | undefined, tally: string | undefined) => void;
}
export declare const MeatAlertList: React.FC<IMeatAlertListProps>;
export {};
