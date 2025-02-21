import { NavLink } from "react-router-dom";

import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "../Components/AboutusComp/About-us.css";
import "../Components/Section.css";
import "../Components/PartnersComp/Partner-overview.css";
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
import pic from "../Images/pc.webp";
import mobile from "../Images/mobile.webp";
import secpic from "../Images/pc 1.webp";
import { ThemeContext } from "../Components/themeProvider/Theme-provider";
import { FaCircleQuestion } from "react-icons/fa6";
import { BsFillCalendar2RangeFill, BsFire } from "react-icons/bs";
import { PiCalculatorFill, PiCurrencyDollarBold } from "react-icons/pi";
import { LuFolderSearch2 } from "react-icons/lu";
import { BiCreditCardFront } from "react-icons/bi";
const MorePlatform = () => {
  const [value, setValue] = useState("3");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])


  return (
    <>
      <div className={`about-wrapper ${theme}`}>
        <h2 className="About-Header-top"> RISE FX Apps</h2>
        <div className="About-top">
          <div className="About-us">
            <TabContext value={value} className="rise-tabss">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  className=" tabs-scrollbar"
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    label="RiseFX Mobile App "
                    value="1"
                    className="meta-tab"
                  />
                  <Tab
                    label="RiseFX Web Trader"
                    value="2"
                    className="meta-tab"
                  />
                  <Tab label="RiseFX Platform" value="3" className="meta-tab" />
                  {/* <Tab label="our Blogs" value="4" className="meta-tab" /> */}
                  {/* <Tab label="Trading view" value="5" className="meta-tab" /> */}
                  {/* <Tab label="cTrader Mobile" value="6" />
                  <Tab label="cTrader WebTrader" value="7" /> */}
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="text-h2">
                  <h2
                    className="About-Header"
                    style={{ textAlign: "center", paddingTop: "120px" }}
                  >
                    Download Rise FX for Mobile
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
                <div className="text-back">
                  <p>
                    Trade via your iPhone, Android or tablet with the Rise FX
                    apps for mobile for free. With the Rise FX app, you can
                    manage your account, open or close a position, check live
                    pricing, as well as use all the most popular analytical
                    tools you would normally be able to if trading via a
                    desktop.
                  </p>
                </div>
                <div className="mobile-pic">
                  <img src={mobile} />
                </div>

                <div className=" About-Ready-start-trading">
                  <div className="section7-heading">
                    <h1 className="About-Header"> Ready to Start Trading?</h1>
                  </div>
                  <div
                    className="section7-div"
                    style={{ marginTop: "40px" }}
                  ></div>
                  <div className="button-class">
                    <Button variant="contained" id="try-a-free-demo">
                      <NavLink
                        className="create-link"
                        to="https://panel.therisefx.com/register"
                      >
                        TRY A FREE DEMO
                      </NavLink>{" "}
                    </Button>
                    <p>OR</p>
                    <button
                      variant="outlined"
                      id="get-a-live-account"
                      style={{ color: "blue" }}
                    >
                      <NavLink to="https://panel.therisefx.com/register">
                        GET A LIVE ACCOUNT
                      </NavLink>{" "}
                    </button>
                  </div>
                </div>
              </TabPanel>

              <TabPanel value="2">
                <div className="text-h2">
                  <h2
                    className="About-Header"
                    style={{ textAlign: "center", paddingTop: "120px" }}
                  >
                    RiseFX Web Trader
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
                <div className="text-back">
                  <p>
                    Now you can trade directly from your internet browser, from
                    anywhere in the world. Save yourself any software
                    installation and trade from any desktop via Windows, Mac or
                    Linux. All you need is an internet connection and your
                    preferred internet browser.{" "}
                  </p>
                </div>
                <div className="mobile-pic">
                  <img src={pic} />
                </div>
                <div className="text-h2">
                  <h2
                    className="About-Header"
                    style={{ textAlign: "center", paddingTop: "120px" }}
                  >
                    Other features of a Rise FX   WebTrader
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <div className="main__why-we-are-different-grid">
                  <div className="main__why-we-are-different-card">
                    <div className="bg-icon">
                        <BsFire size={30} className="react-icon-div" />
                    </div>
                    {/* <div className="card__title">Australia’s Lowest Trading Costs*</div> */}
                    <div className="card__description">
                      Trading directly via your browser{" "}
                    </div>
                  </div>
                  <div className="main__why-we-are-different-card">
                    <div className="bg-icon">
                        <BsFillCalendar2RangeFill size={30} className="react-icon-div" />
                    </div>
                    {/* <div className="card__title">No Minimum Account Size</div> */}
                    <div className="card__description">
                      Compatibility with any operating system
                    </div>
                  </div>
                  <div className="main__why-we-are-different-card">
                    <div className="bg-icon">
                        <PiCalculatorFill size={30} className="react-icon-div" />
                    </div>
                    {/* <div className="card__title">No Fees on Deposits</div> */}
                    <div className="card__description">One Click Trading</div>
                  </div>
                  <div className="main__why-we-are-different-card">
                    <div className="bg-icon">
                        <PiCurrencyDollarBold size={30} className="react-icon-div" />
                    </div>
                    {/* <div className="card__title">Copy Trading via Rise FX+</div> */}
                    <div className="card__description">
                      {" "}
                      History of trading oprations
                    </div>
                  </div>
                  <div className="main__why-we-are-different-card">
                    <div className="bg-icon">
                        <BiCreditCardFront size={30} className="react-icon-div" />
                    </div>
                    {/* <div className="card__title">Free US Share CFD Trading</div> */}
                    <div className="card__description">
                      Real-time quotes in Market Watch
                    </div>
                  </div>
                  <div className="main__why-we-are-different-card">
                    <div className="bg-icon">
                        <LuFolderSearch2 size={30} className="react-icon-div" />
                    </div>
                    {/* <div className="card__title">Regulated</div> */}
                    <div className="card__description">9 timeframes </div>
                  </div>
                </div>
                <div className=" About-Ready-start-trading">
                  <div className="section7-heading">
                    <h1 className="About-Header"> Ready to Start Trading?</h1>
                  </div>
                  <div
                    className="section7-div"
                    style={{ marginTop: "40px" }}
                  ></div>
                  <div className="button-class">
                    <Button variant="contained" id="try-a-free-demo">
                      <NavLink
                        className="create-link"
                        to="https://panel.therisefx.com/register"
                      >
                        TRY A FREE DEMO
                      </NavLink>{" "}
                    </Button>
                    <p>OR</p>
                    <button
                      variant="outlined"
                      id="get-a-live-account"
                      style={{ color: "blue" }}
                    >
                      <NavLink to="https://panel.therisefx.com/register">
                        GET A LIVE ACCOUNT
                      </NavLink>{" "}
                    </button>
                  </div>
                </div>
              </TabPanel>

              <TabPanel value="3">
                <div className="text-h2">
                  <h2
                    className="About-Header"
                    style={{ textAlign: "center", paddingTop: "120px" }}
                  >
                    Rise FX Platform
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
                <div className="text-back">
                  <p>
                    Rise FX is the latest platform provided by RiseQuotes and
                    powered by Rise FX Markets. Designed from the ground up to
                    be multi-asset and able to connect to multiple exchanges and
                    new markets. The platform represents an enhanced and
                    upgraded iteration of its forerunner, a longstanding
                    industry benchmark embraced by traders globally. With
                    advanced charting technology and sophisticated order
                    management tools, you can swiftly and effectively monitor
                    and control your positions. This robust platform is loaded
                    with innovative features aimed at elevating your trading
                    experience.
                  </p>
                </div>
                <div className="mobile-pic">
                  <img src={secpic} />
                </div>
                <div className="text-h2">
                  <h2
                    className="About-Header"
                    style={{ textAlign: "center", paddingTop: "120px" }}
                  >
                    {" "}
                    RiseFX Platform
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
                <div className="text-back">
                  <p>
                    The latest and greatest from RiseQuotes. Trade Forex,
                    Stocks, Futures and more with RiseFX.
                  </p>
                </div>
                <div className="main__why-we-are-different-grid">
                  <div className="main__why-we-are-different-card">
                    <div className="bg-icon">
                        <BsFire size={30} className="react-icon-div" />
                    </div>
                    {/* <div className="card__title">Australia’s Lowest Trading Costs*</div> */}
                    <div className="card__description">
                      The ability to trade Forex, Stocks, Futures and more as
                      CFDs{" "}
                    </div>
                  </div>
                  <div className="main__why-we-are-different-card">
                    <div className="bg-icon">
                        <BsFillCalendar2RangeFill size={30} className="react-icon-div" />
                    </div>
                    {/* <div className="card__title">No Minimum Account Size</div> */}
                    <div className="card__description">
                      Faster processing speeds
                    </div>
                  </div>
                  <div className="main__why-we-are-different-card">
                    <div className="bg-icon">
                        <PiCalculatorFill size={30} className="react-icon-div" />
                    </div>
                    {/* <div className="card__title">No Fees on Deposits</div> */}
                    <div className="card__description">21 Timeframes</div>
                  </div>
                  <div className="main__why-we-are-different-card">
                    <div className="bg-icon">
                        <PiCurrencyDollarBold size={30} className="react-icon-div" />
                    </div>
                    {/* <div className="card__title">Copy Trading via Rise FX+</div> */}
                    <div className="card__description">
                      {" "}
                      Advanced Pending Orders
                    </div>
                  </div>
                  <div className="main__why-we-are-different-card">
                    <div className="bg-icon">
                        <BiCreditCardFront size={30} className="react-icon-div" />
                    </div>
                    {/* <div className="card__title">Free US Share CFD Trading</div> */}
                    <div className="card__description">
                      Full EA functionality with JavaScript
                    </div>
                  </div>
                  <div className="main__why-we-are-different-card">
                    <div className="bg-icon">
                        <LuFolderSearch2 size={30} className="react-icon-div" />
                    </div>
                    {/* <div className="card__title">Regulated</div> */}
                    <div className="card__description">
                      In built Virtual Private Server (VPS){" "}
                    </div>
                  </div>
                </div>
                <div className="text-h2">
                  <h2
                    className="About-Header"
                    style={{ textAlign: "center", paddingTop: "120px" }}
                  >
                    {" "}
                    New JavaScript Coding Language
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
                <div className="text-back">
                  <p>
                    RiseQuotes Language (Javascript) is a built-in language for
                    programming trading strategies
                  </p>
                </div>
                <div className="main__why-we-are-different-grid">
                  <div className="main__why-we-are-different-card">
                    <div className="bg-icon">
                        <BsFire size={30} className="react-icon-div" />
                    </div>
                    {/* <div className="card__title">Australia’s Lowest Trading Costs*</div> */}
                    <div className="card__description">
                      Object-oriented programming{" "}
                    </div>
                  </div>
                  <div className="main__why-we-are-different-card">
                    <div className="bg-icon">
                        <BiCreditCardFront size={30} className="react-icon-div" />
                    </div>
                    {/* <div className="card__title">No Minimum Account Size</div> */}
                    <div className="card__description">
                      Improved debugging tools
                    </div>
                  </div>
                  <div className="main__why-we-are-different-card">
                    <div className="bg-icon">
                        <PiCalculatorFill size={30} className="react-icon-div" />
                    </div>
                    {/* <div className="card__title">No Fees on Deposits</div> */}
                    <div className="card__description">
                      Advanced events management model
                    </div>
                  </div>
                </div>

                <div className=" About-Ready-start-trading">
                  <div className="section7-heading">
                    <h1 className="About-Header"> Ready to Start Trading?</h1>
                  </div>
                  <div
                    className="section7-div"
                    style={{ marginTop: "40px" }}
                  ></div>
                  <div className="button-class">
                    <Button variant="contained" id="try-a-free-demo">
                      <NavLink
                        className="create-link"
                        to="https://panel.therisefx.com/register"
                      >
                        TRY A FREE DEMO
                      </NavLink>
                    </Button>
                    <p>OR</p>
                    <button
                      variant="outlined"
                      id="get-a-live-account"
                      style={{ color: "blue" }}
                    >
                      <NavLink to="https://panel.therisefx.com/register">
                        GET A LIVE ACCOUNT
                      </NavLink>{" "}
                    </button>
                  </div>
                </div>
              </TabPanel>
            </TabContext>
          </div>
        </div>
      </div>
    </>
  );
};

export default MorePlatform;