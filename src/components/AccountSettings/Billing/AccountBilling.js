import React from 'react';

export default function AccountBilling(props) {
    return(
        <>
        <div class="w-layout-grid settings-card-header">
        <div class="left-side">
          <h1 class="heading-7">Billing</h1>
        </div>
        <div id="w-node-54efdb6de525-bb6f7233" class="div-block-59">
          <div class="show-x-dropdown"></div>
        </div>
      </div>
      <div class="div-block-89">
        <div class="text-block-50">Current Plan</div>
        <div class="text-block-48">Hobbyist</div>
        <div>
          <div class="text-block-49">$0</div>
          <div class="text-block-51">per month</div>
        </div>
      </div>
      <div class="text-block-53">Payment Method</div>
      <a href="https://commerce.coinbase.com/checkout/b85cc0dc-6ddf-4288-8dd6-1793db2c0c1a" class="link-block-7 w-inline-block">
          <img src="../images/credit-card.png" loading="lazy" width="18" alt="" class="image-43"/>
              <div class="text-block-52">Credit Card</div></a><a href="#" class="link-block-7 w-inline-block">
                  <img src="../images/uil_bitcoin-circle.png" loading="lazy" width="18" alt="" class="image-43"/>
                      <div class="text-block-52">Cryptocurrency</div></a>
      <div class="history">
        <div class="text-block-30">Payment History</div>
        <div class="w-layout-grid search_history_row customss">
          <div class="title_payments">Price</div>
          <div class="title_payments">Payment</div>
          <div class="title_payments">Invoice</div>
          <div class="title_payments">Date</div>
        </div>
        <div class="w-layout-grid search_history_row customss">
          <div class="text-block-31">$250.00</div>
          <div class="text-block-31">Credit Card</div>
          <div class="text-block-31">100</div>
          <div class="text-block-31">07/25/20</div>
        </div>
        <div class="w-layout-grid search_history_row customss">
          <div class="text-block-31">$250.00</div>
          <div class="text-block-31">Credit Card</div>
          <div class="text-block-31">99</div>
          <div class="text-block-31">06/25/20</div>
        </div>
        <div class="w-layout-grid search_history_row customss">
          <div class="text-block-31">$250.00</div>
          <div class="text-block-31">Credit Card</div>
          <div class="text-block-31">98</div>
          <div class="text-block-31">05/25/20</div>
        </div>
        <div class="w-layout-grid search_history_row customss last-column">
          <div class="text-block-31">$250.00</div>
          <div class="text-block-31">Credit Card</div>
          <div class="text-block-31">97</div>
          <div class="text-block-31">04/25/20</div>
        </div>
      </div>
      </>
    )
}