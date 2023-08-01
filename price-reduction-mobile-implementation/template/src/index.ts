import Module, { CardTool } from './bundle'
import React from 'react';
import './bundle/index.css'
import { BusinessUnit, Country } from './bundle/models/price-reduction/request';

export { CardTool };

export default new Module({
    backendURL: 'https://api.staging.cencox.xyz/price-reduction-module/api/',
    country: 'CL' as Country,
    businessUnit: 'SM' as BusinessUnit,
    homePage: {
      pagination: {
        rowsPerPage: 20,
      },
    },
  });
  

