import React from 'react';
import RectangleSm from '../../../../assets/misc/Rectangle-1003.png'
import RectangleMed from '../../../../assets/misc/Rectangle-1003-p-500.png'


// This is a temporary component until we can sort through webflow's css
// Ideally we pass the left or right design as a prop.
export default function PromoCardHorizontalRight() {
    return (
        <div class="home-white-card w-container">
        <div class="home_card">
          <div class="w-layout-grid home_card_grid">
            <div id="w-node-d8f393a201b9-93a201b6" class="card_paragraph">
              <h3 class="heading_h3">WHY LIQUIDITY?</h3>
              <h1 class="heading_h1 card">Save before trading.</h1>
              <p class="paragraph_home paragraph">Anticipate trading costs. Consistently buy or sell at the best price and never overpay for liquidity again. </p>
            </div>
            <img src={RectangleSm}
            loading="lazy" 
            id="w-node-d8f393a201c0-93a201b6" 
            sizes="(max-width: 479px) 85vw, (max-width: 767px) 75vw, (max-width: 991px) 536px, 812px" 
            alt="" 
            srcset={`${RectangleMed} 500w, ${RectangleSm} 772w"`} 
            class="home-card-image"/></div>
        </div>
      </div>
    )
}