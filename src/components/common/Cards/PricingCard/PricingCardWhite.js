import React from 'react';
import Ellipse1 from '../../../../assets/misc/Ellipse-267_1Ellipse 267.png';
import Ellipse2 from '../../../../assets/misc/Ellipse-272_1Ellipse 272.png';

// This is a temporary component until we can sort through webflow's css
// Ideally we pass the black or white design as a prop.
export default function PricingCardWhite() {
    return (
          <div id="w-node-f161e772a776-266f722b" class="free_tier-card">
            <h1 class="heading-2">Hobbyist</h1>
            <div class="price">
              <div class="pricing-number">$0</div>
              <div class="permonth">per month</div>
            </div>
            <a href="sign-up.html" class="signup_button_dark pricing link-block-2 w-inline-block">
              <div class="exchange_button_interior">
                <p class="demo_text">Get started</p>
              </div>
            </a>
            <div class="pricing-description">For the crypto investor who trades occasionally. </div>
            <div class="pricing-bullets-container">
              <div class="pricing-bullet">
                <img src={Ellipse1} loading="lazy" width="8" alt="" class="bullet_color"/>
                <div class="pricing_bullet_text_light">Unlimited searches </div>
              </div>
              <div class="pricing-bullet">
                <img src={Ellipse1}loading="lazy" alt="" class="bullet_color"/>
                <div class="pricing_bullet_text_light">5 searches &gt; $2k</div>
              </div>
              <div class="pricing-bullet">
                <img src={Ellipse2} loading="lazy" alt="" class="bullet_color"/>
                <div class="pricing_bullet_text_light">Priority support</div>
              </div>
            </div>
          </div>
    )
}