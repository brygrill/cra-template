import React, { ReactElement } from 'react';

import SuspenseWrapper from './SuspenseWrapper';

const LazyFooter = React.lazy(() => import('./Footer'));

const Layout = ({ children }: { children: ReactElement }): ReactElement => {
  return (
    <>
      <nav>Nav</nav>
      <main>{children}</main>
      <SuspenseWrapper suspenseFallback="Lazy loading the footer.......">
        <LazyFooter />
      </SuspenseWrapper>
    </>
  );
};

export default Layout;
