import { InputHTMLAttributes } from 'react';
import './Input.css';
declare type ButtonProps = InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
    isFocus?: string;
};
declare const Input: React.FC<ButtonProps>;
export default Input;
