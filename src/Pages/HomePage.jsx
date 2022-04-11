import React from "react";
import { useTranslation } from "react-i18next";
import HeaderFlags from "../Components/HeaderFlags";
import Menu from "../Components/Menu";
import "./HomePage.scss";

function HomePage() {
  const { t, i18n } = useTranslation(["translation"]);

  return (
    <>
      <div className="contain">
        <HeaderFlags></HeaderFlags>;<h1 className="title">{t("title")}</h1>
        <Menu />
      </div>
    </>
  );
}

export default HomePage;
