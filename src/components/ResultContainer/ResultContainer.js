import React from 'react';
import ResultContainerItem from '../ResultContainerItem/ResultContainerItem';

export default function ResultContainer(props) {
    console.log(props.queryResults)
    const results = props.queryResults.map(result => {
        return (
            <ResultContainerItem 
                url={result.url} 
                exImg={result.img} 
                exName={result.name}
                pi={result.pi}
                cost={result.cost}
                wap={result.wap}
                total={result.total}
            />
        )
    })
    // WHAT IS THE SIDEBAR CARD LEFT HIDE??? ASK ALFONSO
    return (
        <>
        <div class="sidebar-card left hide">
            <div class="w-layout-grid sidebar-grid">
                <div class="title">Pair</div>
                <div class="title data">BAT/BTC</div>
                <div class="title something-good">Price</div>
                <div class="title data">$0.1655</div>
                <div class="title">Change</div>
                <div class="title price transparent">+5.32</div>
                <div class="title">Type</div>
                <div class="title data">Buy</div>
                <div class="title">Size</div>
                <div id="w-node-b029be24681b-2dc2b4ba" class="title data">100,000</div>
                <div class="title">Time</div>
                <div id="w-node-2ed8036e9013-2dc2b4ba" class="title data">01:33:21</div>
            </div>
        </div>
        
        <div class="search_results_container">
          <div class="div-block-112 title">
            <div class="w-layout-grid search-results_row title">
              <div class="div-block-109">
                <div class="results_title">Exchange</div>
              </div>
              <div class="div-block-110 hide-on-mobile">
                <div class="results_title">PI</div>
              </div>
              <div id="w-node-6a07e2478c00-2dc2b4ba" class="results_title cost">
                <div class="results_text title hide-on-mobile">Cost</div>
              </div>
              <div id="w-node-8921f85c498e-2dc2b4ba" class="div-block-110">
                <div class="results_title">WAP</div>
              </div>
              <div class="div-block-110 left">
                <div class="results_title">Total</div>
              </div>
            </div>
          </div>
          {results}
        </div>
        </>
    )
}