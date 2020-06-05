import React, { FunctionComponent, ReactElement } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import { routes, mockAuthed } from '../config';

const Home = (): ReactElement => <div>Home</div>;
const Login = (): ReactElement => <div>Login</div>;
const NotFound = (): ReactElement => <div>404</div>;

const PrivateRoute = ({
  component,
  path,
  exact,
  ...options
}: {
  component: FunctionComponent;
  path: string;
  exact: boolean;
}): ReactElement => {
  if (mockAuthed) {
    return (
      <Route path={path} exact={exact} component={component} {...options} />
    );
  }

  return <Redirect to={{ pathname: routes.login }} />;
};

const AuthRoute = ({
  component,
  path,
  ...options
}: {
  component: FunctionComponent;
  path: string;
}): ReactElement => {
  if (!mockAuthed) {
    return <Route path={path} component={component} {...options} />;
  }

  return <Redirect to={{ pathname: routes.home }} />;
};

const AppRouter: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute path={routes.home} exact component={Home} />
      <AuthRoute path={routes.login} component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default AppRouter;
