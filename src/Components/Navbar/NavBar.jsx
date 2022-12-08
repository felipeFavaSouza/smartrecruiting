import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { categorias } from '../../mock';
import './NavBar.css'

function NavBar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
      <Container>
        <Navbar.Brand href="/">SmartRecruit 👨🏽‍💻</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/sobre" className='nav-link-color'>Sobre</Nav.Link>
            <NavDropdown title="Productos" className='nav-link-color' id="collasible-nav-dropdown">
              <NavDropdown.Item href="/productos/1">Laptops</NavDropdown.Item>
              <NavDropdown.Item href="/productos/2">
                Kits SWAG
              </NavDropdown.Item>
              <NavDropdown.Item href="/productos/3">Merchandising</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contacto" className='nav-link-color'>Contacto</Nav.Link>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;