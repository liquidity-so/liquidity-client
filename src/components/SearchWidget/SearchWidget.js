import React, {Component} from 'react';
import ResultCard from '../ResultCard/ResultCard';
import ResultContainer from '../ResultContainer/ResultContainer';
import SearchBar from '../SearchBar/SearchBar';

export default class SearchWidget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: null,
            overview: null
        }
    }
   
    setResultsData = (resultsData) => {
        console.log(resultsData)
        // API needs to have a summmary as a subsection of results data
        const results = resultsData.results
        const summary = resultsData.summary
        this.setState({
            ...this.state,
            results: results,
            overview: summary
        })
    }
    render() {
       
        // Check login status. Replace with context
        const loggedIn = true;
        let signUpBanner;

        if (loggedIn) {
            signUpBanner = null
        }
        else {
            signUpBanner =  
            <div class="div-block-122">
                <div class="text-block-81">
                    Sign up to uncover the exchanges, 
                    get the full results, 
                    get link to exchanges and more. Get <strong>50 free searches/month</strong>.
                    <a href="../sign-up.html" class="link-6">Create a free account</a>
                </div>
            </div>    
        }
      
    return (
            <div class="search-bar-section custom">
                <div class="search-results-container">
                    <div class="search-box-title-box test"><img src="../images/sineWave-1.png" loading="lazy" width="48" alt="" class="sine_wave"/>
                        <div class="find-the-best-price-text">Find the best price</div>
                        <div class="searchresults_subtitle">Simulate your order across 50+ exchanges.</div>
                    </div>
                    <SearchBar onSearchFinished ={this.setResultsData} homepage = {this.props.homepage ? true: false}/>
                    <div class="search-results-section">
                    <div class="sidebar-card left hide">
                        <div class="w-layout-grid sidebar-grid">
                            <div class="title">Pair</div>
                            <div class="title data">BAT/BTC</div>
                            <div class="title something-good">Price</div>
                            <div class="title data">$0.1655</div>
                            <div class="title">Change</div>
                            <div class="title price transparent">+5.32</div>
                            <div class="title">Type</div>
                            <div class="title data">Buy</div>
                            <div class="title">Size</div>
                            <div id="w-node-b029be24681b-2dc2b4ba" class="title data">100,000</div>
                            <div class="title">Time</div>
                            <div id="w-node-2ed8036e9013-2dc2b4ba" class="title data">01:33:21</div>
                        </div>
                    </div>
                    <div class="search_results_container">
                        { this.state.results ? 
                            <>
                            <ResultContainer queryResults = {this.state.results}/>
                             {signUpBanner}
                            </>
                            : null
                        }
                    </div>
                        { this.state.overview? 
                            <ResultCard data={this.state.overview}/>
                            : null
                        }
                     
                    </div>
                </div>
            </div>
            
    
            
        )
    }
}