import React from 'react';
import { Link } from 'react-router-dom';
import ExpandableCard from '../../components/common/Cards/ExpandableCard/ExpandableCard';
import PricingCardBlk from '../../components/common/Cards/PricingCard/PricingCardBlk';
import PricingCardWhite from '../../components/common/Cards/PricingCard/PricingCardWhite';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';

export default function PricingPage() {
    const expandableCards = [
      {
        heading: "Do you accept crypto as payment?",
        subheading: "Yes, we do. Though our Coinbase commerce integration you can pay with BTC, DAI, ETH, LTC or USDC."
      },
      {
        heading: "Can I cancel my subscription when I want?",
        subheading: "Yes, you can change or cancel your plan at any time in your dashboard. Once you have canceled, you’ll still have access to your premium plan until the end of your subscription cycle."
      },
      {
        heading: "If a request returns no result, does it count?",
        subheading: "It doesn't. When a trade simulation request doesn't return a result, the request isn't counted."
      },
    ]
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
        {expandableCards.map(card => 
          <ExpandableCard heading={card.heading} subheading={card.subheading}/>
        )}
      </div>
    </div>
  </div>
  <div class="save-on-your-next-trade-section">
    <div class="video-container customshit w-container">
      <div class="call_to_action">
        <h1 class="heading_h1 call_to_action">Save on your next trade.</h1>
        <Link to="/signup" class="signup_button_dark w-inline-block">
          <div class="exchange_button_interior">
            <p class="demo_text">Get started</p>
          </div>
        </Link>
      </div>
    </div>
  </div>
  <Footer/>
  </>
    )
}