declare type IfuctionProps = (title: string, description?: string) => void;
declare const useToast: () => {
    errorToast: IfuctionProps;
    successToast: IfuctionProps;
};
export default useToast;
