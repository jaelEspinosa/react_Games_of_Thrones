import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  return (
    
       <ul className="nav">
         <li className="nav-item"><Link to = "/characters">PERSONAJES</Link></li>
         <li className="nav-item"><Link to = "/houses">CASAS</Link></li>
         <li className="nav-item"><Link to = "/cronology">CRONOLOGIA</Link></li>
        </ul>
   
  
  );
};

export default Menu;

