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
import GameDetailRPS from "./pages/GameDetailRPS";
import GameDetailTTT from "./pages/GameDetailTTT";
import RockPaperScissor from "./games/RockPaperScissor";
import { ProvideAuth } from "./context/auth";
import RequireAuth from "./components/RequireAuth";
import TicTacToe from "./games/TicTacToe";

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
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <HomePage />
                </RequireAuth>
              }
            />

            <Route
              path="/user/:id"
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
                  <GameDetailRPS />
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
            <Route
              path="/tic-tac-toe"
              element={
                <RequireAuth>
                  <GameDetailTTT />
                </RequireAuth>
              }
            />
            <Route
              path="/tic-tac-toe/play"
              element={
                <RequireAuth>
                  <TicTacToe />
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
