import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../pages/assets/logo-social1.png"

function Header() {
    return (
            <Navbar className={styles.navbar} collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className={styles.navbrand} href="#home" exact>
                        <img src={Logo} alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link className={styles.navlog} as={NavLink} to="#login">LOGIN</Nav.Link>
                    <Nav.Link className={styles.navreg} as={NavLink} to="#register">REGISTER</Nav.Link>
                    <Nav.Link className={styles.navabout} as={NavLink} to="#about">ABOUT US</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default Header;
