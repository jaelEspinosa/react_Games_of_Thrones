import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChrDetailGallery from "../Components/ChrDetailGallery";


function CharactersDetailPage() {


 const {name} = useParams();
 const [chrDetail, setChrDetail] = useState()
 
 useEffect(()=>{
    const getChrDetail = async ()=>{
      const res = await axios.get(`https://api.got.show/api/show/characters/${name}`)
      console.log(res)
      setChrDetail(res.data)
    }
  getChrDetail();

 },[name])

  return <div>
    <ChrDetailGallery data = {chrDetail}/>
     

  </div>;
}

export default CharactersDetailPage;
