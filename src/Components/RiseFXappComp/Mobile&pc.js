import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import "../AboutusComp/About-us.css";
import "../Section.css";
import "../PartnersComp/Partner-overview.css";
import "../RiseFXappComp/MT7mobileapp.css";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import Button from "@mui/material/Button";

import pic from "../../Images/pc.webp";
import mobile from "../../Images/mobile.webp";
import { ThemeContext } from "../themeProvider/Theme-provider";
import { BsFillCalendar2RangeFill, BsFire } from "react-icons/bs";
import { PiCalculatorFill, PiCurrencyDollarBold } from "react-icons/pi";
import { LuFolderSearch2 } from "react-icons/lu";
import { BiCreditCardFront } from "react-icons/bi";
import { Height } from "@mui/icons-material";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { IoLogoWindows } from "react-icons/io";
import { TbDeviceImacMinus } from "react-icons/tb";
import { IoLogoAndroid } from "react-icons/io";
import { FaCheckSquare } from "react-icons/fa";
import QRcode1 from "../../Images/QRcode1.png";
import QRcode2 from "../../Images/QRcode2.png";
const MobileandPc = (index) => {
  const [value, setValue] = useState(`${index.index}`);
  const { theme } = useContext(ThemeContext)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                  <Tab
                    label="RiseFX Platform"
                    value="3"
                    className="meta-tab"
                  />

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

                <div className="main-QR">
                  <h3 className="Down-load-risefx"> Scan to download RiseFX for Mobile</h3>

                  <div className="main-QR-tab-1">
                    <div className="android">
                      <img src={QRcode1} className="ImageQR" />
                      <p> Scan here for Android</p>
                    </div>
                    <div className="android">
                      <img src={QRcode2} className="ImageQR" />
                      <p> Scan here for iOS</p>
                    </div>


                  </div>

                </div>
                <div className="main-QR">
                  {/* <div className="QRcode">
  <img src={QRcode} className="ImageQR"/>
  <p>For Android</p>
</div> */}
                  {/* <h3 className="Down-load-risefx">Download RiseFX</h3> */}
                  <div className="QR-link">

                    {/* <p> <span className="innerQR"><TbDeviceImacMinus size={30} /></span>
                      <a href="https://therisefx.com/TheRiseFX-Terminal.mac">Download for Mac </a></p>

                    <p> <span className="innerQR"><IoLogoWindows size={30} /></span>
                      <a href="https://therisefx.com/TheRiseFX-Terminal.win">Download for Window </a></p>

                    <p> <span className="innerQR"><FaCloudDownloadAlt size={30} /></span>
                      <a href="https://therisefx.com/TheRiseFX-Terminal.linux.AppImage">Download for Linux</a></p> */}

                    <p className="download-padding-top"> <span className="innerQR"><IoLogoAndroid size={30} /></span>
                      <a href="https://panel.therisefx.com/platform/TheRiseFX-1.0.apk">Download for Android</a></p>
                    <p className="download-padding-top"> <span className="innerQR"><IoLogoAndroid size={30} /></span>
                      <a href="https://apps.apple.com/us/app/mobiustrader-7/id1355359598" >Download for IOS</a></p>
                    {/* <p> <span className="innerQR"><TbWorldWww size={30} /> </span>
                      <a href="https://web.therisefx.com/auth/" traget="_blank">For Web</a></p> */}
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

                <div className="main-QR-tab-2">
                  <div className="mobile-pic">
                    <img src={pic} />
                  </div>

                  <div className="QR-links">
                    <h3 className="Down-load-risefx">Try WebTrader for  RiseFX</h3>
                    <p> <span className="innerQR"><TbWorldWww size={30} /> </span>
                      <a href="https://web.therisefx.com/auth/" traget="_blank" className="web_trader"> WebTrader for RiseFX</a></p>
                  </div>
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
                  <div className="main__why-we-are-different-card platform-card">
                    <div className="bg-icon">
                        <BsFire size={30} className="react-icon-div" />
                    </div>
                    <div className="card__description">
                      Trading directly via your browser{" "}
                    </div>
                  </div>
                  <div className="main__why-we-are-different-card platform-card">
                    <div className="bg-icon">
                        <BsFillCalendar2RangeFill size={30} className="react-icon-div" />
                    </div>
                    <div className="card__description">
                      Compatibility with any operating system
                    </div>
                  </div>
                  <div className="main__why-we-are-different-card platform-card">
                    <div className="bg-icon">
                        <PiCalculatorFill size={30} className="react-icon-div" />
                    </div>
                    <div className="card__description">One Click Trading</div>
                  </div>
                  <div className="main__why-we-are-different-card platform-card">
                    <div className="bg-icon">
                        <PiCurrencyDollarBold size={30} className="react-icon-div" />
                    </div>
                    <div className="card__description">
                      {" "}
                      History of trading oprations
                    </div>
                  </div>
                  <div className="main__why-we-are-different-card platform-card">
                    <div className="bg-icon">
                        <BiCreditCardFront size={30} className="react-icon-div" />
                    </div>
                    <div className="card__description">
                      Real-time quotes in Market Watch
                    </div>
                  </div>
                  <div className="main__why-we-are-different-card platform-card">
                    <div className="bg-icon">
                        <LuFolderSearch2 size={30} className="react-icon-div" />
                    </div>
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
                    Download Rise FX for Desktop
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
                <div className="text-back">
                  <p>
                    RiseFx is the latest platform provided by RiseFX Quotes and powered by RiseFX. Designed from the ground up to be multi-asset and able to connect to multiple exchanges and new markets.

                    The platform represents an enhanced and upgraded iteration of its forerunner, a longstanding industry benchmark embraced by traders globally. With  advanced charting technology and sophisticated order management tools, you can swiftly and effectively monitor and control your positions. This robust platform is loaded with innovative features aimed at elevating your trading experience.
                  </p>
                </div>
                <div className="mobile-pic">
                  <img src={pic} />
                </div>


                <div className="main-QR">
                  {/* <div className="QRcode">
  <img src={QRcode} className="ImageQR"/>
  <p>For Android</p>
</div> */}
                  <h3 className="Down-load-risefx">Download RiseFX</h3>
                  <div className="QR-link">

                    <p> <span className="innerQR"><TbDeviceImacMinus size={30} /></span>
                      <a href="https://mobius-trader.s3.eu-north-1.amazonaws.com/TheRiseFX/TheRiseFX-Terminal.mac.dmg">Download for Mac </a></p>

                    <p> <span className="innerQR"><IoLogoWindows size={30} /></span>
                      <a href="https://mobius-trader.s3.eu-north-1.amazonaws.com/TheRiseFX/TheRiseFX-Terminal.win.exe">Download for Window </a></p>

                    <p> <span className="innerQR"><FaCloudDownloadAlt size={30} /></span>
                      <a href="https://mobius-trader.s3.eu-north-1.amazonaws.com/TheRiseFX/TheRiseFX-Terminal.linux.AppImage">Download for Linux</a></p>

                    {/* <p> <span className="innerQR"><IoLogoAndroid size={30} /></span>
                      <a href="https://therisefx.com/TheRiseFX-1.0.apk">Download for Android</a></p>
                    <p> <span className="innerQR"><TbWorldWww size={30} /> </span>
                      <a href="https://web.therisefx.com/auth/" traget="_blank">For Web</a></p> */}
                  </div>
                </div>
                <div className="text-h2">
                  <h2
                    className="About-Header"
                    style={{ textAlign: "center", paddingTop: "120px" }}
                  >
                    RiseFX Platform
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <div className="main__why-we-are-different-grid">
                  <div className="main__why-we-are-different-card platform-card">
                    <div className="bg-icon">
                        <FaCheckSquare size={30} className="react-icon-div" />
                    </div>
                    <div className="card__description">
                      The ability to trade Forex, Stocks, Futures and more as CFDs
                    </div>
                  </div>
                  <div className="main__why-we-are-different-card platform-card">
                    <div className="bg-icon">
                        <FaCheckSquare size={30} className="react-icon-div" />
                    </div>
                    <div className="card__description">
                      Faster processing speeds
                    </div>
                  </div>
                  <div className="main__why-we-are-different-card platform-card">
                    <div className="bg-icon">
                        <FaCheckSquare size={30} className="react-icon-div" />
                    </div>
                    <div className="card__description">21 Timeframes</div>
                  </div>
                  <div className="main__why-we-are-different-card platform-card">
                    <div className="bg-icon">
                        <FaCheckSquare size={30} className="react-icon-div" />
                    </div>
                    <div className="card__description">
                      Advanced Pending Orders

                    </div>
                  </div>
                  <div className="main__why-we-are-different-card platform-card">
                    <div className="bg-icon">
                        <FaCheckSquare size={30} className="react-icon-div" />
                    </div>
                    <div className="card__description">
                      80+ Technical Analysis objects
                    </div>
                  </div>
                  <div className="main__why-we-are-different-card platform-card">
                    <div className="bg-icon">
                        <FaCheckSquare size={30} className="react-icon-div" />
                    </div>
                    <div className="card__description">Market Depth
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
            </TabContext>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileandPc;
