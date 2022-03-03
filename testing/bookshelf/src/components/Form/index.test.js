import { render, screen, fireEvent } from '@testing-library/react';
import Form from '.';

describe('Form', () => {
  it('should set title and description and submit form', () => {
    const func = jest.fn();
    render(<Form createBook={func} />);

    const title = screen.getByLabelText(/title/i);
    fireEvent.change(title, { target: { name: 'title', value: 'Hola mundo' } });
    const description = screen.getByLabelText(/description/i);
    fireEvent.change(description, { target: { name: 'description', value: 'description test' } });

    expect(title.value).toMatch('Hola mundo');
    expect(description.value).toMatch('description test');

    const button = screen.getByTestId('button');
    fireEvent.click(button);

    expect(func).toHaveBeenCalled();
    expect(func).toHaveBeenCalledWith('Hola mundo', 'description test')

    expect(title.value).toMatch('');
    expect(description.value).toMatch('');
  });
});
