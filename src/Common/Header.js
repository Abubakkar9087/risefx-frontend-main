import React, { useContext, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "../Common/Header.css";
import icon from "../Images/icon.svg";
import riselogo from "../Images/rise.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Trading from "../Images/trading.svg";
import Trade from "../Images/trade.svg";
import platform from "../Images/platform.svg";
import Question from "../Images/ques.svg";
import HamIcon from "../Images/ham.png";
import CloseIcon from "../Images/close.png";
import risefxlogo from "../Images/risesvg.svg";
import { ThemeContext } from "../Components/themeProvider/Theme-provider.js";
import { FaUserCircle } from "react-icons/fa";
import { GiCoins } from "react-icons/gi";
import { AiOutlineQrcode } from "react-icons/ai";
import { SlBadge } from "react-icons/sl";
import { BsFillQuestionCircleFill } from "react-icons/bs";



const Header = () => {
  const {theme}  = useContext(ThemeContext);
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const hamburgerHander = () => {
    setActiveLink(null);
    setIsOpen(!isOpen);
  };
  const mobList = [
    {
      title: "About Us",
      content: [
        {
          header: "Rise FX",
          title: [{ val: "Our Mission", link: "/about-us/ourmission" },
          { val: "Our Services", link: "/about-us/ourservices" },
          { val: "Why Rise FX?", link: "/about-us/whyrisefx" },
          ]
        }
      ],
    },
    {
      title: "Trading",
      content: [
        {
          header: "Products and Accounts",
          title: [
            { val: "STANDARD Account", link: "/trading/stdaccount" },
            { val: "CLASSIC Account", link: "/trading/classsicaccount" },
            { val: "PRO Account", link: "/trading/proaccount" },
            { val: "VIP Accounts", link: "/trading/vipaccount" },
          ],
        },
        {
          header: "Market",
          title: [
            { val: "Forex", link: "/trading/forex" },
            { val: "Metals", link: "/trading/metal" },
            { val: "Indices", link: "/trading/indices" },
            { val: " Commodities", link: "/trading/Comodity" },
           
          ],
        },
        
      ]

    },
    {
      title: "Platform & Tools",
      content: [
        {
          header: "Rise FX 4/5",
          title: [
            { val: "Rise FX Mobile Apps", link: "/platforms/risefxmobileapp" },
            { val: "Web Trader for Rise FX", link: "/platforms/risefxwebtrader" },
            { val: "RiseFX Platform", link: "/platforms/risefxdesktopapp" },
          ],
        },
        
      ]
    },
    {
      title: "Partner with us",
      content: [
        {
          title: [
            { val: " Overview", link: "/partnership/partneroverview" },
            { val: "Why Rise Fx", link: "/partnership/whyrisefx" },
            { val: "Benefits & Join Our Partner Program", link: "/partnership/benefits" },
           
          ],
        },]
    },
    {
      title: "More",
      content: [
        {
          title: [
            { val: "Contact Us", link: "/more/contactus" },
            { val: "Privacy Policy", link: "/more/privacy-policy" }
          ],
        },]
    },
    
  ];
  const handleLinkClick = (index) => {
    setActiveLink(index === activeLink ? null : index); // Toggle active link
  };
  const clickHandler = () => {
    navigate('/')
  }

  const pdfHandler =()=>{
    
    navigate('/education');
    setIsOpen(false)
  }



  return (
    <div className={`header-wrapper ${theme}`}>
      <nav>
        <div className={`wapper`}>
          <div className="logo">
            <img onClick={clickHandler} src={risefxlogo} />
          </div>
          <div className="mobile-ham">
            <div className="ham-wrapper" onClick={hamburgerHander}>
              {isOpen ? <img src={CloseIcon} alt="close" /> : <img src={HamIcon} alt="ham" />}
            </div>
          </div>
          <div className="spacing-div">
            <div  className="nav-wrapper">
              <ul className="nav-links">
                <li>
                  <span>About Us</span>
                  <div className="mega-box">
                    <div className="content">
                      <div className="row">
                        <div className="box-1">
                          <FaUserCircle size={30} className="react-icon-div"/>
                          <h5 className="vision-hddr">Get to know Us</h5>
                          <p className="vision">
                            Our vision is to provide access to the world’s
                            markets easier, faster and at a lower cost than what
                            exists in the market today
                          </p>
                        </div>
                      </div>
                      <div className="fx-market link-info">
                        <div className="box-2">
                          <header className="fusion-header">
                            RISE FX Market
                          </header>
                          <ul className="mega-links">
                            <li>
                              <Link className="who_we_are" to={`/about-us/ourmission`}>
                              Our Mission
                              </Link>
                            </li>
                            <li>
                              <NavLink className="who_we_are" to="/about-us/ourservices">
                              Our Services 
                              </NavLink>
                            </li>
                            <li>
                              <NavLink className="who_we_are" to="/about-us/whyrisefx">
                              Why Rise FX
                              </NavLink>
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>


                <li>
                  <span>Trading</span>
                  <div className="mega-box">
                    <div className="content">
                      <div className="row">
                        <div className="box-1">
                        <GiCoins size={30} className="react-icon-div"/>
                          
                          <h5 className="vision-hddr">Trade with Us</h5>
                          <p className="vision">
                            With your RISE FX account, you can trade over 250+
                            products with ultra low-costs
                          </p>
                        </div>
                      </div>
                      <div className="trading-wrapper">
                        <div className="fx-market">
                          <div className="box-2">
                            <header className="fusion-header">
                            Account  Types
                            </header>
                            <ul className="mega-links">
                             
                              <li>
                                <NavLink to="/trading/stdaccount">STANDARD Account</NavLink>
                              </li>
                              <li>
                                <NavLink to="/trading/classsicaccount">CLASSIC Account</NavLink>
                              </li>
                              <li>
                                <NavLink to="/trading/proaccount">PRO Account</NavLink>
                              </li>
                              <li>
                                <NavLink to="/trading/vipaccount">VIP Accounts</NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="fx-market">
                          <div className=" box-2">
                            <header className="fusion-header">Market</header>
                            <ul className="mega-links">
                              <li>
                                <NavLink to="/trading/forex">Forex</NavLink>
                              </li>
                              <li>
                                <NavLink to="/trading/metal">Metals</NavLink>
                              </li>
                              <li>
                                <NavLink to="/trading/indices">Indices</NavLink>
                              </li>
                              <li>
                                <NavLink to="/trading/Comodity">
                                   Commodities</NavLink>
                              </li>
                              
                            </ul>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <span>Platform</span>
                  <div className="mega-box"   >
                    <div className="content " >
                      <div className="row">
                        <div className="box-1">
                          <AiOutlineQrcode size={30} className="react-icon-div" />
                          <h5 className="vision-hddr">Wide Variety of Tools</h5>
                          <p className="vision">
                            Choose from our range of platforms including  and
                             on desktop and mobile. Learn more about our
                            Sponsored VPS program
                          </p>
                        </div>
                      </div>
                      <div className="trading-wrapper" >
                        <div className="fx-market">
                          <div style={{ paddingRight: "20px" }} className="box-2">
                            <header className="fusion-header">Rise FX Apps </header>
                            <ul className="mega-links">
                              <li>
                                <NavLink to="/platforms/risefxmobileapp"> Rise FX Mobile Apps</NavLink>
                              </li>
                              <li>
                                <NavLink to="/platforms/risefxwebtrader"> Rise FX Webtrader</NavLink>
                              </li>
                              <li>
                                <NavLink to="/platforms/risefxdesktopapp"> RiseFX Platform</NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <span>Partner with us </span>
                  <div className="mega-box">
                    <div className="content">
                      <div className="row">
                        <div className="box-1">
                        <SlBadge size={30} className="react-icon-div" />
                          <h5 className="vision-hddr">Get Rewarded</h5>
                          <p className="vision">
                            Earn money by choosing to partner with us. Choose the option that’s right for you
                          </p>
                        </div>
                      </div>
                      <div className="fx-market link-info">
                        <div className="box-2">
                          <header className="fusion-header">Partners</header>
                          <ul className="mega-links">
                            <li>
                              <NavLink to="/partnership/partneroverview"> Overview</NavLink>
                            </li>
                            <li>
                              <NavLink to="/partnership/whyrisefx">Why Rise FX</NavLink>
                            </li>
                            <li>
                              <NavLink to="/partnership/benefits">

                              Benefits & Join Our Partner Program
                              </NavLink>
                            </li>
                            
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <span>More </span>
                  <div className="mega-box">
                    <div className="content">
                      <div className="row">
                        <div className="box-1">
                          <BsFillQuestionCircleFill size={30} className="react-icon-div" />
                          <h5 className="vision-hddr">How can we help?</h5>
                          <p className="vision">
                            Got questions? We’ve got answers!
                          </p>
                        </div>
                      </div>
                      <div className="fx-market link-info">
                        <div className="box-2">
                          <header className="fusion-header">
                            More
                          </header>
                          <ul className="mega-links">
                            <li>
                              <Link className="who_we_are" to="/more/contactus">
                                Contact Us
                              </Link>
                            </li>
                            
                            <li>
                            <NavLink className="who_we_are" to="/more/privacy-policy">
                                Privacy Policy
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <span onClick={pdfHandler} >Education</span>
                  </li>
              </ul>
            </div>
            <div className="button_wrapper">
               
               <NavLink to="https://panel.therisefx.com/login"><button className="header-login">
                LOGIN</button>
              </NavLink>
               <NavLink  className="create-link" to="https://panel.therisefx.com/register"><button className={`header-open-account`}>
                CREATE AN ACCOUNT
                </button></NavLink>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="mobile-addr">
          {mobList.map((val, index) => {
            return (
              <>
                <div
                  className="link-div"
                  onClick={() => handleLinkClick(index)}
                >
                  <p>{val.title}</p>
                  {activeLink === index ? <FaAngleDown color="#0d1350" /> : <FaAngleRight />}
                </div>
                {activeLink === index && (
                  <div className="link-content">
                    {val.content.map((section, secIndex) => (
                      <div key={secIndex}>
                        <p className="fusin-hddr">{section.header}</p>
                        {section.title.map((title, titleIndex) => (
                          <div className="title-link-div">
                            <NavLink to={title.link} onClick={hamburgerHander} key={titleIndex}>{title.val}</NavLink> <MdKeyboardDoubleArrowRight color="#0d1350" />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </>
            );
          })}
          <div
                  className="link-div"
                  onClick={pdfHandler}
                >
                  <p>Education</p>
                  <FaAngleRight />
                </div>
          <div className="mob-btn-wrapper">
            <button className="create-account"><NavLink  className="create-link" to="https://panel.therisefx.com/register">
                CREATE AN ACCOUNT
              </NavLink></button>
            <button className="login-btn"><NavLink to="https://panel.therisefx.com/login">
                LOGIN
              </NavLink></button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Header;
