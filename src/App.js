import React, { useContext } from 'react'
import { Route,Routes } from 'react-router-dom';
import Section from './Components/Section.js';
import Aboutus from './Components/About-us.js';
import WhyRiseFX from './Components/why-RiseFX.js';
import Whatothersays from './Components/what-other-says.js';
import ProductaccountOverview from './Components/product&account-overview.js';
import Zeroaccount from './Components/Zero-account.js';
import Classsicaccount from './Components/classic-account.js';
import Demoaccount from './Components/Demo-account.js';
import Swapfreeaccount from './Components/Swap-free-account.js';
import Notfound from './Components/not-found';
import Forex from './Components/Forex.js';
import Metal from './Components/Metal.js';
import Indices from './Components/Indices.js';
import EnergyandSoftComodity from './Components/Energy&soft-comodity.js';
import Risefxdesktopapp from './Components/Risefxdesktopapp.js';
import MT7mobileapp from './Components/MT7mobileapp.js';
import WebtraderMT7 from './Components/Web-traderMT7.js';
import Metatrader7 from './Components/Meta-trader7.js';
import MorePlatform from './Components/More-platforms.js';
import Partneroverview from './Components/Partner-overview.js';
import IntroducingBroker from './Components/Introducing-broker.js';
import Affilate from './Components/Affilate.js';

import Help from './Components/Help.js';

import Contactus from "./Components/contactus.js";
import cards from './Components/cards.js';
import Education from './Components/Education.js'; 
import './App.css';
import Layout from './Common/layout/layout.js';
import Privacypolicy from './Components/Privacy-policy.js';
const App = () => {
  return (
    
    
    <Layout>
      
    <Routes>
      <Route path='/' element={<Section/>}/>
      <Route path='/about-us/ourmission' element={<Aboutus/>}/>
      <Route path='/about-us/ourservices' element={<WhyRiseFX/>}/>
      <Route path='/about-us/whyrisefx' element={<Whatothersays/>}/>
      <Route path='/trading/productaccountoverview' element={<ProductaccountOverview/>}/>
      <Route path='/trading/stdaccount' element={<Zeroaccount/>}/>
      <Route path='/trading/classsicaccount' element={<Classsicaccount/>}/>
      <Route path='/trading/proaccount' element={<Demoaccount/>}/>
      <Route path='/trading/vipaccount' element={<Swapfreeaccount/>}/>
      <Route path='/trading/forex' element={<Forex/>}/>
      <Route path='/trading/metal' element={<Metal/>}/>
      <Route path='/trading/indices' element={<Indices/>}/>
      <Route path='/trading/Comodity' element={<EnergyandSoftComodity/>}/>
      
      <Route path='/platforms/risefxmobileapp' element={<MT7mobileapp/>}/>
      <Route path='/platforms/risefxwebtrader' element={<WebtraderMT7/>}/>
      <Route path='/platforms/risefxdesktopapp' element={<Risefxdesktopapp/>}/>

      <Route path='/platforms/Metatrader7' element={<Metatrader7/>}/>
      <Route path='/platforms/moreplatform' element={<MorePlatform/>}/>
      <Route path='/partnership/partneroverview' element={<Partneroverview/>}/>
      <Route path='/partnership/whyrisefx' element={<IntroducingBroker/>}/>
      <Route path='/partnership/benefits' element={<Affilate/>}/>
      
      <Route path='/help' element={<Help/>}/>
      
      <Route path='/more/contactus' element={<Contactus/>}/>
      <Route path='/more/privacy-policy' element={<Privacypolicy/>}/>

      <Route path='/Education' element={<Education/>}/>

      <Route path='*'  element={<Notfound/>}/>
    </Routes>
    </Layout>
  )
}

export default App