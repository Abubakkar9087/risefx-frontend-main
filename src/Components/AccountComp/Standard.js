
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./zero-account.css";
import "../Section.css";
import "../product&account-overview.css";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Button from "@mui/material/Button";
import { ThemeContext } from "../themeProvider/Theme-provider";

const Standardcomp = (index) => {
    const [value, setValue] = useState(`${index.index}`);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const {theme} = useContext(ThemeContext)
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
        <h2 className="About-Header-top"> Product and Account </h2>
        <div className="About-top">
          <div className="About-us">
            <TabContext value={value} className="rise-tabss">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  className=" tabs-scrollbar"
                >
                  
                  <Tab label="STANDARD Account" value="1" className="meta-tab" />
                  <Tab label="CLASSIC Account" value="2" className="meta-tab" />
                  <Tab label="PRO Account" value="3" className="meta-tab" />
                  <Tab label="VIP Account" value="4" className="meta-tab" />
                
                </TabList>
              </Box>
             

              <TabPanel value="1">
                <div className="text-h2">
                  <h2 style={{ textAlign: "center", paddingTop: "64px" }}>
                    STANDARD Account
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
                

                

                  <div className="text-h2">
                    <h3 >
                      Account Details
                    </h3>
                  </div>
                  <section className="two-columns-table">
                    <div className="two-columns-table__key">Base currency</div>
                    <div className="two-columns-table__value">USD</div>
                    <div className="two-columns-table__key">Minimum deposit</div>
                    <div className="two-columns-table__value">
                      Depends upon payment system
                    </div>
                    <div className="two-columns-table__key">
                      Spread From
                    </div>
                    <div className="two-columns-table__value">from 1.8 pip.</div>
                    <div className="two-columns-table__key">Commission</div>
                    <div className="two-columns-table__value">0$ </div>
                    <div className="two-columns-table__key">
                      Max Leverage
                    </div>
                    <div className="two-columns-table__value">
                      1 : 500
                    </div>
                    <div className="two-columns-table__key">
                      Min lot size
                    </div>
                    <div className="two-columns-table__value"> 0.01</div>
                    <div className="two-columns-table__key">
                      Max lot size
                    </div>
                    <div className="two-columns-table__value">100</div>
                    <div className="two-columns-table__key">
                      Order execution
                    </div>
                    <div className="two-columns-table__value">Market</div>
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
                  <h2 style={{ textAlign: "center", paddingTop: "64px" }}>
                    CLASSIC Account
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
               

                  <div className="text-h2">
                    <h3 >
                      Account Details
                    </h3>
                  </div>
                  <section className="two-columns-table">
                    <div className="two-columns-table__key">Base currency</div>
                    <div className="two-columns-table__value">USD</div>
                    <div className="two-columns-table__key">Minimum deposit</div>
                    <div className="two-columns-table__value">
                      Depends upon payment system
                    </div>
                    <div className="two-columns-table__key">
                      Spread From
                    </div>
                    <div className="two-columns-table__value">from 1.5 pip.</div>
                    <div className="two-columns-table__key">Commission</div>
                    <div className="two-columns-table__value">0$ </div>
                    <div className="two-columns-table__key">
                      Max Leverage
                    </div>
                    <div className="two-columns-table__value">
                      1 : 500
                    </div>
                    <div className="two-columns-table__key">
                      Min lot size
                    </div>
                    <div className="two-columns-table__value"> 0.01</div>
                    <div className="two-columns-table__key">
                      Max lot size
                    </div>
                    <div className="two-columns-table__value">100</div>
                    <div className="two-columns-table__key">
                      Order execution
                    </div>
                    <div className="two-columns-table__value">Market</div>
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
              <TabPanel value="3">
                <div className="text-h2">
                  <h2 style={{ textAlign: "center", paddingTop: "64px" }}>
                    PRO  Account
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
               

                  <div className="text-h2">
                    <h3 >
                      Account Details
                    </h3>
                  </div>
                  <section className="two-columns-table">
                    <div className="two-columns-table__key">Base currency</div>
                    <div className="two-columns-table__value">USD</div>
                    <div className="two-columns-table__key">Minimum deposit</div>
                    <div className="two-columns-table__value">
                    500$
                    </div>
                    <div className="two-columns-table__key">
                      Spread From
                    </div>
                    <div className="two-columns-table__value">from 0 pip.</div>
                    <div className="two-columns-table__key">Commission</div>
                    <div className="two-columns-table__value">2 Side commision per std lot  </div>
                    <div className="two-columns-table__key">
                      Max Leverage
                    </div>
                    <div className="two-columns-table__value">
                      1 : 500
                    </div>
                    <div className="two-columns-table__key">
                      Min lot size
                    </div>
                    <div className="two-columns-table__value"> 0.01</div>
                    <div className="two-columns-table__key">
                      Max lot size
                    </div>
                    <div className="two-columns-table__value">100</div>
                    <div className="two-columns-table__key">
                      Order execution
                    </div>
                    <div className="two-columns-table__value">Market</div>
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
                  <h2 style={{ textAlign: "center", paddingTop: "64px" }}>
                    VIP Account
                  </h2>
                  <div className="Empty-line"></div>
                </div>
                <p className="background"></p>
                

                

<div className="text-h2">
                    <h3 >
                      Account Details
                    </h3>
                  </div>
                  <section className="two-columns-table">
                    <div className="two-columns-table__key">Base currency</div>
                    <div className="two-columns-table__value">USD</div>
                    <div className="two-columns-table__key">Minimum deposit</div>
                    <div className="two-columns-table__value">
                    1000$
                    </div>
                    <div className="two-columns-table__key">
                      Spread From
                    </div>
                    <d0iv className="two-columns-table__value">from 0 pip.</d0iv>
                    <div className="two-columns-table__key">Commission</div>
                    <div className="two-columns-table__value">1 Side commision per std lot  </div>
                    <div className="two-columns-table__key">
                      Max Leverage
                    </div>
                    <div className="two-columns-table__value">
                      1 : 500
                    </div>
                    <div className="two-columns-table__key">
                      Min lot size
                    </div>
                    <div className="two-columns-table__value"> 0.01</div>
                    <div className="two-columns-table__key">
                      Max lot size
                    </div>
                    <div className="two-columns-table__value">100</div>
                    <div className="two-columns-table__key">
                      Order execution
                    </div>
                    <div className="two-columns-table__value">Market</div>
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

export default Standardcomp;