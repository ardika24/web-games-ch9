import style from "../styles/TicTacToe.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../store/slices/user";
import {
  roundSelector,
  setRound,
  resetRound,
  resetOutput,
} from "../store/slices/round";
import { scoreSelector } from "../store/slices/score";
import { Button } from "@mui/material";

const defaultSquares = () => new Array(9).fill(null);

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function TicTacToe() {
  const [squares, setSquares] = useState(defaultSquares());
  const [winner, setWinner] = useState(null);
  const { user } = useSelector(userSelector);
  const { score } = useSelector(scoreSelector);
  const { round } = useSelector(roundSelector);
  const dispatch = useDispatch();

  function roundReset() {
    dispatch(resetRound());
    dispatch(resetOutput());
  }

  useEffect(() => {
    const isComputerTurn =
      squares.filter((square) => square !== null).length % 2 === 1;
    const linesThatAre = (a, b, c) => {
      return lines.filter((squareIndexes) => {
        const squareValues = squareIndexes.map((index) => squares[index]);
        return (
          JSON.stringify([a, b, c].sort()) ===
          JSON.stringify(squareValues.sort())
        );
      });
    };
    const emptyIndexes = squares
      .map((square, index) => (square === null ? index : null))
      .filter((val) => val !== null);
    const playerWon = linesThatAre("x", "x", "x").length > 0;
    const computerWon = linesThatAre("o", "o", "o").length > 0;
    if (playerWon) {
      setWinner("x");
      dispatch(setRound());
    } else if (computerWon) {
      setWinner("o");
      dispatch(setRound());
    }
    const putComputerAt = (index) => {
      let newSquares = squares;
      newSquares[index] = "o";
      setSquares([...newSquares]);
    };
    if (isComputerTurn) {
      const winingLines = linesThatAre("o", "o", null);
      if (winingLines.length > 0) {
        const winIndex = winingLines[0].filter(
          (index) => squares[index] === null
        )[0];
        putComputerAt(winIndex);
        return;
      }

      const linesToBlock = linesThatAre("x", "x", null);
      if (linesToBlock.length > 0) {
        const blockIndex = linesToBlock[0].filter(
          (index) => squares[index] === null
        )[0];
        putComputerAt(blockIndex);
        return;
      }

      const linesToContinue = linesThatAre("o", null, null);
      if (linesToContinue.length > 0) {
        putComputerAt(
          linesToContinue[0].filter((index) => squares[index] === null)[0]
        );
        return;
      }

      const randomIndex =
        emptyIndexes[Math.ceil(Math.random() * emptyIndexes.length)];
      putComputerAt(randomIndex);
    }
  }, [dispatch, squares]);

  function Square(props) {
    return (
      <div className={style.square} {...props}>
        {props.x ? "x" : props.o ? "o" : ""}
      </div>
    );
  }
  function Board(props) {
    return <div className={style.board} {...props} />;
  }

  function handleSquareClick(index) {
    const isPlayerTurn =
      squares.filter((square) => square !== null).length % 2 === 0;
    if (isPlayerTurn) {
      let newSquares = squares;
      newSquares[index] = "x";
      setSquares([...newSquares]);
    }
  }

  return (
    <>
      <div className={style.tictac}>
        <br />
        <br />
        <br />
        <Board className={style.board}>
          {squares.map((square, index) => (
            <Square
              className={style.square}
              key={index}
              x={square === "x" ? 1 : 0}
              o={square === "o" ? 1 : 0}
              onClick={() => handleSquareClick(index)}
            />
          ))}
        </Board>
        {!!winner && winner === "x" && (
          <div className={style.resultGreen}>You WON!</div>
        )}
        {!!winner && winner === "o" && (
          <div className={style.resultRed}>You LOST!</div>
        )}
      </div>

      <div className="row text-light text-center pt-5 mt-5 justify-content-center">
        <h3>Your total score: {!score ? user.total_score : score}</h3>
      </div>

      <div className="row text-center text-light">
        <div className="col">
          <h4>
            Current Round: <span>{round}</span>
          </h4>
          <Button variant="contained" onClick={() => roundReset()}>
            Reset Round
          </Button>
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
