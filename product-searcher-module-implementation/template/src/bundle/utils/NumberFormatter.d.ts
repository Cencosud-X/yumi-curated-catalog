declare class NumberFormatter {
    toNumber(value?: number): string;
    toDoubleNumber(value?: number): string;
    roundNumber(value: number): string;
    toCurrency(value: number, addCurrencySymbol?: boolean): string;
    toPhone(phone: string): string;
}
declare const _default: NumberFormatter;
export default _default;
