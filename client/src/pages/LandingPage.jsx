import "./css/LandingPage.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div id="landing-page">
        <div className="content py-4">
          <h1>PLAY OUR GAMES NOW AND GET NEW EXPERIENCES</h1>
          <br />
          <h1>PLEASE LOGIN TO PLAY!</h1>

          <button
            type="button"
            class="btn btn-lg btn-primary"
            onClick={() => navigate("/game-list")}
          >
            PLAY NOW!
          </button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
