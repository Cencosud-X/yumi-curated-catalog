/// <reference types="react" />
import * as Models from '../../models';
import { IChildrenProps } from '../../models/ILogin';
export interface IProps {
    params: Models.IStaticParams;
    onAuthenticated: () => void;
    children?: React.FC<IChildrenProps>;
}
declare const Login: React.FC<IProps>;
export default Login;
