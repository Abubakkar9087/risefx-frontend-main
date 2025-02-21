import React, { useContext } from "react";
import "../Common/Footer.css";
import logo from "../Images/logo.svg";
import fb from "../Images/fb.svg";
import cmr from "../Images/cmr.svg";
import you from "../Images/youtube.webp";
import twitter from "../Images/twitter.webp";
import X from "../Images/XLogo.svg";
import card from "../Images/card-1.svg";
import log from "../Images/Logo__6.png";
import riselogo from "../Images/rise.png";
import { FaCreativeCommonsSamplingPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import TickerTapeWidget from "../Components/trading/footer-webkit.js";
import { Link, useNavigate } from "react-router-dom";
import risefxlogo from "../Images/risesvg.svg";
import { ThemeContext } from "../Components/themeProvider/Theme-provider.js";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";



const Footer = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <div className={`risefx-footer ${theme}`}>
        <div className="footer-wrapper">
          <div className="pic-1">
            <img src={risefxlogo} />
          </div>
          <div className="Scontainer">
            <ul className="links">
              <li>
                <h5 className="rise_add">P. O. Box 1912, Beachmont Kingstown St, Vincent and the Grenadines.</h5>
              </li>
              <li>
                <h5 className="rise-email">enquiry@therisefx.com</h5>
              </li>

              <li className="follow">
                <h5>Follow Us</h5>
              </li>
              <div className="Footer-icon">
                <li>
                  <NavLink to='https://www.facebook.com/people/Rise-FX/pfbid02DnekpZ3mVe3DrTWoHFqwNwSc2XPBkHG6gpXJiDeQvCHNABpdUBhVnAQT26YE4gGml/'>
                    <FaFacebookF size={30} className="react-icon-div" />
                  </NavLink>
                </li>
                
                <li className="youtube">
                  <NavLink to='https://www.instagram.com/risefx_official/'>
                    <RiInstagramFill size={30} className="react-icon-div" />
                  </NavLink>
                </li>
                <li className="youtube">
                  <NavLink to='https://www.linkedin.com/in/rise-fx-5604ab24b'>
                    <FaLinkedinIn size={30} className="react-icon-div" />
                  </NavLink>
                </li>
                <li className="youtube">
                  <NavLink to='https://twitter.com/i/flow/login?redirect_after_login=%2FRisefx1'>
                    <FaXTwitter size={30} className="react-icon-div" />
                  </NavLink>
                </li>
              </div>
            </ul>
            <div className="logo-footer-div">
              <div className=" about-footer">
                <h5>About</h5>
                <ul>
                  <li><Link className="who_we_are" to="/about-us/ourmission">
                    Our Mission
                  </Link></li>
                  <li> <NavLink className="who_we_are" to="/about-us/ourservices">
                    Our Services
                  </NavLink></li>
                 
                  <li><NavLink className="who_we_are" to="/about-us/whyrisefx">
                    Why Rise FX
                  </NavLink></li>
                  
                </ul>
              </div>
              <div className="Footer-Trading">
                <h5>Trading</h5>
                <ul>
                  <li><NavLink to="/trading/stdaccount">
                    STANDARD Account
                    </NavLink></li>
                  <li> <NavLink to="/trading/classsicaccount">CLASSIC Account</NavLink></li>
                  <li> <NavLink to="/trading/proaccount">PRO Account</NavLink></li>
                  <li> <NavLink to="/trading/vipaccount">VIP Account</NavLink></li>

                  <li> <NavLink to="/trading/forex">Forex</NavLink></li>
                  <li ><NavLink to="/trading/metal">Metals</NavLink></li>
                  <li> <NavLink to="/trading/indices">Indices</NavLink></li>
                  <li>
                    <NavLink to="/trading/Comodity"> Commodities</NavLink>
                  </li>
                  
                </ul>
              </div>
              <div className="plf-footer">
                <h5>Platform & Tools</h5>
                <ul>
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
              <div className="parter-footer">
                <h5>Partner With Us</h5>
                <ul>
                  <li>
                    <NavLink to="/partnership/partneroverview">Partner Overview</NavLink>
                  </li>
                  <li><NavLink to="/partnership/whyrisefx">
                    Why Rise FX
                  </NavLink></li>
                  <li><NavLink to="/partnership/benefits">
                    Benefits & Join Our Partner Program
                                      </NavLink></li>
                 
                </ul>
              </div>
              <div className="help-footer">
                <h5>More</h5>
                <ul>
                  <li><Link className="who_we_are" to="/help/contactus">
                    Contact Us
                  </Link></li>
                  <li><Link className="who_we_are" to="/help/privacy-policy">
                  Privacy Policy
                  </Link></li>
                 
                </ul>
              </div>
            </div>
          </div>
          <div className="line-1"></div>
          <div className="viva">
            
            <div className="visa-logo-div">
              <img src={card} />
              <img src={log} />
            </div>
          </div>
          <div className="line-1"></div>
          <div className="social">
            <p>
              <span className="disclaimer">RISEFX</span>  is incorporated in  <span className="disclaimer">Mauritius</span> with
              registration number - C191579 and also registered in <span className="disclaimer">Saint Lucia</span>  with registration number - 00506.
              Our website includes links and redirection sections to enhance the quality of our services. As a company, we do not endorse or recommend any specific products or services.
              The information provided on this site is intended for informational purposes only. Therefore, any offer or solicitation should not be
              construed as an invitation or request to engage in any activity in jurisdictions where such actions are not authorized.
              Additionally, it should not be construed as a recommendation to buy, sell, or otherwise engage in any specific currency or
              precious metal transactions where such actions are unlawful.
            </p>
            <p>
              <span className="disclaimer">RISK DISCLAIMER:</span> Trading financial products on margin involves a significant level of risk and
              may not be suitable for all investors. It's important to note that losses can exceed the initial investment. Therefore, it's
              crucial to fully comprehend the risks involved and take appropriate measures to manage them effectively. Investing in derivatives
              carries the possibility of losing an amount that exceeds the initial investment. It's imperative for investors to understand
              these risks thoroughly before engaging in any trading activities.Anyone wishing to invest in any of the products mentioned
              in  <a href="https://therisefx.com/" target="-blank">https://therisefx.com/</a> should seek their own financial or professional advice. Trading of securities, forex, metals,
              commodities may not be suitable for everyone and involves the risk of losing part or all of your money. Trading in the
              financial markets has large potential rewards, but also large potential risk. You must be aware of the risks and be willing
              to accept them in order to invest in the markets. Don't invest and trade with money which you can't afford to lose. Forex
              Trading is not allowed in some countries, before investing your money, make sure whether your country is allowing this or not.
            </p>
            <p>
              Restricted Regions: RISEFX does not provide services for citizens/residents of the United States, Cuba, Iraq, Myanmar,
              North Korea, Sudan. The services of RISEFX are not intended for distribution to, or use by, any person in any country or jurisdiction
              where such distribution or use would be contrary to local law or regulation.
            </p>

            



          </div>
          <div className="ticker">
            <TickerTapeWidget />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
