import React from 'react';
import { Link } from 'react-router-dom';
import Ellipse1 from '../../../../assets/misc/Ellipse-267_1Ellipse 267.png';
import Ellipse2 from '../../../../assets/misc/Ellipse-272_1Ellipse 272.png';

// This is a temporary component until we can sort through webflow's css
// Ideally we pass the black or white design as a prop.
export default function PricingCardWhite() {
    return (
          <div id="w-node-f161e772a776-266f722b" className="free_tier-card">
            <h1 className="heading-2">Hobbyist</h1>
            <div className="price">
              <div className="pricing-number">$0</div>
              <div className="permonth">per month</div>
            </div>
            <Link to="/signup" className="signup_button_dark pricing link-block-2 w-inline-block">
              <div className="exchange_button_interior">
                <p className="demo_text">Get started</p>
              </div>
            </Link>
            <div className="pricing-description">For the crypto investor who trades occasionally. </div>
            <div className="pricing-bullets-container">
              <div className="pricing-bullet">
                <img src={Ellipse1} loading="lazy" width="8" alt="" className="bullet_color"/>
                <div className="pricing_bullet_text_light">Unlimited searches </div>
              </div>
              <div className="pricing-bullet">
                <img src={Ellipse1}loading="lazy" alt="" className="bullet_color"/>
                <div className="pricing_bullet_text_light">5 searches &gt; $2k</div>
              </div>
              <div className="pricing-bullet">
                <img src={Ellipse2} loading="lazy" alt="" className="bullet_color"/>
                <div className="pricing_bullet_text_light">Priority support</div>
              </div>
            </div>
          </div>
    )
}