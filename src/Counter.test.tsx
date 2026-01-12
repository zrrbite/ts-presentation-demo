import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

describe('Counter', () => {
  it('renders with initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
  });

  it('displays the increment button', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /increment/i });
    expect(button).toBeInTheDocument();
  });

  it('increments count when button is clicked', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /increment/i });

    fireEvent.click(button);
    expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText(/Counter: 2/i)).toBeInTheDocument();
  });

  it('increments multiple times correctly', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /increment/i });

    for (let i = 0; i < 5; i++) {
      fireEvent.click(button);
    }

    expect(screen.getByText(/Counter: 5/i)).toBeInTheDocument();
  });
});
