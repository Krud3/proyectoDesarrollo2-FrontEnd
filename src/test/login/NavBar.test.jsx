import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../../components/header/Header';


describe('Header Component', () => {
   it('should have a link that navigates to the footer', () => {

     render(<Header />);
    
     const footerLink = screen.getByText(/footer/i);
    
     expect(footerLink).toBeInTheDocument();
    
     userEvent.click(footerLink);
    
     expect(footerLink).toHaveAttribute('href', '#footer');
   });
  it('should have a link that navigates to the carousel', () => {
    render(<Header />);
    const carouselLink = screen.getByText(/carousel/i);
    expect(carouselLink).toBeInTheDocument();
    expect(carouselLink).toHaveAttribute('href', '#carousel');
  });

  it('should have a link that navigates to the pagination', () => {
    render(<Header />);
    const paginationLink = screen.getByText(/pagination/i);
    expect(paginationLink).toBeInTheDocument();
    expect(paginationLink).toHaveAttribute('href', '#pagination');
  });
});
