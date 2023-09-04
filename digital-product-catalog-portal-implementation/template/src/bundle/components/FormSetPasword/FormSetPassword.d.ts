/// <reference types="react" />
export interface IPropsFormSetPassword {
    title: string;
    description?: string;
    access_token?: string;
    showEmail?: boolean;
    showDescription?: boolean;
    onSubmit: (values: any) => void;
}
declare const FormSetPassword: React.FC<IPropsFormSetPassword>;
export default FormSetPassword;
