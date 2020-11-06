import React from 'react';
import RectangleSm from '../../../../assets/misc/Rectangle-1003.png'
import RectangleMed from '../../../../assets/misc/Rectangle-1003-p-500.png'

// This is a temporary component until we can sort through webflow's css
// Ideally we pass the left or right design as a prop.
export default function PromoCardHorizontalLeft() {
    return (
      <div class="home-white-card w-container">
          <div class="home_card">
          <div class="w-layout-grid home_card_grid">
            <img src={RectangleSm} loading="lazy" 
              id="w-node-383e7045cb2b-7045cb28" 
              sizes="(max-width: 479px) 85vw, (max-width: 767px) 75vw, (max-width: 991px) 536px, 812px" 
              alt="" 
              srcset={`${RectangleMed} 500w, ${RectangleSm} 772w"`} 
              class="home-card-image"/>
            <div id="w-node-383e7045cb2c-7045cb28" class="card_paragraph right">
              <h3 class="heading_h3 right">WHY LIQUIDITY?</h3>
              <h1 class="heading_h1 card right">Details, details.</h1>
              <p class="paragraph_home right">Liquidity gives you a snapshot of your expected weighted average price (WAP), slippage costs, and total order size. </p>
            </div>
            <div id="w-node-c9ce7f2f3f69-7045cb28" class="card_paragraph mobile">
              <h3 class="heading_h3 right">WHY LIQUIDITY?</h3>
              <h1 class="heading_h1 card right">Details, details.</h1>
              <p class="paragraph_home right paragraph">Liquidity gives you a snapshot of your expected weighted average price (WAP), slippage costs, and total order size. </p>
            </div>
          </div>
        </div>
    </div>
    )
}