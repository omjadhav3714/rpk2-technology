import React from "react";
import Features from "./Features";
import Home1 from "./Home/home";
import Homeitems from "./Home/Homeitems";
import Gototestimonial from './Home/gototestimonial'
import Hometestimonial from "./testimonial/Hometestimonial";

function Home(){
    return(
        <div>
            <Home1/>
            <Homeitems/>
            <Gototestimonial/>
            <Hometestimonial/>
            {/* <Features /> */}
        </div>
    )
}
export default Home;