import React from 'react';
import Normalize from '../../utils/Normalize';

export default function ResultCard(props) {
    return (
        <div class="sidebar-card">
            <div class="w-layout-grid sidebar-grid">
            <div class="title main">Pair</div>
            <div class="title data">{props.data.pair1}/{props.data.pair2}</div>
            <div class="title main">Price</div>
            <div class="title data">{Normalize.normalizeDollarAmount(props.data.price)}</div>
            <div class="title main">Change</div>
            <div class="title price">{Normalize.normalizePercentChange(props.data.change)}</div>
            <div class="title main">Type</div>
            <div class="title data type">{props.data.type}</div>
            <div class="title main">Size</div>
            <div id="w-node-cde2b6146c0c-2dc2b4ba" class="title data">{props.data.size}</div>
            <div class="title main">Time</div>
            <div id="w-node-cde2b6146c10-2dc2b4ba" class="title data">{props.data.time}</div>
            </div>
      </div>
    )
}