import "./css/LandingPage.css";
import Header from "../components/Header";

function LandingPage() {
  return (
    <>
      <Header />
      <div id="landing-page">
        <div className="content py-4">
          <h1>PLAY OUR GAMES NOW AND GET NEW EXPERIENCES</h1>
          <br />
          <h1>PLEASE LOGIN TO PLAY!</h1>

          <button type="button" class="btn btn-lg btn-primary">
            PLAY NOW!
          </button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
