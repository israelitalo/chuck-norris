import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title application `Search something about`', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search something about/i);
  expect(linkElement).toBeInTheDocument();
});
