import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./AboutusComp/About-us.css";
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

import education from "../Images/whh_student.webp";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../Components/themeProvider/Theme-provider";
import { FaThumbsUp } from "react-icons/fa6";
import { LuFolderSearch2 } from "react-icons/lu";
import { FaFaceSmile } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";

import { BsFire, BsFillCalendar2RangeFill, BsCalculator } from "react-icons/bs";
import { PiCurrencyDollarBold, PiCurrencyCircleDollarFill } from "react-icons/pi";
import { BiCreditCardFront, BiSolidCoffeeBean } from "react-icons/bi";
import { MdManageAccounts, MdOutlineManageAccounts } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi2";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { TbTriangleSquareCircleFilled } from "react-icons/tb";
import { ImStatsBars2 } from "react-icons/im";

import AboutusComp from "./AboutusComp/Aboutus";
const Aboutus = () => {
  const [value, setValue] = useState("1");
  const { theme } = useContext(ThemeContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutusComp index={"1"}/>
      
    </>
  );
};

export default Aboutus;
