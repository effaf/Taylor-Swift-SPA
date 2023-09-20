import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/header_footer/featured/Index';
import VenueInfo from './components/venueinfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import { Element } from 'react-scroll';


const App = () => {
  return (
    <div className="App">
      <Header/>

      <Element name = "onHome">
        <Featured/>
      </Element>

      <Element name = "onEvents">
        <VenueInfo/>
      </Element>

      <Element name = "onHighlights">
        <Highlights/>
      </Element>

      <Element name = "onPricing">
        <Pricing/>
      </Element>

      <Element name = "onDirection">
        <Location/>
      </Element>

      <Footer/>
    </div>
)}

export default App;
