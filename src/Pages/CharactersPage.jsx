import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import GalleryCharact from "../Components/GalleryCharact";
import HeaderFlags from "../Components/HeaderFlags";
import Menu from "../Components/Menu";
import { FindContext } from "../context/FindContext";
import { LoadingContext } from "../context/LoadingContext";
import "./CharactersPage.scss";


function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [fCharacters, setFCharacters] = useState([])
  const{find}=useContext(FindContext);
  const {setIsLoading}=useContext(LoadingContext)
  
  useEffect(() => {
    const getCharacters = async () => {
      setIsLoading(true);
      const res = await axios.get("https://api.got.show/api/show/characters/");
      
      setCharacters(res.data);
      setIsLoading(false);
    };
    
    getCharacters();
  }, []);
  
  useEffect(()=>{
    const filtering = ()=>{
      
      const filtered=characters.filter(item=>item.name.toLowerCase().includes(find.toLowerCase()))
      console.log('lo filtrado',filtered)    
      setFCharacters(filtered)
     }
     filtering();

   },[find])
   
  
   
  return (
    <div className="chr-contain">
      <div className="gohome-flasgs-contain">
        <HeaderFlags />        
      </div>
      <div className="card-contain">
        <div className="chr-contain__item">
          {find === '' && characters.map((item) => (
            <GalleryCharact data={item} key={item.id} />
          ))}
          {find !== '' && fCharacters.map((item) => (
            <GalleryCharact data={item} key={item.id} />
          )) }
        </div>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
}
export default CharactersPage;
