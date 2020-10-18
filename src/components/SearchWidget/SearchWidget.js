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
    return (
            <div class="search-bar-section custom">
                <div class="search-results-container">
                    <SearchBar onSearchFinished ={this.setResultsData} />
                    <div class="search-results-section">
                        { this.state.results ? 
                            <ResultContainer queryResults = {this.state.results}/>
                            : null
                        }
                        { this.state.overview? 
                            <ResultCard data={this.state.overview}/>
                            : null
                        }
                        {
                            (loggedIn) ? null :
                            <div class="div-block-122">
                                <div class="text-block-81">
                                    Sign up to uncover the exchanges, 
                                    get the full results, 
                                    get link to exchanges and more. Get <strong>50 free searches/month</strong>.
                                    <a href="../sign-up.html" class="link-6">Create a free account</a>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}