
import React, { useEffect } from "react";
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
const Metatrader7 = () => {
    const [value, setValue] = useState("3");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])


    return (
        <>
        <div className="about-wrapper">
        <h2 className="About-Header-top">  RISE FX Apps</h2>
            <div className="About-top">
              

                <div className="About-us">
                    <TabContext value={value} className="rise-tabss">
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <TabList
                             className=" tabs-scrollbar"
                                onChange={handleChange}
                                aria-label="lab API tabs example"
                            >
                                <Tab label="RiseFX Mobile App " value="1" className="meta-tab" />
                                <Tab label="RiseFX Web Trader" value="2" className="meta-tab" />
                                <Tab label="RiseFX Platform" value="3" className="meta-tab" />
                                {/* <Tab label="our Blogs" value="4" className="meta-tab" /> */}
                                {/* <Tab label="Trading view" value="5" className="meta-tab" /> */}
                                {/* <Tab label="cTrader Mobile" value="6" />
                  <Tab label="cTrader WebTrader" value="7" /> */}
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <div className="text-h2">
                                <h2 className="About-Header" style={{ textAlign: "center", paddingTop: "120px" }}>Download MT4 for Mobile</h2>
                                <div className="Empty-line"></div>
                            </div>
                            <p className="background"></p>
                            <div className="text-back">
                                <p>
                                Trade via your iPhone, Android or tablet with the MetaTrader 4 apps for mobile for free. With the MetaTrader 4 app, you can manage your account, open or close a position, check live pricing, as well as use all the most popular analytical tools you would normally be able to if trading via a desktop.
                                </p>
                            </div>

                          
                            
                            <div className=" About-Ready-start-trading">
                                <div className="section7-heading">
                                    <h1 className="About-Header"> Ready to Start Trading?</h1>
                                </div>
                                <div className="section7-div" style={{ marginTop: '40px' }}></div>
                                <div className="button-class">
                                    <Button variant="contained" id="try-a-free-demo">TRY A FREE DEMO </Button>
                                    <p>OR</p>
                                    <button variant="outlined" id="get-a-live-account" style={{ color: "blue" }}>
                                        GET A LIVE ACCOUNT
                                    </button>
                                </div>
                            </div>

                        </TabPanel>

                        <TabPanel value="2" >
                            <div className="text-h2">
                                <h2 className="About-Header" style={{ textAlign: "center", paddingTop: "120px" }}>RiseFX Web Trader</h2>
                                <div className="Empty-line"></div>
                            </div>
                            <p className="background"></p>
                            <div className="text-back">
                                <p>
                                Now you can trade directly from your internet browser, from anywhere in the world. Save yourself any software installation and trade from any desktop via Windows, Mac or Linux. All you need is an internet connection and your preferred internet browser.                                </p>
                            </div>

                            <div className="text-h2">
                                <h2 className="About-Header" style={{ textAlign: "center", paddingTop: "120px" }}>Other features of a Rise FX Markets MT4 WebTrader</h2>
                                <div className="Empty-line"></div>
                            </div>
                            <div className="main__why-we-are-different-grid">
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                            <img src={fi} />
                                    </div>
                                    {/* <div className="card__title">Australia’s Lowest Trading Costs*</div> */}
                                    <div className="card__description">Trading directly via your browser </div>
                                </div>
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                        <div className="ico ico_24x24 icon-fire" >
                                            <img src={sub} />
                                        </div>
                                    </div>
                                    {/* <div className="card__title">No Minimum Account Size</div> */}
                                    <div className="card__description">Compatibility with any operating system</div>
                                </div>
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                        <div className="ico ico_24x24 icon-fire" >
                                            <img src={vector} />
                                        </div>
                                    </div>
                                    {/* <div className="card__title">No Fees on Deposits</div> */}
                                    <div className="card__description">
                                    One Click Trading</div>
                                </div>
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                        <div className="ico ico_24x24 icon-fire" >
                                            <img src={doller} />
                                        </div>
                                    </div>
                                    {/* <div className="card__title">Copy Trading via Rise FX+</div> */}
                                    <div className="card__description"> History of trading oprations
 </div>
                                </div>
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                        <div className="ico ico_24x24 icon-fire" >
                                            <img src={dropped5} />
                                        </div>
                                    </div>
                                    {/* <div className="card__title">Free US Share CFD Trading</div> */}
                                    <div className="card__description">Real-time quotes in Market Watch</div>
                                </div>
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                            <img src={regulation} />
                                    </div>
                                    {/* <div className="card__title">Regulated</div> */}
                                    <div className="card__description"> 
                                    9 timeframes </div>
                                </div>
                            </div>
                            <div className=" About-Ready-start-trading">
                                <div className="section7-heading">
                                    <h1 className="About-Header"> Ready to Start Trading?</h1>
                                </div>
                                <div className="section7-div" style={{ marginTop: '40px' }}></div>
                                <div className="button-class">
                                    <Button variant="contained" id="try-a-free-demo">TRY A FREE DEMO </Button>
                                    <p>OR</p>
                                    <button variant="outlined" id="get-a-live-account" style={{ color: "blue" }}>
                                        GET A LIVE ACCOUNT
                                    </button>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel value="3" >
                            <div className="text-h2">
                                <h2 className="About-Header" style={{ textAlign: "center", paddingTop: "120px" }}>Rise FX Platform</h2>
                                <div className="Empty-line"></div>
                            </div>
                            <p className="background"></p>
                            <div className="text-back">
                                <p>
                                MetaTrader 5 is the latest platform provided by MetaQuotes and powered by Rise FX Markets. Designed from the ground up to be multi-asset and able to connect to multiple exchanges and new markets.

The platform represents an enhanced and upgraded iteration of its forerunner, a longstanding industry benchmark embraced by traders globally. With MT5's advanced charting technology and sophisticated order management tools, you can swiftly and effectively monitor and control your positions. This robust platform is loaded with innovative features aimed at elevating your trading experience.
                                </p>
                            </div>
                            <div className="text-h2">
                                <h2 className="About-Header" style={{ textAlign: "center", paddingTop: "120px" }}> RiseFX Platform</h2>
                                <div className="Empty-line"></div>
                            </div>
                            <p className="background"></p>
                            <div className="text-back">
                                <p>
                                The latest and greatest from MetaQuotes. Trade Forex, Stocks, Futures and more with MT5.

</p>
                            </div>
                            <div className="main__why-we-are-different-grid">
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                            <img src={fi} />
                                    </div>
                                    {/* <div className="card__title">Australia’s Lowest Trading Costs*</div> */}
                                    <div className="card__description">The ability to trade Forex, Stocks, Futures and more as CFDs </div>
                                </div>
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                        <div className="ico ico_24x24 icon-fire" >
                                            <img src={sub} />
                                        </div>
                                    </div>
                                    {/* <div className="card__title">No Minimum Account Size</div> */}
                                    <div className="card__description">Faster processing speeds</div>
                                </div>
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                        <div className="ico ico_24x24 icon-fire" >
                                            <img src={vector} />
                                        </div>
                                    </div>
                                    {/* <div className="card__title">No Fees on Deposits</div> */}
                                    <div className="card__description">
                                    21 Timeframes</div>
                                </div>
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                        <div className="ico ico_24x24 icon-fire" >
                                            <img src={doller} />
                                        </div>
                                    </div>
                                    {/* <div className="card__title">Copy Trading via Rise FX+</div> */}
                                    <div className="card__description"> Advanced Pending Orders

 </div>
                                </div>
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                        <div className="ico ico_24x24 icon-fire" >
                                            <img src={dropped5} />
                                        </div>
                                    </div>
                                    {/* <div className="card__title">Free US Share CFD Trading</div> */}
                                    <div className="card__description">Full EA functionality with JavaScript</div>
                                </div>
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                            <img src={regulation} />
                                    </div>
                                    {/* <div className="card__title">Regulated</div> */}
                                    <div className="card__description"> 
                                    In built Virtual Private Server (VPS) </div>
                                </div>
                            </div>
                            <div className="text-h2">
                                <h2 className="About-Header" style={{ textAlign: "center", paddingTop: "120px" }}> New  Coding Language
</h2>
                                <div className="Empty-line"></div>
                            </div>
                            <p className="background"></p>
                            <div className="text-back">
                                <p>
                                MetaQuotes Language (Javascript) is a built-in language for programming trading strategies
</p>
                            </div>
                            <div className="main__why-we-are-different-grid">
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                            <img src={fi} />
                                    </div>
                                    {/* <div className="card__title">Australia’s Lowest Trading Costs*</div> */}
                                    <div className="card__description">Object-oriented programming </div>
                                </div>
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                        <div className="ico ico_24x24 icon-fire" >
                                            <img src={sub} />
                                        </div>
                                    </div>
                                    {/* <div className="card__title">No Minimum Account Size</div> */}
                                    <div className="card__description">Improved debugging tools
</div>
                                </div>
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                        <div className="ico ico_24x24 icon-fire" >
                                            <img src={vector} />
                                        </div>
                                    </div>
                                    {/* <div className="card__title">No Fees on Deposits</div> */}
                                    <div className="card__description">
                                    Advanced events management model</div>
                                </div>
                                
                                
                               
                            </div>

                            <div className=" About-Ready-start-trading">
                                <div className="section7-heading">
                                    <h1 className="About-Header"> Ready to Start Trading?</h1>
                                </div>
                                <div className="section7-div" style={{ marginTop: '40px' }}></div>
                                <div className="button-class">
                                    <Button variant="contained" id="try-a-free-demo">TRY A FREE DEMO </Button>
                                    <p>OR</p>
                                    <button variant="outlined" id="get-a-live-account" style={{ color: "blue" }}>
                                        GET A LIVE ACCOUNT
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
export default Metatrader7;