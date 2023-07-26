import { ReactNode } from 'react';
interface IProps {
    children: ReactNode;
}
interface IState {
    user: any;
}
declare const userContext: import("react").Context<any>;
declare const UserContextProvider: React.FC<IProps>;
interface IContext {
    state: IState;
    dispath: any;
}
declare const useUserContext: () => IContext;
export default userContext;
export { UserContextProvider, useUserContext };
