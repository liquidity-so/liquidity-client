import React from 'react';
import './AccordionSearchList.css'

export default function AccordionSearchList(props) {
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
              <span className="found-match" key={match.symbol}>
                {match.symbol.substring(highlightIndex, highlightIndex + props.currentInput.length)}
              </span>,
            match.symbol.substring(highlightIndex + props.currentInput.length)]
        }
        return (
            <div 
              key={match.symbol}
              className="auto-complete-row" 
              onClick={() => {props.onUserSelect(match.symbol, props.inputIndex)}}>
                <div className="auto-complete-ticker">{matchedText}</div>
                <div className="autocomplete-name">{match.full_name}</div>
            </div>
      )
    })
  }
    return (
        <div className="accordion-contenta">
          <div className="auto-complete-pop-up">
            {
                props.matchData.length ? rows : 
                <p className="no-match-found">No matches found.</p>
            }
          </div>
        </div>
    )
}

/*
  unusued template until we get a proper autosuggest endpoint
  <div className="auto-complete-row" onClick={() => {props.onUserSelect(match.ticker, props.inputIndex)}}>
      <div className="auto-complete-ticker">{matchedText}</div>
      <div className="autocomplete-name">{match.name}</div>
  </div>

*/