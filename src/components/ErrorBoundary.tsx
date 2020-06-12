import React, { Component, ReactElement } from 'react';

interface Props {
  fallback: ReactElement;
  children: ReactElement;
}

interface State {
  error: null | Error;
}

// https://codesandbox.io/s/adoring-goodall-8wbn7
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    error: null,
  };

  public componentDidCatch(error: Error): void {
    // eslint-disable-next-line
    console.error(error);
    this.setState({ error });
  }

  public render(): ReactElement {
    const { error } = this.state;
    const { fallback, children } = this.props;
    if (error) {
      return <div>{fallback}</div>;
    }
    return children;
  }
}

export default ErrorBoundary;
