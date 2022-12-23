import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light') // Wheter Dark Mode Is Enable or Note
  let togglemode=()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'hwb(225deg 1% 82%)';
      document.title = 'TextUtiles-Dark';

      //  It is For Running Title Repidetly 
      // setInterval(() => {
      //   document.title = 'Wellcome To TextUtiles';
      // }, 1000);
      // setInterval(() => {
      //   document.title = 'Wellcome To Dark Mode';
      // }, 2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtiles-Light';
    }
  }
  return (
    <>
<Navbar title="TextUtiles" mode={mode} togglemode={togglemode}/>
{/* <Navbar/> */}

{/* <Router> */}
{/* <Switch>
<Route path="/about">
    </Route>
    <Route path="/">
    </Route>
  </Switch>
 </Router> */}

    <About/>
    <Textform heading="Enter Your Text Here:" mode={mode}/>
    </>
  );
}
export default App;