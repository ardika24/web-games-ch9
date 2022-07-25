import { Button, Form, Col, Row } from "react-bootstrap";
import style from "./css/EditProfile.module.css";
import { useAuth } from "../context/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyProfile() {
  const { user, latestData } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState(user.password);
  const [socmed, setSocMed] = useState(user.social_media_url ?? "");
  const [city, setCity] = useState(user.city ?? "");
  const [bio, setBio] = useState(user.bio ?? "");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);

    const response = await fetch(
      `http://localhost:4000/api/v1/user/${user.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          username,
          password,
          social_media_url: socmed,
          city,
          bio,
        }),
        headers: new Headers({
          "Content-Type": "application/json; charset=UTF-8",
        }),
      }
    );

    setLoading(false);

    if (response.ok) {
      latestData();
      navigate("/my-profile");
    } else {
      const data = await response.json();
      if (data && data.error) {
        if (data.error.name === "SequelizeUniqueConstraintError") {
          alert("Username already taken! Please choose another one");
        }
      }
    }
  }

  return (
    <div className={`${style.container} container-fluid`}>
      <div className="row pt-5">
        <div className="col-lg-5">
          <div className="left text-light">
            <br />
            <br />
            <h4 className="text-center">
              Describe Yourself, make a better profile!
            </h4>
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
              <h2 className="text-center">EDIT PROFILE</h2>
              <br />
              <Row className="row justify-content-center">
                <Form onSubmit={onSubmit} className={style.form}>
                  <Form.Group as={Col} md="7" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="7"
                    controlId="password"
                    className="mt-3"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="7"
                    controlId="social_media_url"
                    className="mt-3"
                  >
                    <Form.Label>Social Media</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setSocMed(e.target.value)}
                      value={socmed}
                    />
                  </Form.Group>

                  {/* <Form.Group
                    as={Col}
                    md="7"
                    controlId="social_media_url"
                    className="mt-3"
                  >
                    <Form.Label>Twitter Profile</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        value={socmed}
                        aria-describedby="inputGroupPrepend"
                        onChange={(e) => setSocMed(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group> */}

                  <Form.Group as={Col} md="7" controlId="city" className="mt-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="7" controlId="bio" className="mt-3">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a bio.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <div className="row justify-content-center mt-4">
                    <Button type="submit" className={style.loginButton}>
                      {loading ? "Loading..." : "Update"}
                    </Button>
                  </div>
                </Form>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
