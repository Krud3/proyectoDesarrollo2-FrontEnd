import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../../components/about/About';
import facebook from '../../assets/facebook.png';
import whatsapp from '../../assets/whatsapp.png';
import gorjeo from '../../assets/gorjeo.png';
import instagram from '../../assets/instagram.png';

describe('Footer Component', () => {
  it('should render all help links', () => {
    render(<Footer />);
    expect(screen.getByText('¿Como comprar?')).toBeInTheDocument();
    expect(screen.getByText('¿Como vender?')).toBeInTheDocument();
    expect(screen.getByText('Central de ayuda')).toBeInTheDocument();
    expect(screen.getByText('Guia de Seguridad')).toBeInTheDocument();
    expect(screen.getByText('Canal de Etica')).toBeInTheDocument();
    expect(screen.getByText('Politica de Privacidad')).toBeInTheDocument();
    expect(screen.getByText('Politica de Tratamiento de Datos Personales')).toBeInTheDocument();
  });

  it('should render event link', () => {
    render(<Footer />);
    expect(screen.getByText('Subastas')).toBeInTheDocument();
  });

  it('should render category link', () => {
    render(<Footer />);
    expect(screen.getByText('Obras de arte')).toBeInTheDocument();
  });

  it('should render about links', () => {
    render(<Footer />);
    expect(screen.getByText('¿quienes Somos?')).toBeInTheDocument();
    expect(screen.getByText('Prensa')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Cultura y Carrera')).toBeInTheDocument();
  });

  it('should render social media icons', () => {
    render(<Footer />);
    expect(screen.getByAltText('facebook')).toHaveAttribute('src', facebook);
    expect(screen.getByAltText('gorjeo')).toHaveAttribute('src', gorjeo);
    expect(screen.getByAltText('instagram')).toHaveAttribute('src', instagram);
    expect(screen.getByAltText('whatsapp')).toHaveAttribute('src', whatsapp);
  });

  it('should render the current year in the copyright', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(`@${currentYear} Copyright reserved.`)).toBeInTheDocument();
  });
});
