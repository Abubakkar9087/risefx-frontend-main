
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "../Components/AboutusComp/About-us.css";
import "../Components/Section.css";
import "../Components/MarketComp/forex.css";
import "../Components/PartnersComp/Partner-overview.css";

import { ThemeContext } from "../Components/themeProvider/Theme-provider";

import Forex from "./Forex";
import Market from "./MarketComp/Market";

const EnergyandSoftComodity = () => {
    const [value, setValue] = useState("4");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const { theme } = useContext(ThemeContext)
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
    return (
        <>
                          <Market  index={"4"} />
                          

        </>
    );
};

export default EnergyandSoftComodity;