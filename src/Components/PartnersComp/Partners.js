
import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import "../AboutusComp/About-us.css";
import "../Section.css";
import "../PartnersComp/Partner-overview.css";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import Button from "@mui/material/Button";

import { ThemeContext } from "../themeProvider/Theme-provider";
import { MdManageAccounts, MdOutlineManageAccounts } from "react-icons/md";

import { BsFire, BsFillCalendar2RangeFill, BsCalculator } from "react-icons/bs";


const Partner = (index) => {
    const [value, setValue] = useState(`${index.index}`);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const { theme } = useContext(ThemeContext)
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])


    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        country: '',
        selectedOption: 'Introducing Broker',
        region: [],
        clientsCount: '',
        attractClients: [],
        financialLicence: 'Yes',
        services: '',
        website: '',
        rebatesExpectations: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleOptionChange = (option) => {
        setFormData({ ...formData, selectedOption: option });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        const updatedRegion = checked
            ? [...formData.region, name]
            : formData.region.filter((item) => item !== name);
        setFormData({ ...formData, region: updatedRegion });
    };

    const handleAttractClientsChange = (e) => {
        const { name, checked } = e.target;
        const updatedAttractClients = checked
            ? [...formData.attractClients, name]
            : formData.attractClients.filter((item) => item !== name);
        setFormData({ ...formData, attractClients: updatedAttractClients });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };


    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validateFullName = (value) => {
        if (!value.trim()) {
            return 'Full Name is required.';
        }
        return '';
    };

    const validateEmail = (value) => {
        if (!value.trim()) {
            return 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            return 'Email is invalid.';
        }
        return '';
    };

    const validatePhoneNumber = (value) => {
        if (!value.trim()) {
            return 'Phone Number is required.';
        } else if (!/^\d{10}$/.test(value)) {
            return 'Phone Number is invalid.';
        }
        return '';
    };

    const validateMessage = (value) => {
        if (!value.trim()) {
            return 'Message is required.';
        }
        return '';
    };

    const handleFullNameChange = (e) => {
        const value = e.target.value;
        setFullName(value);
        setErrors({ ...errors, fullName: validateFullName(value) });
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setErrors({ ...errors, email: validateEmail(value) });
    };

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        setPhoneNumber(value);
        setErrors({ ...errors, phoneNumber: validatePhoneNumber(value) });
    };

    const handleMessageChange = (e) => {
        const value = e.target.value;
        setMessage(value);
        setErrors({ ...errors, message: validateMessage(value) });
    };


    return (
        <>
            <div className={`about-wrapper ${theme}`}>
                <h2 className="About-Header-top">  Partners </h2>
                <div className="About-top">


                    <div className="About-us">
                        <TabContext value={value} className="rise-tabss">
                            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                                <TabList
                                    className=" tabs-scrollbar"
                                    onChange={handleChange}
                                    aria-label="lab API tabs example"
                                >
                                    <Tab label=" Overview" value="1" className="meta-tab" />
                                    <Tab label="Why Choose RISEFX as Your Broker " value="2" className="meta-tab" />
                                    <Tab label="  Benefits & Join Our Partner Program" value="3" className="meta-tab" />

                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <div className="text-h2">
                                    <h2 className="About-Header" style={{ textAlign: "center", paddingTop: "120px" }}>Overview</h2>
                                    <div className="Empty-line"></div>
                                </div>
                                <p className="background"></p>
                                <div className="text-back">
                                    <p>
                                        Are you looking for a rewarding opportunity to grow your business and expand your revenue streams? Partner with RISEFX Forex Broker as an Introducing Broker (IB) and unlock a world of opportunities in the global forex market.
                                    </p>
                                </div>




                                <div className="programm__title-overview">
                                    <div className="form-wrapper custom-form custom-form_no-border-overview" data-form-name="Contact Us">
                                        <div className="form" data-sub-form-name="Contact Us">
                                            <h2 className="title title_32px title_align-center">Send Us a Message</h2>
                                            <div>
                                                <fieldset className="field platform__contact-us-input" data-sub-form-name="Full Name">
                                                    <legend className="field__legend">Full Name</legend>
                                                    <input
                                                        type="text"
                                                        className="field__input"
                                                        placeholder="Full Name"
                                                        value={fullName}
                                                        onChange={handleFullNameChange}
                                                    />
                                                </fieldset>

                                                {errors.fullName && <span className="error-fullname">{errors.fullName}</span>}
                                                <fieldset className="field platform__contact-us-input" data-sub-form-name="E-Mail">
                                                    <legend className="field__legend">E-Mail</legend>
                                                    <input
                                                        type="text"
                                                        className="field__input"
                                                        placeholder="E-Mail"
                                                        value={email}
                                                        onChange={handleEmailChange}
                                                    />

                                                </fieldset>
                                                {errors.email && <span className="error-email">{errors.email}</span>}
                                                <fieldset className="field platform__contact-us-input" data-sub-form-name="Phone Number">
                                                    <legend className="field__legend">Phone Number</legend>
                                                    <input
                                                        type="text"
                                                        className="field__input"
                                                        placeholder="Phone Number"
                                                        value={phoneNumber}
                                                        onChange={handlePhoneNumberChange}
                                                    />
                                                </fieldset>
                                                {errors.phoneNumber && <span className="error-phone">{errors.phoneNumber}</span>}

                                                <fieldset className="field platform__contact-us-input" data-sub-form-name="Message">
                                                    <legend className="field__legend">Message</legend>
                                                    <textarea
                                                        className="field__input field__input_textarea platform__contact-us-textarea"
                                                        placeholder="Message"
                                                        cols="30"
                                                        rows="4"
                                                        value={message}
                                                        onChange={handleMessageChange}
                                                    ></textarea>
                                                </fieldset>
                                                {errors.message && <span className="errormessage">{errors.message}</span>}

                                            </div>

                                            <div style={{ marginBottom: '30px' }} className="g-recaptcha custom-form__recaptcha" data-sitekey="6Lfvb1IaAAAAAITnV_0lXae8oDeeFmsoThV-Z3xq">
                                            </div>
                                        </div>
                                        <div className="open-live-overview">
                                            <button className="button-contact button_primary two-buttons__button" type="button">
                                                SEND MESSAGE
                                            </button>
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

                            <TabPanel value="2" >
                                {/* <div className="text-h2">
                                   
                                    <h3 className="About-Header">Reputation: </h3>
                                    <p>
                                        RISEFX is a trusted and reputable forex broker known for its commitment to excellence, integrity, and client satisfaction. Partnering with us means aligning your brand with a respected industry leader.
                                    </p>
                                    <h3 className="About-Header">Advanced Technology: </h3>
                                    <p>
                                        Benefit from our cutting-edge trading platforms, advanced analytical tools, and lightning-fast execution speeds. Our state-of-the-art technology ensures that you and your clients have access to the latest innovations in the forex market.                                          </p>
                                    <h3 className="About-Header">Competitive Conditions: </h3>
                                    <p>
                                        Enjoy competitive spreads, low commissions, and a wide range of financial instruments, including currency pairs, commodities, indices, and cryptocurrencies. Our competitive trading conditions are designed to attract and retain clients.
                                    </p>
                                </div> */}



                                <div className="main__why-we-are-different-grid">
                                    <div className="main__why-we-are-different-card partner_card-height">
                                        <div className="bg-icon">
                                                <BsFire size={30} className="react-icon-div" />

                                        </div>
                                        <div className="card__title">
                                            Reputation
                                        </div>
                                        <div className="card__description">
                                            RISEFX is a trusted and reputable forex broker known for its commitment to excellence, integrity, and client satisfaction. Partnering with us means aligning your brand with a respected industry leader.

                                        </div>
                                    </div>
                                    <div className="main__why-we-are-different-card partner_card-height">
                                        <div className="bg-icon">
                                                <BsFillCalendar2RangeFill size={30} className="react-icon-div" />

                                        </div>
                                        <div className="card__title">Advanced Technology
                                        </div>
                                        <div className="card__description">
                                            Benefit from our cutting-edge trading platforms, advanced analytical tools, and lightning-fast execution speeds. Our state-of-the-art technology ensures that you and your clients have access to the latest innovations in the forex market.
                                        </div>
                                    </div>
                                    <div className="main__why-we-are-different-card partner_card-height">
                                        <div className="bg-icon">
                                                <BsCalculator size={30} className="react-icon-div" />

                                        </div>
                                        <div className="card__title">Competitive Conditions</div>
                                        <div className="card__description">
                                            Enjoy competitive spreads, low commissions, and a wide range of financial instruments, including currency pairs, commodities, indices, and cryptocurrencies. Our competitive trading conditions are designed to attract and retain clients.
                                        </div>
                                    </div>


                                </div>






                                <div className="programm__title-overview">
                                    <div className="form-wrapper custom-form custom-form_no-border-overview" data-form-name="Contact Us">
                                        <div className="form" data-sub-form-name="Contact Us">
                                            <h2 className="title title_32px title_align-center">Send Us a Message</h2>
                                            <div>
                                                <fieldset className="field platform__contact-us-input" data-sub-form-name="Full Name">
                                                    <legend className="field__legend">Full Name</legend>
                                                    <input
                                                        type="text"
                                                        className="field__input"
                                                        placeholder="Full Name"
                                                        value={fullName}
                                                        onChange={handleFullNameChange}
                                                    />
                                                </fieldset>

                                                {errors.fullName && <span className="error-fullname">{errors.fullName}</span>}
                                                <fieldset className="field platform__contact-us-input" data-sub-form-name="E-Mail">
                                                    <legend className="field__legend">E-Mail</legend>
                                                    <input
                                                        type="text"
                                                        className="field__input"
                                                        placeholder="E-Mail"
                                                        value={email}
                                                        onChange={handleEmailChange}
                                                    />

                                                </fieldset>
                                                {errors.email && <span className="error-email">{errors.email}</span>}
                                                <fieldset className="field platform__contact-us-input" data-sub-form-name="Phone Number">
                                                    <legend className="field__legend">Phone Number</legend>
                                                    <input
                                                        type="text"
                                                        className="field__input"
                                                        placeholder="Phone Number"
                                                        value={phoneNumber}
                                                        onChange={handlePhoneNumberChange}
                                                    />
                                                </fieldset>
                                                {errors.phoneNumber && <span className="error-phone">{errors.phoneNumber}</span>}

                                                <fieldset className="field platform__contact-us-input" data-sub-form-name="Message">
                                                    <legend className="field__legend">Message</legend>
                                                    <textarea
                                                        className="field__input field__input_textarea platform__contact-us-textarea"
                                                        placeholder="Message"
                                                        cols="30"
                                                        rows="4"
                                                        value={message}
                                                        onChange={handleMessageChange}
                                                    ></textarea>
                                                </fieldset>
                                                {errors.message && <span className="errormessage">{errors.message}</span>}

                                            </div>

                                            <div style={{ marginBottom: '30px' }} className="g-recaptcha custom-form__recaptcha" data-sitekey="6Lfvb1IaAAAAAITnV_0lXae8oDeeFmsoThV-Z3xq">
                                                {/* Your reCAPTCHA component */}
                                            </div>
                                        </div>
                                        <div className="open-live-overview">
                                            <button className="button-contact button_primary two-buttons__button" type="button">
                                                SEND MESSAGE
                                            </button>
                                        </div>
                                    </div>
                                </div>




                                <div className=" About-Ready-start-trading">
                                    <div className="section7-heading">
                                        <h1 className="About-Header" > Ready to Start Trading?</h1>
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

                            <TabPanel value="3">
                                {/* <div className="text-h2">
                                    <h3 className="About-Header" >Lucrative Commission Structure:
                                    </h3>
                                    <p>Earn generous commissions on the trading activity of the clients you refer to RISEFX. Our transparent commission structure ensures that you are fairly compensated for your efforts.
                                    </p>
                                    <h3 className="About-Header" >Dedicated Support:
                                    </h3>
                                    <p>
                                        Receive dedicated support from our experienced team of professionals. Our IB managers are here to assist you every step of the way, providing personalized support, marketing materials, and strategic guidance to help you succeed.
                                    </p>
                                    <h3 className="About-Header" >Access to Resources:
                                    </h3>
                                    <p>
                                        Gain access to a wealth of resources, including educational materials, market insights, and promotional tools. Leverage our resources to enhance your marketing efforts and attract new clients to RISEFX.
                                    </p>
                                    <h3 className="About-Header" >Join Our Partner Program Today!
                                    </h3>
                                    <p>
                                        Partnering with RISEFX Forex Broker as an Introducing Broker (IB) opens up a world of opportunities for growth, success, and financial prosperity. Whether you're an experienced IB or new to the industry, we welcome you to join our partner program and embark on a rewarding journey with us.                                                                    </p>
                                </div> */}


                                <div className="main__why-we-are-different-grid">
                                    <div className="main__why-we-are-different-card partner_card-height">
                                        <div className="bg-icon">
                                                <BsFire size={30} className="react-icon-div" />

                                        </div>
                                        <div className="card__title">
                                            Lucrative Commission Structure
                                        </div>
                                        <div className="card__description">
                                            Earn generous commissions on the trading activity of the clients you refer to RISEFX. Our transparent commission structure ensures that you are fairly compensated for your efforts.
                                        </div>
                                    </div>
                                    <div className="main__why-we-are-different-card partner_card-height">
                                        <div className="bg-icon">
                                                <BsFillCalendar2RangeFill size={30} className="react-icon-div" />

                                        </div>
                                        <div className="card__title">Dedicated Support
                                        </div>
                                        <div className="card__description">
                                            Receive dedicated support from our experienced team of professionals. Our IB managers are here to assist you every step of the way, providing personalized support, marketing materials, and strategic guidance to help you succeed.
                                        </div>
                                    </div>
                                    <div className="main__why-we-are-different-card partner_card-height">
                                        <div className="bg-icon">
                                                <BsCalculator size={30} className="react-icon-div" />

                                        </div>
                                        <div className="card__title">Access to Resources</div>
                                        <div className="card__description">
                                            Gain access to a wealth of resources, including educational materials, market insights, and promotional tools. Leverage our resources to enhance your marketing efforts and attract new clients to RISEFX.
                                        </div>
                                    </div>
                                    <div className="main__why-we-are-different-card partner_card-height">
                                        <div className="bg-icon">
                                                <MdManageAccounts size={30} className="react-icon-div" />

                                        </div>
                                        <div className="card__title">Join Our Partner Program Today!</div>
                                        <div className="card__description">
                                            Partnering with RISEFX Forex Broker as an Introducing Broker (IB) opens up a world of opportunities for growth, success, and financial prosperity. Whether you're an experienced IB or new to the industry, we welcome you to join our partner program and embark on a rewarding journey with us.
                                        </div>
                                    </div>
                                </div>






                                <div className="programm__title-overview">
                                    <div className="form-wrapper custom-form custom-form_no-border-overview" data-form-name="Contact Us">
                                        <div className="form" data-sub-form-name="Contact Us">
                                            <h2 className="title title_32px title_align-center">Send Us a Message</h2>
                                            <div>
                                                <fieldset className="field platform__contact-us-input" data-sub-form-name="Full Name">
                                                    <legend className="field__legend">Full Name</legend>
                                                    <input
                                                        type="text"
                                                        className="field__input"
                                                        placeholder="Full Name"
                                                        value={fullName}
                                                        onChange={handleFullNameChange}
                                                    />
                                                </fieldset>

                                                {errors.fullName && <span className="error-fullname">{errors.fullName}</span>}
                                                <fieldset className="field platform__contact-us-input" data-sub-form-name="E-Mail">
                                                    <legend className="field__legend">E-Mail</legend>
                                                    <input
                                                        type="text"
                                                        className="field__input"
                                                        placeholder="E-Mail"
                                                        value={email}
                                                        onChange={handleEmailChange}
                                                    />

                                                </fieldset>
                                                {errors.email && <span className="error-email">{errors.email}</span>}
                                                <fieldset className="field platform__contact-us-input" data-sub-form-name="Phone Number">
                                                    <legend className="field__legend">Phone Number</legend>
                                                    <input
                                                        type="text"
                                                        className="field__input"
                                                        placeholder="Phone Number"
                                                        value={phoneNumber}
                                                        onChange={handlePhoneNumberChange}
                                                    />
                                                </fieldset>
                                                {errors.phoneNumber && <span className="error-phone">{errors.phoneNumber}</span>}

                                                <fieldset className="field platform__contact-us-input" data-sub-form-name="Message">
                                                    <legend className="field__legend">Message</legend>
                                                    <textarea
                                                        className="field__input field__input_textarea platform__contact-us-textarea"
                                                        placeholder="Message"
                                                        cols="30"
                                                        rows="4"
                                                        value={message}
                                                        onChange={handleMessageChange}
                                                    ></textarea>
                                                </fieldset>
                                                {errors.message && <span className="errormessage">{errors.message}</span>}

                                            </div>

                                            <div style={{ marginBottom: '30px' }} className="g-recaptcha custom-form__recaptcha" data-sitekey="6Lfvb1IaAAAAAITnV_0lXae8oDeeFmsoThV-Z3xq">
                                            </div>
                                        </div>
                                        <div className="open-live-overview">
                                            <button className="button-contact button_primary two-buttons__button" type="button">
                                                SEND MESSAGE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>


                        </TabContext>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Partner;