import { render, screen } from '@testing-library/react';

import { JokesCard } from '.';
import { SearchContextProvider } from '../../contexts/searchContext';

describe('JokesCard in application', () => {
  it('Render JokesCard in application', () => {
    render(
    <SearchContextProvider>
        <JokesCard />
    </SearchContextProvider>);
    expect(screen.getByTestId('joke-component')).toBeInTheDocument();
  });
});