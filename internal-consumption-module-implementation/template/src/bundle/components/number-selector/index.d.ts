/// <reference types="react" />
interface IProps {
    value: number;
    minValue?: number;
    maxValue?: number;
    onChange?: (value: number) => void;
}
declare const NumberSelector: React.FC<IProps>;
export default NumberSelector;
