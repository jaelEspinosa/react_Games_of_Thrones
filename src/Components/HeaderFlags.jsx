import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import spain from "../img/spain.svg";
import britain from "../img/unitedkingdom.svg";
import { Finder } from "./Finder";
import GoHome from "./GoHome";
import "./HeaderFind.scss";
import './Finder.scss'
import Goback from "./Goback";

function HeaderFlags() {
  const { t, i18n } = useTranslation(["translation"]);
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <ul className="gallery">
      <li className="finder">
      <Finder/>
      
      </li>      
      <li>
        <Link to="/">
          <GoHome />
        </Link>
      </li>
      <li>
        <img
          src={spain}
          alt="spain flag"
          onClick={() => changeLanguage("es")}
        />
      </li>
      <li>
        <img
          src={britain}
          alt="english flag"
          onClick={() => changeLanguage("en")}
        />
      </li>
    </ul>
  );
}

export default HeaderFlags;
