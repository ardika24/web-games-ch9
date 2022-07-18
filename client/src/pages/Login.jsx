import {Form, Button} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import style from "../pages/Login.module.css";

function Login() {
    const navigate = useNavigate();
    return (
    <div>
        <div className={style.back}>
            <img src="/back-button.png" alt="back" style={{width: "3rem"}} onClick={() => navigate(-1)} />
            <span>
                <button onClick={() => navigate(-1)}>BACK</button>
            </span>
        </div>
        <div className="row pt-3 justify-content-center">
            <div className="col-lg-6 col-sm-5 px-sm-3 d-flex flex-column justify-content-center" id={style.loginForm}>
                <h2 className="fs-3 text-center text-light">LOG IN TO CONTINUE</h2>
                <Form className="d-grid">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email or Username</Form.Label>
                        <Form.Control type="email" placeholder="Enter email or username" />
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
                <p>Don't have an account? <Link to="/register" className="text-light text-center">Register</Link></p>
            </div>
        </div>
    </div>
    );
}

export default Login;