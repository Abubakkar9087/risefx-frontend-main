import React, { useContext } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../Components/Section.css";
import "../Components/RiseFXappComp/MT7mobileapp.css";
import star from "../Images/star.webp";
import sta from "../Images/star-4.webp";
import back from "../Images/download-1.png";
import fi from "../Images/fi-f.webp";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Footer from "../Common/Footer.js";
import vector from "../Images/Vector-1.webp";
import sub from "../Images/sub.webp";
import dollar from "../Images/dollar.webp";
import money from "../Images/money.webp";
import form from "../Images/form.webp";
import regulation from "../Images/Regulation.webp";
import check from "../Images/check.webp";
import arow from "../Images/arrow-1.svg";
import { RiWindowsFill } from "react-icons/ri";
import arrow from "../Images/arrow.svg";
import doller from "../Images/4doller.webp";
import l10 from "../Images/Logo__10.png";
import online from "../Images/Online.png";
import drag from "../Images/dragonpay.png";
import ezee from "../Images/eZeeWallet.png";
import card from "../Images/card-1.svg";
import L11 from "../Images/Logo__11.png";
import Logo__9 from "../Images/Logo__9.webp";
import Astropay from "../Images/Astropay.png";
import log from "../Images/Logo__6.png";
import logo8 from "../Images/Logo__8.png";
import dropped from "../Images/dropped.svg";
import Button from "@mui/material/Button";
import dropped4 from "../Images/droppesd-4.svg";
import dropped5 from "../Images/dropped-5.webp";
import dropped3 from "../Images/dropped-3.svg";
import dropped2 from "../Images/dropped-2.webp";
import trust from "../Images/trustpilot.webp";
import stars from "../Images/stars.webp";
import ForexCrossRatesWidget from "./trading/index.js";
import Header from "../Common/Header.js";
import Luqa_Pay_Logo from "../Images/Luqa_Pay_Logo.png";
import frontimage from "../Images/riser.png";
import { ThemeContext } from "./themeProvider/Theme-provider.js";
import { BsFire, BsFillCalendar2RangeFill, BsCalculator } from "react-icons/bs";
import { PiCurrencyDollarBold, PiCurrencyCircleDollarFill } from "react-icons/pi";
import { BiCreditCardFront, BiSolidCoffeeBean } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi2";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import DemoVideo from "../Video/demo.mov";
import GraphAnimation from '../Video/trading-glow.webm'
import ProcessingSteps from "./COMPONEMT/Component.js";
import pic from "../Images/pc.webp";
import mobile from "../Images/mobile.webp";
import { PiCalculatorFill } from "react-icons/pi";
import { LuFolderSearch2 } from "react-icons/lu";
import { Height } from "@mui/icons-material";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { IoLogoWindows } from "react-icons/io";
import { TbDeviceImacMinus } from "react-icons/tb";
import { IoLogoAndroid } from "react-icons/io";
import { FaCheckSquare } from "react-icons/fa";
import QRcode1 from "../Images/QRcode1.png";
import QRcode2 from "../Images/QRcode2.png";
import awarrd from "../Images/Awward.jpg";
import screen from "../Images/TradingView_Image.webp";
import section1Image from '../Images/section-1-image.png'


const content = ["Rise with RISE FX", "World's Most Trusted Forex Broker Award Winner 2023", "40,000+ Happy Client's from Worldwide", "Be a fund Riser with RISEFX"];
const speed = 50;
let isDeleting = false;
let index = 0;
let currentContentIndex = 0;

