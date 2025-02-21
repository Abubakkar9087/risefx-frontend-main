
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "../AboutusComp/About-us.css";
import "../Section.css";
import "../PartnersComp/Partner-overview.css";
import "./forex.css";
import { NavLink } from "react-router-dom";

import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Button from "@mui/material/Button";
import { ThemeContext } from "../themeProvider/Theme-provider";
import { FaThumbsUp } from "react-icons/fa";
import { BsFillCalendar2RangeFill } from "react-icons/bs";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { LuFolderSearch2 } from "react-icons/lu";
import { FaFaceSmile } from "react-icons/fa6";
import Gold_image from "../../Images/Gold.png";
import Comodity_image from "../../Images/Comodity.png";
import Forex_image from "../../Images/FOREX.png";
import Indices_image from "../../Images/Indices.png"
const Market = (index) => {
    const [value, setValue] = useState(`${index.index}`);
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
             <div className={`about-wrapper ${theme}`}>
                <h2 className="About-Header-top">  Market </h2>
                <div className="About-top">


                    <div className="About-us">
                        <TabContext value={value} className="rise-tabss">
                            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                                <TabList
                                    className=" tabs-scrollbar"
                                    onChange={handleChange}
                                    aria-label="lab API tabs example"
                                >
                                    <Tab label="Forex" value="1" className="meta-tab" />
                                    <Tab label="Metal" value="2" className="meta-tab" />
                                    <Tab label="Indices" value="3" className="meta-tab" />
                                    <Tab label=" Commodities" value="4" className="meta-tab" />
                                  
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <div className="text-h2">
                                    <h2 className="About-Header" style={{ textAlign: "center", paddingTop: "64px" }}>Forex</h2>
                                    <h3 className="About-Header">Trade Forex</h3>
                                    <div className="Empty-line"></div>
                                </div>
                                <p className="background"></p>
                                <div className="text-back">
                                    <p>
                                        <img src={Forex_image} className="Forex_image" />

                                        Forex, short for foreign exchange, refers to the global decentralized market where
                                        currencies are traded. It is the largest and most liquid financial market in the world, with
                                        a daily trading volume exceeding $6 trillion USD.
                                        {/* Trade the most popular Forex pairs with low commissions and industry-leading spreads*. At $2.25 commissions per side and from 0.0 spreads on EUR/USD and other popular pairs, you can put the money you save on trading fees to better use. */}
                                    </p>
                                </div>
                                <div className="section-text">
                                    <h3 className="About-Header">Advantages of Forex Trading with RISEFX</h3>
                                </div>
                                <div className="div-div-e">
                                    <li className="div-div-e-list">60+ currency pairs - majors, crosses and exotics</li>
                                    <li className="div-div-e-list">24 hours a day, 5 days a week</li>
                                    <li className="div-div-e-list">Trade with NO hidden charges</li>
                                    <li className="div-div-e-list">Tight spreads & Zero Swap</li>


                                </div>


                                <div className="section-text">
                                    <h3 className="About-Header">What is Forex Trading?</h3>
                                </div>
                                <div className="div-div-e">
                                    <p style={{ textAlign: 'center' }}>
                                        Forex or FX is short for Foreign Exchange. Forex trading is the buying and selling of different currencies in
                                        order to make a profit when the value of the currency changes.

                                        Think the Euro is weak? You can short it against another currency such as the US Dollar or Swiss Franc. Do you
                                        believe the Australian Dollar will strengthen? Go long AUD with leverage..
                                    </p>
                                </div>

                                <div className="About-card-one">
                                    <h2>Why Trade Forex on Rise FX Markets?</h2>
                                    <div className="main__why-we-are-different-grid">
                                        <div className="main__why-we-are-different-cards">

                                            <div className="bg-icon">
                                                    <FaThumbsUp size={30} className="react-icon-div" />

                                            </div>
                                            <div className="card__title">Low Commissions</div>
                                            <div className="card__description">
                                                Our  commissions per side make us one of the cheapest and most cost-effective platforms for traders and has led to us being named the best discount broker^ for the past 4 years.

                                            </div>
                                        </div>
                                        <div className="main__why-we-are-different-cards">
                                            <div className="bg-icon">
                                                <div className="ico ico_24x24 icon-fire" >
                                                    <BsFillCalendar2RangeFill size={30} className="react-icon-div" />

                                                </div>
                                            </div>
                                            <div className="card__title">No Deposit Fees</div>
                                            <div className="card__description">At Rise FX Markets we want to keep our traders’ costs down, which is why we charge $0 when you fund with any of our deposit methods including credit cards, PayPal, bank transfers, and more.</div>
                                        </div>
                                        <div className="main__why-we-are-different-cards">
                                            <div className="bg-icon">
                                                <div className="ico ico_24x24 icon-fire" >
                                                    <PiCurrencyDollarBold size={30} className="react-icon-div" />

                                                </div>
                                            </div>
                                            <div className="card__title">No Minimum Account Size</div>
                                            <div className="card__description">We believe trading should be accessible to all, so we have no minimum account size requirements for you to open an account.

                                                .</div>
                                        </div>
                                    </div>
                                </div>
                                


                                <div className=" About-Ready-start-trading">
                                    <div className="section7-heading">
                                        <h1 className="About-Header"> Ready to Start Trading?</h1>
                                    </div>
                                    <div className="section7-div" style={{ marginTop: '40px' }}></div>
                                    <div className="button-class">
                                        <Button variant="contained" id="try-a-free-demo"><NavLink className="create-link" to="https://panel.therisefx.com/register">
                                            TRY A FREE DEMO
                                        </NavLink></Button>
                                        <p>OR</p>
                                        <button variant="outlined" id="get-a-live-account" style={{ color: "blue" }}>
                                            <NavLink to="https://panel.therisefx.com/register">
                                                GET A LIVE ACCOUNT
                                            </NavLink>
                                        </button>
                                    </div>
                                </div>

                            </TabPanel>

                            <TabPanel value="2" >
                                <div className="section-text">
                                    <h2 className="About-Header">
                                        {/* Precious */}
                                        Metals</h2>
                                    <h3 className="About-Header">Open a Position on Gold, Silver, Platinum, and More</h3>
                                </div>
                                <div className="div-div-e-start">
                                    <p style={{ textAlign: 'center' }}>
                                        Metals in the forex market refer to precious and base metals, such as gold, silver,
                                        platinum, and copper, which can be traded through derivative instruments like contracts
                                        for difference (CFDs) alongside currency pairs.<br></br>

                                        <img src={Gold_image} className="Gold_image" />

                                        <div className="top_gold"><span className="Gold-XAU">Gold (XAU/USD):</span>Gold is one of the most widely traded metals in the forex market. As a
                                            safe-haven asset, gold is often used as a store of value during times of economic
                                            uncertainty and market volatility. Traders can speculate on the price movements of gold
                                            against the US dollar (XAU/USD) using CFDs.</div><br></br>

                                        <div className="top_gold"><span className="Gold-XAU">Silver (XAG/USD):</span> Silver is another popular metal traded in the forex market. Like gold,
                                            silver is considered a safe-haven asset and is used for both investment and industrial
                                            purposes. Traders can speculate on the price movements of silver against the US dollar
                                            (XAG/USD) using CFDs.</div><br></br>

                                        <div className="top_gold"><span className="Gold-XAU">Platinum (XPT/USD):</span> Platinum is a rare and valuable metal that is primarily used in
                                            industrial applications, particularly in the automotive and jewelry industries. Traders can
                                            speculate on the price movements of platinum against the US dollar (XPT/USD) using
                                            CFDs.</div><br></br>

                                        <div className="top_gold"><span className="Gold-XAU">Palladium (XPD/USD):</span> Palladium is a precious metal that is widely used in the
                                            automotive industry, particularly in catalytic converters. Like platinum, palladium is
                                            traded against the US dollar (XPD/USD) in the forex market using CFDs.</div>

                                       
                                    </p>
                                </div>

                                <div className="About-card-one">
                                    <h2 className="About-Header">Why Trade on Rise FX Markets</h2>
                                    <div className="main__why-we-are-different-grid">
                                        <div className="main__why-we-are-different-cards">

                                            <div className="bg-icon">
                                                    <FaThumbsUp size={30} className="react-icon-div" />
                                            </div>
                                            <div className="card__title">#1 for Execution Speed in Australia**</div>
                                            <div className="card__description">
                                                Our executions are lightning-quick, ranking #1 in Australia for execution speed.** Perfect for EAs or anyone that wants to avoid any lag on their trades.
                                            </div>
                                        </div>
                                        <div className="main__why-we-are-different-cards">
                                            <div className="bg-icon">
                                                <div className="ico ico_24x24 icon-fire" >
                                                    <LuFolderSearch2 size={30} className="react-icon-div" />
                                                </div>
                                            </div>
                                            <div className="card__title">No Deposit Fees</div>
                                            <div className="card__description">At Rise FX Markets we want to keep our traders’ costs down, which is why we charge $0 when you fund with any of our deposit methods including credit cards, PayPal, bank transfers, and more.</div>
                                        </div>
                                        <div className="main__why-we-are-different-cards">
                                            <div className="bg-icon">
                                                <div className="ico ico_24x24 icon-fire" >
                                                    <FaFaceSmile size={30} className="react-icon-div" />
                                                </div>
                                            </div>
                                            <div className="card__title">No Long Sign-Up Process</div>
                                            <div className="card__description">Most of our clients are able to fund and start trading within five minutes. Don’t wait to trade.


                                                .</div>
                                        </div>
                                    </div>
                                </div>

                                
                            </TabPanel>

                            <TabPanel value="3" >
                                <div className="text-h2">
                                    <h2 className="About-Header" style={{ textAlign: "center", paddingTop: "64px" }}>
                                    Indices</h2>
                                    <h3 className="About-Header">Open a position on the world’s top equity indices</h3>
                                    <div className="Empty-line"></div>
                                </div>
                                <p className="background"></p>
                                <div className="text-back">
                                    <p>
                                        <img src={Indices_image} className="Forex_image" />

                                        Equity Index CFDs offer traders a flexible and efficient way to gain exposure to broad
                                        market movements and implement various trading strategies in the financial markets. it's
                                        important for traders to understand the risks involved, including leverage and market
                                        volatility.
                                        Trading currency indices with RISEFX offers traders the opportunity to diversify their
                                        portfolios, access liquid markets, and trade with confidence using advanced tools and
                                        resources. With competitive pricing, flexible trading options, and regulatory compliance.

                                    </p>
                                </div>


                                <div className="section-text">
                                    <h3 className="About-Header">What are Equity Index CFDs?</h3>
                                </div>
                                <div className="div-div-e">
                                    <p style={{ textAlign: 'center' }}>
                                        An Equity Index CFD is an instrument traders can use to long or short a sector or economy. It provides access
                                        to a group of shares like the top 500 largest companies in the US (S&P 500) with a single asset and gives traders
                                        the opportunity to profit when the price of the index fluctuates.
                                    </p>
                                </div>

                                <div className="About-card-one">
                                    <h2 className="About-Header">Why Rise FX?</h2>
                                    <div className="main__why-we-are-different-grid">
                                        <div className="main__why-we-are-different-cards">

                                            <div className="bg-icon">
                                                    <FaThumbsUp size={30} className="react-icon-div" />
                                            </div>
                                            <div className="card__title">Zero Commissions</div>
                                            <div className="card__description">
                                                Pay no commissions when you trade equity indices.
                                            </div>
                                        </div>
                                        <div className="main__why-we-are-different-cards">
                                            <div className="bg-icon">
                                                <div className="ico ico_24x24 icon-fire" >
                                                    <LuFolderSearch2 size={30} className="react-icon-div" />
                                                </div>
                                            </div>
                                            <div className="card__title">Go Long and Short</div>
                                            <div className="card__description">Rise FX Markets allows you to go long or short with leverage on any of our trading products.</div>
                                        </div>
                                        <div className="main__why-we-are-different-cards">
                                            <div className="bg-icon">
                                                <div className="ico ico_24x24 icon-fire" >
                                                    <FaFaceSmile size={30} className="react-icon-div" />
                                                </div>
                                            </div>
                                            <div className="card__title">No Minimum Account Size</div>
                                            <div className="card__description">We believe trading should be accessible to all, so we have no minimum account size requirements for you to open an account.

                                                .</div>
                                        </div>
                                    </div>
                                </div>

                               
                            </TabPanel>


                            <TabPanel value="4" >
                                <div className="text-h2">
                                    <h2 style={{ textAlign: "center", paddingTop: "64px" }}> Commodities</h2>
                                    <h3>Trade Commodities like Oil, Wheat, Cotton and more</h3>
                                    <div className="Empty-line"></div>
                                </div>
                                <p className="background"></p>
                                <div className="text-back">
                                   

                                    <p>
                                        <img src={Comodity_image} className="Forex_image" />
                                        In the forex market, commodities can be traded through derivative instruments known as commodity contracts for difference (CFDs). These CFDs allow traders to speculate on the price movements of various commodities without owning the underlying assets. Here are some common commodities that can be traded with us are agricultural products and energies through CFDs. Benefit from leverage as high as 1:500 and spreads starting from as 0.7 pips, with fast order execution.</p>
                                    <p>
                                        Trading commodities in the forex market through CFDs offers traders a flexible and accessible way to participate in the global commodities market and diversify their trading portfolios. However, traders should be aware of the risks associated with commodity trading, including price volatility, leverage, and geopolitical factors, and should conduct thorough research and analysis before trading.
                                    </p>
                                </div>



                                <div className="section-text">
                                    <h3>What are Commodity CFDs?</h3>
                                </div>
                                <div className="div-div-e">
                                    <p style={{ textAlign: 'center' }}>
                                        Commodity CFDs (Contracts for Difference) are financial derivatives that allow traders and investors to speculate on the price movements of various commodities without owning the actual physical assets. Commodity CFDs provide a convenient way to gain exposure to commodities such as metals, energy resources, agricultural products, and other raw materials, without needing to buy the actual asset.
                                        Traders can take both long and short positions on Commodity CFDs. Unlike traditional commodity trading, where you might have to deal with storage, transportation, and other logistics of physical goods, Commodity CFDs are purely financial instruments. Commodity CFDs often allow traders to use leverage up to 500:1 , meaning they can control a larger position size with a smaller amount of capital.
                                    </p>
                                </div>


                                <div className="About-card-one">
                                    <h2>Why Rise FX?</h2>
                                    <div className="main__why-we-are-different-grid">
                                        <div className="main__why-we-are-different-cards">


                                            <div className="bg-icon">
                                                    <FaThumbsUp size={30} className="react-icon-div" />

                                            </div>
                                            <div className="card__title">Award-Winning Broker</div>
                                            <div className="card__description">
                                                Our low commissions and top-tier support have led us to win the award for Best Discount Broker^ for the past 4 years.


                                            </div>
                                        </div>
                                        <div className="main__why-we-are-different-cards">
                                            <div className="bg-icon">
                                                <div className="ico ico_24x24 icon-fire" >
                                                    <LuFolderSearch2 size={30} className="react-icon-div" />

                                                </div>
                                            </div>
                                            <div className="card__title">No Deposit Fees</div>
                                            <div className="card__description">We charge zero deposit fees, so there are no hidden fees when trading with Rise FX Markets.</div>
                                        </div>
                                        <div className="main__why-we-are-different-cards">
                                            <div className="bg-icon">
                                                <div className="ico ico_24x24 icon-fire" >
                                                    <FaFaceSmile size={30} className="react-icon-div" />
                                                </div>
                                            </div>
                                            <div className="card__title">White Glove Support</div>
                                            <div className="card__description">When you are a live account holder at Rise FX Markets, you have your own personal trading specialist to assist you in navigating the markets and trading platform.




                                                .</div>
                                        </div>
                                    </div>
                                </div>


                               



                                <div className=" About-Ready-start-trading">
                                    <div className="section7-heading">
                                        <h1> Ready to Start Trading?</h1>
                                    </div>
                                    <div className="section7-div" style={{ marginTop: '40px' }}></div>
                                    <div className="button-class">
                                        <Button variant="contained" id="try-a-free-demo"><NavLink className="create-link" to="https://panel.therisefx.com/register">
                                            TRY A FREE DEMO
                                        </NavLink> </Button>
                                        <p>OR</p>
                                        <button variant="outlined" id="get-a-live-account" style={{ color: "blue" }}>
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

export default Market;