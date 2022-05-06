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
    const exchangesGridTemplate = exchangeList.map((exchange, i) => {
        return <ExchangeCell exchangeImg={exchange.img} name={exchange.name} key={i}/>
    });
    return (
        <>
        <NavBar/>       
        <div>
            <div className="exchanges_container w-container">
                <div className="product-hero-container">
                    <h2 className="heading_h2">Exchanges</h2>
                    <div className="subtitle hero">Over 50+ exchanges supported.</div>
                    <Link to="/signup" className="signup_button w-inline-block">
                    <div className="exchange_button_interior">
                        <p className="say_hi_text">Get started</p>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
        <div className="container_grid w-container">
            <div className="w-layout-grid grid-18">
                {exchangesGridTemplate}
            </div>
        </div>
        <div className="section-14">
            <div className="video-container customshit w-container">
                <div className="call_to_action">
                    <h1 className="heading_h1 call_to_action">Save on your next trade.</h1>
                    <Link to="/signup" className="signup_button_dark w-inline-block">
                    <div className="exchange_button_interior">
                        <p className="demo_text">Get started</p>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
