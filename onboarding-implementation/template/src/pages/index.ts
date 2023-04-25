{{#if data.settings.screens.welcome}}
import Welcome from './welcome'
{{/if}}
{{#if data.settings.screens.gps}}
import GPS from './gps'
{{/if}}
{{#if data.settings.screens.notification}}
import Notification from './notification'
{{/if}}
{{#repeat data.settings.screens.custom_screens}}
import CustomScreen{{#incr @index}}{{/incr}} from './custom-screen{{#incr @index}}{{/incr}}'
{{/repeat}}

export {
    {{#if data.settings.screens.welcome}}
    Welcome,
    {{/if}}
    {{#if data.settings.screens.gps}}
    GPS,
    {{/if}}
    {{#if data.settings.screens.notification}}
    Notification,
    {{/if}}
    {{#repeat data.settings.screens.custom_screens}}
    CustomScreen{{#incr @index}}{{/incr}},
    {{/repeat}}
}