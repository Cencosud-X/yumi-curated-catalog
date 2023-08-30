/// <reference types="react" />
import * as SDK from '@team_yumi/sdk';
import IStaticParams from './core/IStaticParams';
export default class Module extends SDK.Lib.BaseModule<IStaticParams> {
    Home: React.FC;
    documentationPath: string;
    constructor(params: IStaticParams);
}
