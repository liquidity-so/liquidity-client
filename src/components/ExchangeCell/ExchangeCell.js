import React from 'react';
import { Link } from 'react-router-dom';

export default function ExchangeCell(props) {
    return (
        <div className="exchange_cell">
            <div className="exchange_button w-inline-block">
            <div className="exchange_button_interior">
                <img src={props.exchangeImg} loading="lazy" alt={props.name} className="exchange_image"/>
                <p className="exchange_name">{props.name}</p>
            </div>
            </div>
        </div>
    );
}