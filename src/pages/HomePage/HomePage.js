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

export default function HomePage() {
    return(
    <>
    <NavBar/>
    <div class="home_section">
        <div class="container_home w-container">
            <SearchWidget homepage={true}/>
        </div>
        <div class="home_exchange_block">
        <h5 class="heading_h5 center">Supported Exchanges</h5>
        <div class="home_supported_exchanges">
            <a href="http://binance.com" target="_blank" class="exchanges-supported w-inline-block">
                <img src={BINANCE_ALT} loading="lazy" width="100" alt="" class="binance_home"/>
            </a>
            <a href="http://huobi.com" target="_blank" class="exchanges-supported w-inline-block">
                <img src={HUOBI_ALT} loading="lazy" width="100" alt="" class="huobi_home"/>
            </a>
            <a href="http://ftx.com" target="_blank" class="exchanges-supported hide w-inline-block">
                <img src={FTX_ALT}  loading="lazy" width="100" alt="" class="ftx_home"/>
            </a>
            <a href="http://kraken.com" target="_blank" class="exchanges-supported w-inline-block">
                <img src={KRAKEN_ALT} loading="lazy" width="100" alt="" class="kraken_home"/>
            </a>
            <a href="http://hitbtc.com" target="_blank" class="exchanges-supported w-inline-block">
                <img src={HITBTC_ALT}  loading="lazy" width="100" alt="" class="hitbtc_home"/>
            </a>
        </div>
            <a href="exchanges.html" class="see-more-exchanges-link">See more</a>
        </div>
    </div>  
    <PromoCardHorizontalRight/>
    <PromoCardHorizontalLeft/>
    <PromoCardHorizontalRight/>
    <div class="video-section">
        <div class="video-container w-container">
        <h1 class="heading_h1 call_to_action">How it works</h1>
        <div class="video_block">
            <div class="video w-video w-embed">
                <iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FdQw4w9WgXcQ%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FdQw4w9WgXcQ%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube" width="940" height="528" scrolling="no" title="YouTube embed" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true"></iframe></div>
        </div>
        </div>
    </div>
    <div>
        <div class="video-container customshit w-container">
        <div class="call_to_action">
            <h1 class="heading_h1 call_to_action">Save on your next trade.</h1>
            <a href="sign-up.html" class="signup_button_dark w-inline-block">
            <div class="exchange_button_interior">
                <p class="demo_text">Get started</p>
            </div>
            </a>
        </div>
        </div>
    </div>
    <Footer></Footer>
    </>
    )
}