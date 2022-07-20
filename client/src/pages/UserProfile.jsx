import style from "./css/UserProfile.module.css";

export default function UserProfile() {
  function back() {
    window.history.back();
  }
  return (
    <div>
      <div className={style.header}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <img
                style={{ width: "11rem" }}
                src="/logo-social2.png"
                alt="logo"
              />
            </div>
            <div className="col-4">
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
            </div>
          </div>
        </div>
      </div>

      <div className="row pt-5 justify-content-center">
        <div className="col-lg-6 col-sm-7 px-sm-3 d-flex flex-column justify-content-center text-light">
          <div className={style.right}>
            <div className="container p-5">
              <h2 className="text-center">PROFILE</h2>
              <br />
              <div>
                <h5>Username:</h5>
                <p>Jokowi</p>
                <h5>Total Score:</h5>
                <p>99999</p>
                <h5>Bio:</h5>
                <p>Saya Presiden</p>
                <h5>Instagram:</h5>
                <p>@jokowi</p>
                <h5>City:</h5>
                <p>Jakarta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
