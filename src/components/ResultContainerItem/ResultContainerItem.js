import React from 'react';
import './ResultContainerItem.css'
import Normalize from '../../utils/Normalize'


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
                <div class="results_text">{Normalize.normalizeDollarAmount(props.cost)}</div>
              </div>
              <div class="div-block-110">
                <div class="results_text">{Normalize.normalizeDollarAmount(props.wap)}</div>
              </div>
              <div class="div-block-110 keep">
                <div class="results_text">{Normalize.normalizeDollarAmount(props.total)}</div>
              </div>
            </div>
        </a>
    )
}