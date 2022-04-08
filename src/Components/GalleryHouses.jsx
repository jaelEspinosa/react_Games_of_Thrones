import React from "react";
import "./GalleryHouses.scss";

function GalleryHouses({ data }) {
  return (
    <div className="gallery-contain">
      {data.logoURL && (
        <>
          <div>
            <img className="house_image" src={data.logoURL} alt={data.name} />
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
