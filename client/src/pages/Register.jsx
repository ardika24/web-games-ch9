import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./css/Register.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  async function onSubmit(event) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);

    const response = await fetch("http://localhost:4000/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, username, password }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });

    setLoading(false);
    if (response.ok) {
      const data = await response.json();
      login(data.accessToken);
      navigate("/home");
    } else {
      const data = await response.json();
      if (data && data.error) {
        if (data.error.code === "auth/user-exists") {
          alert("User already exist, please login");
          navigate("/login");
        }
      }
    }
  }
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
          <button onClick={() => back()}>BACK</button>
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
          <Form className="d-grid" onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </Form.Group>
            <p className={style.p1}>
              By clicking the register button, I’m 16 years of age or older and
              accept the Cloud Terms of Service and acknowledge the Privacy
              Policy.
            </p>
            <Button type="submit" className={style.regButton}>
              {loading ? "Loading..." : "Register"}
            </Button>
          </Form>
          <p>
            Already have an account?
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
