export declare const useAuth: () => {
    getUserMail: () => string;
    hasPermission: (scope: string) => boolean | undefined;
    hasWritePermission: (mails?: string | any[]) => boolean;
};
