import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "../pages/MyProfile.module.css";

export default function MyProfile() {
  function back() {
    window.history.back();
  }
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className={style.back}>
        <img
          src="/back-button.png"
          alt="back"
          style={{ width: "3rem" }}
          onClick={back}
        />
        <span>
          <button onClick={back}>BACK</button>
        </span>
      </div>
      <div className="row pt-5">
        <div className="col-lg-5">
          <div className="left text-light">
            <p className="text-center">Here's your profile.</p>
            <p className="text-center">
              You can edit by clicking the "Edit" button.
            </p>
            <img
              src="/cartoon.png"
              alt="cartoon"
              className="img-fluid"
              style={{ width: "35em" }}
            />
          </div>
        </div>
        <div className="col-lg text-light">
          <div className={style.right}>
            <div className="container p-4">
              <h2 className="text-center">YOUR PROFILE</h2>
              <br />
              <div>
                <h5>Email:</h5>
                <p>email.com</p>
                <h5>Username:</h5>
                <p>username</p>
                <h5>Total Score:</h5>
                <p>1000</p>
                <h5>Bio:</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  quidem perferendis aliquid cumque blanditiis labore?
                </p>
                <h5>Twitter:</h5>
                <p>@twitter</p>
                <h5>City:</h5>
                <p>zimbabwe</p>
              </div>
              <div className="row justify-content-center mt-3">
                <Button
                  type="submit"
                  className={style.loginButton}
                  onClick={() => navigate("/edit-profile")}
                >
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
