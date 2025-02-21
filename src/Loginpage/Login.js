import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../Loginpage/Login.css";
import { FaGoogle } from "react-icons/fa";
import c2 from "../Images/logo.svg";
import flag1 from "../Images/flag.png";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { SiApple } from "react-icons/si";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import flag2 from "../Images/flag-2.svg";
import flag3 from "../Images/flag-3.svg";
import flag4 from "../Images/flag-4.svg";
import flag5 from "../Images/flag-5.svg";
import flag6 from "../Images/flag-6.svg";
import flag7 from "../Images/flag-7.svg";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleSignIn = () => {
    window.location.href = "https://www.google.com/";
  };

  const handleAppleSignIn = () => {
    window.location.href = "https://www.apple.com/";
  };
  return (
    <>
      <div className="scontainer">
        <div className=" login_row" style={{ marginLeft: "22%" }}>
          <div className="col-md-6 " style={{ backgroundColor: "white" }}>
            <div class="dropdown">
              <img src={c2} className="top-1" />
              <button
                class="btn btn-1-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={flag1} className="flag-1" />
              </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <a class="dropdown-item active" href="#">
                    <img src={flag2} className="flag-1" />
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <img src={flag3} className="flag-1" />
                  </a>
                </li>
                <li style={{width:'50px'}}>
                  <a className="dropdown-item" href="#">
                    <img src={flag4} className="flag-1" />
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <img src={flag5} className="flag-1" />
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <img src={flag6} className="flag-1" />
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <img src={flag7} className="flag-1" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="top-top">
              <h4>
                LOG <span>I</span>N
              </h4>
            </div>

            <div className="text-field">
              <TextField
                style={{ width: "80%" }}
                required
                id="outlined-required"
                label="E-mail"
              />
            </div>

            <div className="field">
              <TextField
                required
                id="outlined-required"
                label="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <NavLink className="password">Reset your password</NavLink>
            <button className="btn btn-primary botton" type="button">
              LOGIN
            </button>

            <div className="button">
              <button
                className="b"
                type="button"
                onClick={handleGoogleSignIn}
                style={{ width: "150px", fontSize:'12px',marginLeft:'80px' }} // Decreased width to 150px
              >
                <span className="google" style={{ marginLeft: "-13px" }}>
                  <FaGoogle />
                </span>
                <span style={{ marginLeft: "10px" }}>Sign in with Google</span>
              </button>
            </div>

            <div className="button">
              <button
                className="b-1"
                type="button"
                onClick={handleAppleSignIn}
                style={{ width: "200px" }}
              >
                <span className="google" style={{ marginLeft: "-17px" }}>
                  <SiApple />
                </span>
                <span style={{ marginLeft: "10px" }}>Sign in with Apple</span>
              </button>
            </div>
            <div className="client">
            Not a client yet?<NavLink to='/SignUp'> Sign Up </NavLink>
            </div>
          </div>

          <div className="col-md-6 ">
            <div className="login-2">
              <div className="login-3"></div>
              <div className="text">Bienvenido de vuelta</div>
              <p className="text-1">Thanks for choosing to trade with us.</p>
            </div>
          </div>
          
        </div>
        <div className="last-div">
            Welcome to the Fusion Markets Client Hub. Are you having trouble
            logging in? Please contact us at mailto:help@fusionmarkets.com or call us
            on +61 3 8376 2706. Fusion Markets is not able to take clients from
            Afghanistan, Congo, Iran, Iraq, Japan, Myanmar, New Zealand, North
            Korea, Ontario, Palestine, Russia, Somalia, Sudan, Syria, Ukraine,
            Yemen or the United States or its territories. All financial
            products involve risk, and you should ensure you understand the risk
            involved as certain financial products may not be suitable to
            everyone. Trading in margin foreign exchange and derivatives carries
            a high level of risk and you may incur a loss that is far greater
            than the amount you invested. Past performance of any product
            described on this website is not a reliable indication of future
            performance. Any information or advice contained on this website is
            general in nature and has been prepared without taking into account
            your objectives, financial situation or needs. Before acting on any
            information or advice on this website, you should consider the
            appropriateness of it (And any relevant product) having regard to
            your circumstances and we recommend that you seek independent
            financial advice if necessary. Please read our Financial Services
            Guide (FSG) and Product Disclosure Statement (PDS) which are
            important documents, and which are available for downloading from
            this website. The information on this website is not intended to be
            an inducement, offer or solicitation to anyone outside of Australia
            and is not intended for distribution to, or use by, any person in
            any country or jurisdiction where such distribution or use would be
            contrary to local law or regulation. The information on this site is
            not directed at residents in any country or jurisdiction where such
            distribution or use would be contrary to local law or regulation.
            Fusion Markets is a trading name of FMGP Trading Group Pty Ltd (ABN
            74 146 086 017) and is regulated by ASIC and licensed to carry on a
            financial services business in Australia under Australian Financial
            Services License No. 385620. Gleneagle Securities Pty Limited
            trading as Fusion Markets EN is a registered Vanuatu company
            (company number 40256) and is regulated by the VFSC. Fusion Markets
            International as Fusion Markets is a registered Securities Dealer
            regulated by the Financial Services Authority of Seychelles (license
            number SD096)
          </div>
      </div>

    </>
  );
};

export default Login;
