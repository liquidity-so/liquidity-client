import React from 'react';

export default function AccountBilling(props) {
    return(
        <>
        <div className="w-layout-grid settings-card-header">
        <div className="left-side">
          <h1 className="heading-7">Billing</h1>
        </div>
        <div id="w-node-54efdb6de525-bb6f7233" className="div-block-59">
          <div className="show-x-dropdown"></div>
        </div>
      </div>
      <div className="div-block-89">
        <div className="text-block-50">Current Plan</div>
        <div className="text-block-48">Hobbyist</div>
        <div>
          <div className="text-block-49">$0</div>
          <div className="text-block-51">per month</div>
        </div>
      </div>
      <div className="text-block-53">Payment Method</div>
      <a href="https://commerce.coinbase.com/checkout/b85cc0dc-6ddf-4288-8dd6-1793db2c0c1a" className="link-block-7 w-inline-block">
          <img src="../images/credit-card.png" loading="lazy" width="18" alt="" className="image-43"/>
              <div className="text-block-52">Credit Card</div></a><a href="#" className="link-block-7 w-inline-block">
                  <img src="../images/uil_bitcoin-circle.png" loading="lazy" width="18" alt="" className="image-43"/>
                      <div className="text-block-52">Cryptocurrency</div></a>
      <div className="history">
        <div className="text-block-30">Payment History</div>
        <div className="w-layout-grid search_history_row customss">
          <div className="title_payments">Price</div>
          <div className="title_payments">Payment</div>
          <div className="title_payments">Invoice</div>
          <div className="title_payments">Date</div>
        </div>
        <div className="w-layout-grid search_history_row customss">
          <div className="text-block-31">$250.00</div>
          <div className="text-block-31">Credit Card</div>
          <div className="text-block-31">100</div>
          <div className="text-block-31">07/25/20</div>
        </div>
        <div className="w-layout-grid search_history_row customss">
          <div className="text-block-31">$250.00</div>
          <div className="text-block-31">Credit Card</div>
          <div className="text-block-31">99</div>
          <div className="text-block-31">06/25/20</div>
        </div>
        <div className="w-layout-grid search_history_row customss">
          <div className="text-block-31">$250.00</div>
          <div className="text-block-31">Credit Card</div>
          <div className="text-block-31">98</div>
          <div className="text-block-31">05/25/20</div>
        </div>
        <div className="w-layout-grid search_history_row customss last-column">
          <div className="text-block-31">$250.00</div>
          <div className="text-block-31">Credit Card</div>
          <div className="text-block-31">97</div>
          <div className="text-block-31">04/25/20</div>
        </div>
      </div>
      </>
    )
}