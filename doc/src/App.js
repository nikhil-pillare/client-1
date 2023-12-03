import React from "react";
import "./styles.css";
// import NavigationBar from "./components/Nav";
import Navigation from "./components/Nav";
import { Hex } from "./components/Hex";
import { Pro } from "./components/Pro";
import Appp from "./pages/Appp";

import Tool from "./pages/Tool";

import Contact from "./components/contact";

import Foot from "./components/foot";
import { MegaHex } from "./components/MegaHex";
import { useInView } from "react-intersection-observer";
const sin60 = 2 / Math.sqrt(3);
const r = 200;

export default function App() {

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.45,
  });

  return (
    <div  className="App" >

      <Navigation/>
      <br/>
      <Appp/>
     
      <Tool/>
      
      <Contact/>
      
      <Foot/>
    </div>
   
    
  );
}


