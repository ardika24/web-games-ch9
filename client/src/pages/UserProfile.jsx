import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAccessToken } from "../store/slices/user";
import style from "../styles/UserProfile.module.css";

export default function UserProfile() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      setLoading(true);
      const response = await fetch(
        `http://localhost:4000/api/v1/user/${params.id}`,
        {
          headers: new Headers({
            Authorization: getAccessToken(),
          }),
        }
      );
      const data = await response.json();

      if (ignore) return;

      setLoading(false);
      setUser(data);
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, [params.id]);

  useEffect(() => {
    document.title = "Profile Information - Binar Games";
  }, []);

  return (
    <div>
      <div className={style.content}>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-sm-7 px-sm-3 d-flex flex-column justify-content-center text-light">
            <div className={style.right}>
              {loading ? (
                <h3>Loading...</h3>
              ) : (
                <div className="container p-5">
                  <h2 className="text-center">{user.username}'s profile</h2>
                  <br />
                  <div>
                    <h5>Username:</h5>
                    <p>{user.username}</p>
                    <h5>Total Score:</h5>
                    <p>{user.total_score}</p>
                    <h5>Bio:</h5>
                    <p>{user.bio}</p>
                    <h5>Social Media:</h5>
                    <p>{user.social_media_url}</p>
                    <h5>City:</h5>
                    <p>{user.city}</p>
                    <h5>Joined At:</h5>
                    <p>{new Date(user.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
