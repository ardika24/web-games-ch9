import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../styles/MyProfile.module.css";
import { useAuth } from "../context/auth";
import { useEffect } from "react";
import cn from "classnames";

export default function MyProfile() {
  const { user } = useAuth();

  useEffect(() => {
    document.title = `${user.username} profile - Binar Games`;
  }, [user.username]);

  return (
    <div className={cn(style.container, "container-fluid")}>
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
                <p>{user.email}</p>
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
              <div className="row justify-content-center mt-3">
                <Button
                  as={Link}
                  to="/edit-profile"
                  type="button"
                  className={style.loginButton}
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
