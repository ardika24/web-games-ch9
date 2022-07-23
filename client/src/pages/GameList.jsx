import {
  Carousel,
  Button,
  Col,
  Row,
  Card,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import style from "./css/GameList.module.css";

export default function GameList() {
  const navigate = useNavigate();

  return (
    <div className={style.home}>
      <Header />

      <div className="container-fluid pt-5 text-center">
        <br />
        <br />
        <h1 className="text-light text-center">Game Recommendations</h1>
        <br />
        <div className="row pt-3">
          <div className="col-lg">
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                  <Card className="bg-dark text-white">
                    <Card.Img src={`/game${idx + 1}.jpg`} alt="Card image" />
                    <Card.ImgOverlay className="d-flex align-items-center justify-content-center shadow-lg">
                      <Card.Title>
                        <Button
                          type="submit"
                          onClick={() => navigate("/rock-paper-scissor")}
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
            <Carousel className="shadow-lg m-3">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/rockpaperscissor.jpg"
                  alt="First slide"
                />
                <Carousel.Caption className="text-dark fs-4">
                  <div></div>
                  <Button
                    type="submit"
                    onClick={() => navigate("/rock-paper-scissor")}
                  >
                    Play Now!
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="game1.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg">
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                  <Card className="bg-dark text-white">
                    <Card.Img src={`/game${idx + 1}.jpg`} alt="Card image" />
                    <Card.ImgOverlay className="d-flex align-items-center justify-content-center shadow-lg">
                      <Card.Title>
                        <Button
                          type="submit"
                          onClick={() => navigate("/rock-paper-scissor")}
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
                <Col>
                  <Card className="bg-dark text-white">
                    <Card.Img src={`/game${idx + 1}.jpg`} alt="Card image" />
                    <Card.ImgOverlay className="d-flex align-items-center justify-content-center shadow-lg">
                      <Card.Title>
                        <Button
                          type="submit"
                          onClick={() => navigate("/rock-paper-scissor")}
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
            <Carousel className="shadow-lg m-3">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/rockpaperscissor.jpg"
                  alt="First slide"
                />
                <Carousel.Caption className="text-dark fs-4">
                  <Button
                    type="submit"
                    onClick={() => navigate("/rock-paper-scissor")}
                  >
                    Play Now!
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="game1.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg">
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                  <Card className="bg-dark text-white">
                    <Card.Img src={`/game${idx + 1}.jpg`} alt="Card image" />
                    <Card.ImgOverlay className="d-flex align-items-center justify-content-center shadow-lg">
                      <Card.Title>
                        <Button
                          type="submit"
                          onClick={() => navigate("/rock-paper-scissor")}
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
