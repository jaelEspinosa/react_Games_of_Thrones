import React, { useEffect, useState } from "react";
import HeaderFlags from "./HeaderFlags";
import Menu from "./Menu";
import TimelineItem from "./TimelineItem";
import "./CronologyGallery.scss";

function CronologyGallery({ data }) {
  const [orderedAsc, setOrderedAsc] = useState([]);
  const [orderedDesc, setOrderedDesc] = useState([]);
  const [isOrderedAsc, setIsOrderedAsc] = useState(false);

  const getOrderedAsc = () => {
    const ordered = data
      .filter((data) => data.age && data.age.age)
      .sort((prev, next) => prev.age.age - next.age.age);

    setOrderedAsc(ordered);
    setIsOrderedAsc(true);
    console.log("setOrderedAsc", ordered);
  };

  const getOrderedDesc = () => {
    const ordered = data
      .filter((data) => data.age && data.age.age)
      .sort((prev, next) => next.age.age - prev.age.age);

    setOrderedDesc(ordered);
    setIsOrderedAsc(false);
    console.log("setOrderedDesc", ordered);
  };

  useEffect(() => {
    handleOrder();
    console.log("useeffect done");
  }, []);

  function handleOrder() {
    if (isOrderedAsc) {
      getOrderedDesc();
      console.log("hello1", orderedDesc);
    } else {
      getOrderedAsc();
      console.log("hello2", orderedAsc);
    }
  }

  //   handleOrder();

  return (
    <div className="page">
      <div>
        <HeaderFlags />
      </div>
      <div className="max-container">
        <div className="timeline-container">
          <div className="container2">
            <button onClick={() => handleOrder()} class="my-button"></button>
          </div>
          {!isOrderedAsc &&
            orderedDesc.map((item) => (
              <TimelineItem data={item} key={item._id}></TimelineItem>
            ))}

          {isOrderedAsc &&
            orderedAsc.map((item) => (
              <TimelineItem data={item} key={item._id}></TimelineItem>
            ))}
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default CronologyGallery;
