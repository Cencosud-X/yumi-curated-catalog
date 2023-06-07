import { ICollaboratorManagerPageExtension } from './flow/home-page';
import { Components } from './sdk';
import '@team_yumi/ramen/index.css';
import '@team_yumi/ramen/themes/default.css';
import '@team_yumi/ramen/themes/fonts.css';
export interface ICollaboratorManagerModuleOverride extends Components.IModuleOverride {
    extensions?: {
        home_page: ICollaboratorManagerPageExtension;
    };
    routes?: Components.IModuleRoute[];
}
export interface IModuleProps extends Components.IModuleProps {
}
export default abstract class CollaboratorManagerModule extends Components.Module<ICollaboratorManagerModuleOverride> {
    static route: string;
    constructor(props: IModuleProps, override: ICollaboratorManagerModuleOverride);
}
