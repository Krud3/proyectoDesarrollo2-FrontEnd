import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-info">
          <h4>Contacto</h4>
          <p>Dirección: Calle 52 #123-45, Bogota</p>
          <p>Teléfono: +57 314 568 9813</p>
          <p>Email: gallerygavel@gmail.com</p>
          <p>NIT: 123456789</p>
        </div>
        <div className="social-links">
          <h4>Síguenos</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" />
          </a>
        </div>
        <div className="backing2">
        <h4>Con el respaldo de:</h4>
          <img src="https://cdn.shopify.com/s/files/1/1781/0251/files/respaldos.png?v=1595539173" alt="Respaldo2" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
