import { render, screen } from '@testing-library/react';
import Button from '.';

describe('Button', () => {
  it('should disable button when content has less than 5 characters', () => {
    render(<Button type="button">hola</Button>);

    const button = screen.getByTestId('button');

    expect(button).toBeDisabled();
  });

  // esta prueba no es tan chévere
  it('should render the children prop as button content', () => {
    render(<Button type="button">click</Button>);

    const button = screen.getByText(/click/i);

    expect(button).toBeInTheDocument();
  });

  // Snapshot testing
  // No no no no Falsos Positivos y Negativos
  it('should render correctly', () => {
    const { container } = render(<Button type="button">click</Button>);

    expect(container).toMatchSnapshot();
  })
})
