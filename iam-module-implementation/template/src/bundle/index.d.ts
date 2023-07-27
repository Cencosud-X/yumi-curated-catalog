/// <reference types="react" />
import * as Models from './models';
import * as SDK from '@team_yumi/sdk';
export declare type IStaticParams = Models.IStaticParams;
export interface ILoginProps {
    onAuthenticated: () => void;
}
export default class Module extends SDK.Lib.BaseModule<IStaticParams> {
    Login: React.FC<ILoginProps>;
    Approval: React.FC;
    Users: React.FC;
    constructor(params: IStaticParams);
}
