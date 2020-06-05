import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders nav', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/nav/i);
  expect(linkElement).toBeInTheDocument();
});
