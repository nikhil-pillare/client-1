import React from "react";
// import "./styles.css";
// import NavigationBar from "./components/Nav";
// import { Hex } from "./components/Hex";
// import { Pro } from "./components/Pro";
import "../styles.css";
import "../components/css/home.css"
import { Hex } from "../components/Hex";
import { Pro } from "../components/Pro";
import { Nam } from "../components/Nam";
import { MiniHex } from "../components/MiniHex";
const sin60 = 330 / Math.sqrt(3);
const r = 200;

export default function Tool() {
   return (
      <div id="tools" style={{ marginTop: "150px", marginLeft: "25%" }} >
         <div
            id="dsaprob1"

         >
            <Hex
               side={100}
               style={{ height: `${r}px`, width: `${r}px`, marginRight: "18px" }}
               bor={"#eec0c8"}
            >
               <p style={{ marginTop: "40px",  }}><span style={{ fontWeight: "bolder", fontSize: "18px", color: "#8a3572" }}>Orthopedic Rehabilitation:</span><br />
               Assessment and treatment of musculoskeletal conditions.</p>

            </Hex>




            <Hex style={{ height: `${r}px`, width: `${r}px`, marginRight: "18px" }}
               bor={"#eec0c8"}
            >

               <p style={{ marginTop: "40px",}}><span style={{ fontWeight: "bolder", fontSize: "18px", color: "#8a3572" }}>Sports Injury Management:</span><br />


               Specialized care for athletes, focusing on injury prevention and recovery.</p>



            </Hex>

         </div>
         <div
            id="about1"

            className="about section"

         >
            <Hex
               side={100}
               style={{ height: `${r}px`, width: `${r}px`, marginRight: "18px" }}
               bor={"#eec0c8"}
            >
               <p style={{ marginTop: "50px",  }}><span style={{ fontWeight: "bolder", fontSize: "18px", color: "#8a3572" }}>Manual Therapy:</span><br />


               Hands-on techniques to improve joint mobility and reduce pain.</p>
            </Hex>


            <Hex
               side={100}
               style={{ height: `${r}px`, width: `${r}px`, marginRight: "18px" }}
               bor={"#bd8eb3"}
            >
               <img style={{ width: "60px", margin: "auto", marginTop: "40%" }} src="doclogoo.png" alt="" />
               <p style={{color:"#8a3572", fontWeight:"bolder"}}>SERVICES</p>

            </Hex>


            <Hex
               side={100}
               style={{ height: `${r}px`, width: `${r}px`, marginRight: "18px" }}


               bor={"#eec0c8"}
            >

               <p style={{ marginTop: "55px",  }}><span style={{  fontSize: "18px", color: "#8a3572", fontWeight:"bolder" }}>Exercise Prescription:</span><br />


               Tailored exercise programs for rehabilitation and overall well-being.</p>

            </Hex>
         </div>

         <div
            id="dsaprob1"

         >
            <Hex
               side={100}
               style={{ height: `${r}px`, width: `${r}px`, marginRight: "18px" }}
               bor={"#eec0c8"}
            >

               <p style={{ marginTop: "35px", fontSize:"14px"}}><span style={{ fontWeight: "bolder", fontSize: "18px", color: "#8a3572" }}>Electrotherapy:</span><br />


               Utilizing IFT (Interferential Therapy), MS (Muscle Stimulation), TENS (Transcutaneous Electrical Nerve Stimulation), and Ultrasound for targeted therapy.</p>
            </Hex>




            <Hex style={{ height: `${r}px`, width: `${r}px`, marginRight: "18px" }}
               bor={"#eec0c8"}
            >

               <p style={{ marginTop: "40px",  }}><span style={{ fontWeight: "bolder", fontSize: "18px", color: "#8a3572" }}>Heat Combination Machine:</span><br />


               Innovative treatment involving the use of heat and other modalities for effective pain relief.</p>



            </Hex>

         </div>


      </div>
   )
}