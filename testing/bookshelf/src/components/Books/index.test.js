import { render } from '@testing-library/react';
import Books from '.';

describe('Books', () => {
  it('should show no books if list is empty', () => {
    const { getByText } = render(<Books books={[]} />)

    expect(getByText(/no books created/i)).toBeInTheDocument();
  });

  it('should render a complete list of books', () => {
    const booksMock = [
      { id: 1, votes: 0, title: 'title 1', description: 'description 1' },
      { id: 2, votes: 0, title: 'title 2', description: 'description 2' },
    ];

    const { getAllByTestId } = render(<Books books={booksMock} />)

    expect(getAllByTestId('book')).toHaveLength(2);
  });
});
