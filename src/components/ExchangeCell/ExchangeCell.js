import React from 'react';
import { Link } from 'react-router-dom';

export default function ExchangeCell(props) {
    return (
        <div class="exchange_cell">
            <Link to={props.exchangeURL} target="_blank" class="exchange_button w-inline-block">
            <div class="exchange_button_interior">
                <img src={props.exchangeImg} loading="lazy" alt={props.name} class="exchange_image"/>
                <p class="exchange_name">{props.name}</p>
            </div>
            </Link>
        </div>
    );
}