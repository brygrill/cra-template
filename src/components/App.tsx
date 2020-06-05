import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import Layout from './Layout';
import Routes from '../routes';

const App = (): ReactElement => {
  return (
    <ErrorBoundary render={(): ReactElement => <div>Error!</div>}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default App;
