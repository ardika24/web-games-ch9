import style from "../pages/HomePage.module.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function HomePage () {
    return (
        <div className={style.home}>
        <Navbar collapseOnSelect expand="lg" fixed="top" className="opacity-50" style={{backgroundColor: "#6C7AF3"}}>
      <Container>
        <Navbar.Brand href="/"><img style={{width: "11rem"}} src="/logo-social2.png" alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end fs-3">
          <Nav>
            <Nav.Link as={NavLink} to="#gameslist" className="text-dark">ALL GAMES</Nav.Link>
            <Nav.Link as={NavLink} to="#my-profile" className="text-dark">
              PROFILE <img style={{width: "3rem"}} src="/profile1.png" alt="profile"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
        </Navbar>
             <div className="container-fluid">
                <div className="row pt-5">            
                    <div className="col-lg text-center text-dark">
                        <div className={style.text}>
                        <h1>Hello there username!</h1>
                        <br />
                        <h3>Welcome to the Games, where you can play</h3>
                        <h3>many games on the list.</h3>
                        <br />
                        <h3>Increase your points by playing the game and</h3>
                        <h3>be the no. 1 gamer on the leaderboard.</h3>
                        <br />
                        <h3>You can edit your profile in the top right.</h3>
                        <br />
                        <h3>Go on now, play some games!</h3>
                        </div>
                        
                        <button type="button" class="btn btn-lg btn-primary">
                            PLAY GAMES!
                        </button> 
                        
                    </div>
                    <div className="col-lg-4">                        
                        <img
                            src="/hello1.png"
                            alt="hello"
                            className="img-fluid"
                            style={{ width: "25em" }}
                            />                        
                    </div>                    
                    
                </div>
             </div>
        </div>
    );
}

export default HomePage;