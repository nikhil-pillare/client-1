


export const Nam = (props) => {
    const { A, B, side = "",srcc,bor, ...divProps } = props;
  
    return (
      <div
        {...divProps}
        className={`hex `}
        style={{
          //border: "1px solid #000",
          boxSizing: "border-box",
          height: "200px",
          width: "200px",
          ...props.style,
          position: "relative",
          borderRadius: "100%",
         
        
  
        }}
      >
        <div  style={{
          //border: "1px solid #000",
          // boxSizing: "border-box",
        //   height: "235px",
        //   width: "235px",
        //   // ...props.style,
          position: "relative",
        //   borderRadius: "80%",
         zIndex:"1",
        //  left:"8px",
        //  top:"8px"
        //  , overflow:"hidden",
         display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"
        }}>

       <div style={{width:"300px",  marginTop:"20px"}}>
       <p style={{color:"#131313", fontSize:"20px"}}>Hello!! I am </p>
                          <h1 id="user-detail-name" style={{
                    background: '-webkit-linear-gradient(90deg, rgba(99,99,99,1) , rgba(133,133,133,1) )',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontSize: '50px',
                    fontWeight: 'bolder',
                    
                  }}>Dr. Vaishali Chandwani</h1>
        <h2 style={{color:"#131313", fontSize:"23px"}}>Physiotherapist (BPTH)</h2>
        <h4 style={{color:"#131313"}}>Sindhi Colony, Gondia, MH</h4>
        

       </div>
       
        </div>
       
        {/* <div
          style={{
            borderTop: "1px solid #000",
            borderBottom: "1px solid #001",
            boxSizing: "border-box",
            width: 200 / Math.sqrt(3) + "px",
            height: "100%",
            margin: "0 auto",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            transform: "rotate(90deg)"
          }}
          
        /> */}
        <div  style={{
            // borderTop: "1px solid black",
            // borderBottom: "1px solid #001",
            boxSizing: "border-box",
            width:`${side}`,
            // width: 250 / Math.sqrt(3) + "px",
            height: "100%",
            margin: "0 auto",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            transform: "rotate(90deg)",
            backgroundColor:`${bor}`
            
          }}>
          
        </div>
        <div
          style={{
            // borderTop: "1px solid #000",
            // borderBottom: "1px solid #000",
            boxSizing: "border-box",
            width:`${side}`,
            // width: 250 / Math.sqrt(3) + "px",
            height: "100%",
            margin: "0 auto",
            transform: "rotate(150deg)",
            transformOrigin: "center center",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor:`${bor}`
          }}
        />
        <div
          style={{
            // borderTop: "1px solid black",
            // borderBottom: "1px solid #000",
            boxSizing: "border-box",
            width:`${side}`,
            // width: 250 / Math.sqrt(3) + "px",
            height: "100%",
            margin: "0 auto",
            transform: "rotate(210deg)",
            transformOrigin: "center center",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor:`${bor}`
          }}
        />
        
      </div>
    );
  };