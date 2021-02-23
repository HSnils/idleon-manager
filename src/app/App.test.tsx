import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders change to dark theme element', () => {
  render(<App />);
  const darkThemeText = screen.getByTitle(/Change to dark theme/i);
  expect(darkThemeText).toBeInTheDocument();
});
