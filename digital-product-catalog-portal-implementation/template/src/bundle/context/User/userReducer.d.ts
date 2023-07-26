interface IState {
    user: any;
}
interface IAction {
    type: string;
    payload: any;
}
declare const userReducer: (state: IState, action: IAction) => {
    user: any;
};
export default userReducer;
