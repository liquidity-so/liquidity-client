import React from 'react';


export default function UsageTable(props){
    return (
        <>
        <div class="history">
        <div class="text-block-30">Search History</div>
        <div class="w-layout-grid search_history_row">
        <div class="title_payments">Pair</div>
        <div class="title_payments">Price</div>
        <div class="title_payments">Type</div>
        <div class="title_payments">Size</div>
        <div class="title_payments lastcolumn">Date</div>
        </div>
        <div class="w-layout-grid search_history_row">
        <div class="text-block-31">REN/BTC</div>
        <div class="text-block-31">$250.00</div>
        <div class="text-block-31">Sell</div>
        <div class="text-block-31">1444</div>
        <div class="text-block-31 lastcolumn">03/25/20</div>
        </div>
        <div class="w-layout-grid search_history_row">
        <div class="text-block-31">REN/USDT</div>
        <div class="text-block-31">$0.2340</div>
        <div class="text-block-31">Sell</div>
        <div class="text-block-31">542,115</div>
        <div class="text-block-31 lastcolumn">03/25/20</div>
        </div>
        <div class="w-layout-grid search_history_row">
        <div class="text-block-31">ETH/BTC</div>
        <div class="text-block-31">$235.21</div>
        <div class="text-block-31">Buy</div>
        <div class="text-block-31">54</div>
        <div class="text-block-31 lastcolumn">03/25/20</div>
        </div>
        <div class="w-layout-grid search_history_row">
        <div class="text-block-31">EOS/USD</div>
        <div class="text-block-31">$3.5521</div>
        <div class="text-block-31">Buy</div>
        <div class="text-block-31">1,287</div>
        <div class="text-block-31 lastcolumn">03/25/20</div>
        </div>
        </div><a href="../account/usage-full.html" class="link-4">Full search history</a>
        </>
    )
}
