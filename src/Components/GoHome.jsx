import { useLocation } from "react-router-dom";
import Group from "../img/Group.svg";
import "./GoHome.scss";

const GoHome = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/characters" ||
      location.pathname === "/houses" ||
      location.pathname === "/cronology" ? (
        <img className="home" src={Group} alt="home"></img>
      ) : null}
    </div>
  );
};

export default GoHome;
