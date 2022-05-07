import React from 'react';


export default function UsageTable(props){
    return (
        <>
        <div className="history">
        <div className="text-block-30">Search History</div>
        <div className="w-layout-grid search_history_row">
        <div className="title_payments">Pair</div>
        <div className="title_payments">Price</div>
        <div className="title_payments">Type</div>
        <div className="title_payments">Size</div>
        <div className="title_payments lastcolumn">Date</div>
        </div>
        <div className="w-layout-grid search_history_row">
        <div className="text-block-31">REN/BTC</div>
        <div className="text-block-31">$250.00</div>
        <div className="text-block-31">Sell</div>
        <div className="text-block-31">1444</div>
        <div className="text-block-31 lastcolumn">03/25/20</div>
        </div>
        <div className="w-layout-grid search_history_row">
        <div className="text-block-31">REN/USDT</div>
        <div className="text-block-31">$0.2340</div>
        <div className="text-block-31">Sell</div>
        <div className="text-block-31">542,115</div>
        <div className="text-block-31 lastcolumn">03/25/20</div>
        </div>
        <div className="w-layout-grid search_history_row">
        <div className="text-block-31">ETH/BTC</div>
        <div className="text-block-31">$235.21</div>
        <div className="text-block-31">Buy</div>
        <div className="text-block-31">54</div>
        <div className="text-block-31 lastcolumn">03/25/20</div>
        </div>
        <div className="w-layout-grid search_history_row">
        <div className="text-block-31">EOS/USD</div>
        <div className="text-block-31">$3.5521</div>
        <div className="text-block-31">Buy</div>
        <div className="text-block-31">1,287</div>
        <div className="text-block-31 lastcolumn">03/25/20</div>
        </div>
        </div><a href="../account/usage-full.html" className="link-4">Full search history</a>
        </>
    )
}
