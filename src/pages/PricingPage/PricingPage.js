import React from 'react';
import ExpandableCard from '../../components/common/Cards/ExpandableCard/ExpandableCard';
import PricingCardBlk from '../../components/common/Cards/PricingCard/PricingCardBlk';
import PricingCardWhite from '../../components/common/Cards/PricingCard/PricingCardWhite';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';

export default function PricingPage() {
    return (
    <>
    <NavBar/>
  <div class="pricing-section">
    <div class="pricing-container w-container">
      <h6 class="heading_h6">Pricing</h6>
      <h4 class="heading_h4">One tool for all your liquidity needs. Free for small trades.</h4>
    </div>
    <div class="container-4 w-container">
      <div class="w-layout-grid grid-16">
          <PricingCardWhite></PricingCardWhite>
          <PricingCardBlk></PricingCardBlk>
      </div>
    </div>
  </div>
  <div class="faq-section">
    <div class="faq-container w-container">
      <h1 class="heading_h1 price">Frequently Asked Questions</h1>
      <div class="w-layout-grid faq_grid">
        <ExpandableCard/>
        <ExpandableCard/>
        <ExpandableCard/>
      </div>
    </div>
  </div>
  <div class="save-on-your-next-trade-section">
    <div class="video-container customshit w-container">
      <div class="call_to_action">
        <h1 class="heading_h1 call_to_action">Save on your next trade.</h1>
        <a href="sign-up.html" class="signup_button_dark w-inline-block">
          <div class="exchange_button_interior">
            <p class="demo_text">Get started</p>
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
  </>
    )
}