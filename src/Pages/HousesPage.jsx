import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import GalleryHouses from "../Components/GalleryHouses";
import HeaderFlags from "../Components/HeaderFlags";
import Menu from "../Components/Menu";
import { FindContext } from "../context/FindContext";
import { LoadingContext } from "../context/LoadingContext";
import "./CharactersPage.scss";

function HousesPage() {
  const [houses, setHouses] = useState([]);
  const [fhouses, setFHouses] = useState([]);
  const { find } = useContext(FindContext);
  const { setIsloading } = useContext(LoadingContext);

  useEffect(() => {
    const getHouses = async () => {
      // setIsloading(true);
      const res = await axios.get("https://api.got.show/api/show/houses");
      setHouses(res.data);
      // setIsloading(false);
    };
    getHouses();
  }, []);

  useEffect(() => {
    const filtering = () => {
      const filtered = houses.filter((item) =>
        item.name.toLowerCase().includes(find.toLowerCase())
      );
      setFHouses(filtered);
    };
    filtering();
  }, [find]);

  return (
    <div className="chr-contain">
      <div>
        <HeaderFlags></HeaderFlags>
      </div>
      <div className="card-contain">
        <div className="chr-contain__item">
          {find === "" &&
            houses.map((item) => <GalleryHouses data={item} key={item._id} />)}
          {find !== "" &&
            fhouses.map((item) => <GalleryHouses data={item} key={item._id} />)}
        </div>
      </div>
      <div>
        <Menu></Menu>
      </div>
    </div>
  );
}

export default HousesPage;
