import React from 'react';

// This is a temporary component until we can sort through webflow's css
// Ideally we pass the left or right design as a prop.
export default function PromoCardHorizontalRight(props) {
    return (
        <div className="home-white-card w-container">
        <div className="home_card">
          <div className="w-layout-grid home_card_grid">
            <div className="card_paragraph">
              <h3 className="heading_h3">{props.data.subheading}</h3>
              <h1 className="heading_h1 card">{props.data.heading}</h1>
              <p className="paragraph_home paragraph">{props.data.caption}</p>
            </div>
            <img 
              src={props.data.imgSrc}
              loading="lazy" 
              alt={props.data.subheading} 
              sizes="(max-width: 479px) 85vw, (max-width: 767px) 75vw, (max-width: 991px) 536px, 568.3984375px"
              srcSet={`${props.data.imgSmall} 500w, ${props.data.imgMid} 800w, ${props.data.imgLarge} 1080w, ${props.data.imgLargest} 1934w`}
              className="home-card-image"/></div>
        </div>
      </div>
    )
}