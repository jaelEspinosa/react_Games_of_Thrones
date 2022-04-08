import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import GalleryCharact from "../Components/GalleryCharact";
import HeaderFlags from "../Components/HeaderFlags";
import Menu from "../Components/Menu";
import "./CharactersPage.scss";

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get("https://api.got.show/api/show/characters/");

      setCharacters(res.data);
      console.log(res.data);
    };
    getCharacters();
  }, []);

  return (
    <div className="chr-contain">
      <div className="gohome-flasgs-contain">
        <HeaderFlags />
      </div>
      <div className="card-contain">
        <div className="chr-contain__item">
          {characters.map((item) => (
            <GalleryCharact data={item} key={item.id} />
          ))}
        </div>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
}
export default CharactersPage;
