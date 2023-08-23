/// <reference types="react" />
import { Components } from "../../sdk";
export interface IProductsPageExtension extends Components.IPageExtensions {
    white_boxes: {
        red_box: React.ComponentClass;
    };
    triggers: {
        get_user_token: () => Promise<string>;
        url_env: () => Promise<string>;
    };
    country: string;
}
