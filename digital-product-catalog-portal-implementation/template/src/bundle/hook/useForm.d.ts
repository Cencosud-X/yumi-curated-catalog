import { FormEvent } from 'react';
declare type event = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
declare const useForm: (submitFunction: () => void, defaultValue?: any) => {
    values: any;
    handleChange: (e: event) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};
export default useForm;
