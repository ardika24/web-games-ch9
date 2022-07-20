import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./css/Login.module.css";

function Login() {
  function back() {
    window.history.back();
  }
  return (
    <div>
      <div className={style.back}>
        <img
          src="/back-button.png"
          alt="back"
          style={{ width: "3rem" }}
          onClick={back}
        />
        <span>
          <button onClick={back}>BACK</button>
        </span>
      </div>
      <div className="row pt-3 justify-content-center">
        <div
          className="col-lg-6 col-sm-5 px-sm-3 d-flex flex-column justify-content-center"
          id={style.loginForm}
        >
          <h2 className="fs-3 text-center text-light">LOG IN TO CONTINUE</h2>
          <Form className="d-grid">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email or username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button type="submit" className={style.loginButton}>
              Login
            </Button>
          </Form>
          <div className="stick d-flex justify-content-center">
            <img src="/stick.png" alt="stick" />
          </div>
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-light text-center">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
