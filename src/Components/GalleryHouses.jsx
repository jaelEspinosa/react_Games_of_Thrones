import React from "react";
import { Link } from "react-router-dom";
import "./GalleryHouses.scss";

function GalleryHouses({ data }) {
  return (
    <div className="gallery-contain">
      {data.logoURL && (
        <>
          <div>
            <Link to={`/houses/${data.name}`}>
              <img className="house_image" src={data.logoURL} alt={data.name} />
            </Link>
          </div>
          <div>
            <p className="house_title">{data.name}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default GalleryHouses;
