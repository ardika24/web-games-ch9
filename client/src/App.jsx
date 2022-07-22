import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Register from "./pages/Register";
import EditProfile from "./pages/EditProfile";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import GameList from "./pages/GameList";
import GameDetail from "./pages/GameDetail";
import RockPaperScissor from "./games/RockPaperScissor";
import { ProvideAuth } from "./context/auth";

function App() {
  return (
    <BrowserRouter>
      <ProvideAuth>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/game-list" element={<GameList />} />
            <Route path="/rock-paper-scissor" element={<GameDetail />} />
            <Route
              path="/rock-paper-scissor/play"
              element={<RockPaperScissor />}
            />
          </Routes>
        </div>
      </ProvideAuth>
    </BrowserRouter>
  );
}

export default App;
