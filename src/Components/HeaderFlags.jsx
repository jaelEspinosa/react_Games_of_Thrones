

import { Link } from "react-router-dom";
import spain from "../img/spain.svg";
import britain from "../img/unitedkingdom.svg";
import GoHome from "./GoHome";
import "./HeaderFind.scss";

function HeaderFlags() {
  
  return (
    <ul className="gallery">
      <li>
      
        <Link to = "/">      
        <GoHome />
        </Link>
      </li>
      <li>
        <img src={spain} alt="spain flag" />
      </li>
      <li>
        <img src={britain} alt="english flag" />
      </li>
    </ul>
  );
}

export default HeaderFlags;
