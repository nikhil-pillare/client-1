import React from "react";
// import "./styles.css";
// import NavigationBar from "./components/Nav";
// import { Hex } from "./components/Hex";
// import { Pro } from "./components/Pro";
import "../styles.css";
import { Button } from "@chakra-ui/react";
import { Hex } from "../components/Hex";
import { Pro } from "../components/Pro";
import { Nam } from "../components/Nam";
import "../components/css/home.css"
import { MiniHex } from "../components/MiniHex";
const sin60 = 330 / Math.sqrt(3);
const r = 200;

export default function Appp() {

   return (

      <div className="App" style={{ width: "100%", marginTop: "70px", paddingLeft: "0px" }}>

         <div id="home"  style={{ width: "1000px", margin: "auto", zoom: "1.25",}}>
            {/* <Pro        side={sin60+"px"}
                  style={{ height: `${330}px`, width: `${330}px`,
                   top:"20px",
                   marginLeft:"-105px",
                  left:"550px",
                  

                  }}
                  bor={"#A3C8B9"}
                  
                   /> */}
               <div id="name">
               <Nam side={sin60 + "px"}
               id="name"
               style={{
                  height: `${330}px`, margin: "auto", width: `${330}px`,
                  top: "20px",



               }}
               bor={"#eec0c8"} />
               </div>
            
               <div id="profile">
               <Pro  side={"144px"}
               style={{
                  height: `${250}px`, marginLeft: "54%", width: `${250}px`,

               }}
               //  srcc={`profileportfolioo.png`}
               bor={"#eec0c8"}
               
            />
               </div>
          
            <div
                id="about"
                
                className="about section"
              
               >
               <Hex
                  side={100}
                  style={{ height: `${r}px`, width: `${r}px`, marginRight: "18px" }}
                  bor={"#eec0c8"}
               >
                  <p style={{ marginTop: "70px", fontWeight: "bolder" }}></p>
               </Hex>


               <Hex
                  side={100}
                  style={{ height: `${r}px`, width: `${r}px`, marginRight: "18px" }}
                  bor={"#eec0c8"}
               >
                 

               </Hex>


               <Hex
                  side={100}
                  style={{ height: `${r}px`, width: `${r}px`, marginRight: "18px" }}
                  

                  bor={"#eec0c8"}
               >

                  <p  id="user-detail-intro" style={{ border: "none", borderRadius: "0px", padding: "3px", color: "#131313", padding: "2px", fontWeight: "bolder", fontSize:"13.5px", marginTop:"20px"}}>
                     <h5  style={{ padding: "0px", margin: "0px", fontSize: "20px", marginLeft: "3px", marginRight: "3px", marginBottom: "0px", color: "#8a3572", marginTop:"0px",  }}>About Me</h5>
                     Dedicated BPT graduate with expertise in orthopedic rehabilitation. Passionate about evidence-based care, empowering patients for optimal recovery at Mauli Physiotherapy Clinic.

                  </p>

               </Hex>
            </div>

            <div
               id="dsaprob"
               
            >
               <Hex
                  side={100}
                  style={{ height: `${r}px`, width: `${r}px`, marginRight: "18px" }}
                  bor={"#eec0c8"}
               >

                  
               </Hex>




               <Hex style={{ height: `${r}px`, width: `${r}px`, marginRight: "18px" }}
                  bor={"#eec0c8"}
               >

<p style={{ marginTop: "60px", fontWeight: "bold" }}><span style={{ fontWeight: "bolder", fontSize:"18px", color:"#8a3572" }}>Areas of Expertise:</span><br />


Orthopedic Rehabilitation
Sports Injuries
Musculoskeletal Disorders</p>
                  


               </Hex>

            </div>


         </div>

      </div>
   );
}