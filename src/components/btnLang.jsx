import React, {useContext} from "react";

import france from "../icons/france.svg";
import spain from "../icons/spain.svg";
import united from "../icons/united-kingdom.svg";

import { MyContext } from "../context/myContext";




export default function ToggleLangs() {

    const {toggleLang} = useContext(MyContext)

    return(
        
        // <button onClick={onclick}><img src={img} alt="" /></button>

        <div className="icons">
      <button onClick={() => toggleLang('FR')}><img src={france} alt=""/></button>
      <button onClick={() => toggleLang('EN')}><img  src={united} alt=""/></button>
      <button onClick={() => toggleLang('ES')}><img src={spain} alt=""/></button>

     </div>
        
        
    )

}
