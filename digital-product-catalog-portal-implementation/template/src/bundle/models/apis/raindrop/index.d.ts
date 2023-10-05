export declare const watcher: (module: any, fn: any) => {
    module: any;
    fn: any;
};
export declare const takeoff: ({ module, fn }: any) => void;
export declare const observe: (module: any, value: any) => (...args: any) => any;
