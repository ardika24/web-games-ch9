import { useEffect, useRef, useState } from "react";
import { getAccessToken } from "../store/slices/user";
import { useSelector } from "react-redux";
import { userSelector } from "../store/slices/user";
import { Snackbar, Alert } from "@mui/material";

export default function RockPaperScissor() {
  const { user } = useSelector(userSelector);
  const accessToken = getAccessToken();
  const [point, setPoint] = useState(false);
  const [choice, setChoice] = useState("user");
  const [botChoice, setBotChoice] = useState("bot");

  const [result, setResult] = useState("VS");

  const winScore = useRef(null);
  const score = useRef(null);

  function comChoice() {
    let com = Math.random();
    if (com < 0.34) {
      setBotChoice("rock");
    } else if (com >= 0.34 && com < 0.67) {
      setBotChoice("paper");
    } else {
      setBotChoice("scissor");
    }
  }

  useEffect(() => {
    function output() {
      if (choice === botChoice) {
        setResult("Draw!");
      }
      if (choice === "rock" && botChoice === "paper") {
        setResult("You Lose!");
      }
      if (choice === "rock" && botChoice === "scissor") {
        setResult("You Win!");
      }
      if (choice === "paper" && botChoice === "scissor") {
        setResult("You Lose!");
      }
      if (choice === "paper" && botChoice === "rock") {
        setResult("You Win!");
      }
      if (choice === "scissor" && botChoice === "rock") {
        setResult("You Lose!");
      }
      if (choice === "scissor" && botChoice === "paper") {
        setResult("You Win!");
      }
    }
    output();
  }, [botChoice, choice]);

  useEffect(() => {
    function win() {
      if (winScore.current.textContent === "You Win!") {
        score.current += 1;
      }

      if (
        winScore.current.textContent === "You Lose!" ||
        winScore.current.textContent === "Draw!"
      ) {
        score.current = 0;
      }
    }
    win();
  }, [result]);

  useEffect(() => {
    async function addScore() {
      if (score.current >= 1) {
        const response = await fetch(
          `http://localhost:4000/api/v1/user/${user.id}`,
          {
            method: "PUT",
            body: JSON.stringify({
              total_score: 10,
            }),
            headers: new Headers({
              "Content-Type": "application/json; charset=UTF-8",
              Authorization: accessToken,
            }),
          }
        );

        if (response.ok) {
          setPoint(true);
          setTimeout(() => {
            setPoint(false);
          }, 2500);
        }
      }
    }
    addScore();
  }, [user.id, accessToken, score.current]);

  const handleURockClick = () => {
    setChoice("rock");
    comChoice();
    setTimeout(() => {
      setChoice("user");
      setBotChoice("bot");
      setResult("VS");
    }, 800);
  };
  const handleUPaperClick = () => {
    setChoice("paper");
    comChoice();
    setTimeout(() => {
      setChoice("user");
      setBotChoice("bot");
      setResult("VS");
    }, 800);
  };
  const handleUScissorClick = () => {
    setChoice("scissor");
    comChoice();
    setTimeout(() => {
      setChoice("user");
      setBotChoice("bot");
      setResult("VS");
    }, 800);
  };

  useEffect(() => {
    document.title = "Rock Paper Scissor Play Room - Binar Games";
  }, []);

  function jsx_alert() {
    return (
      <div>
        <Snackbar
          open="true"
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert icon={false} severity="info">
            You've got 10 points!
          </Alert>
        </Snackbar>
      </div>
    );
  }

  return (
    <div>
      {point && jsx_alert()}
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
          <h4>
            Round: <span>0</span>
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
                transform: choice === "rock" ? "rotate(90deg)" : "",
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
                transform: choice === "paper" ? "rotate(90deg)" : "",
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
                transform: choice === "scissor" ? "rotate(90deg)" : "",
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
            {result}
          </h1>
        </div>
        <div className="col">
          <div className="row justify-content-center p-3">
            <img
              style={{
                width: "10rem",
                transform: botChoice === "rock" ? "rotate(-90deg)" : "",
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
                transform: botChoice === "paper" ? "rotate(-90deg)" : "",
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
                transform: botChoice === "scissor" ? "rotate(-90deg)" : "",
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
