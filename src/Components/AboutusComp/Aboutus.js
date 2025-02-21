import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./About-us.css";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Button from "@mui/material/Button";
import { ThemeContext } from "../themeProvider/Theme-provider";
import { BsFire, BsFillCalendar2RangeFill, BsCalculator } from "react-icons/bs";
import { PiCurrencyDollarBold, PiCurrencyCircleDollarFill } from "react-icons/pi";
import { BiCreditCardFront, BiSolidCoffeeBean } from "react-icons/bi";
import { MdManageAccounts, MdOutlineManageAccounts } from "react-icons/md";



const AboutusComp = (index) => {
  // console.log("value",`${index.index}`)
  const [value, setValue] = useState(`${index.index}`);
  const { theme } = useContext(ThemeContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={`about-wrapper ${theme}`}>
        <h2 className="About-Header-top">RISE FX Market</h2>
        <div className="About-top">
          <div className="About-us">
            <TabContext value={value} className="rise-tabss">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }} className="meta-wrapper">
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  className=" tabs-scrollbar"
                >
                  <Tab label="Our Mission" value="1" className="meta-tab" />
                  <Tab label="Our Services" value="2" className="meta-tab" />
                  <Tab label="Why RISE FX" value="3" className="meta-tab" />

                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="text-h2">
                  <h2
                    className="About-Header"
                    style={{ textAlign: "center", paddingTop: "64px" }}
                  >
                    Our Mission
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
                <div className="text-back">
                  <p>
                    Our mission is to deliver unparalleled trading experiences by offering cutting-edge technology, comprehensive educational resources, and personalized support. We aim to foster long-term relationships with our clients based on trust, transparency, and reliability.
                  </p>
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
                      </NavLink>                    </button>
                  </div>
                </div>
              </TabPanel>

              <TabPanel value="2">
              <div className="text-h2">
                  <h2
                    className="About-Header"
                    style={{ textAlign: "center", paddingTop: "64px" }}
                  >
                   Our Services
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
                <div className="text-back">
                  <p>
                  We offer a wide range of financial products and services tailored to meet the diverse needs of our clients                  </p>
                </div>



                
                <div className="main__why-we-are-different-grid">
                  <div className="main__why-we-are-different-card">
                    <div className="bg-icon">
                        <BsFire size={30} className="react-icon-div" />

                    </div>
                    <div className="card__title">
                      Forex Trading
                    </div>
                    <div className="card__description">
                      Take advantage of our advanced trading platforms and competitive spreads to trade a variety of currency pairs with ease.

                    </div>
                  </div>
                  <div className="main__why-we-are-different-card">
                    <div className="bg-icon">
                        <BsFillCalendar2RangeFill size={30} className="react-icon-div" />

                    </div>
                    <div className="card__title">CFD Trading
                    </div>
                    <div className="card__description">
                      Diversify your portfolio by trading Contracts for Difference (CFDs) on indices, commodities, stocks, and cryptocurrencies.

                    </div>
                  </div>
                  <div className="main__why-we-are-different-card">
                    <div className="bg-icon">
                        <BsCalculator size={30} className="react-icon-div" />

                    </div>
                    <div className="card__title">Educational Resources</div>
                    <div className="card__description">
                      Access our extensive library of educational materials, including webinars, tutorials, and market analysis, to enhance your trading knowledge and skills.
                    </div>
                  </div>
                  <div className="main__why-we-are-different-card">
                    <div className="bg-icon">
                        <PiCurrencyDollarBold size={30} className="react-icon-div" />

                    </div>
                    <div className="card__title">Personalized Support</div>
                    <div className="card__description">
                      Our dedicated team of professionals is available around the clock to provide personalized support and assistance whenever you need it.
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
              </TabPanel>

              <TabPanel value="3">
                <div className="why-rise-fx-landing-page">
                  <div className="text-h2">
                    <h2
                      className="About-Header"
                      style={{ textAlign: "center", paddingTop: "64px" }}
                    >
                      Why Rise FX
                    </h2>
                    <div className="Empty-line"></div>
                  </div>
                  <p className="background"></p>
                  <div className="text-back">
                    <p>
                      There are many different choices for forex brokers in the
                      world, but here's some of the reasons why we think we're
                      unique.
                    </p>
                  </div>
                  <div className="main__why-we-are-different-grid">
                    <div className="main__why-we-are-different-card">
                      <div className="bg-icon">
                          <BsFire size={30} className="react-icon-div" />

                      </div>
                      <div className="card__title">
                        Ultra-tight Spreads
                      </div>
                      <div className="card__description">
                        Spreads starting from 0.0 pips.

                      </div>
                    </div>
                    <div className="main__why-we-are-different-card">
                      <div className="bg-icon">
                          <BsFillCalendar2RangeFill size={30} className="react-icon-div" />

                      </div>
                      <div className="card__title">Dedicated Customer Service
                      </div>
                      <div className="card__description">
                        A 24/5 service for queries, consultation, and feedback.

                      </div>
                    </div>
                    <div className="main__why-we-are-different-card">
                      <div className="bg-icon">
                          <BsCalculator size={30} className="react-icon-div" />

                      </div>
                      <div className="card__title">Fast & Stable Trading Environment</div>
                      <div className="card__description">
                        24-hours steady trading environment, with orders getting processed in milliseconds.

                      </div>
                    </div>
                    <div className="main__why-we-are-different-card">
                      <div className="bg-icon">
                          <PiCurrencyDollarBold size={30} className="react-icon-div" />

                      </div>
                      <div className="card__title">Hassle-free Transactions</div>
                      <div className="card__description">
                        Multiple deposit and withdrawal methods with zero deposit fees on most payment methods.

                      </div>
                    </div>
                    <div className="main__why-we-are-different-card">
                      <div className="bg-icon">
                          <BiCreditCardFront size={30} className="react-icon-div" />

                      </div>
                      <div className="card__title">Top Institutional Liquidity</div>
                      <div className="card__description">
                        Institutional-level liquidity access, ensuring ultra-tight spread.

                      </div>
                    </div>
                    <div className="main__why-we-are-different-card">
                      <div className="bg-icon">
                          <MdManageAccounts size={30} className="react-icon-div" />

                      </div>
                      <div className="card__title">Trust and Transparency</div>
                      <div className="card__description">
                        Trust and Transparency form the basis of RISEFX core values.

                      </div>
                    </div>
                    <div className="main__why-we-are-different-card">
                      <div className="bg-icon">
                          <BiSolidCoffeeBean size={30} className="react-icon-div" />

                      </div>
                      <div className="card__title">
                        Fast Execution

                      </div>
                      <div className="card__description">
                        We ensure trades are carried out quickly and efficiently, with minimal delay between the order placement and its execution.

                      </div>
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
              </TabPanel>

              <TabPanel value="4">
                <div className="text-h2">
                  <h2
                    className="About-Header"
                    style={{ textAlign: "center", paddingTop: "120px" }}
                  >
                    Welcome to Our Blogs
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
                <div className="text-back">
                  <p>
                    We can talk all we like about our mission of lowering your
                    costs, having a wide range of products and world-class
                    support, but how about hearing what our clients say about
                    us? Or how about some awards we've won recently?
                  </p>
                </div>
                <div className="tab-panel">
                  <div className="main__why-we-are-different-grid">
                    <div className="main__why-we-are-different-card">
                      <div className="bg-icon">
                          <BsFire size={30} className="react-icon-div" />

                      </div>
                      <div className="card__title">Blog-1</div>
                      <div className="card__description">
                        With spreads from 0.0 and $2.25 commission per side, we
                        offer a commission rate that is on average 36% cheaper*
                        than our competitors.{" "}
                      </div>
                    </div>
                    <div className="main__why-we-are-different-card">
                      <div className="bg-icon">
                          <BsFillCalendar2RangeFill size={30} className="react-icon-div" />

                      </div>
                      <div className="card__title">Blog-2</div>
                      <div className="card__description">
                        As a live account holder, you will have your own trading
                        specialist to help you navigate the trading platform and
                        the markets.
                      </div>
                    </div>
                    <div className="main__why-we-are-different-card">
                      <div className="bg-icon">
                          <BsCalculator size={30} className="react-icon-div" />

                      </div>
                      <div className="card__title">Blog-3</div>
                      <div className="card__description">
                        We have waived fees on Visa, MasterCard, PayPal, Skrill
                        &amp; Neteller.
                      </div>
                    </div>
                    <div className="main__why-we-are-different-card">
                      <div className="bg-icon">
                          <PiCurrencyDollarBold size={30} className="react-icon-div" />

                      </div>
                      <div className="card__title">Blog-4</div>
                      <div className="card__description">
                        {" "}
                        allows you to copy other successful Rise FX clients,
                        have others copy your trades or simply copy between your
                        own Rise FX accounts, all within a few clicks.{" "}
                      </div>
                    </div>
                    <div className="main__why-we-are-different-card">
                      <div className="bg-icon">
                          <BiCreditCardFront size={30} className="react-icon-div" />

                      </div>
                      <div className="card__title">Blog-5</div>
                      <div className="card__description">
                        Most brokers charge $5-$10 per trade for US Share CFDs.
                        True to our mission, we're charging .
                      </div>
                    </div>
                    <div className="main__why-we-are-different-card">
                      <div className="bg-icon">
                          <MdManageAccounts size={30} className="react-icon-div" />

                      </div>
                      <div className="card__title">Blog-6</div>
                      <div className="card__description">
                        {" "}
                        With spreads from 0.0 and $2.25 commission per side, we
                        offer a commission rate that is on average 36% cheaper*
                        than our competitors. Learn more.{" "}
                      </div>
                    </div>
                    <div className="main__why-we-are-different-card">
                      <div className="bg-icon">
                          <BsFire size={30} className="react-icon-div" />

                      </div>
                      <div className="card__title">Blog-7</div>
                      <div className="card__description">
                        With spreads from 0.0 and $2.25 commission per side, we
                        offer a commission rate that is on average 36% cheaper*
                        than our competitors. Learn more.{" "}
                      </div>
                    </div>
                    <div className="main__why-we-are-different-card">
                      <div className="bg-icon">
                          <BsFillCalendar2RangeFill size={30} className="react-icon-div" />

                      </div>
                      <div className="card__title">Blog-8</div>
                      <div className="card__description">
                        As a live account holder, you will have your own trading
                        specialist to help you navigate the trading platform and
                        the markets.
                      </div>
                    </div>
                    <div className="main__why-we-are-different-card">
                      <div className="bg-icon">
                          <BsCalculator size={30} className="react-icon-div" />

                      </div>
                      <div className="card__title">Blog-9</div>
                      <div className="card__description">
                        RISE FX+ allows you to copy other successful RISE FX
                        clients, have others copy your trades
                      </div>
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
              </TabPanel>
            </TabContext>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutusComp;
