import style from "../styles/LandingPage.module.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import cn from "classnames";

function LandingPage() {
  useEffect(() => {
    document.title = "Play Free Online Games - Binar Games";
  }, []);

  return (
    <div className={style.landingPage}>
      <div className={cn(style.content, "py-4")}>
        <h1>PLAY OUR GAMES NOW AND GET NEW EXPERIENCES</h1>
        <br />
        <h1>PLEASE LOGIN TO PLAY!</h1>

        <Button as={Link} to="/game-list" variant="primary" type="button">
          PLAY NOW!
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
