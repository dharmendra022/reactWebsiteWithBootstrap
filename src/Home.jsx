import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
// import Images from "./Images/cs.jpg";
const Home = () => {
    return (
        <>
         <Common 
        name="Grow Your Business With Us " 
        imgsrc="./Images/rx.png"
        visit="/service"
        btname="Get Started" 

         />
            
        </>
    )
}
export default Home;