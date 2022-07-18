import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Register from "./pages/Register";
import EditProfile from "./pages/EditProfile";
import HomePage from "./pages/HomePage";

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
