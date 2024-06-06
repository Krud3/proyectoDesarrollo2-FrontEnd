import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#">
                        <img
                            src="src/assets/images/logoPNG.png"
                            alt=""
                            width="30"
                            height="30"  
                            className="d-inline-block align-text-top"
                        />
                        Gallery Art
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="me-auto mb-2 mb-lg-0">
                            <Nav.Link href="#" className="active" aria-current="page">Inicio</Nav.Link>
                            <Nav.Link href="#">Autores</Nav.Link>
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Arte abstracto</NavDropdown.Item>
                                <NavDropdown.Item href="#">Galeria Botero</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Más información</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" className="disabled">Sobre nosotros</Nav.Link>
                        </Nav>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Escribe aquí" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;