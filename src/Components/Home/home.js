import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './home.css';
import sec1 from '../../Images/security.gif';
import sec2 from '../../Images/sec2.gif';
import sec4 from '../../Images/biomet.gif';

function Home() {
    return (
        <>
            <Carousel
                showIndicators={true}
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                interval={4000}
                infiniteLoop={true}
                swipeable={false}
                autoPlay={true}
                className="mainco">

                <div className="jate">
                    <div>
                        <h2 className="hed">CORPORATE/COMMERCIAL SOLUTIONS </h2>
                        <h4 className="subma">Why to choose RPK2?</h4>
                        <p className="pat">RPK2 Securities is a leading video-centric smart solution and service provider, Based on technological innovations, We offers end-to-end security solutions, systems and services to Corporate/Commercial management and Residential Places.</p>
                    </div>
                    <img src={sec1} className="imag" alt="" />
                </div>
                <div className="jate">



                    <div>
                        <h2 className="hed">SMART WIRELESS WIFI CAMERAS</h2>
                        <h4 className="subma">CHOOSING THE BEST CAMERA SECURITY FOR YOU</h4>
                        <p className="pat">The best camera security system for your property will be designed to achieve a proactive security solution while being affordable.</p>
                    </div>
                    <img src={sec2} className="imag" alt="" />
                </div>
                <div className="jate">
                    <div>
                        <h2 className="hed">BIOMETRICS ATTENDANCE SYSTEM</h2>
                        <h4 className="subma">Best solution for your safety.</h4>
                        <p className="pat">To enhance the security amongst the employees and experience hassle-free attendance management.</p>
                    </div>
                    <img src={sec4} className="imag" alt="" />
                </div>

            </Carousel>
        </>
    )
}

export default Home
