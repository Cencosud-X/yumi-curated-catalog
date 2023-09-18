import * as SDK from '@team_yumi/sdk';
export default class BaseClient extends SDK.Lib.RESTClient {
    protected country: string;
    constructor(country?: string);
}
