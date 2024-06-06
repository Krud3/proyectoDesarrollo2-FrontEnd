import { describe, it, expect } from 'vitest';
import { render, screen} from '@testing-library/react';
import Home from '../../components/home/Home';

describe('Home Component', () => {
  it('should render the carousel with images and descriptions', () => {
    render(<Home />);
    const carouselImages = screen.getAllByRole('img', { name: /Image/i });
    expect(carouselImages.length).toBe(4); // Asegúrate de que haya 3 imágenes en el carrusel

    
  });


});
