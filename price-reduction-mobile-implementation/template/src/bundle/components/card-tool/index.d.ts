/// <reference types="react" />
import { PriceReduction } from '../../models';
interface IProps {
    pathModule: string;
    title?: string;
    subTitle?: string;
    flag: string;
    store: string;
    storeName: string;
    responsible: PriceReduction.Request.IUser;
}
declare function Index(props: IProps): JSX.Element;
export default Index;
