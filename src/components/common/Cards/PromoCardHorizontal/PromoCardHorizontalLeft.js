import React from 'react';

// This is a temporary component until we can sort through webflow's css
// Ideally we pass the left or right design as a prop.
export default function PromoCardHorizontalLeft(props) {
    return (
      <div className="home-white-card w-container">
          <div className="home_card">
          <div className="w-layout-grid home_card_grid">
            <img src={props.data.imgSrc} loading="lazy" 
              sizes="(max-width: 479px) 85vw, (max-width: 767px) 75vw, (max-width: 991px) 536px, 568.398437px" alt={props.data.subheading} 
              srcSet={`${props.data.imgSmall} 500w, ${props.data.imgMid} 800w, ${props.data.imgLarge} 2000w, ${props.data.imgLargest} 2400w`}
              className="home-card-image"/>
            <div className="card_paragraph right">
              <h3 className="heading_h3 right">{props.data.subheading}</h3>
              <h1 className="heading_h1 card right">{props.data.heading}</h1>
              <p className="paragraph_home right">{props.data.caption}</p>
            </div>
            <div  className="card_paragraph mobile">
              <h3 className="heading_h3 right">{props.data.subheading}</h3>
              <h1 className="heading_h1 card right">{props.data.heading}</h1>
              <p className="paragraph_home right paragraph">{props.data.caption}</p>
            </div>
          </div>
        </div>
    </div>
    )
}