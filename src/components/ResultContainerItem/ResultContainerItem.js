import React from 'react';
import './ResultContainerItem.css'

export default function ResultContainerItem(props) {
    return (
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="div-block-112 w-inline-block">
            <div className="w-layout-grid search-results_row">
              <div className="div-block-109">
                <img src={props.exImg} loading="lazy" width="20" alt="" className="image-46"/>
                <div className="text-block-78 exchange-name">{props.exName}</div>
              </div>
              <div className="div-block-110 hide-on-mobile">
                <div className="results_text">{props.bps}</div>
              </div>
              <div className="div-block-110 hide-on-mobile">
                <div className="results_text">{props.cost}</div>
              </div>
              <div className="div-block-110">
                <div className="results_text">{props.wap}</div>
              </div>
              <div className="div-block-110 keep">
                <div className="results_text">{props.total}</div>
              </div>
            </div>
        </a>
    )
}