import { useTranslation } from "react-i18next";
import React from "react";
import HeaderFlags from "./HeaderFlags";

function HousesDetailGallery({ data }) {
  const { t, i18n } = useTranslation(["translation"]);
  return (
    <div className="page">
      <div>
        <HeaderFlags></HeaderFlags>
      </div>
      <div className="container">
        {data && (
          <figure className="figure">
            <img
              className="figure-img"
              src={data.logoURL}
              alt={data.name}
            ></img>
            <h2 className="figure-item">{data.name}</h2>
          </figure>
        )}
        {data && (
          <article className="article">
            <div className="house">
              <h4>{t("words")}</h4>
              <div className="box">
                <p>{data.words}</p>
              </div>
            </div>

            <div className="a">
              <h4>{t("seat")}</h4>
              <div className="box">
                {data.seat.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>

            <div className="b">
              <h4>{t("region")}</h4>
              <div className="box">
                {data.region.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>

            <div className="c">
              <h4>{t("allegiances")}</h4>
              <div className="box">
                {data.allegiance.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>

            <div className="d">
              <h4>{t("religion")}</h4>
              <div className="box">
                {data.religion.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>

            <div className="">
              <h4>{t("words")}</h4>
              <div className="box">
                <p>{data.createdAt.slice(0, 10)}</p>
              </div>
            </div>
          </article>
        )}
      </div>
    </div>
  );
}

export default HousesDetailGallery;
