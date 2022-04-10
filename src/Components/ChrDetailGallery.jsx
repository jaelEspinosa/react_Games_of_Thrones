import React, { useEffect, useState } from "react";
import HeaderFlags from "./HeaderFlags";
import "./ChrDetailGallery.scss";

import axios from "axios";
import { useTranslation } from "react-i18next";
import {t} from 'i18next'
import GoBack from "./GoBack";
import { Link } from "react-router-dom";




const ChrDetailGallery = ({ data }) => { 
  const [house, setHouse]=useState([])
  const {t, i18n} = useTranslation(["translation"])
 

  useEffect(() => {
    const getHouseDetail = async () => {
      
      const res = await axios.get(
        "https://api.got.show/api/show/houses/"+data.house
      );
      console.log('la bandera es',res.data[0].logoURL);
      setHouse(res.data[0].logoURL) 
      
    };
    getHouseDetail();
  }, []);  
  

  return (
    <div className="page">
     <div>
     <HeaderFlags />
     <div className="go-back">

     <Link to = '/characters'>
         <GoBack />
     </Link>   
     </div>
      
       
        
      </div> 
      <div className="container">
        {data && (
          <figure className="figure">
            <img className="figure-img" src={data.image} alt={data.name}></img>
            <h2 className="figure-item">{data.name}</h2>
          </figure>
        )}
        {data && (
          <article className="article">
            <div className="house">
              <h4>{t("houses")}</h4>
              <div className="box">
               
      {house &&   <img className="house-det" src = {house} alt={data.house}></img>} 
                
              </div>
            </div>

            <div className="alliances">
              <h4>{t("allegiances")}</h4>
              
                <div className="box">
                  {data.allegiances.map((item) => (
                    <p>{item}</p>
                  ))}
                </div>
              
            </div>

            <div className="appearances">
              <h4>{t("appearances")}</h4>
              <div className="box">
                {data.appearances.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>

            <div className="father">
              <h4>{t("father")}</h4>
              <div className="box">
                <p>{data.father}</p>
              </div>
            </div>

            <div className="decendents">
              <h4>{t("related")}</h4>
              <div className="box">
                {data.siblings.map((item) => ( 
                  <p>{item}</p>
                ))}
              </div>
            </div>

            <div className="titles">
              <h4>{t("titles")}</h4>
              <div className="box">
                {data.titles.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>
          </article>
        )}
      </div>
    </div>
  );
};

export default ChrDetailGallery;
