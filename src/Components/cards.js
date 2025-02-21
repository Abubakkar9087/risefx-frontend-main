import React from "react";
import { useState } from "react";
import "../Components/cards.css";
import cards from '../Images/hands-ss.webp';
 const Democard=() =>{
    return (
        <>
        <div className="simple-cards">
            <div className="inner-cards">
                <img src={cards} className="cards-image"/>
                
            </div>
            <div className="inner-cards">
            <h2>Low prices</h2>
            </div>
            <div className="inner-cards">
                <p>Radically lower the price which people pay to trade forex, CFDs and other financial products.</p>
            </div>
        </div>
        <p>Our Vision is to provide access to the world’s markets easy, fast and at a radically lower cost than what
             exists in Australia today. We aren’t just satisfied with being a low-cost provider, we want to permanently 
             change traders’ expectations of their broker.</p>

             
        </>
    )
 }
 export default Democard;