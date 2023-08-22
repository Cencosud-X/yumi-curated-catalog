/// <reference types="react" />
import { ProductUnitInformation } from '../../../../../core/client/mass-control-bff-models';
import { ICodeParams, Origin } from '../../../../../types.d';
interface IProps {
    origin: Origin;
    alertId: string;
    onback: () => void;
    product: ProductUnitInformation;
    code: ICodeParams;
    onChangeMode: () => void;
}
export declare const MeatAlertActionExit: React.FC<IProps>;
export {};
