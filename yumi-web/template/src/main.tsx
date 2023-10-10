import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import '@team_yumi/ramen-web/index.css';
import '@team_yumi/ramen-web/themes/fonts.css';
import '@team_yumi/ramen-web/themes/default.css';
import App from './app';
import * as SDK from '@team_yumi/sdk';

SDK.setupModules({ stage: 'STAGING' });

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
