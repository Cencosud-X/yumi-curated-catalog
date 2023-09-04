export declare const getFieldValue: (data: any, field: string) => any;
export declare const validation: (params: any) => (values: any) => any;
export declare const prepareValue: (name: string, value: any) => {
    target: {
        name: string;
        value: any;
    };
};
