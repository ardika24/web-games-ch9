import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";

function Header() {
  const { user, logout } = useAuth();

  function jsx_buttonLogout() {
    if (user === null) {
      return <Navbar.Text>Loading User...</Navbar.Text>;
    }

    if (user === false) {
      <Nav>
        <Nav.Link as={NavLink} to="/login">
          Login
        </Nav.Link>
        <Nav.Link as={NavLink} to="/register">
          Register
        </Nav.Link>
      </Nav>;
    }

    return (
      <Nav>
        <Nav.Link onClick={logout}>Logout</Nav.Link>
      </Nav>
    );
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
      className="opacity-50"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img style={{ width: "11rem" }} src="/logo-social1.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end fs-3"
        >
          <Nav>{jsx_buttonLogout()}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
