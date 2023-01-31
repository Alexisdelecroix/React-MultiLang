import React, {  useContext} from "react";
import { MyContext } from "../context/myContext";

export default function Layout() {



  //  Création tableau d'objet 
    const langData = {
       FR: {
          id: "fr",
          title: "Bonjour et bienvenue sur le site.",
          subtitle: "Découvrez nos fonctionnalités et nos services !",
        },

      EN:  {
          id: "en",
          title: "Hello and welcome to the site.",
          subtitle: "Discover our features and services !",
        },

       ES: {
          id: "es",
          title: "Hola y bienvenido al sitio.",
          subtitle: "Descubra nuestras prestaciones y servicios ! ",
        },
    };

      const {lang} = useContext(MyContext)



  return (
   
          <div className="titre">
          
            {/* <h1>{donnes.id === currentLang ? donnes.title : ''}</h1> */}
            <h1>{langData[lang].title}</h1>

            {/* <h2>{donnes.id === currentLang ? donnes.subtitle : ''}</h2> */}
            <h2>{langData[lang].subtitle}</h2>
          </div>
      
  
  );
}
