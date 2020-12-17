import React from 'react';

// This is a temporary component until we can sort through webflow's css
// Ideally we pass the left or right design as a prop.
export default function PromoCardHorizontalLeft(props) {
    return (
      <div class="home-white-card w-container">
          <div class="home_card">
          <div class="w-layout-grid home_card_grid">
            <img src={props.data.imgSrc} loading="lazy" 
              sizes="(max-width: 479px) 85vw, (max-width: 767px) 75vw, (max-width: 991px) 536px, 568.398437px" alt={props.data.subheading} 
              srcset={`${props.data.imgSmall} 500w, ${props.data.imgMid} 800w, ${props.data.imgLarge} 2000w, ${props.data.imgLargest} 2400w`}
              class="home-card-image"/>
            <div class="card_paragraph right">
              <h3 class="heading_h3 right">{props.data.subheading}</h3>
              <h1 class="heading_h1 card right">{props.data.heading}</h1>
              <p class="paragraph_home right">{props.data.caption}</p>
            </div>
            <div  class="card_paragraph mobile">
              <h3 class="heading_h3 right">{props.data.subheading}</h3>
              <h1 class="heading_h1 card right">{props.data.heading}</h1>
              <p class="paragraph_home right paragraph">{props.data.caption}</p>
            </div>
          </div>
        </div>
    </div>
    )
}