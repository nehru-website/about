import logo from './logo.svg';
import React from 'react'
import './App.css';
import './card_1.css'
import './card_2.css'
import './card_3.css'
import './warden.css'
import Card_1 from "./card_1"
import Card_2 from "./card_2"
import Card_3 from "./card_3"
import Warden from "./warden"


function App() {
  return (
    <>
    <div className='about'>
      <div className='info1'>
    <Card_1/> 
    <Card_2/>
    <Card_3/>
    <Warden/>    
    </div>
    </div>
  </>
  
  );
}

export default App;
