import { cleanup, render, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';
import { CounterProvider } from '../../context/counter'

describe('Counter', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should increment count when clicking button', () => {
    const { getByText } = render(
      <CounterProvider>
        <Counter />
      </CounterProvider>
    );

    const button = getByText(/increment/i);

    expect(getByText("0")).toBeInTheDocument();

    fireEvent.click(button);

    expect(getByText("1")).toBeInTheDocument();
  });
});
