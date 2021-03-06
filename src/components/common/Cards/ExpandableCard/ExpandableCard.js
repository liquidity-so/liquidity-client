import React from 'react';
import ChevronDownIcon from '../../../../assets/icons/chevron-down.png';

export default function ExpandableCard() {
    return (
        <div class="faq-question-box">
        <div class="faq-question-trigger">
          <div class="faq-question">Do you accept crypto as payment?</div>
          <img src={ChevronDownIcon} loading="lazy" width="24" height="24" alt="" class="image-32"/></div>
        <div class="faq-question-content">
          <p class="faq-answer">Yes, we do. Though our Coinbase commerce integration you can pay with BTC, DAI, ETH, LTC or USDC.</p>
        </div>
      </div>
    )
}