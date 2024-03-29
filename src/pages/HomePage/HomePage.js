import React from 'react';
import SearchWidget from '../../components/SearchWidget/SearchWidget'

import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar'
import './HomePage.css'
import PromoCardHorizontalRight from '../../components/common/Cards/PromoCardHorizontal/PromoCardHorizontalRight';
import PromoCardHorizontalLeft from '../../components/common/Cards/PromoCardHorizontal/PromoCardHorizontalLeft';

import {
    BINANCE_ALT,
    HUOBI_ALT,
    FTX_ALT,
    KRAKEN_ALT,
    HITBTC_ALT
} from '../../assets/logos/exchanges';
import {
    SPLASH_SAVE_BEFORE_IMG,
    SPLASH_SAVE_BEFORE_IMG_500,
    SPLASH_SAVE_BEFORE_IMG_800,
    SPLASH_SAVE_BEFORE_IMG_1080,
    SPLASH_DETAILS_IMG,
    SPLASH_DETAILS_IMG_500,
    SPLASH_DETAILS_IMG_800,
    SPLASH_CUT_COSTS_IMG,
    SPLASH_CUT_COSTS_IMG_500,
    SPLASH_CUT_COSTS_IMG_800,
    SPLASH_CUT_COSTS_IMG_1080
} from '../../assets/splash';
import { Link } from 'react-router-dom';

export default function HomePage() {

    const splashCards =  [
        {
            imgSrc: SPLASH_SAVE_BEFORE_IMG,
            imgSmall: SPLASH_SAVE_BEFORE_IMG_500,
            imgMid: SPLASH_SAVE_BEFORE_IMG_800,
            imgLarge: SPLASH_SAVE_BEFORE_IMG_1080,
            imgLargest: SPLASH_SAVE_BEFORE_IMG,
            heading: "Save before trading.",
            subheading: "WHY LIQUIDITY?",
            caption: "Anticipate trading costs. Consistently buy or sell at the best price and never overpay for liquidity again."
        },
        {
            imgSrc: SPLASH_DETAILS_IMG,
            imgSmall: SPLASH_DETAILS_IMG_500,
            imgMid: SPLASH_DETAILS_IMG_800,
            imgLarge: SPLASH_DETAILS_IMG_800,
            imgLargest: SPLASH_DETAILS_IMG,
            heading: "Details, details.",
            subheading: "WHY LIQUIDITY?",
            caption: "Liquidity gives you a snapshot of your expected weighted average price (WAP), slippage costs, and total order size."
        },
        {
            imgSrc: SPLASH_CUT_COSTS_IMG,
            imgSmall: SPLASH_CUT_COSTS_IMG_500,
            imgMid: SPLASH_CUT_COSTS_IMG_800,
            imgLarge: SPLASH_CUT_COSTS_IMG_1080,
            imgLargest: SPLASH_CUT_COSTS_IMG,
            heading: "Cut search costs.",
            subheading: "WHY LIQUIDITY?",
            caption: "With 100s of exchanges, it is difficult to find where liquidity is highest. Simulate your order and cut search costs dramatically."
        },
    ]




    return(
    <>
    <NavBar/>
    <div className="home_section">
        <div className="container_home w-container">
            <SearchWidget homepage={true}/>
        </div>
        <div className="home_exchange_block">
        <h5 className="heading_h5 center">Supported Exchanges</h5>
        <div className="home_supported_exchanges">
            <a href="http://binance.com" target="_blank" className="exchanges-supported w-inline-block">
                <img src={BINANCE_ALT} loading="lazy" width="100" alt="" className="binance_home"/>
            </a>
            <a href="http://huobi.com" target="_blank" className="exchanges-supported w-inline-block">
                <img src={HUOBI_ALT} loading="lazy" width="100" alt="" className="huobi_home"/>
            </a>
            <a href="http://ftx.com" target="_blank" className="exchanges-supported hide w-inline-block">
                <img src={FTX_ALT}  loading="lazy" width="100" alt="" className="ftx_home"/>
            </a>
            <a href="http://kraken.com" target="_blank" className="exchanges-supported w-inline-block">
                <img src={KRAKEN_ALT} loading="lazy" width="100" alt="" className="kraken_home"/>
            </a>
            <a href="http://hitbtc.com" target="_blank" className="exchanges-supported w-inline-block">
                <img src={HITBTC_ALT}  loading="lazy" width="100" alt="" className="hitbtc_home"/>
            </a>
        </div>
            <Link to="/exchanges" className="see-more-exchanges-link">See more</Link>
        </div>
    </div>  
    <PromoCardHorizontalRight data={splashCards[0]}/>
    <PromoCardHorizontalLeft data={splashCards[1]}/>
    <PromoCardHorizontalRight data={splashCards[2]}/>
    <div className="video-section">
        <div className="video-container w-container">
        <h1 className="heading_h1 call_to_action">How it works</h1>
        <div className="video_block">
            <div className="video w-video w-embed">
                <iframe 
                title="liquidity-how-it-works" 
                className="embedly-embed" width="940" height="528" src="https://www.youtube.com/embed/GRTXBk9p9q8" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
            </div>
        </div>
        </div>
    </div>
    <div>
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
    <Footer></Footer>
    </>
    )
}