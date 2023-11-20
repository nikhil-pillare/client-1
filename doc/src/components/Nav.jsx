
import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Icon,
  Menu,
  Button,
  Link,
  MenuButton,
  
  MenuItem,
  MenuList,
  Input,
  InputGroup,
  InputLeftElement,
  
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, HamburgerIcon ,CloseIcon} from '@chakra-ui/icons'
import "../components/css/nav.css"

import {FaHamburger, FaBell, FaCaretDown} from "react-icons/fa";
import { FaSearch } from 'react-icons/fa';

const Navigation = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleToggle = () => {
    setIsDisplayed(!isDisplayed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setIsDisplayed(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);










  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleClickScroll = (value) => {
    const element = document.getElementById(value);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <>
    
    <Flex
    id="nav-menu"
      as="nav"
      align="center"
      justifyContent={"space-evenly"}
      // wrap="wrap"
      paddingTop="0.5rem"
      paddingBottom="0.5rem"
      // bg="#131313"
      bg={"rgb(138,53,114)"}
     
      bgGradient="linear(to-r, #8a3572, #bd8eb3, #ffd3f9)"
      color="#131313"
      position={"fixed"}
      width={"100%"}
      zIndex={"2"}
    
    >

    <Box id="ham">
      
    <HamburgerIcon style={{width:"40px", height:"50px", color:"#eec0c8"}} onClick={handleToggle}/>
     </Box>  


  <Box display={"flex"} justifyContent={"flex-start"}marginLeft={"20px"} alignItems={"center"} fontSize={"30px"} width={"30%"} fontFamily={"monospace"} fontWeight={"bolder"} style={{marginRight:"0px"}} >
        <img style={{width:"60px"}} src="doclogoo.png" alt="" />
      </Box>


     <Box display={"flex"} justifyContent={"space-between"} width={"70%"} marginRight={"20px"} >
     
      
      <Box
            height={"50px"}
           alignContent={"center"}
           width={"100%"}
           marginLeft={"3"}
           
      >
        <Flex
        id="navlink"
        justifyContent={"space-between"}
            fontSize={"20px"}
            alignItems={"center"}
            height={"100%"}
            marginLeft={"35%"}
            width={"60%"}
            
            
        >





               














          <Link display={"flex"}
          
          className="nav-link home"
            alignItems={"center"}
            height={"100%"}
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{ textDecoration: "none" ,borderBottom: "3px solid #131313"}}
            borderBottom={"3px solid transparent"}
            transition={"border-bottom 0s ease-in-out"}
            onClick={() => {
              handleClickScroll("home");
            }}
          > Home</Link>

          <Link display={"flex"}
            
            className="nav-link about"
            alignItems={"center"}
            height={"100%"}
            
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{ textDecoration: "none" ,borderBottom: "3px solid #131313"}}
            borderBottom={"3px solid transparent"}
            transition={"border-bottom 0s ease-in-out"}
            onClick={() => {
              handleClickScroll("about");
             
            }}
          > About</Link>

          <Link 
          className="nav-link skills"
          
          display={"flex"}
            alignItems={"center"}
            height={"100%"}
           
            textDecoration={"none"}
            fontWeight={"bold"}
            _hover={{ textDecoration: "none" ,borderBottom: "3px solid #131313"}}
            borderBottom={"3px solid transparent"}
            transition={"border-bottom 0s ease-in-out"}
            onClick={() => {
              handleClickScroll("tools");
            }}
          > Services</Link>


        


          


<Link
          className="nav-link contact"
          display={"flex"}
            alignItems={"center"}
            height={"100%"}
            
            textDecoration={"none"}
            fontWeight={"bold"}
            _hover={{ textDecoration: "none" ,borderBottom: "3px solid #131313"}}
            borderBottom={"3px solid transparent"}
            transition={"border-bottom 0s ease-in-out"}
            onClick={() => {
              handleClickScroll("contact");
              
            }}
          > Contact</Link>
        </Flex>
      </Box>

      </Box> 

      


      
    </Flex>







    <Box id="links" style={{display: isDisplayed ? "flex" : "none",
          position: "fixed",height:"60vh", width:"300px", top:"70px", left:"1px",backgroundColor: "#ffd3f9", zIndex:"3", opacity:"0.9", borderRadius:"7px"}}>
            
          <CloseIcon
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer"
            }}
            onClick={handleToggle}
          />
        
    <Flex
        id="link"
        justifyContent={"space-around"}
            fontSize={"20px"}
            alignItems={"flex-start"}
            height={"100%"}
            marginLeft={"10%"}
            width={"70%"}
            
            flexDirection={"column"}
            
        >





               














          <Link display={"flex"}
          
         
            alignItems={"center"}
            height={"100%"}
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{ textDecoration: "none" ,borderBottom: "3px solid #131313"}}
            borderBottom={"3px solid transparent"}
            transition={"border-bottom 0s ease-in-out"}
            onClick={() => {
              handleClickScroll("home");
            }}
          > Home</Link>

          <Link display={"flex"}
            
            
            alignItems={"center"}
            height={"100%"}
            
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{ textDecoration: "none" ,borderBottom: "3px solid #131313"}}
            borderBottom={"3px solid transparent"}
            transition={"border-bottom 0s ease-in-out"}
            onClick={() => {
              handleClickScroll("about");
             
            }}
          > About</Link>

          <Link 
         
          
          display={"flex"}
            alignItems={"center"}
            height={"100%"}
           
            textDecoration={"none"}
            fontWeight={"bold"}
            _hover={{ textDecoration: "none" ,borderBottom: "3px solid #131313"}}
            borderBottom={"3px solid transparent"}
            transition={"border-bottom 0s ease-in-out"}
            onClick={() => {
              handleClickScroll("about");
            }}
          > Services</Link>


          


         


<Link
          
          display={"flex"}
            alignItems={"center"}
            height={"100%"}
            
            textDecoration={"none"}
            fontWeight={"bold"}
            _hover={{ textDecoration: "none" ,borderBottom: "3px solid #131313"}}
            borderBottom={"3px solid transparent"}
            transition={"border-bottom 0s ease-in-out"}
            onClick={() => {
              handleClickScroll("contact");
              
            }}
          > Contact</Link>
        </Flex>
    </Box>
    </>
    

    
  );
};

export default Navigation;






