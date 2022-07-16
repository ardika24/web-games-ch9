import "../pages/LandingPage.css";
import Header from "../components/Header";

function LandingPage() {
    return (
        <>
        <Header />
        <div id="landing-page">
            <h1>PLAY OUR GAMES NOW AND GET NEW EXPERIENCES
            <br />
            PLEASE LOGIN TO PLAY!</h1>
        </div>
            <button type="button" class="btn btn-primary">
                PLAY NOW!
            </button>
        </>
    );
}

export default LandingPage;