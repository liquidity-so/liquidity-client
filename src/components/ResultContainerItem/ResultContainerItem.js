import React from 'react';
import './ResultContainerItem.css'
import CurrencyHelpers from '../../utils/Currency'

export default function ResultContainerItem(props) {
    return (
        <a href={props.url} target="_blank" class="div-block-112 w-inline-block">
            <div class="w-layout-grid search-results_row">
              <div class="div-block-109">
                <img src={props.exImg} loading="lazy" width="20" alt="" class="image-46"/>
                <div class="text-block-78 exchange-name">{props.exName}</div>
              </div>
              <div class="div-block-110 hide-on-mobile">
                <div class="results_text">{props.pi}</div>
              </div>
              <div class="div-block-110 hide-on-mobile">
                <div class="results_text">{CurrencyHelpers.normalizeDollarAmount(props.cost)}</div>
              </div>
              <div class="div-block-110">
                <div class="results_text">{CurrencyHelpers.normalizeDollarAmount(props.wap)}</div>
              </div>
              <div class="div-block-110 keep">
                <div class="results_text">{CurrencyHelpers.normalizeDollarAmount(props.total)}</div>
              </div>
            </div>
        </a>
    )
}
/*

     <a href="https://www.probit.com/app/exchange/BAT-BTC" target="_blank" class="div-block-112 w-inline-block">
            <div class="w-layout-grid search-results_row">
              <div class="div-block-109">
                <img src="../images/image-36_1image-36.png" loading="lazy" width="20" alt="" class="image-46">
                <div class="text-block-78">Probit</div>
              </div>
              <div class="div-block-110 hide-on-mobile">
                <div class="results_text">1263</div>
              </div>
              <div class="div-block-110 hide-on-mobile">
                <div class="results_text">$5,104</div>
              </div>
              <div class="div-block-110">
                <div class="results_text">$0.2201</div>
              </div>
              <div class="div-block-110 keep">
                <div class="results_text">$39,420</div>
              </div>
            </div>
          </a>
*/