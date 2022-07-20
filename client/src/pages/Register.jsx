import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./css/Register.module.css";

function Register() {
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
          id={style.regForm}
        >
          <h2 className="fs-3 text-center text-light">
            REGISTER FOR YOUR ACCOUNT
          </h2>
          <Form className="d-grid">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email Address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="password" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <p className={style.p1}>
              By clicking the register button, I’m 16 years of age or older and
              accept the Cloud Terms of Service and acknowledge the Privacy
              Policy.
            </p>
            <Button type="submit" className={style.regButton}>
              Register
            </Button>
          </Form>
          <p className={style.p2}>
            *if success, you’ll be redirected to the Log in page
          </p>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-light text-center">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
