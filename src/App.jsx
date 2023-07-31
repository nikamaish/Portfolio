import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/topbar";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import "./App.scss";
import React from "react" ;
import {useState} from "react";
import  Menu from "./components/menu/Menu";


function App() {

  const [menuOpen,setMenuOpen]=React.useState(false)

  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
  

     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     
     
     <div className="sections">
       <Intro/>
       <Portfolio/>
       <Works/>
       <Testimonials/>
       <Contact/>
     </div>
    </div>

  );
}

export default App;
