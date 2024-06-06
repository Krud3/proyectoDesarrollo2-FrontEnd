import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../../components/header/Header';


describe('Header Component', () => {

  it('should have a link that navigates to the carousel', () => {
    render(<Header />);
    const carouselLink = screen.getByText(/inicio/i);
    expect(carouselLink).toBeInTheDocument();
    expect(carouselLink).toHaveAttribute('href', '#carousel');
  });

});
