
import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import "../Components/AboutusComp/About-us.css";
import "../Components/Section.css";
import "../Components/PartnersComp/Partner-overview.css";

import { ThemeContext } from "./themeProvider/Theme-provider";

import Partner from "./PartnersComp/Partners";


const Partneroverview = () => {
    const [value, setValue] = useState("1");
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
    return (
        <>
                              <Partner  index={"1"} />

        </>
    );
};

export default Partneroverview;