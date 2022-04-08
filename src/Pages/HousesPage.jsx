import axios from "axios";
import React, { useEffect, useState } from "react";
import GalleryHouses from "../Components/GalleryHouses";
import HeaderFlags from "../Components/HeaderFlags";
import Menu from "../Components/Menu";
import "./CharactersPage.scss";

function HousesPage() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const getHouses = async () => {
      const res = await axios.get("https://api.got.show/api/show/houses");
      setHouses(res.data);
    };
    getHouses();
  }, []);

  return (
    <div className="chr-contain">
      <div>
        <HeaderFlags></HeaderFlags>
      </div>
      <div className="card-contain">
        <div className="chr-contain__item">
          {houses.map((item) => (
            <GalleryHouses data={item} key={item._id} />
          ))}
        </div>
      </div>
      <div>
        <Menu></Menu>
      </div>
    </div>
  );
}

export default HousesPage;
