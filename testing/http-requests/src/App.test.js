import { render, screen, act } from '@testing-library/react';
import moxios from 'moxios';
import { faker } from '@faker-js/faker';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should show a list of incoming articles', async () => {
    const length = Math.ceil(Math.random() * 100);
    const postsMock = Array.from({ length }, () => {
      return {
        id: faker.datatype.uuid(),
        title: faker.random.word(),
        body: faker.lorem.paragraph(8),
      };
    });

    render(<App />);

    await moxios.wait(jest.fn);

    await act(async () => {
      const req = moxios.requests.mostRecent();

      req.respondWith({
        status: 200,
        response: postsMock,
      })
    });

    const posts = screen.getAllByTestId('post');

    expect(posts).toHaveLength(length);
  });

  it('should show an error when server respond with error status code', async () => {
    render(<App />);

    await moxios.wait(jest.fn)
    await act(async () => {
      const req = moxios.requests.mostRecent();

      req.respondWith({
        status: 500,
      });
    });

    const error = screen.getByText(/something went wrong/i);
    expect(error).toBeInTheDocument();
  });
});
