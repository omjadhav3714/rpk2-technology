import React from "react";
import Features from "./Features";
import Home1 from "./Home/home";
import Homeitems from "./Home/Homeitems";
import Gototestimonial from './Home/gototestimonial'

function Home(){
    return(
        <div>
            <Home1/>
            <Homeitems/>
            <Gototestimonial/>
            {/* <Features /> */}
        </div>
    )
}
export default Home;