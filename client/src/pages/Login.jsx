import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./css/Login.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  async function onSubmit(event) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);

    const response = await fetch("http://localhost:4000/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });

    // const data = await response.json();
    setLoading(false);

    if (response.ok) {
      const data = await response.json();
      login(data.accessToken);
      navigate("/home");
    } else {
      const data = await response.json();
      if (data && data.error) {
        if (
          data.error.code === "auth/user-not-found" ||
          data.error.code === "auth/wrong-password"
        ) {
          alert("Wrong Username or Password!");
        }
      }
    }
    // console.log(data);
  }
  // function back() {
  //   window.history.back();
  // }

  return (
    <div>
      <div className="row pt-3 justify-content-center">
        <div
          className="col-lg-6 col-sm-5 px-sm-3 d-flex flex-column justify-content-center"
          id={style.loginForm}
        >
          <h2 className="fs-3 text-center text-light">LOG IN TO CONTINUE</h2>
          <Container>
            <Form className="d-grid" onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email or username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </Form.Group>
              <Button type="submit" className={style.loginButton}>
                {loading ? "Loading..." : "Login"}
              </Button>
            </Form>
          </Container>
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
