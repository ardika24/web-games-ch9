import { Row, Col, Card, Button, Table } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import style from "./css/GameDetail.module.css";

export default function GameDetail() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />

      <section className={style.rps}>
        <Row>              
                <Col>
                  <Card className="bg-dark text-white">
                    <Card.Img src="/rockpaperscissor.jpg" alt="rps" />
                    <Card.ImgOverlay className="d-flex align-items-end justify-content-end">
                      <Card.Title>
                        <Button
                          type="button"
                          variant="primary"
                          onClick={() => navigate("/rock-paper-scissor/play")}
                          style={{width: "13rem"}}
                        >
                          PLAY
                        </Button>
                      </Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
            </Row>
      </section>

      <section>
        <div className="row pt-5 justify-content-center">
          <div className="col-lg-5">
            <div className="left text-light">
              <h2 className="text-center">GAME DESCRIPTION:</h2>
              <br />
              <h3 className="text-center">
                Rock-paper-scissors is a hand game usually played by two people,
                in this case you will play against the COM, where players
                simultaneously form one of three shapes with an outstretched
                hand. The "rock" beats scissors, the "scissors" beat paper and
                the "paper" beats rock; if both players throw the same shape,
                the game is tied.
              </h3>
            </div>
          </div>
          <div className="col-lg-6 text-light">
            <div className={`${style.right} rounded`}>
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
                        <td>
                          <Link to="/user-profile">Jokowi</Link>
                        </td>
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
