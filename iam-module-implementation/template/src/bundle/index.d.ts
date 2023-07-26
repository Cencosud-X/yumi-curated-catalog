/// <reference types="react" />
import * as Models from './models';
import * as SDK from '@team_yumi/sdk';
export declare type IStaticParams = Models.IStaticParams;
export interface ILoginProps {
    onAuthenticated: () => void;
}
export default class Module extends SDK.Lib.BaseModule<IStaticParams> {
    get Login(): React.FC<ILoginProps>;
    get Approval(): React.FC;
    get Users(): React.FC;
}
