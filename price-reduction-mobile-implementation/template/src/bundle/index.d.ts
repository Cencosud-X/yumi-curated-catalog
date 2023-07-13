import { IHomePageExtension } from './pages/home';
import { Components } from './sdk';
import CardTool from "./components/card-tool";
import { IScannerPageExtension } from "./pages/scanner";
import { IRequestPageExtension } from './pages/requests';
import { IDetailPageExtension } from "./pages/detail";
export { CardTool };
export interface IHelloWorldModuleOverride extends Components.IModuleOverride {
    extensions: {
        home_page: IHomePageExtension;
        detail_page: IDetailPageExtension;
        scanner_page: IScannerPageExtension;
        request_page: IRequestPageExtension;
    };
    routes?: Components.IModuleRoute[];
}
export interface IModuleProps extends Components.IModuleProps {
}
export default abstract class HelloWorldModule extends Components.Module<IHelloWorldModuleOverride> {
    static route: string;
    constructor(props: IModuleProps, override: IHelloWorldModuleOverride);
}
