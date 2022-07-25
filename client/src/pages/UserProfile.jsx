import { useState, useEffect } from "react";
import style from "./css/UserProfile.module.css";

export default function UserProfile() {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function profileData() {
      setLoading(true);
      const response = await fetch(
        "http://localhost:4000/api/v1/users/${params.id}"
      );
      const data = await response.json();

      if (ignore) return;

      setLoading(false);
      setProfile(data.data);
    }

    profileData();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      <div className={style.content}>
        <div className="row justify-content-center">
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
    </div>
  );
}
