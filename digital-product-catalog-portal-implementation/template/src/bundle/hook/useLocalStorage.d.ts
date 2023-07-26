interface IReturnHook {
    setStorage: (key: string, data: any) => any;
    getStorage: (key: string) => any;
}
declare const useLocalStorage: () => IReturnHook;
export default useLocalStorage;
