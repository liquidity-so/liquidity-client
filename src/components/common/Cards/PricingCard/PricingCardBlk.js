import React from 'react';

// This is a temporary component until we can sort through webflow's css
// Ideally we pass the blacak or white design as a prop.
export default function PricingCardBlk() {
    return (
        <div class="paid_tier-card">
        <h1 class="heading-3">Trader</h1>
        <div class="price">
          <div class="pricing-number">$150</div>
          <div class="permonth">per month</div>
        </div>
        <a href="https://app.tillypay.com/pay/liquidity" class="sign_up_button-paid w-inline-block">
          <div>
            <div class="get-started-text">Get started</div>
          </div>
        </a>
        <div class="pricing-description">For professional traders and researchers.</div>
        <div class="pricing-bullets-container">
          <div class="pricing-bullet"><img src="images/Ellipse-267_1Ellipse-267.png" loading="lazy" alt="" class="bullet_color"/>
            <div class="pricing_bullet_text">Unlimited search volume</div>
          </div>
          <div class="pricing-bullet"><img src="images/Ellipse-267_1Ellipse-267.png" loading="lazy" alt="" class="bullet_color"/>
            <div class="pricing_bullet_text">XLS export</div>
          </div>
          <div class="pricing-bullet"><img src="images/Ellipse-267_1Ellipse-267.png" loading="lazy" alt="" class="bullet_color"/>
            <div class="pricing_bullet_text">Priority support</div>
          </div>
        </div>
      </div>
    )
}