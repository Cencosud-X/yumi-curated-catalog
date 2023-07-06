import React from 'react';
import * as IAMModule from './bundle';
import extensions from './Extensions';

export interface ILoginProps {
  onAuthenticated: () => void;
}

export const Login: React.FC<ILoginProps> = (props) => {
  return <IAMModule.Login extensions={extensions} onAuthenticated={props.onAuthenticated} />;
};

export const Approval: React.FC = () => {
  return <IAMModule.Approval extensions={extensions} />;
};

export const Users: React.FC = () => {
  return <IAMModule.Users extensions={extensions} />;
};
