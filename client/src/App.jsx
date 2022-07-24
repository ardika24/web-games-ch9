import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
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
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <BrowserRouter>
      <ProvideAuth>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/my-profile"
              element={
                <RequireAuth>
                  <MyProfile />
                </RequireAuth>
              }
            />
            <Route
              path="/edit-profile"
              element={
                <RequireAuth>
                  <EditProfile />
                </RequireAuth>
              }
            />
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/user-profile"
              element={
                <RequireAuth>
                  <UserProfile />
                </RequireAuth>
              }
            />
            <Route path="/game-list" element={<GameList />} />
            <Route
              path="/rock-paper-scissor"
              element={
                <RequireAuth>
                  <GameDetail />
                </RequireAuth>
              }
            />
            <Route
              path="/rock-paper-scissor/play"
              element={
                <RequireAuth>
                  <RockPaperScissor />
                </RequireAuth>
              }
            />
          </Routes>
        </div>
      </ProvideAuth>
    </BrowserRouter>
  );
}

export default App;
