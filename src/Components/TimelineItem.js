import React from "react";
import "./CronologyGallery.scss";

function TimelineItem({ data }) {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <div className="photocontainer">
          <p class="order">{data.age.age}</p>
          <p>{data.name}</p>
          <img className="image" src={data.image} alt={data.name}></img>
        </div>
        <span className="circle"></span>
      </div>
    </div>
  );
}

export default TimelineItem;
