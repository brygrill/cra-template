import React, { ReactElement } from 'react';

const Layout = ({ children }: { children: ReactElement }): ReactElement => {
  return (
    <>
      <nav>Nav</nav>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
