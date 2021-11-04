/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Feature_section from "./Feature_section";

function Features() {
    
    return (

        <>
        <section class="features">
            <div class="container">
                <div>
                    <div class="section-title">
                        <h2>Features</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <Feature_section title="Voluptatem dignissimos provident quasi corporis voluptates sit assumenda." content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua." img_postioning="col-md-5" text_postioning="col-md-7 pt-4" img="assets/img/features-1.svg" />

                    <Feature_section title="Corporis temporibus maiores provident" content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua." img_postioning="col-md-5 order-1 order-md-2" text_postioning="col-md-7 pt-5 order-2 order-md-1" img="assets/img/features-2.svg" />

                    <Feature_section title="Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas" content=" Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque." img_postioning="col-md-5" text_postioning="col-md-7 pt-5" img="assets/img/features-3.svg" />

                    <Feature_section title="Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in" content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua." img_postioning="col-md-5 order-1 order-md-2" text_postioning="col-md-7 pt-5 order-2 order-md-1" img="assets/img/features-4.svg" />
                </div>
            </div>
        </section>
        </>
    );
}
export default Features;