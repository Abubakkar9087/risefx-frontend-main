import { NavLink } from "react-router-dom";

import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "../AboutusComp/About-us.css";
import "../Section.css";
import "./contactus.css";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import Button from "@mui/material/Button";

import { ThemeContext } from "../themeProvider/Theme-provider";


const More = (index) => {
    const [value, setValue] = useState(`${index.index}`);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const {theme} = useContext(ThemeContext)
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])



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
        <div className={`about-wrapper ${theme} `}>
        <h2 className="About-Header-top">  More </h2>

            <div className="About-top">
                {/* <h2>  Help </h2> */}

                <div className="About-us">
                    <TabContext value={value} className="rise-tabss">
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <TabList
                             className=" tabs-scrollbar"
                                onChange={handleChange}
                                aria-label="lab API tabs example"
                            >
                                <Tab label="Contact Us" value="1" className="meta-tab" />
                               
                                <Tab label="Privacy Policy" value="2" className="meta-tab" />
                                
                            </TabList>
                        </Box>
                        <TabPanel value="1">

                            <div className="programm">
                                <div className="programm__list">
                                    <div className="text-box">
                                        <h2 className="title title_align-left title_24px">Rise FX</h2>
                                        <div className="subtitle subtitle_no-padding">
                                            <p><strong>Address</strong></p>
                                            <p>P. O. Box 1912,Beachmont Kingstown</p>

                                            <p>St, Vincent and the Grenadines.</p>
                                        </div>
                                    </div>
                                    <div className="text-box">
                                        <h2 className="title title_align-left title_24px">E-mail</h2>
                                        <div className="subtitle subtitle_no-padding">
                                            <p>enquiry@therisefx.com</p>
                                        </div>
                                    </div>
                                    <div className="text-box">
                                        <h2 className="title title_align-left title_24px">Phone Number</h2>
                                        <div className="subtitle subtitle_no-padding">
                                            <p>+971 585904297</p>
                                        </div>
                                    </div>


                                </div>
                                <div className="programm__title">
                                    <div className="form-wrapper custom-form custom-form_no-border" data-form-name="Contact Us">
                                        <div className="forms" data-sub-form-name="Contact Us">
                                            <h2 className="title title_32px title_align-lefts">Send Us a Message</h2>




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
            
            {errors.fullName && <span className="error-name">{errors.fullName}</span>}
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
            {errors.email && <span className="erroremail">{errors.email}</span>}
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
            {errors.phoneNumber && <span className="error-phone-number">{errors.phoneNumber}</span>}

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
            {errors.message && <span className="error_message">{errors.message}</span>}

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
                            </div>

                            <div className=" About-Ready-start-trading">
                                <div className="section7-heading">
                                    <h1> Ready to Start Trading?</h1>
                                </div>
                                <div className="section7-div" style={{ marginTop: '40px' }}></div>
                                <div className="button-class">
                                    <Button variant="contained" id="try-a-free-demo"><NavLink  className="create-link"  to="https://panel.therisefx.com/register">
                TRY A FREE DEMO
              </NavLink> </Button>
                                    <p>OR</p>
                                    <button variant="outlined" id="get-a-live-account" style={{ color: "blue" }}>
                                    <NavLink  to="https://panel.therisefx.com/register">
                GET A LIVE ACCOUNT
              </NavLink> 
                                    </button>
                                </div>
                            </div>

                        </TabPanel>
                        

                        <TabPanel value="2">
                                <div className="social">
                                   

                                    <p> <span className="disclaimer">PRIVACY POLICY: </span> We are committed to protecting the privacy and security of our clients' personal information. This Privacy Policy outlines how we collect,
                                        use, disclose, and safeguard your information when you use our services.</p>

                                    <p>  <span className="disclaimer">Information Collection: </span> We collect personal information from you when you open an account with us or use our services. This information may
                                        include your name, contact details, financial information, and other relevant details necessary for providing our services.</p>

                                    <p><span className="disclaimer">Use of Information: </span>We use the information we collect to process your transactions, provide customer support, improve our services,
                                        and comply with legal and regulatory requirements. We may also use your information to send you promotional offers or important updates about our services.</p>

                                    <p>  <span className="disclaimer">Information Sharing: </span>We do not sell or rent your personal information to third parties. However, we may share your information with our affiliates, service providers,
                                        or regulatory authorities when necessary to provide our services, prevent fraud, or comply with legal obligations.</p>

                                    <p> <span className="disclaimer">Data Security: </span>We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration,
                                        or destruction. We regularly review and update our security procedures to ensure the integrity and confidentiality of your data.</p>

                                    <p> <span className="disclaimer">Cookies and Tracking Technologies: </span>We may use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize
                                        content. You can manage your cookie preferences through your browser settings.</p>

                                    <p> <span className="disclaimer">Third-Party Links: </span>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these websites.
                                        We encourage you to review the privacy policies of any third-party sites you visit.</p>

                                    <p> <span className="disclaimer">Data Retention: </span>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.
                                        We will securely dispose of any information that is no longer needed.</p>

                                    <p> <span className="disclaimer">Children's Privacy: </span>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors.
                                        If you believe that a minor has provided us with their information, please contact us immediately.</p>

                                    <p>  <span className="disclaimer">Updates to Privacy Policy: </span>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
                                        We will notify you of any material changes by posting the updated policy on our website.</p>
                                    <p>By using our services, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy.
                                        If you have any questions or concerns about our privacy practices, please contact us at <a href="mailto:enquiry@therisefx.com">enquiry@therisefx.com</a></p>

                                    



                                </div>
                            </TabPanel>


                    </TabContext>
                </div>
            </div>
            </div>
        </>
    );
};

export default More;