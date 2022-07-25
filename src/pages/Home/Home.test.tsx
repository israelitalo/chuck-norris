import { render, screen } from '@testing-library/react';
import { Home } from '.';
import { SearchContextProvider } from '../../contexts/searchContext';

describe('Home Page', () => {
    test('renders input search', () => {
      render(<SearchContextProvider><Home /></SearchContextProvider>);
      expect(screen.getByTestId('input-search')).toBeInTheDocument();
    });
    
    test('renders button search', () => {
      render(<SearchContextProvider><Home /></SearchContextProvider>);
      const ButtonSearch = screen.getByTestId('button-search');
      expect(ButtonSearch).toBeInTheDocument();
    });
});

