import React, { useContext } from "react";
import "./Education.css";
import dollarImg from "../Images/dollar.png";
import euroFlag from "../Images/euro.png";
import usaFlag from "../Images/usa.png";
import bars from "../Images/bars.png";
import spread from "../Images/spread.png";
import {ThemeContext} from "../Components/themeProvider/Theme-provider";

const Education = () => {
  const currencyData =[
    {title:"Currencies are quoted in pairs, such as EUR/USD or USD/JPY"},
    {title:"The first listed currency is know as the base currency , while the second is called the counter or quote currency."},
    {title:"The base currency represents how much of the quote currency is needed for you to get one unit of the base currency"},
  ];
  const cardData =[
    {
      image:euroFlag,
      title:"EUR",
      btnTitle:"BASE",
      currency:"Currency"
    },
    {
      image:usaFlag,
      title:"USD",
      btnTitle:"QUOTE",
      currency:"Currency"
    },
  ];
  const UsdCard=({image,title,btnTitle,currency})=>{
    return(
    <div className="usd-card">
      <div className="dollar-img-card-div">
        <img src={image} alt={image} />
        <p>{title}</p>
      </div>
      <button>{btnTitle}</button>
      <p className="curr-title">{currency}</p>
    </div>
    )
  };
  const currencyTableData =[
    {
      name:"Micro",
      size:"0.01",
      units:"1000",
      profit:"1PIP=0.10$"
    },
    {
      name:"Mini",
      size:"0.1",
      units:"10000",
      profit:"1PIP=1$"
    },
    {
      name:"STD",
      size:"1",
      units:"100000",
      profit:"1PIP=10$"
    },  
  ];
  const goldTableData =[
    {
      name:"Micro",
      size:"0.01",
      units:"1",
      profit:"1PIP=0.10$"
    },
    {
      name:"Mini",
      size:"0.10",
      units:"10",
      profit:"1PIP=1$"
    },
    {
      name:"STD",
      size:"1",
      units:"100",
      profit:"1PIP=10$"
    },  
  ];
  const silverTableData =[
    {
      name:"Micro",
      size:"0.01",
      units:"50",
      profit:"1PIP=0.10$"
    },
    {
      name:"Mini",
      size:"0.10",
      units:"500",
      profit:"1PIP=1$"
    },
    {
      name:"STD",
      size:"1",
      units:"5000",
      profit:"1PIP=10$"
    },  
  ];
  const naturalTableData =[
    {
      name:"Micro",
      size:"0.01",
      units:"100",
      profit:"1PIP=0.10$"
    },
    {
      name:"Mini",
      size:"0.10",
      units:"1000",
      profit:"1PIP=1$"
    },
    {
      name:"STD",
      size:"1",
      units:"10000",
      profit:"1PIP=10$"
    },  
  ];
  const LeverageData =[
    {
      title:"Forex allows traders to trade a large amout with a relatively small fund.",
    },
    {
      title:"The amount of leverage on your account partly determines the amount of funds you need to put up for a  trade.",
    },
    {
      title:"Leverage gives the trader the ability to trade larger amounts of currency with a smaller deposit amount.",
    },
    {
      title:"For example with a 200$ deposit and a leveage of 1:500 this would allow you to trade up to 10,000$ worth of currency",
    },
  ];
  const marginData =[
    {
      title:"It is the necessary amount you need to have in your trading account in order to open relevant transaction.",
    },
    {
      title:"Free Margin is the available amount of money,Which can be used to oepn new positions.",
    }
  ];
  const {theme} = useContext(ThemeContext)


  const TableComp =({data})=>{
   return <table>
      <thead>
    <tr>
      <th>lot name</th>
      <th>lot size</th>
      <th>volume/units</th>
      <th>thead</th>
    </tr>
    </thead>
    <tbody>
      {data.map((val,index)=>{
        return <tr key={index}>
        <td>{val.name}</td>
          <td>{val.size}</td>
          <td>{val.units}</td>
          <td>{val.profit}</td>
        </tr>
      })}
    </tbody>
   </table>
  };
  
  return (
    <div className={`main-education-wrapper ${theme}`}>
    <div className="education-wrapper">
      <h1>introduction to forex</h1>
      <div className="box-shaddow">
      <div className="what-is-forex">
        <h2 className="forex-header">What Is “Forex-Fx”</h2>
        <p>
          Foreign exchange in shot we call it as Forex , is the global market or
          international market whereby one currency is exchanged for another.
          It's the largest and most liquid financial market in the world, with
          average traded values that can be trillions of dollars per day .It
          includes all of the currencies in the world and operates 24 hours a
          day.
        </p>
        <p>
          The foreign exchange market is often referred to as ‘FOREX’ ,’FX’,’
          Spot FX’. Forex traders exchange two different currencies and make
          profits from the price difference in buy and sell price.
        </p>
        <p>As the value of currencies keep changing, traders can earn profits by trading at the right timing.</p>
      </div>
      <div className="example">
        <div className="example-dollar-div">
          <div className="example-text">
            <p className="examp-text">Example</p>
            <p> &ensp; &ensp; &ensp;&ensp; &ensp; &ensp; When the US dollar is expected to weaken in value relative to the euro, forex traders would sell dollars to buy euros</p>
            <p>If the euro actually appreciates, traders would sell euros and buy back more dollars than they originally had, making a profit</p>
          </div>
          <div className="dollar-img-div">
            <img src={dollarImg} alt="dollar-img"  />
          </div>
        </div>
      </div>
      </div>
      <div className="currency-pairs">
        <h2 className="forex-header">Currency Pairs</h2>
        <ul>
          {currencyData.map((val,index)=>{
            return <li className="li-currency" key={index}>{val.title}</li>
          })}
        </ul>
        <div className="card-holder-div-usd">
        {cardData.map((val,index)=>{
        return <UsdCard key={index} image={val.image} title={val.title} btnTitle={val.btnTitle} currency={val.currency}/>  
        })}
        </div>
        <div className="euro-worth-div">
          <p className="forex-header">EUR/USD 1.21587</p>
          <p>one euro is worth 1.21587 dollars</p>
        </div>
      </div>
      <div className="exchange-rate">
      <h2 className="forex-header">Exchange Rate</h2>
       <ul>
        <li>The exchange rate is the price of the one currency in terms of another currency. It tells you how much of one currency traders need to spend to purchase one unit of another currency.</li>
       </ul>
       <div className="exchange-flex-div">
        <div className="exp-div">
          <p className="examp-text">Example</p>
          <p>&ensp; &ensp; USD/JPY Exchange Rate</p>
        </div>
        <div className="exp-img-div">
          <img src={bars} alt={bars} />
        </div>
       </div>
       <ul>
        <li>Lot is the way to measure the position size or the volume of a trade</li>
       </ul>
       <p className="current-table-header">Currency pairs</p>
       <div className="table-wrapper">
        <TableComp data={currencyTableData}/>
       </div>
      <ul><li className="gold-crude-li">Gold(XAUUSD) And Crude Oil (USOUSD)</li></ul>
      <div className="table-wrapper">
        <TableComp data={goldTableData}/>
       </div>
       <p className="current-table-header">Silver(XAGUSD)</p>
       <div className="table-wrapper">
        <TableComp data={silverTableData}/>
       </div>
       <p className="current-table-header">NG(Natural Gas)</p>
       <div className="table-wrapper">
        <TableComp data={naturalTableData}/>
       </div>
      </div>
      <div className="pip-wrapper">
      <h2 className="forex-header">What Is PIP?</h2>
      <p>“PIP” Stands for Point In Percentage, is a unit of movement in the exchange rate.</p>
      <p>A pip is usually the last decimal place of a quotation.</p>
      <ul>
        <li>For most of currency pairs, The fourth decimal places is counted as "pips" and one pip is 0.0001.</li>
        <li>For Japanese Yen-related currency pairs, the second decimal places is counted as "pips“ and one pip is 0.01</li>
      </ul>
      <p className="examp-text">Example:</p>
      <p>EUR/USD rises from 1.16997 to 1.17007, the EUR/USD has risen 1 pip.</p>
      <p>USD/JPY drops from 110.200 to 110.145, the USD/JPY has dropped 5.5 pip.</p>
      </div>
      <div className="bid-place-div box-shaddow">
      <h2 className="forex-header">Bid Price</h2>
      <ul>
        <li>Bid represents the price at which a trader can sell the base currency , shown to the left in a currency pair</li>
        <li>For example , in the quote USD/JPY 1113.67/69, the base currency is USD, and the bid price is 113.67, meaning you can sell one US Dollar for 113.67 Japanese Yen.</li>
      </ul>

      </div>
      <div className="bid-place-div">
      <h2 className="forex-header">Ask(Offer)Price</h2>
      <ul>
        <li>Ask represents the price at which a trader can buy the base currency , shown to the left in a currency pair</li>
        <li>For example , in the quote USD/CHF 0.9997/99, the base currency is USD, and the ask price is 0.9999, meaning you can sell one US Dollar for 0.9999 Japanese Yen.</li>
      </ul>
      <p>The difference between these two is called <span>“Spread”</span> </p>

      </div>
      <div className="bid-place-div box-shaddow">
      <h2 className="forex-header">Spreads</h2>
      <ul>
        <li>There are buy and sell prices for every currency pair and the difference between the price is called the spread. For example, if EUR/USD pair's Sell price is 1.4079 and Buy price is 1.4081, the spread is 2 pips.</li>
      </ul>
       <div className="spread-img-div">
        <img src={spread} alt={spread}  />
       </div>
      </div>
      <div className="bid-place-div">
      <h2 className="forex-header">Leverage</h2>
      <ul>
        {LeverageData.map((val,index)=>{
          return <li className="leverage-li" key={index}>{val.title}</li>
        })}
      </ul>
      </div>
      <div className="bid-place-div box-shaddow">
      <h2 className="forex-header">Margin</h2>
      <ul>
        {marginData.map((val,index)=>{
          return <li className="leverage-li" key={index}>{val.title}</li>
        })}
      </ul>
      <div className="leverage-formula">
      <p>Margin= <span>cmp(current market price)*lot size*volume</span></p>
      <p>Leverage</p>
      </div>
      </div>
      <div className="bid-place-div ">
      <h2 className="forex-header">Rollover</h2>
      <ul>
          <li className="leverage-li">Rollover, also known as swap, is the interest earned or paid for a position kept open overnight, which is caused by a interest rate differential between the currency pair traded.</li>
      </ul>
      </div>
      
    </div>
    </div>
  );
};
export default Education;
