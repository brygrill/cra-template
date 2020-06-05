import React, { Component, ReactElement } from 'react';

interface Props {
  render: Function;
  children: ReactElement;
}

interface State {
  error: null | Error;
}

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
    const { render, children } = this.props;
    if (error) {
      return <div>{render()}</div>;
    }
    return children;
  }
}

export default ErrorBoundary;
