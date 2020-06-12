import React, { ReactElement } from 'react';

import ErrorBoundary from './ErrorBoundary';

const SuspenseWrapper = ({
  errorFallback = 'Error!',
  suspenseFallback = 'Loading...',
  children,
}: {
  errorFallback?: ReactElement | string;
  suspenseFallback?: ReactElement | string;
  children: ReactElement;
}): ReactElement => {
  return (
    <ErrorBoundary fallback={<>{errorFallback}</>}>
      <React.Suspense fallback={<>{suspenseFallback}</>}>
        {children}
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default SuspenseWrapper;
