import { render, screen } from '@testing-library/react';
import App from './App';

test('renders addition app title', () => {
  render(<App />);
  const linkElement = screen.getByText(/足し算アプリ/i);
  expect(linkElement).toBeInTheDocument();
});
