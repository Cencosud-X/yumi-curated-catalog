declare class DniFormatter {
    toRut(rut: string): string;
    toRutWithoutDots(rut: string): string;
    isRutValid(rut: string): boolean;
}
declare const _default: DniFormatter;
export default _default;
