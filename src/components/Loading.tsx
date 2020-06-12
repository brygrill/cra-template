import React, { ReactElement } from 'react';

const Loading = ({
  content = 'Loading...',
}: {
  content?: string;
}): ReactElement => {
  return <div>{content}</div>;
};

export default Loading;
