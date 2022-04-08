import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  const { t, i18n } = useTranslation(["translation"]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to="/characters">{t("characters")}</Link>
      </li>
      <li className="nav-item">
        <Link to="/houses">{t("houses")}</Link>
      </li>
      <li className="nav-item">
        <Link to="/cronology">{t("cronology")}</Link>
      </li>
    </ul>
  );
};

export default Menu;
