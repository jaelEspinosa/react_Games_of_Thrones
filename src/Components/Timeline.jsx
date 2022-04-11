import axios from "axios";
import React, { useEffect, useState } from "react";
// import timelineData from "../data";
import TimelineItem from "./TimelineItem";
import "./Timeline.scss";
import HeaderFlags from "./HeaderFlags";
import Menu from "./Menu";

function Timeline() {
  const [characters, setCharacters] = useState([]);
  const [orderedAsc, setOrderedAsc] = useState([]);
  const [orderedDesc, setOrderedDesc] = useState([]);
  const [isOrderedAsc, setIsOrderedAsc] = useState(false);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get("https://api.got.show/api/show/characters/");
      setCharacters(res.data);
      console.log("alldatafound", res.data);
    };
    getCharacters();
    // handleOrder();
  }, []);

  useEffect(() => {
    handleOrder();
    setTimeout(() => {
      console.log("World!");
    }, 1000);
  }, []);

  const getOrderedAsc = () => {
    const ordered = characters
      .filter((characters) => characters.age && characters.age.age)
      .sort((prev, next) => prev.age.age - next.age.age);
    setTimeout(() => {
      console.log("World!");
    }, 1000);

    setOrderedAsc(ordered);
    setIsOrderedAsc(true);
    console.log("setOrderedAsc", ordered);
  };

  const getOrderedDesc = () => {
    const ordered = characters
      .filter((characters) => characters.age && characters.age.age)
      .sort((prev, next) => next.age.age - prev.age.age);
    setTimeout(() => {
      console.log("World!");
    }, 1000);

    setOrderedDesc(ordered);
    setIsOrderedAsc(false);
    console.log("setOrderedDesc", ordered);
  };

  function handleOrder() {
    if (isOrderedAsc) {
      getOrderedDesc();
      console.log("hello1", orderedDesc);
    } else {
      getOrderedAsc();
      console.log("hello2", orderedAsc);
    }
  }

  //lo ponemos como defaul
  // handleOrder();

  //aquí le pondré un if pasandole el desc o el asc
  return (
    //timelineData.length > 0 && (
    <div className="page">
      <div>
        <HeaderFlags />
      </div>
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
      <Menu />
    </div>
  );
}

// la idea es la siguiente:
// poner un botón que llame a una función sort
//con lo obtenido imprimimos en timelineitem pasandole esta información ya filtrada y ordenada

export default Timeline;
