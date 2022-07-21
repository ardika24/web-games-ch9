import { Navbar, Container, Button, Table } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import style from "./css/GameDetail.module.css";

export default function GameDetail() {
    function back() {
        window.history.back();
    }

    const navigate = useNavigate();

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

        <section className={style.rps}>
            <div className="row d-flex justify-content-center">
                <div className="col d-flex flex-column justify-content-center">
                    <div className="container p-5">
                        <img src="/rockpaperscissor.jpg" alt="rps" />
                    <Button 
                    type="button" 
                    variant="primary" onClick={() => navigate("/rock-paper-scissor")} 
                    className={style.loginButton}>
                        PLAY
                    </Button>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="row pt-5 justify-content-center">
                <div className="col-lg-5">
                    <div className="left text-light">
                        <h2 className="text-center">GAME DESCRIPTION:</h2>
                        <br />
                        <h3 className="text-center">
                            Rock-paper-scissors is a hand game
                            usually played by two people, 
                            in this case you will play against the COM, 
                            where players simultaneously form 
                            one of three shapes with an outstretched hand. 
                            The "rock" beats scissors, 
                            the "scissors" beat paper and 
                            the "paper" beats rock; 
                            if both players throw the same shape, 
                            the game is tied.
                        </h3>
                    </div>
                </div>
                <div className="col-lg-6 text-light">
                <div className={style.right}>
                    <div className="container p-5">
                        <h2 className="text-center">LEADERBOARD:</h2>
                        <br />
                <div>
                <Table borderless responsive="sm">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Score</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><Link to="/user-profile">Jokowi</Link></td>
                            <td>99999</td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Sabrina</td>
                            <td>5432</td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>John</td>
                            <td>4321</td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>Paul</td>
                            <td>3210</td>
                        </tr>

                        <tr>
                            <td>5</td>
                            <td>Jessica</td>
                            <td>2109</td>
                        </tr>
                    </tbody>
                </Table>                
                </div>

                    </div>
                </div>
                </div>
            </div>
        </section>
        </div>
    );
}