import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
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
        "Content-Type": "application/json; charset=UTF-8",
      }),
    });

    if (response.ok) {
      const data = await response.json();
      await login(data.accessToken);
      setLoading(false);
      navigate("/home");
    } else {
      const data = await response.json();
      setLoading(false);
      if (data && data.error) {
        if (
          data.error.code === "auth/user-not-found" ||
          data.error.code === "auth/wrong-password"
        ) {
          alert("Invalid username or password!");
        }
      }
    }
  }

  useEffect(() => {
    document.title = "Login to your account - Binar Games";
  }, []);

  return (
    <div className={style.container}>
      <div className="row pt-3 justify-content-center">
        <div
          className="col-lg-6 col-sm-5 px-sm-3 d-flex flex-column justify-content-center"
          id={style.loginForm}
        >
          <h2 className="fs-3 text-center text-light">LOG IN TO CONTINUE</h2>
          <Form className="d-grid" onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" className={style.loginButton}>
              {loading ? "Loading..." : "Login"}
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
