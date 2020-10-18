import React, {Component} from 'react';
import ResultCard from '../ResultCard/ResultCard';
import ResultContainer from '../ResultContainer/ResultContainer';
import SearchBar from '../SearchBar/SearchBar';

export default class SearchWidget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: null,
            overview: null,
            loggedIn: false
        }
    }
   
    setResultsData = (resultsData) => {
        console.log(resultsData)
        const results = resultsData.results
        const summary = resultsData.summary
        this.setState({
            ...this.state,
            results: results,
            overview: summary
        })
    }
    render() {
        // TODO Check login status. Replace with context


       
    return (
            <div class="search-bar-section">
                <div class="search-results-container">
                    <div class="search-box-title-box test"><img src="../images/sineWave-1.png" loading="lazy" width="48" alt="" class="sine_wave"/>
                        <div class="find-the-best-price-text">Find the best price</div>
                        <div class="searchresults_subtitle">Simulate your order across 50+ exchanges.</div>
                    </div>
                    <SearchBar onSearchFinished ={this.setResultsData} homepage = {this.props.homepage ? true: false}/>
                    <div class="search-results-section">
               
                        { this.state.results ? 
                            <>
                            <ResultContainer queryResults = {this.state.results} loggedIn={this.state.loggedIn}/>
                            </>
                            : null
                        }
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