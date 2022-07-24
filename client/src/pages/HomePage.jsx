import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "./css/HomePage.module.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={style.home}>
      <div className="container-fluid">
        <div className="row pt-5">
          <div className="col-lg text-center text-dark">
            <div className={style.text}>
              <h1>Hello there username!</h1>
              <br />
              <h3>Welcome to the Games, where you can play</h3>
              <h3>many games on the list.</h3>
              <br />
              <h3>Increase your points by playing the game and</h3>
              <h3>be the no. 1 gamer on the leaderboard.</h3>
              <br />
              <h3>You can edit your profile in the top right.</h3>
              <br />
              <h3>Go on now, play some games!</h3>
            </div>

            <div className="row justify-content-center mt-4">
              <Button
                type="submit"
                className={style.loginButton}
                onClick={() => navigate("/game-list")}
              >
                Play!
              </Button>
            </div>
          </div>
          <div className="col-lg-4 order-first d-flex  justify-content-center">
            <div className="right">
              <img
                src="/hello1.png"
                alt="hello"
                className="img-fluid"
                style={{ width: "25em" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
