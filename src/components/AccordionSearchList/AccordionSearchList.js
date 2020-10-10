import React from 'react';

export default function AccordionSearchList(props) {
    console.log(props.matchData)
    const rows = props.matchData.map(match => {
        // If input matches part of symbol, wrap in span
        return (
            <div class="auto-complete-row">
                <div class="auto-complete-ticker">{match.ticker}</div>
                <div class="autocomplete-name">{match.name}</div>
            </div>
      )
    })
    return (
        <div class="accordion-contenta">
          <div class="auto-complete-pop-up">
            {rows}
          </div>
        </div>
    )
}
