import axios from "axios";
import React, { useEffect, useState } from "react";

function TestSergi({ data }) {
  const [housesDetail, setHousesDetail] = useState();

  useEffect(() => {
    const getHousesDetail = async () => {
      //   setIsLoading(true);
      console.log("la data es", data);
      const res = await axios.get(
        `https://api.got.show/api/show/houses/${data}`
      );
      setHousesDetail(res.data[0]);
      //   setIsLoading(false);
      console.log("sergi", res.data);
    };
    getHousesDetail();
  }, []);

  //la idea es devolver la foto por aquí...

  return (
    <>
      <img src={housesDetail.logoURL} alt=""></img>
    </>
  );
}

export default TestSergi;
