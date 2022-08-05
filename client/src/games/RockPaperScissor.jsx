import { useEffect, useRef, useState } from "react";
import style from "../styles/RockPaperScissor.module.css";
import { useAuth } from "../context/auth";

export default function RockPaperScissor() {
  const { user } = useAuth();
  const [uRockIsActive, setURockIsActive] = useState(false);
  const [uPaperIsActive, setUPaperIsActive] = useState(false);
  const [uScissorIsActive, setUScissorIsActive] = useState(false);
  const [comRockIsActive, setComRockIsActive] = useState(false);
  const [comPaperIsActive, setComPaperIsActive] = useState(false);
  const [comScissorIsActive, setComScissorIsActive] = useState(false);

  const [result, setResult] = useState("");

  const winScore = useRef(null);
  const score = useRef(null);
  const hasil = useRef(null);

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

  useEffect(() => {
    function win() {
      if (winScore.current.textContent === "You Win!") {
        score.current += 1;
        hasil.current.textContent = `${score.current}`;
      }

      if (
        winScore.current.textContent === "You Lose!" ||
        winScore.current.textContent === "Draw!"
      ) {
        score.current = 0;
        hasil.current.textContent = "0";
      }
    }
    win();
  }, [result]);

  useEffect(() => {
    async function addScore() {
      if (score.current >= 1 && score.current < 3) {
        const response = await fetch(
          `http://localhost:4000/api/v1/user/${user.id}`,
          {
            method: "PUT",
            body: JSON.stringify({
              total_score: 10,
            }),
            headers: new Headers({
              "Content-Type": "application/json; charset=UTF-8",
            }),
          }
        );

        if (response.ok) {
          alert("You got 10 points");
        }
      }
      if (score.current >= 3) {
        const response = await fetch(
          `http://localhost:4000/api/v1/user/${user.id}`,
          {
            method: "PUT",
            body: JSON.stringify({
              total_score: 30,
            }),
            headers: new Headers({
              "Content-Type": "application/json; charset=UTF-8",
            }),
          }
        );

        if (response.ok) {
          alert(
            `You got ${score.current} win streaks and 30 points, keep going!`
          );
        }
      }
    }
    addScore();
  }, [user.id, score.current]);

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

  useEffect(() => {
    document.title = "Rock Paper Scissor Play Room - Binar Games";
  }, []);

  return (
    <div className={style.home}>
      <div className="row text-light text-center pt-5 mt-5 justify-content-center">
        <div className="col">
          <h3>{user.username}</h3>
        </div>
        <div className="col">
          <h3>COM</h3>
        </div>
      </div>

      <div className="row text-center text-light">
        <div className="col">
          <h6>Reach 3 or more win streaks to get more points!</h6>
        </div>
      </div>

      <div className="row text-center text-light">
        <div className="col">
          <h4>
            Win Streak: <span ref={hasil}>0</span>
          </h4>
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
          <h1 className="text-center text-light" ref={winScore}>
            {result ? result : "VS"}
          </h1>
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
