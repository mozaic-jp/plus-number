import { render, screen } from '@testing-library/react';
import App from './App';

test('renders addition app title', () => {
  render(<App />);
  const linkElement = screen.getByText(/足し算プログラム/i);
  expect(linkElement).toBeInTheDocument();
});
