import { useState, useEffect } from "react";
import { Row, Col, Card, Button, Table } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import style from "./css/GameDetail.module.css";
// import { useAuth } from "../context/auth";

export default function GameDetail() {
  const navigate = useNavigate();
  // const { user } = useAuth();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function boardData() {
      if (loading) return;
      setLoading(true);
      const response = await fetch(
        "http://localhost:4000/api/v1/games/high-score"
      );
      const data = await response.json();

      if (ignore) return;

      setLoading(false);
      setDetails(data.data);
    }

    boardData();

    return () => {
      ignore = true;
    };
  }, [loading]);
  console.log(details)

  useEffect(() => {
    document.title = "Rock Paper Scissor Detail Game Information - Binar Games"
  }, [])

  return (
    <div>
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
                    style={{ width: "13rem" }}
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
                      {details.map((detail, index) => (
                        <tr key={detail}>
                          <td>{index + 1}</td>
                          <td>
                            <Link to={`/user-profile/${detail.id}`}>
                              {detail.username}
                            </Link>
                          </td>
                          <td>{detail.highScore}</td>
                        </tr>
                      ))}
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
