import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import SuspenseWrapper from './SuspenseWrapper';
import Layout from './Layout';
import Routes from '../routes';
import Loading from './Loading';

const App = (): ReactElement => {
  return (
    <SuspenseWrapper
      suspenseFallback={<Loading content="Loading app" />}
      errorFallback="Serious error!"
    >
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </SuspenseWrapper>
  );
};

export default App;
