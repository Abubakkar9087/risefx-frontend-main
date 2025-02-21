import React from 'react';
import "./component.css"
import { PiArrowArcRight } from "react-icons/pi";

const ProcessingSteps = () => {
  return (
    <div className="inner-container">
      <div className="processing-block-one">
        <div className="arrow-shape arrowimg" >
        <PiArrowArcRight  size={50} className="arrowimg"/>
        </div>
        <div className="inner-box">
          <span className="count-text">01 <br />Step</span>
          <p className='deposit_fund'>ACCOUNT REGISTRATION </p>
          
        </div>
      </div>
      <div className="processing-block-one">
        <div className="arrow-shape arrow-img">
        <PiArrowArcRight  size={50} className="arrowimg"/>

        </div>
        <div className="inner-box">
          <span className="count-text">02 <br />Step</span>
          
          <p className='deposit_fund'>DEPOSIT FUND</p>
        </div>
      </div>
      <div className="processing-block-one">
        <div className="inner-box">
          <span className="count-text">03 <br />Step</span>
        
          <p className='deposit_fund'>START TRADING</p>
        </div>
      </div>
    </div>
  );
}

export default ProcessingSteps;
