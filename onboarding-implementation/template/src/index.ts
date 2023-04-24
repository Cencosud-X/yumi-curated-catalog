import Module, { IModuleProps } from './bundle'
import * as Pages from './pages';

export class {{#pascalCase data.name}}{{/pascalCase}}OverrideModule extends Module {
    constructor(props: IModuleProps) {
        super(props, {
            routes: [
                {{#if data.settings.screens.gps}}
                {
                    path: '/geolocalization',
                    page: Pages.Geolocalization,
                },
                {{/if}}
                {{#if data.settings.screens.notification}}
                {
                    path: '/notification',
                    page: Pages.Notification,
                }
                {{/if}}
            ]
        });
    }
}
