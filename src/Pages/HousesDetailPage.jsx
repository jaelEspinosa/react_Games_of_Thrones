import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingContext } from "../context/LoadingContext";
import HousesDetailGallery from "../Components/HousesDetailGallery";

function HousesDetailPage() {
  const { name } = useParams();
  const [housesDetail, setHousesDetail] = useState();
  const { setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    const getHousesDetail = async () => {
      setIsLoading(true);
      const res = await axios.get(
        `https://api.got.show/api/show/houses/${name}`
      );
      setHousesDetail(res.data[0]);
      setIsLoading(false);
    };
    getHousesDetail();
  }, [name]);

  return (
    <div>
      <HousesDetailGallery data={housesDetail}></HousesDetailGallery>
    </div>
  );
}

export default HousesDetailPage;
