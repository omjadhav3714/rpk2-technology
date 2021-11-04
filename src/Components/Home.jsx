import React from "react";
import Features from "./Features";
import Home1 from "./Home/home";
import Homeitems from "./Home/Homeitems";

function Home(){
    return(
        <div>
            <Home1/>
            <Homeitems/>
            {/* <Features /> */}
        </div>
    )
}
export default Home;