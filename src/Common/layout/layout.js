import React, { useContext } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./style.css"
import { ThemeContext } from "../../Components/themeProvider/Theme-provider";
const Layout = ({ children }) => {
    const{theme} = useContext(ThemeContext);
    return (
        <div  className={`${theme}`}>
        
            <Header />
            <div className="content-layout ">
            <div className="section-3back">
                <div className="section-5top">
                    <div className="section-5bottom">{children}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;