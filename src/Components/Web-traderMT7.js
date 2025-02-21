import { NavLink } from "react-router-dom";

import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "../Components/AboutusComp/About-us.css";
import "../Components/Section.css";
import "../Components/PartnersComp/Partner-overview.css";
import {ThemeContext} from "../Components/themeProvider/Theme-provider";
import MobileandPc from "./RiseFXappComp/Mobile&pc";

const WebtraderMT7 = () => {
    const [value, setValue] = useState("2");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const {theme} = useContext(ThemeContext)
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])


    return (
        <>
                         <MobileandPc  index={"2"} />

        </>
    );
};

export default WebtraderMT7;