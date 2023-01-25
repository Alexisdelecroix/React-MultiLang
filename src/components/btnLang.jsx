import React from "react";
import france from "../icons/france.svg";
import spain from "../icons/spain.svg";
import united from "../icons/united-kingdom.svg";
import longData from "../components/layout";


export default function BtnLang({nextLang, img}) {

    return(
        <div className="icons">
        <button onClick={nextLang}><img src={france} alt="" /></button>
        <button onClick={nextLang}><img src={spain} alt="" /></button>
        <button onClick={nextLang}><img src={united} alt="" /></button>
        </div>
    )

}