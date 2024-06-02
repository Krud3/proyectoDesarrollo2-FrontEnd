import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../../components/home/Home';

describe('Home Component', () => {
  it('should render the carousel with images and descriptions', () => {
    render(<Home />);
    const carouselImages = screen.getAllByRole('img', { name: /slide/i });
    expect(carouselImages.length).toBe(3); // Asegúrate de que haya 3 imágenes en el carrusel

    const carouselCaptions = screen.getAllByText(/slide label/i);
    expect(carouselCaptions.length).toBe(3); // Asegúrate de que haya 3 captions en el carrusel
  });


});
