import { useState, useEffect } from "react";
import { Row, Col, Card, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAccessToken } from "../store/slices/user";
import style from "../styles/GameDetailTTT.module.css";
import cn from "classnames";

export default function GameDetail() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const accessToken = getAccessToken();

  useEffect(() => {
    let ignore = false;

    async function boardData() {
      setLoading(true);
      const response = await fetch(
        "http://localhost:4000/api/v1/games/high-score",
        {
          headers: new Headers({ Authorization: accessToken }),
        }
      );
      const data = await response.json();

      if (ignore) return;

      setLoading(false);
      setDetails(data);
    }

    boardData();

    return () => {
      ignore = true;
    };
  }, [accessToken]);

  useEffect(() => {
    document.title = "Rock Paper Scissor Detail Game Information - Binar Games";
  }, []);

  return (
    <div>
      <section className={style.rps}>
        <Row>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src="/tictactoe.png" alt="rps" />
              <Card.ImgOverlay className="d-flex align-items-end justify-content-end">
                <Card.Title>
                  <Button
                    as={Link}
                    to="/tic-tac-toe/play"
                    type="button"
                    variant="primary"
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
        <div className="row pt-5 justify-content-center mh-100">
          <div className="col-lg-5">
            <div className="left text-light">
              <h2 className="text-center">GAME DESCRIPTION:</h2>
              <br />
              <h3 className="text-center">
                This is a game in which two players alternately put Xs and Os in
                compartments of a figure formed by two vertical lines crossing
                two horizontal lines and each tries to get a row of three Xs or
                three Os before the opponent does.
              </h3>
            </div>
          </div>
          <div className="col-lg-6 text-light">
            <div className={cn(style.right, "rounded overflow-auto")}>
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
                      details.data.map((detail, index) => (
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
