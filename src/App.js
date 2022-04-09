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
import { FindContext } from "./context/FindContext";
import { LoadingContext } from "./context/LoadingContext";
import Loading from "./Components/Loading";


// import { Navigate, Outlet } from "react-router-dom";

function App() {
  const [isSpanish, setIsSpanish] = useState(true);
  const { t, i18n } = useTranslation(["translation"]);
  const [find, setFind]=useState(true)
  const [isLoading,setIsLoading]=useState(false);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };
  return (

    <Router>
    <LoadingContext.Provider value =  {{setIsLoading}}>
    <Loading isLoading={isLoading}/>
    <FindContext.Provider value ={{find,setFind}}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/characters/:name" element={<CharactersDetailPage />} />
          <Route path="/houses" element={<HousesPage />} />
          <Route path="/houses/:id" element={<HousesDetailPage />} />
          <Route path="/cronology" element={<CronologyPage />} />
        </Routes>
      </div>
      </FindContext.Provider>
      </LoadingContext.Provider>
     
    </Router>
  );
}

export default App;
