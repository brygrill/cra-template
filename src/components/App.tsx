import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import SuspenseWrapper from './SuspenseWrapper';
import Layout from './Layout';
import Routes from '../routes';

const App = (): ReactElement => {
  return (
    <SuspenseWrapper>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </SuspenseWrapper>
  );
};

export default App;
