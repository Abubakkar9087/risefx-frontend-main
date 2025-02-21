
import React, { useContext, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Components/AccountComp/zero-account.css";
import "../Components/Section.css";
import "../Components/product&account-overview.css";

import { ThemeContext } from "./themeProvider/Theme-provider";

import Standardcomp from "./AccountComp/Standard";

const Classsicaccount = () => {
  const [value, setValue] = useState("3");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <>
             <Standardcomp  index={"2"}/>

    </>
  );
};
export default Classsicaccount;