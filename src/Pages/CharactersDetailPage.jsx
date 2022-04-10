import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChrDetailGallery from "../Components/ChrDetailGallery";
import { LoadingContext } from "../context/LoadingContext";

function CharactersDetailPage() {
  const { name } = useParams();
  const [chrDetail, setChrDetail] = useState();
  
  const { setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    const getChrDetail = async () => {
      setIsLoading(true);
      const res = await axios.get(
        `https://api.got.show/api/show/characters/${name}`
      );
      console.log(res);
      setChrDetail(res.data);
      setIsLoading(false); 
    };
    getChrDetail();
  }, [name]); 
  
  




  return (
    <div>
      <ChrDetailGallery data={chrDetail} />
    </div>
  );
}

export default CharactersDetailPage;
