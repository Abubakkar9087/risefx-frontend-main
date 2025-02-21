
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "../Components/AboutusComp/About-us.css";
import "../Components/Section.css";
import "../Components/PartnersComp/Partner-overview.css";
import "../Components/MarketComp/forex.css";
import "./Metal.css";

import {ThemeContext} from "../Components/themeProvider/Theme-provider";
import Market from "./MarketComp/Market";


const Metal = () => {
    const [value, setValue] = useState("2");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const {theme} = useContext(ThemeContext)
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
    return (
        <>
                    <Market  index={"2"} />

        </>
    );
};


export default Metal;