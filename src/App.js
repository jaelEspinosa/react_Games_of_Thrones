import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import CharactersPage from "./Pages/CharactersPage";
import CharactersDetailPage from "./Pages/CharactersDetailPage";
import HousesPage from "./Pages/HousesPage";
import HousesDetailPage from "./Pages/HousesDetailPage";
import CronologyPage from "./Pages/CronologyPage";
import { useTranslation } from "react-i18next";

// import { Navigate, Outlet } from "react-router-dom";

function App() {
  const [isSpanish, setIsSpanish] = useState(true);
  const { t, i18n } = useTranslation(["translation"]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };
  return (
    <Router>
      <div className="App">

        <h1>{t("title")}</h1>

        <div>
          {/* <button type="button" onClick={() => changeLanguage("es")}>
            {t("translation:es")}
          </button>

          <button type="button" onClick={() => changeLanguage("en")}>
            {t("translation:en")}
          </button> */}
        </div>
           
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
