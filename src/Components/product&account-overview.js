import { NavLink, Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "../Components/AccountComp/zero-account.css";
import "../Components/Section.css";
import "../Components/product&account-overview.css";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import fi from "../Images/fi-f.webp";
import sub from "../Images/sub.webp";
import vector from "../Images/Vector-1.webp";
import doller from "../Images/4doller.webp";
import doller2 from "../Images/dropped-2.webp";
import precious from "../Images/ant-design_gold-filled-1-2.svg";
import dropped5 from "../Images/dropped-5.webp";
import regulation from "../Images/Regulation.webp";
import Button from "@mui/material/Button";
import thumb from "../Images/thumb_up.webp";
import search from "../Images/search.webp";
import smile from "../Images/smile.webp";
import boy from "../Images/boy.svg";
import boy2 from "../Images/boy-2.svg";
import Equity from "../Images/image__31_-1.webp";
import comodity from "../Images/image__37_.webp";
import support from "../Images/ri_dashboard-3-fill-1.svg";
import account from "../Images/subway_coin-1.svg";
import traced from "../Images/Traced.webp";
import pulse from "../Images/fi-sr-pulse_1.webp";
import student from "../Images/whh_student.webp";
import bulb from "../Images/fi-sr-bulb_1.webp";
import searchs from "../Images/fluent_slide-multiple-search-20-filled.webp";
import { ThemeContext } from "../Components/themeProvider/Theme-provider";
import { PiCurrencyCircleDollarFill, PiCurrencyDollarBold } from "react-icons/pi";
import { BsFire } from "react-icons/bs";
// import { TbTriangleSquareCircleFilled } from "react-icons/tb";

import { ImStatsBars2 } from "react-icons/im";
import { BiCreditCardFront, BiSolidCoffeeBean } from "react-icons/bi";
import { IoSpeedometerSharp } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { BiSolidCoinStack } from "react-icons/bi";
import { LuFolderSearch2 } from "react-icons/lu";
import { FaFaceSmile } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { LiaBalanceScaleRightSolid } from "react-icons/lia";
import { TbHeartRateMonitor } from "react-icons/tb";
import { RiLightbulbFlashFill } from "react-icons/ri";




const ProductaccountOverview = () => {
  const [value, setValue] = useState("1");
  const { theme } = useContext(ThemeContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <div className={`about-wrapper ${theme}`}>
        <h2 className="About-Header-top"> Product and Account </h2>
        <div className="About-top">
          <div className="About-us">
            <TabContext value={value} className="rise-tabss">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                 className=" tabs-scrollbar"
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  {/* <Tab label="Product and Account" value="1" className="meta-tab" /> */}
                  <Tab label="STD Account" value="2" className="meta-tab" />
                  <Tab label="Classic Account" value="3" className="meta-tab" />
                  <Tab label="PRO Account" value="4" className="meta-tab" />
                  <Tab label="VIP Account" value="5" className="meta-tab" />
                  {/* <Tab label="cTrader Mobile" value="6" />
                  <Tab label="cTrader WebTrader" value="7" /> */}
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="text-h2">
                  <h2
                    className="About-Header-top"
                    style={{ textAlign: "center", paddingTop: "120px" }}
                  >
                    Products We Offer
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
                <div className="text-back">
                  <p>
                    RISE FX was founded by veterans of the Australian forex
                    industry. With a combined experience of 50 years, our
                    mission is to create a broker that adheres to a few simple
                    principles:
                  </p>
                </div>

                {/* cards */}
                {/* <div className="section-text">
                                <h3>Our Values</h3>
                            </div>
                            <div className="div-div-e">
                                <p style={{ textAlign: 'center' }}>
                                    These are the values that guide our business and the actions of our people.
                                    As we grow and achieve our vision for greatness, these will always stay the same.
                                </p>
                            </div> */}

                <div className="About-card-one">
                  <div className="main__why-we-are-different-grid">
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
                          <PiCurrencyDollarBold
                            size={30}
                            className="react-icon-div"
                          />
                      </div>
                      <div className="cards__title">Forex</div>
                      <div className="cards__description">
                        Gain an advantage in the forex markets by lowering your
                        costs with a Rise FX Markets account. We offer 90+
                        currency pairs to trade with, tight spreads with no
                        dealing desk execution and access 24 hours a day, 5 days
                        a week.{" "}
                      </div>
                    </div>
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
              <BsFire size={30} className="react-icon-div" />
                      </div>
                      <div className="cards__title">Energy</div>
                      <div className="cards__description">
                        Trade Crude Oil, Brent Oil and Natural Gas with your
                        Rise FX Markets trading account. With competitive
                        margins, no commissions on trades and the ability to go
                        long or short, you can trade these volatile markets with
                        a leading broker. .
                      </div>
                    </div>
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
              < FaThumbsUp  size={30} className="react-icon-div" />

                      </div>
                      <div className="cards__title">Precious Metals</div>
                      <div className="cards__description">
                        With your Rise FX Markets account, you can go both long
                        and short with low-costs on products such as Gold,
                        Silver, Zinc, Copper, Platinum and more.
                      </div>
                    </div>
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
              <ImStatsBars2 size={30} className="react-icon-div" />
                          
                      </div>
                      <div className="cards__title">Equity Indices</div>
                      <div className="cards__description">
                        Trade some of the world’s biggest equity markets with
                        our range of CFDs on major indices. By trading these
                        products, you gain a cost-effective way to trade the
                        world’s biggest markets along with competitive spreads,
                        flexible leverage and the ability to go long and short.{" "}
                      </div>
                    </div>
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
              <BiSolidCoffeeBean size={30} className="react-icon-div" />
                          
                      </div>
                      <div className="cards__title">Commodities</div>
                      <div className="cards__description">
                        Trade everyday products such as coffee, wheat, cocoa,
                        sugar and more with Rise FX competitive pricing and the
                        ability to go long and short without any exchange fees
                        or trading commissions..
                      </div>
                    </div>
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
                <BiCreditCardFront size={30} className="react-icon-div"/>
                          
                      </div>
                      <div className="cards__title">Share CFDs</div>
                      <div className="cards__description">
                        Trade 100 of the world's largest equities from the USA
                        via Share CFDs with $0 brokerage through the Rise FX
                        platform.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-h2">
                  <h2
                    className="About-Header-top"
                    style={{ textAlign: "center", paddingTop: "120px" }}
                  >
                    Trading Account Types
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
                <div className="text-back">
                  <p>
                    Trading can be hard enough as it is without adding extra
                    complications from your broker for choosing different
                    account types. That's why we offer two account types, both
                    with the same access to our products, with slightly
                    different appearances for how you pay to trade.
                  </p>
                </div>
                <div className="product-subheader">
                  <h3 className="About-Header-top">
                    There are no hidden fees, just low-cost Forex Trading
                  </h3>
                </div>
                <div className="product-card">
                  <div className="main__why-we-are-different-cardss">
                    <div className="Sub-header">
                      <h2>The Classic Account</h2>
                    </div>
                    <div className="product-contant">
                      <p>
                        This is the most popular account with Rise FX traders.
                        With spreads starting from 0 pips and our
                        industry-leading AUD $4.50 commission, the account is
                        designed for people who have traded before, understand
                        how the commission sizing works and are typically more
                        active.
                      </p>
                    </div>
                  </div>
                  <div className="main__why-we-are-different-cardss">
                    <div className="Sub-header">
                      <h2>The STD Account</h2>
                    </div>
                    <div className="product-contant">
                      <p>
                        This is the account if you’re just starting out and want
                        to keep things simple by avoiding calculating your
                        commission before each trade. Spreads start from 0.9
                        pips with Zero commissions. When you trade, the
                        commission is included in the spread so that what you
                        see is what you get.
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" About-Ready-start-trading">
                  <div className="section7-heading">
                    <h1> Ready to Start Trading?</h1>
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
                      </NavLink>
                    </button>
                  </div>
                </div>
              </TabPanel>

              <TabPanel value="2">
                <div className="text-h2">
                  <h2 style={{ textAlign: "center", paddingTop: "120px" }}>
                    STD Account
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
                <div className="text-back">
                  <p>
                    At $2.25 commissions per side and 0.0 spreads, our STD
                    Account allows clients to trade our raw spreads and
                    experience unfiltered low-cost trading. It is the preferred
                    choice among traders familiar with calculating their own
                    commissions. If you'd like an account that automatically
                    includes your commissions in each trade, we recommend using
                    our Classic Account.{" "}
                  </p>
                </div>

                <div className="Zero-account-value1">
                  <div className="Zero-account">
                    <h5 className="Zero-account-h5">STD Account</h5>
                    <p>Base currency: USD</p>
                    <p>Minimum deposit: Depends upon payment system </p>
                    <p> Spread From : from 1.8 pip.</p>
                    <p>Commission : 0$ </p>
                    <p>Max Leverage : 1 : 500</p>
                    <p>Min lot size : 0.01</p>
                    <p>Max lot size : 100 </p>
                    <p>Order execution : Market </p>
                  </div>

                  <div className="Zero-account">
                    <h5 className="Zero-account-h5">Classic Account</h5>
                    <p>Base currency: USD</p>
                    <p>Minimum deposit: Depends upon payment system </p>
                    <p> Spread From : from 1.5 pip.</p>
                    <p>Commission : 0$ </p>
                    <p>Max Leverage : 1 : 500</p>
                    <p>Min lot size : 0.01</p>
                    <p>Max lot size : 100 </p>
                    <p>Order execution : Market </p>
                  </div>
                  <div className="Zero-account">
                    <h5 className="Zero-account-h5">PRO Account</h5>
                    <p>Base currency: USD</p>
                    <p>Minimum deposit: 500$ </p>
                    <p> Spread From : from 0 pip.</p>
                    <p>Commission : 2 Side commision per std lot </p>
                    <p>Max Leverage : 1 : 500</p>
                    <p>Min lot size : 0.01</p>
                    <p>Max lot size : 100 </p>
                    <p>Order execution : Market </p>
                  </div>
                  <div className="Zero-account">
                    <h5 className="Zero-account-h5">VIP Account</h5>
                    <p>Base currency: USD</p>
                    <p>Minimum deposit: 1000$ </p>
                    <p> Spread From : from 0 pip.</p>
                    <p>Commission : 1 Side commision per std lot </p>
                    <p>Max Leverage : 1 : 500</p>
                    <p>Min lot size : 0.01</p>
                    <p>Max lot size : 100 </p>
                    <p>Order execution : Market </p>
                  </div>
                </div>

                <div className="text-h2">
                  <h2 style={{ textAlign: "center", paddingTop: "120px" }}>
                    Account Details
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <section className="two-columns-table">
                  <div className="two-columns-table__key">Spreads</div>
                  <div className="two-columns-table__value">From 0.0 pips</div>
                  <div className="two-columns-table__key">Commission</div>
                  <div className="two-columns-table__value">
                    $4.5 (Round Turn)
                  </div>
                  <div className="two-columns-table__key">
                    Minimum Account Size
                  </div>
                  <div className="two-columns-table__value">None</div>
                  <div className="two-columns-table__key">Server Location</div>
                  <div className="two-columns-table__value">New York</div>
                  <div className="two-columns-table__key">
                    Micro Lot Trading
                  </div>
                  <div className="two-columns-table__value">
                    <div className="icons ico_24x24 icon-check"></div>
                  </div>
                  <div className="two-columns-table__key">
                    Access to Products
                  </div>
                  <div className="two-columns-table__value">All</div>
                  <div className="two-columns-table__key">
                    Trading Styles Allowed
                  </div>
                  <div className="two-columns-table__value">All</div>
                </section>

                <div className="zero-button">
                  <Button variant="contained" id="try-a-free-demo">
                    <NavLink
                      className="create-link"
                      to="https://panel.therisefx.com/register"
                    >
                      SIGN UP
                    </NavLink>{" "}
                  </Button>
                </div>
                <div className="text-h2">
                  <h2 style={{ textAlign: "center", paddingTop: "120px" }}>
                    Why Choose a STD Account Type
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
                <div className="text-back">
                  <p>
                    Our STD Account is the purest representation of our low-cost
                    philosophy. With the STD Account, you are experiencing our
                    raw spreads and can see in real time our industry-leading
                    spreads*. At $2.25 commissions per side and award winning
                    execution speeds, you'll soon understand how we've built our
                    reputation as a low-cost broker that doesn't skimp on the
                    quality of their platform.{" "}
                  </p>
                </div>
                <div className="About-card-one">
                  <div className="main__why-we-are-different-grid">
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
                    <PiCurrencyCircleDollarFill size={30} className="react-icon-div" />
                          
                      </div>
                      <div className="cards__title">Cost Efficiency</div>
                      <div className="cards__description">
                        The combination of 0.0 pip spreads and $4.5 commissions
                        per lot, lowers your trading costs. This puts money back
                        in your pocket and allows you to maximise your
                        profitability.
                      </div>
                    </div>
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
                    <IoSpeedometerSharp size={30} className="react-icon-div" />
                        
                      </div>
                      <div className="cards__title">24/7 Support</div>
                      <div className="cards__description">
                        Low costs doesn't mean you don't get a five-star
                        experience. Our dedicated support teams are available
                        24/7 to handle any concerns that may come your way. .
                      </div>
                    </div>
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
                          <FaThumbsUp size={30} className="react-icon-div" />
                          
                      </div>
                      <div className="cards__title">Transparency</div>
                      <div className="cards__description">
                        The combination of our raw spreads and fixed commissions
                        provides clear visibility into your trading costs.
                        Easily evaluate the profitability of your trades without
                        any ambiguity.
                      </div>
                    </div>
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
                <MdManageAccounts size={30} className="react-icon-div"/>
                          
                      </div>
                      <div className="cards__title">Regulated</div>
                      <div className="cards__description">
                        Fusion Markets is regulated by the Australian Securities
                        and Investment Commission (226199), Vanuatu Financial
                        Services Commission (40256) and Financial Services
                        Authority (SD096).
                      </div>
                    </div>
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
              <BsFire size={30} className="react-icon-div" />
                          
                      </div>
                      <div className="cards__title">
                        #1 Execution Speed in Australia**
                      </div>
                      <div className="cards__description">
                        Do not just take our word for it; our ranking was based
                        on a sample of 20 Forex/CFD brokers and conducted in
                        July 2023 by Compareforexbrokers.
                      </div>
                    </div>
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
                          <BiSolidCoinStack size={30} className="react-icon-div" />
                      </div>
                      <div className="cards__title">
                        No Minimum Account Size
                      </div>
                      <div className="cards__description">
                        As we put our clients first, we believe you should be
                        able to start trading with as little as you like.
                      </div>
                    </div>
                  </div>
                </div>

                <section className="text-with-image">
                  <div>
                    <h3 className="title title_underline title_align-left title_underline-align-left title_36px">
                      Switching from Demo to Live
                    </h3>
                    <div className="text-with-image__text">
                      <p>
                        Fusion Markets provides clients with the option to
                        choose between demo and live trading accounts. The demo
                        trading account serves as an excellent tool for novice
                        traders to engage in trading activities without exposing
                        their actual funds to any risks. It creates a simulated
                        trading environment that closely replicates the real
                        market, enabling traders to experiment and test their
                        trading strategies.
                      </p>

                      <p>
                        Once traders have confidence in their system, they are
                        more prepared to transition to a live trading account.
                      </p>
                    </div>
                  </div>
                  <div className="text-with-image__image-container">
                    <img
                      className="text-with-image__image"
                      alt="Switching from Demo to Live"
                      src={boy}
                    />
                  </div>
                </section>
                <div className=" About-Ready-start-trading">
                  <div className="section7-heading">
                    <h1> Ready to Start Trading?</h1>
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
                      </NavLink>
                    </button>
                  </div>
                </div>
              </TabPanel>

              <TabPanel value="3">
                <div className="text-h2">
                  <h2 style={{ textAlign: "center", paddingTop: "120px" }}>
                    Classic Account
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
                <div className="text-back">
                  <p>
                    Our Classic account is the perfect solution for forex
                    traders who want to keep things simple and hassle-free.
                    Designed with comfort in mind, you don't need to worry about
                    calculating commissions before each trade, we account for
                    this for you via the spreads. This means when you trade with
                    our Classic account, what you see is what you get, no
                    additional costs or calculations needed. If you'd like to
                    trade on our raw spreads and calculate commissions yourself,
                    have a look at our STD account.{" "}
                  </p>
                </div>

                <div className="Zero-account-value1">
                  <div className="Zero-account">
                    <h5 className="Zero-account-h5">STD Account</h5>
                    <p>Base currency: USD</p>
                    <p>Minimum deposit: Depends upon payment system </p>
                    <p> Spread From : from 1.8 pip.</p>
                    <p>Commission : 0$ </p>
                    <p>Max Leverage : 1 : 500</p>
                    <p>Min lot size : 0.01</p>
                    <p>Max lot size : 100 </p>
                    <p>Order execution : Market </p>
                  </div>

                  <div className="Zero-account">
                    <h5 className="Zero-account-h5">Classic Account</h5>
                    <p>Base currency: USD</p>
                    <p>Minimum deposit: Depends upon payment system </p>
                    <p> Spread From : from 1.5 pip.</p>
                    <p>Commission : 0$ </p>
                    <p>Max Leverage : 1 : 500</p>
                    <p>Min lot size : 0.01</p>
                    <p>Max lot size : 100 </p>
                    <p>Order execution : Market </p>
                  </div>
                  <div className="Zero-account">
                    <h5 className="Zero-account-h5">PRO Account</h5>
                    <p>Base currency: USD</p>
                    <p>Minimum deposit: 500$ </p>
                    <p> Spread From : from 0 pip.</p>
                    <p>Commission : 2 Side commision per std lot </p>
                    <p>Max Leverage : 1 : 500</p>
                    <p>Min lot size : 0.01</p>
                    <p>Max lot size : 100 </p>
                    <p>Order execution : Market </p>
                  </div>
                  <div className="Zero-account">
                    <h5 className="Zero-account-h5">VIP Account</h5>
                    <p>Base currency: USD</p>
                    <p>Minimum deposit: 1000$ </p>
                    <p> Spread From : from 0 pip.</p>
                    <p>Commission : 1 Side commision per std lot </p>
                    <p>Max Leverage : 1 : 500</p>
                    <p>Min lot size : 0.01</p>
                    <p>Max lot size : 100 </p>
                    <p>Order execution : Market </p>
                  </div>
                </div>
                <div className="text-h2">
                  <h2 style={{ textAlign: "center", paddingTop: "120px" }}>
                    Account Details
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <section className="two-columns-table">
                  <div className="two-columns-table__key">Spreads</div>
                  <div className="two-columns-table__value">From 0.9 pips</div>
                  <div className="two-columns-table__key">Commission</div>
                  <div className="two-columns-table__value">$0</div>
                  <div className="two-columns-table__key">
                    Minimum Account Size
                  </div>
                  <div className="two-columns-table__value">None</div>
                  <div className="two-columns-table__key">Server Location</div>
                  <div className="two-columns-table__value">New York</div>
                  <div className="two-columns-table__key">
                    Micro Lot Trading
                  </div>
                  <div className="two-columns-table__value">
                    <div className="icons ico_24x24 icon-check"></div>
                  </div>
                  <div className="two-columns-table__key">
                    Access to Products
                  </div>
                  <div className="two-columns-table__value">All</div>
                  <div className="two-columns-table__key">
                    Trading Styles Allowed
                  </div>
                  <div className="two-columns-table__value">All</div>
                </section>

                <div className="zero-button">
                  <Button variant="contained" id="try-a-free-demo">
                    <NavLink
                      className="create-link"
                      to="https://panel.therisefx.com/register"
                    >
                      SIGN UP
                    </NavLink>{" "}
                  </Button>
                </div>
                <div className="text-h2">
                  <h2 style={{ textAlign: "center", paddingTop: "120px" }}>
                    Why Choose a Classic Account Type
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
                <div className="text-back">
                  <p>
                    Our Classic Account is designed to make forex trading as
                    simple and straightforward as possible. With a variety of
                    trading platforms, you can execute trades quickly and
                    efficiently, with the added benefit of knowing our customer
                    support team are on hand 24/7 to answer any questions or
                    concerns you may encounter.
                  </p>
                </div>
                <div className="About-card-one">
                  <div className="main__why-we-are-different-grid">
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
                <PiCurrencyDollarBold size={30} className="react-icon-div" />
                          
                      </div>
                      <div className="cards__title">Cost Efficiency</div>
                      <div className="cards__description">
                        The combination of 0.0 pip spreads and $4.5 commissions
                        per lot, lowers your trading costs. This puts money back
                        in your pocket and allows you to maximise your
                        profitability.
                      </div>
                    </div>
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
                        <LuFolderSearch2 size={30} className="react-icon-div" />
                          
                      </div>
                      <div className="cards__title">Ease-Of-Use</div>
                      <div className="cards__description">
                        With your commissions already accounted for, determining
                        the potential success of your trades is as simple as
                        looking at the charts. .
                      </div>
                    </div>
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
                        <FaFaceSmile size={30} className="react-icon-div" />
                          
                      </div>
                      <div className="cards__title">250+ Instruments</div>
                      <div className="cards__description">
                        You can access Rise FX full suite of trading instruments
                        and expand your trading activities beyond FX into other
                        asset classes like Gold, Crypto, US Shares and more.
                      </div>
                    </div>
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
                <PiCurrencyDollarBold size={30} className="react-icon-div" />
                          
                      </div>
                      <div className="cards__title">Regulated</div>
                      <div className="cards__description">
                        Fusion Markets is regulated by the Australian Securities
                        and Investment Commission (226199), Vanuatu Financial
                        Services Commission (40256) and Financial Services
                        Authority (SD096).
                      </div>
                    </div>
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
                        <LuFolderSearch2 size={30} className="react-icon-div" />
                          
                      </div>
                      <div className="cards__title">
                        #1 Execution Speed in Australia**
                      </div>
                      <div className="cards__description">
                        Do not just take our word for it; our ranking was based
                        on a sample of 20 Forex/CFD brokers and conducted in
                        July 2023 by Compareforexbrokers.
                      </div>
                    </div>
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
                        <FaFaceSmile size={30} className="react-icon-div" />
                          
                      </div>
                      <div className="cards__title">
                        No Minimum Account Size
                      </div>
                      <div className="cards__description">
                        As we put our clients first, we believe you should be
                        able to start trading with as little as you like.
                      </div>
                    </div>
                  </div>
                </div>

                <section className="text-with-image">
                  <div>
                    <h3 className="title title_underline title_align-left title_underline-align-left title_36px">
                      Switching from Demo to Live
                    </h3>
                    <div className="text-with-image__text">
                      <p>
                        Rise FX Markets provides clients with the option to
                        choose between demo and live trading accounts. The demo
                        trading account serves as an excellent tool for novice
                        traders to engage in trading activities without exposing
                        their actual funds to any risks. It creates a simulated
                        trading environment that closely replicates the real
                        market, enabling traders to experiment and test their
                        trading strategies.
                      </p>

                      <p>
                        Once traders have confidence in their system, they are
                        more prepared to transition to a live trading account.
                      </p>
                    </div>
                  </div>
                  <div className="text-with-image__image-container">
                    <img
                      className="text-with-image__image"
                      alt="Switching from Demo to Live"
                      src={boy2}
                    />
                  </div>
                </section>

                <div className=" About-Ready-start-trading">
                  <div className="section7-heading">
                    <h1> Ready to Start Trading?</h1>
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
                      </NavLink>
                    </button>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="4">
                <div className="text-h2">
                  <h2 style={{ textAlign: "center", paddingTop: "120px" }}>
                    PRO Trading Account
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
                <div className="text-back">
                  <p>
                    Our PRO Trading Account allows you to learn, test strategies
                    or just see our tight spreads for yourself - without any
                    risk to your hard-earned capital. Whether you are a seasoned
                    trader honing your skills or a curious newcomer ready to
                    explore the financial universe, our PRO Trading Account is
                    the ultimate playground and ideal starting point. Practice
                    executing trades, master risk management, and analyse market
                    trends under the low-cost umbrella of Rise FX Markets.{" "}
                  </p>
                </div>

                <div className="Zero-account-value1">
                  <div className="Zero-account">
                    <h5 className="Zero-account-h5">STD Account</h5>
                    <p>Base currency: USD</p>
                    <p>Minimum deposit: Depends upon payment system </p>
                    <p> Spread From : from 1.8 pip.</p>
                    <p>Commission : 0$ </p>
                    <p>Max Leverage : 1 : 500</p>
                    <p>Min lot size : 0.01</p>
                    <p>Max lot size : 100 </p>
                    <p>Order execution : Market </p>
                  </div>

                  <div className="Zero-account">
                    <h5 className="Zero-account-h5">Classic Account</h5>
                    <p>Base currency: USD</p>
                    <p>Minimum deposit: Depends upon payment system </p>
                    <p> Spread From : from 1.5 pip.</p>
                    <p>Commission : 0$ </p>
                    <p>Max Leverage : 1 : 500</p>
                    <p>Min lot size : 0.01</p>
                    <p>Max lot size : 100 </p>
                    <p>Order execution : Market </p>
                  </div>
                  <div className="Zero-account">
                    <h5 className="Zero-account-h5">PRO Account</h5>
                    <p>Base currency: USD</p>
                    <p>Minimum deposit: 500$ </p>
                    <p> Spread From : from 0 pip.</p>
                    <p>Commission : 2 Side commision per std lot </p>
                    <p>Max Leverage : 1 : 500</p>
                    <p>Min lot size : 0.01</p>
                    <p>Max lot size : 100 </p>
                    <p>Order execution : Market </p>
                  </div>
                  <div className="Zero-account">
                    <h5 className="Zero-account-h5">VIP Account</h5>
                    <p>Base currency: USD</p>
                    <p>Minimum deposit: 1000$ </p>
                    <p> Spread From : from 0 pip.</p>
                    <p>Commission : 1 Side commision per std lot </p>
                    <p>Max Leverage : 1 : 500</p>
                    <p>Min lot size : 0.01</p>
                    <p>Max lot size : 100 </p>
                    <p>Order execution : Market </p>
                  </div>
                </div>

                <div className="text-h2">
                  <h2 style={{ textAlign: "center", paddingTop: "120px" }}>
                    What Are the Benefits of a PRO Trading Account?
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <div className="About-card-one">
                  <div className="main__why-we-are-different-grid">
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
                          <LiaBalanceScaleRightSolid size={30} className="react-icon-div" />
                      </div>
                      <div className="cards__title">Risk-Free Environment</div>
                      <div className="cards__description">
                        The PRO Trading Account provides a risk-free environment
                        where you can practice and experiment with various
                        trading strategies without putting your real capital at
                        stake.
                      </div>
                    </div>
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
                          <TbHeartRateMonitor size={30} className="react-icon-div" />
                      </div>
                      <div className="cards__title">
                        Real-Time Market Conditions
                      </div>
                      <div className="cards__description">
                        The PRO Trading Account replicates real-time market
                        conditions, providing you with access to live price
                        feeds, market fluctuations, and more.
                      </div>
                    </div>
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
                        <RiGraduationCapFill size={30} className="react-icon-div"/>
                          
                      </div>
                      <div className="cards__title">
                        Learning and Skill Development
                      </div>
                      <div className="cards__description">
                        It allows you to learn about different trading
                        instruments, test different strategies, and understand
                        the intricacies of risk management. By actively engaging
                        in simulated trading.
                      </div>
                    </div>
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
                          <RiLightbulbFlashFill size={30} className="react-icon-div" />
                      </div>
                      <div className="cards__title">
                        Strategy Testing and Refinement
                      </div>
                      <div className="cards__description">
                        With a PRO Trading Account, you can test and refine your
                        trading strategies in real-time. You have the
                        opportunity to evaluate the effectiveness of your
                        approach and make adjustments without any financial
                        repercussions.
                      </div>
                    </div>
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
                        <FaThumbsUp size={30} className="react-icon-div" />
                        
                      </div>
                      <div className="cards__title">Confidence Building</div>
                      <div className="cards__description">
                        One of the most significant benefits of a PRO Trading
                        Account is the boost it gives to your trading
                        confidence. It can be a game-changer when you transition
                        to live trading, enabling you to make more informed
                        decisions and maintain emotional stability.
                      </div>
                    </div>
                    <div className="main__why-we-are-different-cards">
                      <div className="bg-icon">
                        <LuFolderSearch2 size={30} className="react-icon-div" />
                        
                      </div>
                      <div className="cards__title">
                        Familiarisation with Trading Platforms
                      </div>
                      <div className="cards__description">
                        A PRO Account provides a perfect opportunity to become
                        familiar with our trading platforms. You can explore the
                        platform’s features, tools, and functionalities.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="zero-button">
                  <Button variant="contained" id="try-a-free-demo">
                    <NavLink
                      className="create-link"
                      to="https://panel.therisefx.com/register"
                    >
                      SIGN UP
                    </NavLink>{" "}
                  </Button>
                </div>

                <div className=" About-Ready-start-trading">
                  <div className="section7-heading">
                    <h1> Ready to Start Trading?</h1>
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
                      </NavLink>
                    </button>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="5">
                <div className="text-h2">
                  <h2 style={{ textAlign: "center", paddingTop: "120px" }}>
                    VIP Account
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
                <div className="text-back">
                  <p>
                    Our VIP Accounts are designed for traders that have
                    religious beliefs that prevent them from receiving or paying
                    overnight swaps. With our no-interest, vip accounts, you’ll
                    have access to over 50 of the world’s most popular financial
                    instruments from Forex Pairs to Indices at our flagship low
                    rates. Scroll below for the full list of products available.{" "}
                  </p>
                </div>

                <div className="Zero-account-value1">
                  <div className="Zero-account">
                    <h5 className="Zero-account-h5">STD Account</h5>
                    <p>Base currency: USD</p>
                    <p>Minimum deposit: Depends upon payment system </p>
                    <p> Spread From : from 1.8 pip.</p>
                    <p>Commission : 0$ </p>
                    <p>Max Leverage : 1 : 500</p>
                    <p>Min lot size : 0.01</p>
                    <p>Max lot size : 100 </p>
                    <p>Order execution : Market </p>
                  </div>

                  <div className="Zero-account">
                    <h5 className="Zero-account-h5">Classic Account</h5>
                    <p>Base currency: USD</p>
                    <p>Minimum deposit: Depends upon payment system </p>
                    <p> Spread From : from 1.5 pip.</p>
                    <p>Commission : 0$ </p>
                    <p>Max Leverage : 1 : 500</p>
                    <p>Min lot size : 0.01</p>
                    <p>Max lot size : 100 </p>
                    <p>Order execution : Market </p>
                  </div>
                  <div className="Zero-account">
                    <h5 className="Zero-account-h5">PRO Account</h5>
                    <p>Base currency: USD</p>
                    <p>Minimum deposit: 500$ </p>
                    <p> Spread From : from 0 pip.</p>
                    <p>Commission : 2 Side commision per std lot </p>
                    <p>Max Leverage : 1 : 500</p>
                    <p>Min lot size : 0.01</p>
                    <p>Max lot size : 100 </p>
                    <p>Order execution : Market </p>
                  </div>
                  <div className="Zero-account">
                    <h5 className="Zero-account-h5">VIP Account</h5>
                    <p>Base currency: USD</p>
                    <p>Minimum deposit: 1000$ </p>
                    <p> Spread From : from 0 pip.</p>
                    <p>Commission : 1 Side commision per std lot </p>
                    <p>Max Leverage : 1 : 500</p>
                    <p>Min lot size : 0.01</p>
                    <p>Max lot size : 100 </p>
                    <p>Order execution : Market </p>
                  </div>
                </div>

                <div className="text-h2">
                  <h2 style={{ textAlign: "center", paddingTop: "120px" }}>
                    Account Features
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <div className="swap-free-accounts-table-wrapper">
                  <section className="swap-free-accounts-section__table-header">
                    Rise FX VIP Account
                  </section>
                  <section className="swap-free-accounts-section__table">
                    <div className="swap-free-accounts-table__cell">
                      Minimum EURUSD Spread
                    </div>
                    <div className="swap-free-accounts-table__cell">
                      1.4 pips
                    </div>
                    <div className="swap-free-accounts-table__cell">
                      Minimum Trade Size
                    </div>
                    <div className="swap-free-accounts-table__cell">
                      0.01 lot
                    </div>
                    <div className="swap-free-accounts-table__cell">
                      Commission
                    </div>
                    <div className="swap-free-accounts-table__cell">$0</div>
                    <div className="swap-free-accounts-table__cell">
                      Minimum Account Balance
                    </div>
                    <div className="swap-free-accounts-table__cell">$0</div>
                    <div className="swap-free-accounts-table__cell">
                      Account Base Currencies Available
                    </div>
                    <div className="swap-free-accounts-table__cell">
                      AUD, CAD, EUR, GBP, JPY, THB, SGD, USD
                    </div>
                    <div className="swap-free-accounts-table__cell">
                      Admin Charge Time
                    </div>
                    <div className="swap-free-accounts-table__cell">
                      Only once each 7 days per position
                    </div>
                    <div className="swap-free-accounts-table__cell">
                      Platforms
                    </div>
                    <div className="swap-free-accounts-table__cell">
                      Rise FX
                    </div>
                    <div className="swap-free-accounts-table__cell">
                      Scalping allowed
                    </div>
                    <div className="swap-free-accounts-table__cell">Yes</div>
                    <div className="swap-free-accounts-table__cell">
                      EAs allowed
                    </div>
                    <div className="swap-free-accounts-table__cell">Yes</div>
                    <div className="swap-free-accounts-table__cell">
                      Hedging allowed
                    </div>
                    <div className="swap-free-accounts-table__cell">Yes</div>
                  </section>
                </div>

                <div className="text-h2">
                  <h2 style={{ textAlign: "center", paddingTop: "120px" }}>
                    Only Pay Admin Charges for Trades Open Longer than 7 Dayst
                  </h2>
                </div>
                <p className="background"></p>
                <div className="text-back">
                  <p>
                    We pride ourselves on making convenience and low costs a top
                    priority, which is why our admin fee is only applied when a
                    trade is open for longer than 7 days. This means if you
                    close your trade 13 days after opening it, you only pay
                    admin charges once. Admin charges vary depending on the
                    instrument.{" "}
                  </p>
                </div>
                <div className="text-h2">
                  <h2 style={{ textAlign: "center", paddingTop: "120px" }}>
                    All Products Available
                  </h2>
                </div>
                <div className="swap-free-accounts-table-wrapper">
                  <section className="swap-free-accounts-section__products_table-header">
                    <div className="swap-free-accounts-section__products_table-header-item">
                      Instrument
                    </div>
                    <div className="swap-free-accounts-section__products_table-header-item">
                      Admin Fee Per Lot Per 7 Days / USD
                    </div>
                  </section>
                  <section className="swap-free-accounts-section__table">
                    <div className="swap-free-accounts-table__cell">
                      EUR/USD
                    </div>
                    <div className="swap-free-accounts-table__cell">50</div>
                    <div className="swap-free-accounts-table__cell">
                      GBP/USD
                    </div>
                    <div className="swap-free-accounts-table__cell">20</div>
                    <div className="swap-free-accounts-table__cell">
                      USD/JPY
                    </div>
                    <div className="swap-free-accounts-table__cell">150</div>
                    <div className="swap-free-accounts-table__cell">
                      AUD/USD
                    </div>
                    <div className="swap-free-accounts-table__cell">30</div>
                    <div className="swap-free-accounts-table__cell">
                      EUR/GBP
                    </div>
                    <div className="swap-free-accounts-table__cell">50</div>
                    <div className="swap-free-accounts-table__cell">
                      USD/CAD
                    </div>
                    <div className="swap-free-accounts-table__cell">30</div>
                    <div className="swap-free-accounts-table__cell">
                      USD/CHF
                    </div>
                    <div className="swap-free-accounts-table__cell">100</div>
                    <div className="swap-free-accounts-table__cell">
                      XAU/USD
                    </div>
                    <div className="swap-free-accounts-table__cell">200</div>
                    <div className="swap-free-accounts-table__cell">US30</div>
                    <div className="swap-free-accounts-table__cell">50</div>
                    <div className="swap-free-accounts-table__cell">
                      USD/HKD
                    </div>
                    <div className="swap-free-accounts-table__cell">20</div>
                    {showMore && (
                      <>
                        <div className="swap-free-accounts-table__cell">
                          AUD/CAD
                        </div>
                        <div className="swap-free-accounts-table__cell">20</div>
                        <div className="swap-free-accounts-table__cell">
                          AUD/CHF
                        </div>
                        <div className="swap-free-accounts-table__cell">50</div>
                        <div className="swap-free-accounts-table__cell">
                          AUD/JPY
                        </div>
                        <div className="swap-free-accounts-table__cell">75</div>
                        <div className="swap-free-accounts-table__cell">
                          AUD/NZD
                        </div>
                        <div className="swap-free-accounts-table__cell">30</div>
                        <div className="swap-free-accounts-table__cell">
                          CAD/CHF
                        </div>
                        <div className="swap-free-accounts-table__cell">60</div>
                        <div className="swap-free-accounts-table__cell">
                          CAD/JPY
                        </div>
                        <div className="swap-free-accounts-table__cell">
                          100
                        </div>
                        <div className="swap-free-accounts-table__cell">
                          CHF/JPY
                        </div>
                        <div className="swap-free-accounts-table__cell">60</div>
                        <div className="swap-free-accounts-table__cell">
                          EUR/AUD
                        </div>
                        <div className="swap-free-accounts-table__cell">30</div>
                        <div className="swap-free-accounts-table__cell">
                          EUR/CAD
                        </div>
                        <div className="swap-free-accounts-table__cell">50</div>
                        <div className="swap-free-accounts-table__cell">
                          EUR/CHF
                        </div>
                        <div className="swap-free-accounts-table__cell">60</div>

                        <div className="swap-free-accounts-table__cell">
                          EUR/JPY
                        </div>
                        <div className="swap-free-accounts-table__cell">
                          100
                        </div>
                        <div className="swap-free-accounts-table__cell">
                          EUR/NZD
                        </div>
                        <div className="swap-free-accounts-table__cell">60</div>
                        <div className="swap-free-accounts-table__cell">
                          GBP/AUD
                        </div>
                        <div className="swap-free-accounts-table__cell">50</div>
                        <div className="swap-free-accounts-table__cell">
                          GBP/CAD
                        </div>
                        <div className="swap-free-accounts-table__cell">30</div>
                        <div className="swap-free-accounts-table__cell">
                          GBP/CHF
                        </div>
                        <div className="swap-free-accounts-table__cell">
                          150
                        </div>
                        <div className="swap-free-accounts-table__cell">
                          GBP/JPY
                        </div>
                        <div className="swap-free-accounts-table__cell">
                          200
                        </div>
                        <div className="swap-free-accounts-table__cell">
                          GBP/NZD
                        </div>
                        <div className="swap-free-accounts-table__cell">30</div>
                        <div className="swap-free-accounts-table__cell">
                          NZD/CAD
                        </div>
                        <div className="swap-free-accounts-table__cell">20</div>
                        <div className="swap-free-accounts-table__cell">
                          NZD/CHF
                        </div>
                        <div className="swap-free-accounts-table__cell">60</div>
                        <div className="swap-free-accounts-table__cell">
                          NZD/JPY
                        </div>
                        <div className="swap-free-accounts-table__cell">
                          100
                        </div>
                      </>
                    )}
                    <div className="swap-free-account-button">
                      <button
                        id="swap-free-accounts-section__products__button"
                        className="swap-free-accounts-section__products__buttons"
                        type="button"
                        onClick={toggleShowMore}
                      >
                        {showMore ? "Show less" : "Show more"}
                      </button>
                    </div>
                  </section>
                </div>

                <div className=" About-Ready-start-trading">
                  <div className="section7-heading">
                    <h1> Ready to Start Trading?</h1>
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
                      </NavLink>
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

export default ProductaccountOverview;
