import React, {Component} from 'react';
import ResultCard from '../ResultCard/ResultCard';
import ResultContainer from '../ResultContainer/ResultContainer';
import LoadingBar from '../LoadingBar/LoadingBar';
import SearchBar from '../SearchBar/SearchBar';
import Skeleton from 'react-loading-skeleton';
import './SearchWidget.css'


export default class SearchWidget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: null,
            overview: null,
            loading: true,
            loggedIn: false,
            progress: 0,
            status: "",
        }
    }
    setResultsData = (resultsData) => {
        console.log(resultsData)
        const results = resultsData.results
        const summary = resultsData.summary
        // Set finished status first, then show results
        this.setState({
            ...this.state,
            results: results,
            overview: summary,
            loading: false
        })
    }
    createLoadingEffect = () => {
        // random number increment
        // will never reach 100
    }
    setFinishedStatus = () => {
        // activate after results are ready, right before setting results data.
        // add a slight delay
    }

    componentDidMount() {
        // TODO: Check login status. Replace with context
    }
    render() {
        // TODO: REFACTOR LOADING TEMPLATE TO A DIFFERENT COMPONENT
        return (
            <>
            <div class="search-bar-section">
                <div class="search-results-container sw-wrapper" >
                    <div class="search-box-title-box"><img src="../images/sineWave-1.png" loading="lazy" width="48" alt="" class="sine_wave"/>
                        <div class="find-the-best-price-text">Find the best price</div>
                        <div class="searchresults_subtitle">Simulate your order across 50+ exchanges.</div>
                    </div>
                    <SearchBar onSearchFinished ={this.setResultsData} homepage = {this.props.homepage ? true: false}/>
                    <div class={this.state.loading ? 
                     "search-results-section sresults-section loading-wrapper"
                    :"search-results-section sresults-section"}>
                    { this.state.overview? 
                        // This component uses a webflow grid
                        // This duplicated card is necessary to preserve the layout when the summary card is rendered
                        <ResultCard 
                            data={this.state.overview}
                            hidden={true}/>
                        : null
                    } 
                    <div class={this.state.loading ? 
                        "search_results_container sw-container loading-wrapper"
                        : "search_results_container sw-container"}>
                        { this.state.results ? 
                                <ResultContainer 
                                queryResults = {this.state.results} 
                                loggedIn={this.state.loggedIn} 
                                />
                            :  
                            this.state.loading ? 
                            <>
                            <LoadingBar progress={25} status={"Consolidating exchanges..."}/>
                            <Skeleton className="sw-skeleton">
                            </Skeleton> 
                            </>
                            : null
                        }
                
                    </div>
                    { this.state.overview? 
                        <ResultCard data={this.state.overview} />
                        : null
                    } 
                    </div>
                </div>
            </div>

       

                </>
        )
    }
}