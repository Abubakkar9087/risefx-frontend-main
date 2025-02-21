
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "../Components/AboutusComp/About-us.css";
import "../Components/Section.css";
import "../Components/PartnersComp/Partner-overview.css";
import "../Components/MarketComp/forex.css";

import { ThemeContext } from "../Components/themeProvider/Theme-provider";

import Market from "./MarketComp/Market";

const Forex = () => {
    const [value, setValue] = useState("1");
    const { theme } = useContext(ThemeContext);
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
             <Market  index={"1"} />
        </>
    );
};

export default Forex;