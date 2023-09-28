import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Missionstatement from './components/Missionstatement';
import Ourmission from './components/Ourmission';
import Objective from './components/Objective';
import Members from './components/Members';
import { useState } from 'react';

function App() {
  
  return (
    <>
    <div className="App">
    <div><Header/></div>
     <div id='Missionstatement'> <Missionstatement/></div>
     <div id='Ourmission'><Ourmission/></div>
     <div id='Objective'><Objective/></div>
     <div id='Members'><Members/></div>
    </div>
    </>
  );
}

export default App;
