import React from 'react';
export interface IProfileHeader {
    title: string;
    name: string;
    avatar?: string;
}
export interface IProps {
    onSignOutClick?: () => void;
    onProfileClick?: () => void;
    auth?: boolean;
    children?: any;
    profile: IProfileHeader;
}
declare const XHeaderProfile: React.FC<IProps>;
export default XHeaderProfile;
