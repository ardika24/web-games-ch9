import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;
