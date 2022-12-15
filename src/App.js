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
import {BrowserRouter as Router, Routes,Route} from 'react'


function App() {
  return (
    <>
    <Router>
    <div className='about'>
      <div className='info1'>

        <Routes>
      <Route  element={<Card_1/>}></Route>
      <Route  element={<Card_2/>}></Route>
      <Route  element={<Card_3/>}></Route>
      <Route exact path="" element={<Warden/>}></Route>
    {/* <Card_2/>
    <Card_3/>
    <Warden/> */}
        </Routes>
    
    </div>
    </div>
    </Router>
  </>
  
  );
}

export default App;
