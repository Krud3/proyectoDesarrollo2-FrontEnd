import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import About from '../../components/about/About'; // Ajusta la ruta según la estructura de tu proyecto

describe('About Component', () => {
  it('should render the About component', () => {
    render(<About />);
    const aboutElement = screen.getByText(/about/i);
    expect(aboutElement).toBeInTheDocument();
  });
});
