

import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "./AboutusComp/About-us.css";
import "../Components/Section.css";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import fi from "../Images/fi-f.webp";
import sub from "../Images/sub.webp";
import vector from "../Images/Vector-1.webp";
import doller from "../Images/4doller.webp";
import dropped5 from "../Images/dropped-5.webp";
import regulation from "../Images/Regulation.webp";
import Button from "@mui/material/Button";
import thumb from "../Images/thumb_up.webp";
import search from "../Images/search.webp";
import smile from "../Images/smile.webp";
import { NavLink } from "react-router-dom";

import education from "../Images/whh_student.webp";
import {ThemeContext} from "../Components/themeProvider/Theme-provider";
import { BsFire,BsFillCalendar2RangeFill,BsCalculator  } from "react-icons/bs";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { BiCreditCardFront, BiSolidCoffeeBean} from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa6";
import { LuFolderSearch2 } from "react-icons/lu";
import { FaFaceSmile } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";

import AboutusComp from "./AboutusComp/Aboutus";


const Whatothersay = () => {
    const [value, setValue] = useState("3");
    const {theme} = useContext(ThemeContext)
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])


    return (
        <>
      <AboutusComp index={3}/>
        
        </>
    );
};


export default Whatothersay;