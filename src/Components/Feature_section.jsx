import React from "react";

function Feature_section(props){
    return(
        <div class="row" data-aos="fade-up">
        <div class={props.img_postioning}>
          <img src={props.img} class="img-fluid" alt="" />
        </div>
        <div class={props.text_postioning}>
          <h3>{props.title}</h3>
          <p class="fst-italic">
           {props.content}
          </p>
          <ul>
            <li><i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><i class="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
          </ul>
        </div>
      </div>
    );
}
export default Feature_section;