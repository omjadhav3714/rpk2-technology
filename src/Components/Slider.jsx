import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


function Slider() {
  return (
    <section className="services">
      <div className="container">
        <div className="row">
          <Splide
            options={{
              perPage: 3,
              rewind: true,
              fixedWidth: '12rem',
              fixedHeight: '8rem',

            }}>
            <SplideSlide>
              <div className="card">
                <p>Service 1</p>
              </div>
            </SplideSlide>


            <SplideSlide>
              <div>
                <p>Service 2</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <p>Service 3</p>
              </div>
            </SplideSlide><SplideSlide>
              <div>
                <p>Service 4</p>
              </div>
            </SplideSlide> <SplideSlide>
              <div>
                <p>Service 5</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <p>Service 6</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="card">
                <p>Service 7</p>
              </div>            
              </SplideSlide>
          </Splide>
        </div>

      </div>
    </section>






  )
}
export default Slider;