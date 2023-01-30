import { createContext, useState } from "react";

export const MyContext = createContext();



const supportedLangs = ['EN', 'FR', 'ES'];

let browserLang = navigator.language.slice(0,2).toUpperCase();

if (supportedLangs.indexOf(browserLang) === -1 ) {
    browserLang = 'EN';
}


const MonContext = props => {

    const [lang, setLang] = useState(browserLang)

    const toggleLang = changLang => {
        setLang(changLang)
    } 

    return (
        <MyContext.Provider value={{lang, toggleLang}}>
            {props.children}
        </MyContext.Provider>
    )

}

export default MonContext;