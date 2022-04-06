import React from "react";
import HeaderFlags from "../Components/HeaderFlags";
import Menu from "../Components/Menu";
import './HomePage.scss'

function HomePage() {
  return <>
  <div className="contain">
  <HeaderFlags></HeaderFlags>;
  <h1 className="title">JUEGO DE TRONOS</h1>
  <Menu/>


  </div>
  

  </>
  
}

export default HomePage;
