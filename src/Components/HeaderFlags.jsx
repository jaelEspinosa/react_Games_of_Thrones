import React from "react";
import spain from "../img/spain.svg";
import britain from "../img/unitedkingdom.svg";

function HeaderFlags() {
  return (
    <ul className="gallery">
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
