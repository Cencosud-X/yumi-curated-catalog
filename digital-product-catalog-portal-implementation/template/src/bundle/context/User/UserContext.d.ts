import { ReactNode } from 'react';
interface IProps {
    clientRequest: any;
    children: ReactNode;
}
export interface IJwt {
    access_token: string;
    expires_in: number;
    token_type: string;
}
export interface IUserData {
    id: string;
    idCompany: string;
    country?: string;
    name: string;
    email: string;
    roles?: any;
    permissions?: any;
}
interface IState {
    isAuthenticated: boolean;
    user?: IJwt | null;
    userData?: IUserData | null;
    provider: string;
}
declare const UserContextProvider: React.FC<IProps>;
interface IContext {
    data: IState;
    isAuthenticated: boolean;
    userData: IUserData | null;
    updateStateContext: any;
    hasRoles: any;
    hasPermission: any;
    login: any;
    logout: any;
}
declare const useUserContext: () => IContext;
export { UserContextProvider, useUserContext };
