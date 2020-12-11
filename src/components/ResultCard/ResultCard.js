import React from 'react';
import Normalize from '../../utils/Normalize';
import './ResultCard.css';

export default function ResultCard(props) {

    const strDateTime = props.data.time;
    const normalizedDate = new Date(strDateTime);
    const hour = (normalizedDate.getHours() + 11) % 12 + 1;
    const minute = normalizedDate.getMinutes();
    const seconds = normalizedDate.getSeconds().toString()
    const displayedSeconds = seconds.length === 1 ? '0' + seconds : seconds;
    const timeString = `${hour}:${minute}:${displayedSeconds}`
    return (
        <span className={props.hidden? "hidden" : null}>
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
                        <div id="w-node-cde2b6146c10-2dc2b4ba" class="title data">{timeString}</div>
                </div>
            </div>
      </span>
    )
}