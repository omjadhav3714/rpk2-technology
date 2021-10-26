import React from "react";
import Card from "./Card";
import list from "../data/listOfServices.json"
import { Splide, SplideSlide } from "@splidejs/react-splide";

import '@splidejs/splide/dist/css/themes/splide-default.min.css';


function Service(props) {
  return (
    <section className="page-section" id="services">
      <div className="container px-4 px-lg-5">
        <hr className="divider" />

        <Splide
          options={{
            type: "loop",
            gap: "1rem",
            pagination: false,
            autoplay: true,
            speed: 400,
            interval: 1000,
            pauseOnHover: true,
            resetProgress: false,
            perPage: 4,
            breakpoints: {
              600: {
                perPage: 1,
              },
              800: {
                perPage: 2,
              },
              1200:{
                perPage: 3,
              }
            },
            paginatiom:false,
            padding: '1em',
            arrows: "slider",
          }} hasSliderWrapper

        >
          {list.items.map((item, i) => (
            <SplideSlide >
              <Card title={item} />
            </SplideSlide>

          ))}
        </Splide>
      </div>

    </section >

  );
}
export default Service;
