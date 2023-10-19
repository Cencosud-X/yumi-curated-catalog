/// <reference types="react" />
import * as Models from './models';
import * as SDK from '@team_yumi/sdk';
import { IChildrenProps } from './models/ILogin';
export declare type IStaticParams = Models.IStaticParams;
export interface ILoginProps {
    onAuthenticated: () => void;
    children?: React.FC<IChildrenProps>;
}
export default class Module extends SDK.Lib.BaseModule<IStaticParams> {
    Login: React.FC<ILoginProps>;
    approvalPath: string;
    Approval: React.FC;
    usersPath: string;
    Users: React.FC;
    constructor(params: IStaticParams);
}
