import { Button, Form, Col, InputGroup } from "react-bootstrap";
import style from "./css/EditProfile.module.css";
import { useAuth } from "../context/auth";

export default function MyProfile() {
  const { user } = useAuth();
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
              <div className="row justify-content-center">
                <Form.Group as={Col} md="7" controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control required type="text" value={user.username} />
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="7"
                  controlId="twitter"
                  className="mt-3"
                >
                  <Form.Label>Twitter Profile</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      value={user.social_media_url}
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="7" controlId="city" className="mt-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" value={user.city} required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="7" controlId="bio" className="mt-3">
                  <Form.Label>Bio</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    value={user.bio}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a bio.
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="row justify-content-center mt-4">
                  <Button type="submit" className={style.loginButton}>
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
