import React from 'react';
import * as SDK from '@team_yumi/sdk';
import { IStaticParams } from './dtos';
import { IClients } from './clients';
export default class Module extends SDK.Lib.BaseModule<IStaticParams> {
    Flow: React.FC;
    Summary: React.FC;
    defaultPath: string;
    clients: IClients;
    constructor(params: IStaticParams);
}
