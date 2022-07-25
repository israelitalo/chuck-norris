import { render, screen } from '@testing-library/react';

import { NotFoundItems } from '.';

describe('NotFoundItems in application', () => {
  it('Render NotFoundItems in application', () => {
    render(<NotFoundItems />);
    expect(screen.getByTestId('not-found-items')).toBeInTheDocument();
  });
});