import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import CharactersPage from "./Pages/CharactersPage";
import CharactersDetailPage from "./Pages/CharactersDetailPage";
import HousesPage from "./Pages/HousesPage";
import HousesDetailPage from "./Pages/HousesDetailPage";
import CronologyPage from "./Pages/CronologyPage";

// import { Navigate, Outlet } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>GAME OF THRONES!!!</h1>
        <HomePage></HomePage>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/characters/:id" element={<CharactersDetailPage />} />
          <Route path="/houses" element={<HousesPage />} />
          <Route path="/houses/:id" element={<HousesDetailPage />} />
          <Route path="/cronology" element={<CronologyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
