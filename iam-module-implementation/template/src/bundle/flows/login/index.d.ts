/// <reference types="react" />
import * as Models from '../../models';
export interface IProps {
    extensions: Models.IExtensions;
    onAuthenticated: () => void;
}
declare const Login: React.FC<IProps>;
export default Login;
