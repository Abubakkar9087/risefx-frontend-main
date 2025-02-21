
import React, { useEffect } from "react";
import { useState } from "react";
import "../Components/AboutusComp/About-us.css";
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


const Whoareyou = () => {
    const [value, setValue] = useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])


    return (
        <>
            <div className="About-top">
                <h2>  About us </h2>

                <div className="About-us">
                    <TabContext value={value} className="rise-tabss">
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <TabList
                             className=" tabs-scrollbar"
                                style={{ marginLeft: "-20%" }}
                                onChange={handleChange}
                                aria-label="lab API tabs example"
                            >
                                <Tab label="Who we are" value="1" className="meta-tab" />
                                <Tab label="Why RISE FX" value="2" className="meta-tab" />
                                <Tab label="What other say" value="3" className="meta-tab" />
                                <Tab label="our Blogs" value="4" className="meta-tab" />
                                {/* <Tab label="Trading view" value="5" className="meta-tab" /> */}
                                {/* <Tab label="cTrader Mobile" value="6" />
                  <Tab label="cTrader WebTrader" value="7" /> */}
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <div className="text-h2">
                                <h2 style={{ textAlign: "center", paddingTop: "120px" }}>Who We Are</h2>
                                <div className="Empty-line"></div>
                            </div>
                            <p className="background"></p>
                            <div className="text-back">
                                <p>
                                    RISE FX was founded by veterans of the Australian forex industry.
                                    With a combined experience of 50 years, our mission is to create a broker that adheres to a few simple principles:
                                </p>
                            </div>

                            {/* cards */}
                            <div className="section-text">
                                <h3>Our Values</h3>
                            </div>
                            <div className="div-div-e">
                                <p style={{ textAlign: 'center' }}>
                                    These are the values that guide our business and the actions of our people.
                                    As we grow and achieve our vision for greatness, these will always stay the same.
                                </p>
                            </div>

                            <div className="About-card-one">
                                <div className="main__why-we-are-different-grid">
                                    <div className="main__why-we-are-different-card">
                                        <div className="bg-icon">
                                                <img src={thumb} />
                                        </div>
                                        <div className="card__title">Do The Right Thing</div>
                                        <div className="card__description">
                                            For our clients, the company and ourselves. We act with sincerity in all we do to deliver the best outcomes for our clients.
 </div>
                                    </div>
                                    <div className="main__why-we-are-different-card">
                                        <div className="bg-icon">
                                            <div className="ico ico_24x24 icon-fire" >
                                                <img src={search} />
                                            </div>
                                        </div>
                                        <div className="card__title">Go Deep</div>
                                        <div className="card__description">We take ownership of what is in front of us. We're always looking for something new to challenge ourselves and get our hands dirty..</div>
                                    </div>
                                    <div className="main__why-we-are-different-card">
                                        <div className="bg-icon">
                                            <div className="ico ico_24x24 icon-fire" >
                                                <img src={smile} />
                                            </div>
                                        </div>
                                        <div className="card__title">Smile</div>
                                        <div className="card__description">Finance and Investing is serious stuff, but we try not to take ourselves too seriously. We smile. We have fun. The attitude we bring to work helps our clients as traders and our teammates.</div>
                                    </div>
                                </div>
                            </div>
                            <div className=" About-Ready-start-trading">
                                <div className="section7-heading">
                                    <h1> Ready to Start Trading?</h1>
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
                                <h2 style={{ textAlign: "center", paddingTop: "120px" }}>Why Rise FX</h2>
                                <div className="Empty-line"></div>
                            </div>
                            <p className="background"></p>
                            <div className="text-back">
                                <p>
                                    There are many different choices for forex brokers in the world, but here's some of the reasons why we think we're unique.
                                </p>
                            </div>
                            <div className="main__why-we-are-different-grid">
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                            <img src={fi} />
                                    </div>
                                    <div className="card__title">Australia’s Lowest Trading Costs*</div>
                                    <div className="card__description">When we say we want to lower the price that people pay to trade forex, we mean it. That’s why we offer a commission rate that is on average 36% cheaper* than our closest competitors. </div>
                                </div>
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                        <div className="ico ico_24x24 icon-fire" >
                                            <img src={sub} />
                                        </div>
                                    </div>
                                    <div className="card__title">No Minimum Account Size</div>
                                    <div className="card__description">As we put our clients first, we believe you should be able to start trading with as little as you like</div>
                                </div>
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                        <div className="ico ico_24x24 icon-fire" >
                                            <img src={vector} />
                                        </div>
                                    </div>
                                    <div className="card__title">No Fees on Deposits</div>
                                    <div className="card__description">
                                        We have waived fees on Visa, MasterCard, PayPal, Skrill, Neteller and more.
</div>
                                </div>
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                        <div className="ico ico_24x24 icon-fire" >
                                            <img src={doller} />
                                        </div>
                                    </div>
                                    <div className="card__title">Copy Trading via Rise FX+</div>
                                    <div className="card__description"> Rise FX allows you to copy other successful Rise FX clients, have others copy your trades or simply copy between your own Rise FX accounts, all within a few clicks. </div>
                                </div>
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                        <div className="ico ico_24x24 icon-fire" >
                                            <img src={dropped5} />
                                        </div>
                                    </div>
                                    <div className="card__title">Free US Share CFD Trading</div>
                                    <div className="card__description">Most brokers charge $5-$10 per trade for US Share CFDs. True to our mission, we're charging .</div>
                                </div>
                                <div className="main__why-we-are-different-card">
                                    <div className="bg-icon">
                                            <img src={regulation} />
                                    </div>
                                    <div className="card__title">Regulated</div>
                                    <div className="card__description"> 
                                    Rise FX Markets is regulated by the Australian Securities and Investment Commission (226199), Vanuatu Financial Services Commission (40256) and Financial Services Authority (SD096). </div>
                                </div>
                            </div>
                            <div className=" About-Ready-start-trading">
                                <div className="section7-heading">
                                    <h1> Ready to Start Trading?</h1>
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
                                <h2 style={{ textAlign: "center", paddingTop: "120px" }}>What Others Say About Rise FX</h2>
                                <div className="Empty-line"></div>
                            </div>
                            <p className="background"></p>
                            <div className="text-back">
                                <p>
                                    We can talk all we like about our mission of lowering your costs,
                                    having a wide range of products and world-class support,
                                    but how about hearing what our clients say about us?
                                    Or how about some awards we've won recently?
                                </p>
                            </div>
                            <div className=" About-Ready-start-trading">
                                <div className="section7-heading">
                                    <h1> Ready to Start Trading?</h1>
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

                        <TabPanel value="4" >
                            <div className="text-h2">
                                <h2 style={{ textAlign: "center", paddingTop: "120px" }}>Welcome to Our Blogs</h2>
                                <div className="Empty-line"></div>
                            </div>
                            <p className="background"></p>
                            <div className="text-back">
                                <p>
                                    We can talk all we like about our mission of lowering your costs,
                                    having a wide range of products and world-class support,
                                    but how about hearing what our clients say about us?
                                    Or how about some awards we've won recently?
                                </p>
                            </div>
                            <div className="tab-panel">
                                <div className="main__why-we-are-different-grid">
                                    <div className="main__why-we-are-different-card">
                                        <div className="bg-icon">
                                                <img src={fi} />
                                        </div>
                                        <div className="card__title">Blog-1</div>
                                        <div className="card__description">With spreads from 0.0 and $2.25 commission per side, we offer a commission rate that is on average 36% cheaper* than our competitors. </div>
                                    </div>
                                    <div className="main__why-we-are-different-card">
                                        <div className="bg-icon">
                                            <div className="ico ico_24x24 icon-fire" >
                                                <img src={sub} />
                                            </div>
                                        </div>
                                        <div className="card__title">Blog-2</div>
                                        <div className="card__description">As a live account holder, you will have your own trading specialist to help you navigate the trading platform and the markets.</div>
                                    </div>
                                    <div className="main__why-we-are-different-card">
                                        <div className="bg-icon">
                                            <div className="ico ico_24x24 icon-fire" >
                                                <img src={vector} />
                                            </div>
                                        </div>
                                        <div className="card__title">Blog-3</div>
                                        <div className="card__description">We have waived fees on Visa, MasterCard, PayPal, Skrill &amp; Neteller.</div>
                                    </div>
                                    <div className="main__why-we-are-different-card">
                                        <div className="bg-icon">
                                            <div className="ico ico_24x24 icon-fire" >
                                                <img src={doller} />
                                            </div>
                                        </div>
                                        <div className="card__title">Blog-4</div>
                                        <div className="card__description"> allows you to copy other successful Rise FX clients, have others copy your trades or simply copy between your own Rise FX accounts, all within a few clicks. </div>
                                    </div>
                                    <div className="main__why-we-are-different-card">
                                        <div className="bg-icon">
                                            <div className="ico ico_24x24 icon-fire" >
                                                <img src={dropped5} />
                                            </div>
                                        </div>
                                        <div className="card__title">Blog-5</div>
                                        <div className="card__description">Most brokers charge $5-$10 per trade for US Share CFDs. True to our mission, we're charging .</div>
                                    </div>
                                    <div className="main__why-we-are-different-card">
                                        <div className="bg-icon">
                                                <img src={regulation} />
                                        </div>
                                        <div className="card__title">Blog-6</div>
                                        <div className="card__description"> With spreads from 0.0 and $2.25 commission per side, we offer a
                                            commission rate that is on average 36% cheaper* than our
                                            competitors. Learn more. </div>
                                    </div>
                                    <div className="main__why-we-are-different-card">
                                        <div className="bg-icon">
                                                <img src={fi} />
                                        </div>
                                        <div className="card__title">Blog-7</div>
                                        <div className="card__description">With spreads from 0.0 and $2.25 commission per side, we offer a
                                            commission rate that is on average 36% cheaper* than our
                                            competitors. Learn more. </div>
                                    </div>
                                    <div className="main__why-we-are-different-card">
                                        <div className="bg-icon">
                                                <img src={sub} />
                                        </div>
                                        <div className="card__title">Blog-8</div>
                                        <div className="card__description">As a live account holder, you will have your own trading specialist to help you navigate the trading platform and the markets.</div>
                                    </div>
                                    <div className="main__why-we-are-different-card">
                                        <div className="bg-icon">
                                                <img src={vector} />
                                        </div>
                                        <div className="card__title">Blog-9</div>
                                        <div className="card__description">RISE FX+ allows you to copy other successful  RISE FX clients,
                                            have others copy your trades</div>
                                    </div>
                                </div>
                            </div>
                            <div className=" About-Ready-start-trading">
                                <div className="section7-heading">
                                    <h1> Ready to Start Trading?</h1>
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
        </>
    );
};

export default Whoareyou;