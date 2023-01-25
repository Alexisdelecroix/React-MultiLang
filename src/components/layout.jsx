import React, {  useContext, useState } from "react";

import france from "../icons/france.svg";
import spain from "../icons/spain.svg";
import united from "../icons/united-kingdom.svg";
import BtnLang from "./btnLang";

export default function Layout() {


    const langData = [
        {
          id: "fr",
          title: "Bonjour et bienvenue sur le site.",
          subtitle: "Découvrez nos fonctionnalités et nos services !",
          img: "france",
        },
        {
          id: "en",
          title: "Hello and welcome to the site.",
          subtitle: "Discover our features and services !",
          img: "spain",
        },
        {
          id: "es",
          title: "Hola y bienvenido al sitio.",
          subtitle: "Descubra nuestras prestaciones y servicios ! ",
          img: "united"
        },
      ];


    const [currentLang, setCurrentlang] = useState(langData.some( donnes => donnes.id === navigator.language) ? navigator.language : 'en');

    const nextLangFR= () => {
        setCurrentlang('fr')
    }

    const nextLangEN= () => {
        setCurrentlang('en')
    }

    const nextLangES= () => {
        setCurrentlang('es')
    }


  return (
    <div className="conteneur">
                
      {/* <BtnLang nextLang={nextLangFR} img={donnes.id}/> */}
      <BtnLang nextLang={nextLangFR} img=""/>
      {/* <BtnLang nextLang={nextLangES} img={donnes.id}/> */}

    
        {/* <img src={france} alt="Photo Drapeau Français" />
        <img src={spain} alt="Photo Drapeau Spain" />
        <img src={united} alt="Photo Drapeau United" /> */}
    

      {langData.map((donnes) => {
        if (donnes.id === currentLang) {
        return (
          <div key={donnes.id} className="titre">
            <h1>{donnes.title}</h1>

            <h2>{donnes.subtitle}</h2>
          </div>
        
        );
        }
      })}
    </div>
  );
}
