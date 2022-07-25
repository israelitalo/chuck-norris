import { render, screen } from '@testing-library/react';

import { SpinnerLoading } from '.';

describe('Spinner in application', () => {
  it('Render spinner in application', () => {
    render(<SpinnerLoading />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
