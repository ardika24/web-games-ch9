import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";

function Header() {
  const { user, logout } = useAuth();

  function jsx_rightSection() {
    if (user === null) {
      return <Navbar.Text>Loading User...</Navbar.Text>;
    }

    if (user === false) {
      return (
        <Nav>
          <Nav.Link as={NavLink} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={NavLink} to="/register">
            Register
          </Nav.Link>
          <Nav.Link as={NavLink} to="/game-list">
            All Games
          </Nav.Link>
        </Nav>
      );
    }

    return (
      <Nav>
        <Nav.Link as={NavLink} to="/game-list">
          All Games
        </Nav.Link>
        <Nav.Link as={NavLink} to="/my-profile">
          {user.username}
        </Nav.Link>
        <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
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
        <Navbar.Brand href="/">
          <img style={{ width: "11rem" }} src="/logo-social1.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end fs-3"
        >
          <Nav>{jsx_rightSection()}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
