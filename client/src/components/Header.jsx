import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../pages/assets/logo-social1.png"

function Header() {
    return ( 
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="opacity-50">
      <Container>
        <Navbar.Brand href="#home"><img style={{width: "11rem"}} src={Logo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end fs-3">
          <Nav>
            <Nav.Link as={NavLink} to="/login" className="text-light">Login</Nav.Link>
            <Nav.Link as={NavLink} to="/register" className="text-light">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Header;
