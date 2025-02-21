
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "../Components/AccountComp/zero-account.css";
import "../Components/Section.css";
import "../Components/product&account-overview.css";

import { ThemeContext } from "./themeProvider/Theme-provider";

import Standardcomp from "./AccountComp/Standard";

const Demoaccount = () => {
    const [value, setValue] = useState("4");
    const {theme} = useContext(ThemeContext);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
    return (
        <>
                <Standardcomp  index={"3"}/>

        </>
    );
};

export default Demoaccount;