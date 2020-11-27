import React from 'react';
import './AccordionSearchList.css'

export default function AccordionSearchList(props) {
  console.log(props.matchData);
  let rows;
  if (props.matchData.length) {
    rows = props.matchData.map(match => {
        if (match.full_name.length > 7) {
          match.full_name = `${match.full_name.slice(0, 7)}...`
        }
        const highlightIndex = match.symbol.indexOf(props.currentInput.toUpperCase())
        let matchedText = match.symbol
        if (highlightIndex >= 0) {
          // If input matches part of symbol, wrap in span
          matchedText = 
            [match.symbol.substring(0, highlightIndex),
              <span class="found-match">
                {match.symbol.substring(highlightIndex, highlightIndex + props.currentInput.length)}
              </span>,
            match.symbol.substring(highlightIndex + props.currentInput.length)]
        }
        return (
            <div class="auto-complete-row" onClick={() => {props.onUserSelect(match.symbol, props.inputIndex)}}>
                <div class="auto-complete-ticker">{matchedText}</div>
                <div class="autocomplete-name">{match.full_name}</div>
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

/*
  unusued template until we get a proper autosuggest endpoint
  <div class="auto-complete-row" onClick={() => {props.onUserSelect(match.ticker, props.inputIndex)}}>
      <div class="auto-complete-ticker">{matchedText}</div>
      <div class="autocomplete-name">{match.name}</div>
  </div>

*/