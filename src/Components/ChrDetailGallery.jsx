import React, { useEffect, useState } from "react";
import HeaderFlags from "./HeaderFlags";
import "./ChrDetailGallery.scss";
import { ScrollPanel } from "primereact/scrollpanel";
// import axios from "axios";
import TestSergi from "./TestSergi";

const ChrDetailGallery = ({ data }) => {
  //   const [housesDetail, setHousesDetail] = useState();
  //   useEffect(() => {
  //     const getHousesDetail = async () => {
  //       //   setIsLoading(true);
  //       const res = await axios.get(
  //         `https://api.got.show/api/show/houses/${data.house}`
  //       );
  //       setHousesDetail(res.data[0]);
  //       //   setIsLoading(false);
  //       console.log("sergi", res.data[0]);
  //     };
  //     getHousesDetail();
  //   }, [data.name]);

  //   console.log("teto", data);

  // export const getHousesDetail = async () => {
  //   //   setIsLoading(true);
  //   const res = await axios.get(
  //     `https://api.got.show/api/show/houses/${data.house}`
  //   );
  //   setHousesDetail(res.data[0]);
  //   //   setIsLoading(false);
  //   console.log("sergi", res.data[0]);
  // };
  // getHousesDetail();

  return (
    <div className="page">
      <div>
        <HeaderFlags />
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
              <h4>House</h4>
              <div className="box">
                <p>{data.house}</p>
                {/* <TestSergi data={data.house}></TestSergi> */}
              </div>
            </div>

            <div className="alliances">
              <h4>Allegiances</h4>
              <ScrollPanel style={{ width: "100%", height: "200px" }}>
                <div className="box">
                  {data.allegiances.map((item) => (
                    <p>{item}</p>
                  ))}
                </div>
              </ScrollPanel>
            </div>

            <div className="appearances">
              <h4>Apperances</h4>
              <div className="box">
                {data.appearances.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>

            <div className="father">
              <h4>Father</h4>
              <div className="box">
                <p>{data.father}</p>
              </div>
            </div>

            <div className="decendents">
              <h4>Descendents</h4>
              <div className="box">
                {data.siblings.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>

            <div className="titles">
              <h4>titles</h4>
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
