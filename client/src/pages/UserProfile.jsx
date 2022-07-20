import { Navbar, Container } from "react-bootstrap";
import style from "../pages/UserProfile.module.css";

export default function UserProfile() {
  function back() {
    window.history.back();
  }
  return (
    <div>
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        className="opacity-50"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              style={{ width: "11rem" }}
              src="/logo-social1.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Brand className="justify-content-end">
            <img
              src="/back-button.png"
              alt="back"
              style={{ width: "3rem" }}
              onClick={back}
              className={style.back}
            />
            <span className={style.span}>
              <button onClick={back}>BACK</button>
            </span>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div className={style.content}>

      <div className="row justify-content-center">
        <div className="col-lg-6 col-sm-7 px-sm-3 d-flex flex-column justify-content-center text-light">
          <div className={style.right}>
            <div className="container p-5">
              <h2 className="text-center">PROFILE</h2>
              <br />
              <div>
                <h5>Username:</h5>
                <p>Jokowi</p>
                <h5>Total Score:</h5>
                <p>99999</p>
                <h5>Bio:</h5>
                <p>Saya Presiden</p>
                <h5>Instagram:</h5>
                <p>@jokowi</p>
                <h5>City:</h5>
                <p>Jakarta</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}
