import React from 'react';
import { Link } from 'react-router-dom';
import ExchangeCell from '../../components/ExchangeCell/ExchangeCell';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import BLACKBOX_IMG from '../../assets/misc/BlackBox.png';

//Exchange images
import ExchangeList from './_ExchangeList';


export default function ExchangePage() {
    const exchangeList = ExchangeList;
    const exchangesGridTemplate = exchangeList.map(exchange => {
        return <ExchangeCell exchangeImg={exchange.img} name={exchange.name}/>
    });
    return (
        <>
        <NavBar/>       
        <div>
            <div class="exchanges_container w-container">
                <div class="product-hero-container">
                    <img src={BLACKBOX_IMG} loading="lazy" width="138" height="64" alt="" class="exchange-image"/>
                    <h2 class="heading_h2">Exchanges</h2>
                    <div class="subtitle hero">Over 50+ exchanges supported.</div>
                    <Link to="/signup" class="signup_button w-inline-block">
                    <div class="exchange_button_interior">
                        <p class="say_hi_text">Get started</p>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
        <div class="container_grid w-container">
            <div class="w-layout-grid grid-18">
                {exchangesGridTemplate}
            </div>
        </div>
        <div class="section-14">
            <div class="video-container customshit w-container">
                <div class="call_to_action">
                    <h1 class="heading_h1 call_to_action">Save on your next trade.</h1>
                    <Link to="/signup" class="signup_button_dark w-inline-block">
                    <div class="exchange_button_interior">
                        <p class="demo_text">Get started</p>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
