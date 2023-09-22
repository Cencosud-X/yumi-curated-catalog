import { ReactNode } from 'react';
import { Interfaces } from '../../models';
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
    avatar?: string;
    permissions?: any;
}
export interface ICompanyData {
    id?: string;
    rut: string;
    name?: string;
    toDelivery?: string;
    address: string[];
    deliveryAddresses?: string[];
    hasCreditLine: boolean;
    sapCode: string;
    sellers?: Interfaces.CompanyInterfaces.ISeller[];
    office?: Interfaces.CompanyInterfaces.IOffice;
    infoCredit?: IInfoCredit;
}
export interface IInfoCredit {
    amountCredit?: string;
    currency?: string;
    limitCredit?: string;
    Totalfac?: string;
    CompTotal?: string;
    Importe?: string;
    ValorComercial?: string;
    Vencineto?: string;
    VencLineaCred?: string;
}
interface IState {
    isAuthenticated: boolean;
    user?: IJwt | null;
    userData?: IUserData | null;
    companyData?: ICompanyData | null;
    provider: string;
}
declare const UserContextProvider: React.FC<IProps>;
interface IContext {
    data: IState;
    isAuthenticated: boolean;
    userData: IUserData | null;
    companyData: ICompanyData | null;
    updateStateContext: any;
    hasRoles: any;
    hasPermission: any;
    login: any;
    getDataCompany: (rut: string) => Promise<ICompanyData>;
    logout: any;
}
declare const useUserContext: () => IContext;
export { UserContextProvider, useUserContext };
