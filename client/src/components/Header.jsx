import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, userSelector } from "../store/slices/user";

function Header() {
  const { user, loading, error } = useSelector(userSelector);
  const dispatch = useDispatch();

  function jsx_rightSection() {
    if (loading) {
      return (
        <Navbar.Text className="text-light text-center fs-3">
          Loading User...
        </Navbar.Text>
      );
    }

    if (error) {
      return (
        <Navbar.Text>Somethin went wrong when loading user data</Navbar.Text>
      );
    }

    if (!user) {
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
          <img style={{ width: "3rem" }} src="/profile1.png" alt="profile" />
        </Nav.Link>
        <Nav.Link onClick={() => dispatch(logout())}>Logout</Nav.Link>
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
        <Navbar.Brand as={NavLink} to="/">
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
