import React from "react";
import Home1 from "./Home/home";
import Homeitems from "./Home/Homeitems";
import Gototestimonial from './Home/gototestimonial'
import Hometestimonial from "./testimonial/Hometestimonial";
import { motion } from "framer-motion";
function Home(){
    return(
        <motion.div
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
      
            <Home1/>
            <Homeitems/>
            <Gototestimonial/>
            <Hometestimonial/>
            {/* <Features /> */}
            </motion.div>
        
    )
}
export default Home;