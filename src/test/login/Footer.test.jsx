import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from '../../components/about/About'; 

describe('About Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<About />);
    expect(container).toBeTruthy();
  });

  it('contains all the expected sections and links', () => {
    const { getByText } = render(<About />);

    
    expect(getByText('Ayuda')).toBeInTheDocument();
    expect(getByText('Eventos')).toBeInTheDocument();
    expect(getByText('Categorias')).toBeInTheDocument();
    expect(getByText('Sobre o grupo')).toBeInTheDocument();

    expect(getByText('¿Como comprar?')).toBeInTheDocument();
    expect(getByText('¿Como vender?')).toBeInTheDocument();
    expect(getByText('Central de ayuda')).toBeInTheDocument();
    expect(getByText('Guia de Seguridad')).toBeInTheDocument();
    expect(getByText('Canal de Etica')).toBeInTheDocument();
    expect(getByText('Politica de Privacidad')).toBeInTheDocument();
    expect(getByText('Politica de Tratamiento de Datos Personales')).toBeInTheDocument();
    expect(getByText('Subastas')).toBeInTheDocument();
    expect(getByText('Obras de arte')).toBeInTheDocument();
    expect(getByText('¿quienes Somos?')).toBeInTheDocument();
    expect(getByText('Prensa')).toBeInTheDocument();
    expect(getByText('Blog')).toBeInTheDocument();
    expect(getByText('Cultura y Carrera')).toBeInTheDocument();

   
  });

  it('renders social media icons', () => {
    const { container } = render(<About />);
    const socialMediaIcons = container.querySelectorAll('.socialmedia img');
    expect(socialMediaIcons.length).toBe(4);
  });
});