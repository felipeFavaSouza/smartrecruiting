import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

function NavBar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
      <Container>
        <Navbar.Brand href="#home">SmartRecruit 👨🏽‍💻</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className='nav-text-color'>Sobre</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Laptops</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Kits SWAG
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Merchandising</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing" className='nav-text-color'>Contacto</Nav.Link>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;