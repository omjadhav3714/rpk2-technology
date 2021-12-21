import React from "react";
import Home1 from "./Home/home";
import Homeitems from "./Home/Homeitems";
import Gototestimonial from './Home/gototestimonial'
import Hometestimonial from "./testimonial/Hometestimonial";
import { motion } from "framer-motion";
import './../admin/Singlecard.css';
function Home(){
    return(
        
      <>
            <Home1/>
            <Homeitems/>
            <Gototestimonial/>
            <Hometestimonial/>
            {/* <Features /> */}
            </>
        
    )
}
export default Home;