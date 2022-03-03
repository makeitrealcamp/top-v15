import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
 it('should set title and description and render each new book', () => {
   render(<App />);

   const title = screen.getByLabelText(/title/i);
   fireEvent.change(title, { target: { name: 'title', value: 'Hola mundo' } });

   const description = screen.getByLabelText(/description/i);
   fireEvent.change(description, { target: { name: 'description', value: 'description test' } });

   const button = screen.getByTestId('button');
   fireEvent.click(button);

   fireEvent.change(title, { target: { name: 'title', value: 'Hola mundo' } });
   fireEvent.change(description, { target: { name: 'description', value: 'description test' } });
   fireEvent.click(button);

   const books = screen.getAllByTestId('book');

   expect(title.value).toMatch('');
   expect(description.value).toMatch('');
   expect(books).toHaveLength(2);
 });
})
