import React from 'react';
import Ellipse1 from '../../../../assets/misc/Ellipse-267_1Ellipse 267.png';
// This is a temporary component until we can sort through webflow's css
// Ideally we pass the blacak or white design as a prop.
export default function PricingCardBlk() {
    return (
        <div className="paid_tier-card">
        <h1 className="heading-3">Trader</h1>
        <div className="price">
          <div className="pricing-number">$150</div>
          <div className="permonth">per month</div>
        </div>
        <a href="https://app.tillypay.com/pay/liquidity" className="sign_up_button-paid w-inline-block">
          <div>
            <div className="get-started-text">Get started</div>
          </div>
        </a>
        <div className="pricing-description">For professional traders and researchers.</div>
        <div className="pricing-bullets-container">
          <div className="pricing-bullet">
            <img src={Ellipse1} loading="lazy" alt="" className="bullet_color"/>
            <div className="pricing_bullet_text">Unlimited search volume</div>
          </div>
          <div className="pricing-bullet">
            <img src={Ellipse1} loading="lazy" alt="" className="bullet_color"/>
            <div className="pricing_bullet_text">XLS export</div>
          </div>
          <div className="pricing-bullet">
            <img src={Ellipse1}loading="lazy" alt="" className="bullet_color"/>
            <div className="pricing_bullet_text">Priority support</div>
          </div>
        </div>
      </div>
    )
}