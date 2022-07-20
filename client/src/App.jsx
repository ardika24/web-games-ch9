import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Register from "./pages/Register";
import EditProfile from "./pages/EditProfile";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import GameList from "./pages/GameList";

function App() {
  return (
    <BrowserRouter>
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
