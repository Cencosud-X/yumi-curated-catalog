/// <reference types="react" />
import * as Models from '../../models';
export interface IProps {
    params: Models.IStaticParams;
    onAuthenticated: () => void;
}
declare const Login: React.FC<IProps>;
export default Login;
