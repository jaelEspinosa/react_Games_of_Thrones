import axios from "axios";
import React, { useEffect, useState } from "react";
import CronologyGallery from "../Components/CronologyGallery";

function CronologyPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get("https://api.got.show/api/show/characters/");
      setCharacters(res.data);
      console.log("alldatafound", res.data);
    };
    getCharacters();
  }, []);
  return (
    <>
      {characters.length !== 0 && (
        <CronologyGallery data={characters}></CronologyGallery>
      )}
    </>
  );
}

export default CronologyPage;
