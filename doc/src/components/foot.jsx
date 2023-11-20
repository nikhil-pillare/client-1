import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@chakra-ui/react';


import "../components/css/home.css"

function Foot() {
  

  return (
//     <div id='foot' style={{ textAlign: "center", fontSize: "16px", marginTop: "0px" , width:"100%", backgroundColor:"gray"}}>#91A69D
//     Handcrafted by <strong style={{ color: "#007bff" }}>Nikhil Pillare</strong>#007bff
//   </div>
<div style={{ backgroundColor: "#C9C9C9", padding: "2px 0", display: "flex", alignItems: "center", justifyContent: "space-between" , marginTop:"70px"}}>
<div style={{ marginLeft: "20px", fontSize: "14px", color:"#444444" }}>
@2023 vaishali
</div>
<div style={{ marginRight: "20px", fontSize: "14px", display: "flex", alignItems: "center", color:"gray" }}>
Handcrafted by  
<img  style={{marginLeft: "10px", width: "20px", height: "20px", borderRadius: "50%" ,opacity:"0.8"}} src="portlogo.png" alt="" />

<img src="https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=ejlQRX4C_Mb40wz1JQcB5vKYcOKlfRtry2W6UcX6mlo=" alt="Country Flag" style={{ marginLeft: "10px", width: "20px", height: "20px", borderRadius: "50%" }} />
</div>
</div>

  );
}

export default Foot;