import * as yup from "yup";
export declare const AffirmativeSchema: yup.ObjectSchema<{
    pictures: {
        name?: string | undefined;
        removable?: boolean | undefined;
        urlImg?: string | undefined;
        status?: string | undefined;
    }[] | undefined;
    typeProblem: string | undefined;
    typeFurniture: string | undefined;
    height: yup.Maybe<string | undefined>;
    width: yup.Maybe<string | undefined>;
    depth: yup.Maybe<string | undefined>;
    amountBox: yup.Maybe<string | undefined>;
    title: yup.Maybe<string | undefined>;
    description: string | undefined;
}, yup.AnyObject, {
    pictures: "";
    typeProblem: undefined;
    typeFurniture: undefined;
    height: undefined;
    width: undefined;
    depth: undefined;
    amountBox: undefined;
    title: undefined;
    description: undefined;
}, "">;
export declare const NegativeSchema: yup.ObjectSchema<{
    pictures: {
        name?: string | undefined;
        removable?: boolean | undefined;
        urlImg?: string | undefined;
        status?: string | undefined;
    }[] | undefined;
    typeProblem: string;
    typeFurniture: string | undefined;
    height: string | undefined;
    width: string | undefined;
    depth: string | undefined;
    amountBox: string | undefined;
    title: string | undefined;
    description: string | undefined;
}, yup.AnyObject, {
    pictures: "";
    typeProblem: undefined;
    typeFurniture: undefined;
    height: undefined;
    width: undefined;
    depth: undefined;
    amountBox: undefined;
    title: undefined;
    description: undefined;
}, "">;