export function typeWriter() {
  const demoElement = document.getElementById("demo");
  if (!demoElement) return; // Check if the demo element exists

  if (isDeleting) {
    // If deleting, remove the last character
    demoElement.innerHTML = content[currentContentIndex].substring(0, index - 1);
    index--;

    // Check if all characters are deleted
    if (index <= 0) {
      isDeleting = false;
      index = 0;
      currentContentIndex = (currentContentIndex + 1) % content.length; // Move to the next content
      setTimeout(typeWriter, 1000); // Pause before starting to type new content
    } else {
      // Continue deleting with a delay
      setTimeout(typeWriter, speed);
    }
  } else {
    // If typing, add the next character
    demoElement.innerHTML = content[currentContentIndex].substring(0, index + 1);
    index++;

    // Check if we reached the end of the current content
    if (index >= content[currentContentIndex].length) {
      // Start deleting after a short pause
      isDeleting = true;
      setTimeout(typeWriter, 1000); // Pause before deleting
    } else {
      // Continue typing with a delay
      setTimeout(typeWriter, speed);
    }
  }
}




const Section = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState("1");
  const { theme } = useContext(ThemeContext);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    typeWriter();

    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className={`${theme}`}>
        {/* --------------------------------------------------section 1------------------------------------------------ */}

        <div className={`wrapper-100`}>

          {/* <div className="img-div">
            <video src={DemoVideo} autoPlay loop muted />
          </div> */}
          <div className="left-wrapper">
            <div class="typing-effects">
              <p id="demo"></p>
            </div>
            <p className="First_paragraph">
              We ensure you get the right opportunities to maximize your funds,
              with the right ways and the right help
            </p>
            <button className="btns-1" ><NavLink className="create-link" to="https://panel.therisefx.com/register">
              OPEN ACCOUNT
            </NavLink></button>
          </div>
          <div className="section1Img">
            <img src={section1Image} alt="erorr" />
          </div>
        </div>


        {/* ---------------------------------------------------------section 2---------------------------------------------------*/}


        <div className="why-rise-fx-landing-page">
          <div className="section2Header">
            <h2 className="section2Header-h2">Why RISE FX</h2>
            <div className="Empty-line"></div>
          </div>
          <div className="text-back_paragraph">
            There are many different choices for forex brokers in the
            world, but here's some of the reasons why we think we're
            unique.
          </div>
          <div className="main__why-we-are-different-grid">
            <video src={GraphAnimation} autoPlay loop muted className="section2Video" />
            <div className="main__why-we-are-different-card">
              <div className="card__title">
                Ultra-tight Spreads
              </div>
              <div className="card__description">
                Spreads starting from 0.0 pips.

              </div>
            </div>
            <div className="main__why-we-are-different-card">
              <div className="card__title">Dedicated Customer Service
              </div>
              <div className="card__description">
                A 24/5 service for queries, consultation, and feedback.

              </div>
            </div>
            <div className="main__why-we-are-different-card">
              <div className="card__title">Fast & Stable Trading Environment</div>
              <div className="card__description">
                24-hours steady trading environment, with orders getting processed in milliseconds.

              </div>
            </div>
            <div className="main__why-we-are-different-card">

              <div className="card__title">Hassle-free Transactions</div>
              <div className="card__description">
                Multiple deposit and withdrawal methods with zero deposit fees on most payment methods.

              </div>
            </div>
            <div className="main__why-we-are-different-card">

              <div className="card__title">Top Institutional Liquidity</div>
              <div className="card__description">
                Institutional-level liquidity access, ensuring ultra-tight spread.

              </div>
            </div>
            <div className="main__why-we-are-different-card">

              <div className="card__title">Trust and Transparency</div>
              <div className="card__description">
                Trust and Transparency form the basis of RISEFX core values.

              </div>
            </div>

          </div>

        </div>
        {/* ---------------------------------------section-default----------------------------------------- */}

        <div className="section-default">
          <div className="section-default-card">
            <img src={screen} alt="error" />
          </div>
          <div className="section-default-card">
            <h2>RiseFX: Elevate Your Forex Trading</h2>
            <p>RiseFX is a powerful platform designed for seamless forex trading, offering advanced tools, real-time analytics, and a user-friendly experience. Whether you're a beginner or a pro, RiseFX helps you navigate the market with confidence and precision. Start trading smarter today!</p>
          </div>
        </div>

        {/* -----------------------------------------section-3----------------------------------------------- */}
        <div div className="section-3">
          <div className="text-h2">
            <h2>Why We're Different</h2>
            <div className="Empty-line"></div>
          </div>
          <div className="text-back">
            <p>
              Our vision is to provide access to the world’s markets easier,
              faster and at a lower cost than what exists in the market today.
            </p>
          </div>
          <div className="main__why-we-are-different-grid">
            <div className="main__why-we-are-different-card">

              <div className="card__title">Lowest forex trading costs</div>
              <div className="card__description">
                With spreads from 0.0  commission per side, we offer a
                commission rate that is on average 36% cheaper* than our
                competitors.{" "}
              </div>
            </div>
            <div className="main__why-we-are-different-card">

              <div className="card__title">White Glove Support</div>
              <div className="card__description">
                As a live account holder, you will have your own trading
                specialist to help you navigate the trading platform and the
                markets.
              </div>
            </div>
            <div className="main__why-we-are-different-card">

              <div className="card__title">No Fees on Deposits</div>
              <div className="card__description">
                We have waived fees on Visa, MasterCard, PayPal, Skrill &amp;
                Neteller.
              </div>
            </div>
            <div className="main__why-we-are-different-card">

              <div className="card__title">Copy Trading via Rise FX+</div>
              <div className="card__description">
                {" "}
                allows you to copy other successful Rise FX clients, have others
                copy your trades or simply copy between your own Rise FX accounts,
                all within a few clicks.{" "}
              </div>
            </div>
            <div className="main__why-we-are-different-card">

              <div className="card__title">Free US Share CFD Trading</div>
              <div className="card__description">
                Most brokers charge $5-$10 per trade for US Share CFDs. True to
                our mission, we're charging .
              </div>
            </div>
            <div className="main__why-we-are-different-card">

              <div className="card__title">Multiple account type</div>
              <div className="card__description">
                {" "}
                With spreads from 0.0  commission per side, we offer a
                commission rate that is on average 36% cheaper* than our
                competitors. Learn more.{" "}
              </div>
            </div>
            <div className="main__why-we-are-different-card">

              <div className="card__title">Easy -to- use platforms</div>
              <div className="card__description">
                With spreads from 0.0 commission per side, we offer a
                commission rate that is on average 36% cheaper* than our
                competitors. Learn more.{" "}
              </div>
            </div>
            <div className="main__why-we-are-different-card">

              <div className="card__title">Automated Trading</div>
              <div className="card__description">
                Rise FX pioneered the use of ‘expert advisors’ which are automated trading systems that are developed using this language.

              </div>
            </div>
            <div className="main__why-we-are-different-card">

              <div className="card__title">Effective risk management</div>
              <div className="card__description">
                RISE FX+ allows you to copy other successful RISE FX clients, have
                others copy your trades
              </div>
            </div>
          </div>
        </div>
        {/* -----------------------------------------section-4------------------------------------------------------------------ */}
        <div className="section-4">

          <h2>  START TRADING WITH RISE FX</h2>
          <div className="Empty-line"></div>

        </div>

        {/* <div className="Howitwork-table">
          <div className="work-table1">
            <div className="table-box">
              <HiDocumentText size={30} className="react-icon-div" />
            </div>
            <h3>Account registration and verification</h3>

          </div>
          <img src={arrow} className="arrow-1" />
          <div className="work-table2">
            <div className="table-box">

              <IoShieldCheckmarkSharp size={30} className="react-icon-div" />

            </div>
            <h3> Deposit Funds</h3>

          </div>
          <img src={arow} className="arrow-2" />
          <div className="work-table3 table_3">
            <div className="table-box">
              <PiCurrencyDollarBold size={30} className="react-icon-div" />

            </div>
            <h3 className="start-trading">Start Trading</h3>

          </div>
        </div> */}
        <ProcessingSteps />

        {/* <div className="div-div-e-list-top">
            <ol className="div-div-e-list"> 1. Account registration and verification</ol>
            <ol className="div-div-e-list"> 2. Deposit Funds</ol>
            <ol className="div-div-e-list">3. Start trading</ol>
          </div> */}
        <div className="button-class">
          <Button variant="contained" id="try-a-free-demo">
            <NavLink className="create-link" to="https://panel.therisefx.com/register">
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
            </NavLink>
          </button>
        </div>

        {/* ------------------------------------section-5--------------------------------------------------------------- */}
        <div className="section-5">
          <h2>Our Funding Method</h2>
          <div className="Empty-line"></div>
          <p> Transfer your fund with 0% fees.</p>
          <div className="hidden-div">
            <div className="visible-card">
              <div className="visible-img">
                <img src={log} />
                <img src={card} />
                <img src={logo8} />
                <img src={Logo__9} />
                <img src={Astropay} />
              </div>
              {isVisible && (<>
                <div className="hidden-logo">
                  <img src={l10} />
                  <img src={drag} />
                  <img src={Luqa_Pay_Logo} />
                  <img src={card} />
                  <img src={ezee} />
                </div>
                <div className="hidden-logo">                <img src={Logo__9} />
                  <img src={Astropay} />
                  <img src={Luqa_Pay_Logo} />
                  <img src={L11} />
                  <img src={card} />


                </div>
              </>
              )}
            </div>

            <button onClick={toggleVisibility}>
              {isVisible ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------section 7-------------------------------------------------------------    */}
        <div className="section7-heading">
          <h1>Range Of Trading platform</h1>
        </div>
        <div className="Empty-line"></div>

        <p className="section7-p">
          RISE FX Markets is committed to offering flexibility for all of our
          clients. Choose from our range of trading
          platforms listed below.
        </p>
        <div className="section-7 section-7background-image ">

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
                <img src={mobile} className="mobile_Image" />
              </div>

              <div className="main-QR">
                <h3 className="Down-load-risefx"> Scan to download RiseFX for Mobile</h3>

                <div className="main-QR-tab-1">
                  <div className="android">
                    <img src={QRcode1} className="ImageQR " />
                    <p> Scan here for Android</p>
                  </div>
                  <div className="android">
                    <img src={QRcode2} className="ImageQR " />
                    <p> Scan here for iOS</p>
                  </div>
                </div>

              </div>
              <div className="main-QR">
                <div className="QR-link">
                  <p className="download-padding-top"> <span className="innerQR"><IoLogoAndroid size={30} /></span>
                    <a href="https://panel.therisefx.com/platform/TheRiseFX-1.0.apk">Download for Android</a></p>
                  <p className="download-padding-top"> <span className="innerQR"><IoLogoAndroid size={30} /></span>
                    <a href="https://apps.apple.com/us/app/mobiustrader-7/id1355359598" >Download for IOS</a></p>
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
                <img src={pic} className="mobile_Image" />
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


            </TabPanel>
          </TabContext>
        </div>


        {/* ------------------------------------------------------section 8------------------------------------------------------------------ */}
        <div className="rise-wrapper">
          <div className="section7-heading">
            <h1> Ready to Start Trading?</h1>
          </div>
          <div className="Empty-line"></div>
          <div className="button-class">
            <Button variant="contained" id="try-a-free-demo">
              <NavLink className="create-link" to="https://panel.therisefx.com/register">
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
              </NavLink>
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------section 2------------------------------------------------------------------ */}
        <div className="">
          <div className="" style={{ marginTop: "100px" }}>

            <div
              style={{
                width: "60%",
                margin: "auto",
                overflow: "hidden",
                borderRadius: "30px", // Optional: Makes the container rounded
              }}
            >
              <img
                src={awarrd}
                alt="award"
                style={{
                  width: "100%",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              />
            </div>
          </div>
        </div>






        <div className="section-2">
          <div className="section2-2">
            <h2>Live Market Prices</h2>
            <div className="para">
              <p>
                RISE FX provides brokerage services by integrating all the most
                popular trading solutions into our platform for hassle-free
                trading.
              </p>
            </div>
            <div className="wibget">
              <ForexCrossRatesWidget />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Section;
