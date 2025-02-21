import { NavLink } from "react-router-dom";

import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "../Components/AboutusComp/About-us.css";
import "../Components/Section.css";
import "../Components/MoreComp/contactus.css";

import { ThemeContext } from "./themeProvider/Theme-provider";
import More from "./MoreComp/More";


const Privacypolicy = () => {
    const [value, setValue] = useState("3");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const {theme} = useContext(ThemeContext)
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])






    return (
        <>
          <More  index={"2"} />
          
        </>
    );
};

export default Privacypolicy;