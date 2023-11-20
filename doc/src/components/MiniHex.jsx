import "./../styles.css";


export const MiniHex = (props) => {
    const { A, B, side = "",srcc,bor,children, ...divProps } = props;
  
    return (
      <div
        {...divProps}
        className={`hex ${side}`}
        style={{
          //border: "1px solid #000",
          boxSizing: "border-box",
          height: "180px",
          width: "180px",
          ...props.style,
          position: "relative",
          borderRadius: "100%",
          
        
  
        }}
      >
        <div  style={{
         
          boxSizing: "border-box",
          // height: "505px",
          // width: "185px",
          // ...props.style,
          position: "relative",
          // borderRadius: "80%",
         zIndex:"1"
        //  left:"7px",
         ,top:"-16px"
         , overflow:"hidden"
        }}>
  <img style={{width:"65%", marginTop:"10%"}} src={srcc} alt="" />

  {children}
   
        </div>
       
       
        <div  style={{
            // borderTop: "1px solid black",
            // borderBottom: "1px solid #001",
            boxSizing: "border-box",
            width: 150 / Math.sqrt(3) + "px",
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
            width: 150/ Math.sqrt(3) + "px",
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
            width: 150 / Math.sqrt(3) + "px",
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
        {/* <img style={{width:"80%", marginTop:"20%"}} src="https://media.cntraveler.com/photos/5ea9df878abbf81d02aeae0b/1:1/w_4016,h_4016,c_limit/Kawachi-Fuji-Garden-wisteria-GettyImages-684691336.jpg"></img> */}
      </div>
    );
  };