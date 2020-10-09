import React from 'react';
import AccordionSearchList from '../AccordionSearchList/AccordionSearchList';

export default function Accordion(){
    return (
      <div class="search-bar home">
        <div class="accorion-wrappa">
          <div class="search-box-input-field">Crypto Pair 1</div>
          <AccordionSearchList/>
        </div>
        <div class="accorion-wrappa">
          <div class="search-box-input-field">Crypto Pair 2</div>
          <AccordionSearchList/>
        </div>
        <div class="search-box-input-field">Order Size</div>
        <div class="div-block-138"><a href="searchs/no-login.html" class="search-box-button w-button">Buy</a><a href="searchs/no-login.html" class="search-box-button sell w-button">Sell</a></div>
      </div>
    )
}