import IOption from './IOption';
export default interface ITwoOption extends IOption {
    subOptions: IOption[];
}
