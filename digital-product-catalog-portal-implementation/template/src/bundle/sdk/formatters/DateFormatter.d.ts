declare class DateFormatter {
    toDateString(date?: Date): string;
    toCustomString(momentFormat: string, date?: Date): string;
    formatDate(stringDate: string, format: string): string;
}
declare const _default: DateFormatter;
export default _default;
