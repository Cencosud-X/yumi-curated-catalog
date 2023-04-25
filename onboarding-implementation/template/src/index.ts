import Module, { IModuleProps } from './bundle'
import * as Pages from './pages';
import './bundle/index.esm.css';

export class {{#pascalCase data.name}}{{/pascalCase}}OverrideModule extends Module {
    constructor(props: IModuleProps) {
        super(props, {
            routes: [
                {{#if data.settings.screens.welcome}}
                {
                    path: '/',
                    page: Pages.Welcome,
                },
                {{/if}}
                {{#if data.settings.screens.gps}}
                {
                    path: '/gps',
                    page: Pages.GPS,
                },
                {{/if}}
                {{#if data.settings.screens.notification}}
                {
                    path: '/notification',
                    page: Pages.Notification,
                },
                {{/if}}
                {{#repeat data.settings.screens.custom_screens}}
                {
                    path: '/custom-screen{{#incr @index}}{{/incr}}',
                    page: Pages.CustomScreen{{#incr @index}}{{/incr}},
                },
                {{/repeat}}
            ]
        });
    }

    override onFinalize(): void {
        // In that step you should call this.props.history.push('/some-route')
        // to navigate to the next screen in your app flow.
    }
}
