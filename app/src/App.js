import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Home from "./pages/Home";

import Will from "./pages/Will/WillChat";

import WillImages from "./pages/Will/WillImages";

import WillApi from "./pages/Will/WillApi";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Home />} />
            
            <Route path="/will" element={<Will />} />
            <Route path="/will/api" element={<WillApi />} />
            <Route path="/will/images" element={<WillImages />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}
export default App;
