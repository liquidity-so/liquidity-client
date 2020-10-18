import React, {Component} from 'react'
import SearchBar from '../SearchBar/SearchBar';

export default class Dashboard extends Component {
    render() {
        return(
            <>
              <div class="search-bar-section main">
                <div class="search-box-title-box">
                    <img src="../images/sineWave-1.png" loading="lazy" width="48" alt="" class="sine-wave"/>
                    <div class="find-the-best-price-text">Find the best price</div>
                    <div class="searchresults_subtitle">Simulate your order across 50+ exchanges.</div>
                </div>
                <SearchBar/>
              </div>
            </>
        )
    }
}
