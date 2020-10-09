import React from 'react';

export default function AccordionSearchList() {
    return (
        <div class="accordion-contenta">
          <div class="auto-complete-pop-up">
            <div class="auto-complete-row">
              <div class="auto-complete-ticker">BT<span class="text-span-5">C</span></div>
              <div class="autocomplete-name">Bitcoin</div>
            </div>
            <div class="auto-complete-row">
              <div class="auto-complete-ticker">BT<span class="text-span-5">G</span></div>
              <div class="autocomplete-name">Bitcoin Gold</div>
            </div>
            <div class="auto-complete-row">
              <div class="auto-complete-ticker">BT<span class="text-span-5">M</span></div>
              <div class="autocomplete-name custm">Bytom</div>
            </div>
            <div class="auto-complete-row">
              <div class="auto-complete-ticker">BT<span class="text-span-5">S</span></div>
              <div class="autocomplete-name">Bitshares</div>
            </div>
            <div class="auto-complete-row last-one">
              <div class="auto-complete-ticker">BT<span class="text-span-5">T</span></div>
              <div class="autocomplete-name">Bittorrent</div>
            </div>
          </div>
        </div>
    )
}
