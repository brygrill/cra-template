import React, { ReactElement } from 'react';

import ErrorBoundary from './ErrorBoundary';

const SuspenseWrapper = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  return (
    <ErrorBoundary fallback={<div>Error!</div>}>
      <React.Suspense fallback={<div>Loading...</div>}>
        {children}
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default SuspenseWrapper;
