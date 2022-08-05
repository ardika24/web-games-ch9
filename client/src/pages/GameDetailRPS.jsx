import { useState, useEffect } from "react";
import { Row, Col, Card, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../styles/GameDetailRPS.module.css";

export default function GameDetail() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function boardData() {
      setLoading(true);
      const response = await fetch("http://localhost:4000/api/v1/user/");
      const data = await response.json();

      if (ignore) return;

      setLoading(false);
      setDetails(data);
    }

    boardData();

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    document.title = "Rock Paper Scissor Detail Game Information - Binar Games";
  }, []);

  return (
    <div>
      <section className={style.rps}>
        <Row>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src="/rockpaperscissor.jpg" alt="rps" />
              <Card.ImgOverlay className="d-flex align-items-end justify-content-end">
                <Card.Title>
                  <Link to="/rock-paper-scissor/play">
                    <Button
                      type="button"
                      variant="primary"
                      style={{ width: "13rem" }}
                    >
                      PLAY
                    </Button>
                  </Link>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </section>

      <section>
        <div className="row pt-5 justify-content-center mh-100">
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
            <div className={`${style.right} rounded overflow-auto`}>
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

                    {loading ? (
                      <tbody>
                        <tr>
                          <td>Loading...</td>
                        </tr>
                      </tbody>
                    ) : (
                      details.map((detail, index) => (
                        <tbody key={detail.id}>
                          <tr>
                            <td>{index + 1}</td>
                            <td>
                              <Link to={`/user/${detail.id}`}>
                                {detail.username}
                              </Link>
                            </td>
                            <td>{detail.total_score}</td>
                          </tr>
                        </tbody>
                      ))
                    )}
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
