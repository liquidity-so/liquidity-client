import React from 'react';
import './AccordionSearchList.css'

export default function AccordionSearchList(props) {
  let rows;
  if (props.matchData.length) {
    rows = props.matchData.map(match => {
        if (match.name.length > 7) {
          match.name = `${match.name.slice(0, 7)}...`
        }
        const highlightIndex = match.ticker.indexOf(props.currentInput.toUpperCase())
        let matchedText = match.ticker
        if (highlightIndex >= 0) {
          // If input matches part of symbol, wrap in span
          matchedText = 
            [match.ticker.substring(0, highlightIndex),
              <span class="found-match">
                {match.ticker.substring(highlightIndex, highlightIndex + props.currentInput.length)}
              </span>,
            match.ticker.substring(highlightIndex + props.currentInput.length)]
        }
        return (
            <div class="auto-complete-row" onClick={() => {props.onUserSelect(match.ticker, props.inputIndex)}}>
                <div class="auto-complete-ticker">{matchedText}</div>
                <div class="autocomplete-name">{match.name}</div>
            </div>
      )
    })
  }
    return (
        <div class="accordion-contenta">
          <div class="auto-complete-pop-up">
            {
                props.matchData.length ? rows : 
                <p class="no-match-found">No matches found.</p>
            }
          </div>
        </div>
    )
}
