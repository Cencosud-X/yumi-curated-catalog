import React from 'react';
import * as SDK from '@team_yumi/sdk';
import { IStaticParams } from './models';
interface IProps {
    params: IStaticParams;
}
export default class Module extends SDK.Lib.BaseModule<IStaticParams> {
    Flow: React.FC<IProps>;
    defaultPath: string;
    constructor(params: IStaticParams);
}
export {};
