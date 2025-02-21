import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import "../Components/AboutusComp/About-us.css";
import "../Components/Section.css";
import "../Components/PartnersComp/Partner-overview.css";
import "../Components/RiseFXappComp/MT7mobileapp.css";

import {ThemeContext} from "../Components/themeProvider/Theme-provider";

import MobileandPc from "./RiseFXappComp/Mobile&pc";
const MT7mobileapp = () => {
  const [value, setValue] = useState("1");
  const {theme} = useContext(ThemeContext)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
                  <MobileandPc  index={"1"} />
                  

    </>
  );
};

export default MT7mobileapp;
