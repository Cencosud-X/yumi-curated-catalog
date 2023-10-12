import * as SDK from '@team_yumi/sdk';
import React from 'react';
import { StaticParams } from './dtos';
export default class Module extends SDK.Lib.BaseModule<StaticParams> {
    Flow: React.FC;
    defaultPath: string;
    CardTool: React.FC<import("./components").IProps>;
    constructor(params: StaticParams);
}
