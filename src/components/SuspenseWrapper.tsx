import React, { Suspense, ReactElement } from 'react';

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
      <Suspense fallback={<>{suspenseFallback}</>}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default SuspenseWrapper;
