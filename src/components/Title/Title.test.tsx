import { render, screen } from '@testing-library/react';

import { Title } from '.';

describe('Title application', () => {
  it('Render title application', () => {
    render(<Title />);
    expect(screen.getByTestId('title-application')).toBeInTheDocument();
  });
});
