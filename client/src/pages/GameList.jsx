import { Carousel, Button, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../styles/GameList.module.css";
import { useEffect } from "react";

export default function GameList() {
  useEffect(() => {
    document.title = "Play your favourite game - Binar Games";
  }, []);

  return (
    <div className={style.home}>
      <div className="container-fluid pt-5 text-center">
        <br />
        <br />
        <h1 className="text-light text-center">Game Recommendations</h1>
        <br />
        <div className="row pt-3">
          <div className="col-lg">
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => {
                return (
                  <Col key={idx}>
                    <Card className="bg-dark text-white">
                      <Card.Img src={`/game${idx + 1}.jpg`} alt="Card image" />
                      <Card.ImgOverlay className="d-flex align-items-center justify-content-center shadow-lg">
                        <Card.Title>
                          <Button
                            as={Link}
                            to="/rock-paper-scissor"
                            type="button"
                            className="opacity-75"
                          >
                            Play Now!
                          </Button>
                        </Card.Title>
                      </Card.ImgOverlay>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
          <div className="col-lg-4">
            <Carousel variant="dark" className="shadow-lg m-3">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/rockpaperscissor.jpg"
                  alt="First slide"
                />
                <Carousel.Caption className="text-dark fs-4">
                  <Button as={Link} to="/rock-paper-scissor" type="button">
                    Play Now!
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="tictactoe.png"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <Button as={Link} to="/tic-tac-toe" type="button">
                    Play Now!
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg">
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                  <Card className="bg-dark text-white">
                    <Card.Img src={`/game${idx + 1}.jpg`} alt="Card image" />
                    <Card.ImgOverlay className="d-flex align-items-center justify-content-center shadow-lg">
                      <Card.Title>
                        <Button
                          as={Link}
                          to="/tic-tac-toe"
                          type="button"
                          className="opacity-75"
                        >
                          Play Now!
                        </Button>
                      </Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>

      <div className="container-fluid text-center">
        <br />
        <br />
        <h1 className="text-light text-center">New Games</h1>
        <br />
        <div className="row pt-3">
          <div className="col-lg">
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                  <Card className="bg-dark text-white">
                    <Card.Img src={`/game${idx + 1}.jpg`} alt="Card image" />
                    <Card.ImgOverlay className="d-flex align-items-center justify-content-center shadow-lg">
                      <Card.Title>
                        <Button
                          as={Link}
                          to="/rock-paper-scissor"
                          type="button"
                          className="opacity-75"
                        >
                          Play Now!
                        </Button>
                      </Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          <div className="col-lg-4">
            <Carousel variant="dark" className="shadow-lg m-3">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/rockpaperscissor.jpg"
                  alt="First slide"
                />
                <Carousel.Caption className="text-dark fs-4">
                  <Button as={Link} to="/rock-paper-scissor" type="button">
                    Play Now!
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="tictactoe.png"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <Button as={Link} to="/tic-tac-toe" type="button">
                    Play Now!
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg">
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                  <Card className="bg-dark text-white">
                    <Card.Img src={`/game${idx + 1}.jpg`} alt="Card image" />
                    <Card.ImgOverlay className="d-flex align-items-center justify-content-center shadow-lg">
                      <Card.Title>
                        <Button
                          as={Link}
                          to="/tic-tac-toe"
                          type="button"
                          className="opacity-75"
                        >
                          Play Now!
                        </Button>
                      </Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
