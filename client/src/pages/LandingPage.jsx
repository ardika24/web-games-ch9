import style from "../styles/LandingPage.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import cn from "classnames";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Play Free Online Games - Binar Games";
  }, []);

  return (
    <div className={style.landingPage}>
      <div className={cn(style.content, "py-4")}>
        <h1>PLAY OUR GAMES NOW AND GET NEW EXPERIENCES</h1>
        <br />
        <h1>PLEASE LOGIN TO PLAY!</h1>

        <Button
          variant="primary"
          type="submit"
          onClick={() => navigate("/game-list")}
        >
          PLAY NOW!
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
