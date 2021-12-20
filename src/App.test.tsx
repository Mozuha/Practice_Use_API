import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders loading, then texts', async () => {
  render(<App />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  await waitFor(() => expect(screen.getByText('Cryptocurrency Data')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('Market Cap')).toBeInTheDocument());
});
