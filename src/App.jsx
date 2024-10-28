import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage.jsx";

function App() {
  return (
    <Router basename="/<VastraProject>">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
