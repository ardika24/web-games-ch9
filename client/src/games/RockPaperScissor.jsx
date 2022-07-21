import { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import style from "./RockPaperScissor.module.css";

export default function RockPaperScissor() {
  function back() {
    window.history.back();
  }

  const [uRockIsActive, setURockIsActive] = useState(false);
  const [uPaperIsActive, setUPaperIsActive] = useState(false);
  const [uScissorIsActive, setUScissorIsActive] = useState(false);
  const [comRockIsActive, setComRockIsActive] = useState(false);
  const [comPaperIsActive, setComPaperIsActive] = useState(false);
  const [comScissorIsActive, setComScissorIsActive] = useState(false);

  const [result, setResult] = useState("");

  function comChoice() {
    let com = Math.random();
    if (com < 0.34) {
      setComRockIsActive(true);
      setComPaperIsActive(false);
      setComScissorIsActive(false);
    } else if (com >= 0.34 && com < 0.67) {
      setComPaperIsActive(true);
      setComRockIsActive(false);
      setComScissorIsActive(false);
    } else {
      setComScissorIsActive(true);
      setComPaperIsActive(false);
      setComRockIsActive(false);
    }
  }

  useEffect(() => {
    function output() {
      if (uRockIsActive === true && comPaperIsActive === true)
        setResult("You Lose!");
      if (uRockIsActive === true && comScissorIsActive === true)
        setResult("You Win!");
      if (uRockIsActive === true && comRockIsActive === true)
        setResult("Draw!");

      if (uPaperIsActive === true && comPaperIsActive === true)
        setResult("Draw!");
      if (uPaperIsActive === true && comScissorIsActive === true)
        setResult("You Lose!");
      if (uPaperIsActive === true && comRockIsActive === true)
        setResult("You Win!");

      if (uScissorIsActive === true && comPaperIsActive === true)
        setResult("You Win!");
      if (uScissorIsActive === true && comScissorIsActive === true)
        setResult("Draw!");
      if (uScissorIsActive === true && comRockIsActive === true)
        setResult("You Lose!");
    }
    output();
  }, [
    comPaperIsActive,
    comRockIsActive,
    comScissorIsActive,
    uPaperIsActive,
    uRockIsActive,
    uScissorIsActive,
  ]);

  const handleURockClick = () => {
    setURockIsActive(true);
    setUPaperIsActive(false);
    setUScissorIsActive(false);
    comChoice();
    setTimeout(() => {
      setURockIsActive(false);
      setUPaperIsActive(false);
      setUScissorIsActive(false);
      setComRockIsActive(false);
      setComPaperIsActive(false);
      setComScissorIsActive(false);
      setResult("");
    }, 800);
  };
  const handleUPaperClick = () => {
    setUPaperIsActive(true);
    setURockIsActive(false);
    setUScissorIsActive(false);
    comChoice();
    setTimeout(() => {
      setURockIsActive(false);
      setUPaperIsActive(false);
      setUScissorIsActive(false);
      setComRockIsActive(false);
      setComPaperIsActive(false);
      setComScissorIsActive(false);
      setResult("");
    }, 800);
  };
  const handleUScissorClick = () => {
    setUScissorIsActive(true);
    setUPaperIsActive(false);
    setURockIsActive(false);
    comChoice();
    setTimeout(() => {
      setURockIsActive(false);
      setUPaperIsActive(false);
      setUScissorIsActive(false);
      setComRockIsActive(false);
      setComPaperIsActive(false);
      setComScissorIsActive(false);
      setResult("");
    }, 800);
  };

  return (
    <div className={style.home}>
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        className="opacity-50"
      >
        <Container>
          <Navbar.Brand href="/landing-page">
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

      <div className="row text-light text-center pt-5 mt-5 justify-content-center">
        <div className="col">
          <h3>Username</h3>
        </div>
        <div className="col">
          <h3>COM</h3>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col">
          <div className="row justify-content-center p-3">
            <img
              style={{
                width: "10rem",
                cursor: "pointer",
                transform: uRockIsActive ? "rotate(90deg)" : "",
                transition: "300ms",
              }}
              onClick={handleURockClick}
              src="/userRock.png"
              alt="user"
            />
          </div>
          <div className="row justify-content-center p-3">
            <img
              style={{
                width: "8rem",
                cursor: "pointer",
                transform: uPaperIsActive ? "rotate(90deg)" : "",
                transition: "300ms",
              }}
              onClick={handleUPaperClick}
              src="/userPaper.png"
              alt="user"
            />
          </div>
          <div className="row justify-content-center p-3">
            <img
              style={{
                width: "10rem",
                cursor: "pointer",
                transform: uScissorIsActive ? "rotate(90deg)" : "",
                transition: "300ms",
              }}
              onClick={handleUScissorClick}
              src="/userScissors.png"
              alt="user"
            />
          </div>
        </div>
        <div className="col-1">
          <h1 className="text-center text-light">{result ? result : "VS"}</h1>
        </div>
        <div className="col">
          <div className="row justify-content-center p-3">
            <img
              style={{
                width: "10rem",
                transform: comRockIsActive ? "rotate(-90deg)" : "",
                transition: "300ms",
              }}
              src="/comRock.png"
              alt="com"
            />
          </div>
          <div className="row justify-content-center p-3">
            <img
              style={{
                width: "8rem",
                transform: comPaperIsActive ? "rotate(-90deg)" : "",
                transition: "300ms",
              }}
              src="/comPaper.png"
              alt="com"
            />
          </div>
          <div className="row justify-content-center p-3">
            <img
              style={{
                width: "10rem",
                transform: comScissorIsActive ? "rotate(-90deg)" : "",
                transition: "300ms",
              }}
              src="/comScissors.png"
              alt="com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
