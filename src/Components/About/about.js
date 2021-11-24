/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './about.css'
import { motion } from "framer-motion";
const about = () => {
  return (
    <>
    <motion.div
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <div class="ct-pageWrapper" id="ct-js-wrapper">

        <section class="company-heading intro-type" id="parallax-one">
          <div class="container1">
            <div class="row product-title-info">
              <div class="col-md-12">
                <h1>ABOUT US</h1>
                <div className="subheader">Security Products seller & service provider</div>
              </div>
            </div>
          </div>
          <div class="parallax" id="parallax-cta"></div>
        </section>


        <section class="story-section company-sections ct-u-paddingBoth100 paddingBothHalf noTopMobilePadding" id="section">
          <div class="container1 text-center">
            <h2>WHAT DRIVES US</h2>
            <h3>Design, Planning, Consulting & Integrating</h3>
            <div class="col-md-8 col-md-offset-2">
              <div class="red-border"></div>
              <p class="ct-u-size22 ct-u-fontWeight300 marginTop40">Rpk2 Technology. are the expert System Integrators for electronic security and equipment solutions with a passion to architect the best of the security options in a structured innovative pattern. Growing demand for complex and effective security management products and solutions are factored by adoption of hi-tech security systems in the global physical security market.</p>
              <a className="ct-u-marginTop60 btn btn-solodev-red btn-fullWidth-sm ct-u-size19" href="#">Learn More</a>
            </div>
          </div>
        </section>
        <section class="culture-section company-sections ct-u-paddingBoth100 paddingBothHalf noTopMobilePadding">
          <div class="container1">
            <div class="row">
              <div class="col-md-8 col-md-offset-2">
                <h2>Our Security Products</h2>
                <h3>Enhance visibility and protection & uncover hidden threats</h3>
                <p className="ct-u-size22 ct-u-fontWeight300 ct-u-marginBottom60">The industry is being subjected to a mass makeover in it’s operational strategy and modern Technology is playing a pivotal part in the process. Component-wise, use of technology in the physical security segment is divided into hardware and software</p>
              </div>
            </div>
            <div class="row ct-u-paddingBoth20">
              <div class="col-xs-6 col-md-4">
                <div class="company-icons-white">
                  <i class="fa fa-camera" aria-hidden="true"></i>
                  <p>Analog Cameras</p>
                  <p className="company-icons-subtext hidden-xs">Keep an eye on the activities.</p>
                </div>
              </div>
              <div class="col-xs-6 col-md-4">
                <div class="company-icons-white">
                  <i class="fa fa-wifi" aria-hidden="true"></i>
                  <p>Wifi Systems</p>
                  <p className="company-icons-subtext hidden-xs">Praesent sed libero vel ex maximus vulputate.</p>
                </div>
              </div>
              <div class="col-xs-6 col-md-4">
                <div class="company-icons-white">
                  <i class="fa fa-fire" aria-hidden="true"></i>
                  <p>Fire alarms</p>
                  <p className="company-icons-subtext hidden-xs"> Easy to warn people in a building of a fire.</p>
                </div>
              </div>
            </div>
            <div class="row ct-u-paddingBoth20">
              <div class="col-xs-6 col-md-4">
                <div class="company-icons-white">
                  <i class="fa fa-fire" aria-hidden="true"></i>
                  <p>CCTV Camera</p>
                  <p className="company-icons-subtext hidden-xs">Easy to warn people in a building of a fire.</p>
                </div>
              </div>
              <div class="col-xs-6 col-md-4">
                <div class="company-icons-white">
                  <i class="fa fa-fingerprint" aria-hidden="true"></i>
                  <p>BioMetric</p>
                  <p class="company-icons-subtext hidden-xs">Identification and access control.</p>
                </div>
              </div>
              <div class="col-xs-6 col-md-4">
                <div class="company-icons-white">
                  <i class="fa fa-solar-panel" aria-hidden="true"></i>
                  <p>Solar</p>
                  <p className="company-icons-subtext hidden-xs">(DVR) records videos in a digital format.</p>
                </div>
              </div>
            </div>
            <a className="ct-u-marginTop60 btn btn-solodev-red-reversed btn-fullWidth-sm ct-u-size19" href="">Ready to Learn More?</a>
          </div>
        </section>
        <section class="customers-section company-sections ct-u-paddingBoth100 paddingBothHalf noTopMobilePadding">
          <div className="container1">
            <div class="row">
              <div class="col-md-8 col-md-offset-2">
                <h2>CUSTOMERS</h2>
                <h3>Trusted by some of the world’s leading brands.</h3>
                <p class="ct-u-size22 ct-u-fontWeight300 ct-u-marginBottom60 marginTop40">Today’s organisations face numerous diverse threats to their people, places and property. Keeping people safely housed is among the biggest challenges the security industry faces. The Services are segmented into public alert and warning system, security consulting, public safety answering point, technical support, remote management services, video surveillance and others. These services are applicable to a wide range of strata from industrial and retail to transportation and logistics, hospitality, utilities, control centres, government and other public sectors. </p>
              </div>
              <div class="clearfix">
              </div>
            </div>
          </div>
        </section>
      </div>
      </motion.div>
    </>
  )
}

export default about
