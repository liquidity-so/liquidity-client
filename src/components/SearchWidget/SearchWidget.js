import React, {Component} from 'react';
import ResultCard from '../ResultCard/ResultCard';
import ResultContainer from '../ResultContainer/ResultContainer';
import LoadingBar from '../LoadingBar/LoadingBar';
import SearchBar from '../SearchBar/SearchBar';
import Skeleton from 'react-loading-skeleton';
import './SearchWidget.css'
import Helpers from  '../../utils/Helpers'
import SineWaveIcon from '../../assets/misc/sineWave-1.png'
import TokenService from '../../services/token.service';


export default class SearchWidget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: null,
            overview: null,
            loading: false,
            loggedIn: false,
            progress: 0,
            status: "",
            error: null
        }
    }
    setResultsData = (results, summary) => {
        if (!results || !summary) {
            this.setState({
                ...this.state,
                progress: 0,
                error: 'Unable to simulate exchange data. Please try a different pair',
                loading: false
            })
        }
        else {
            this.setState({
                ...this.state,
                results: results,
                overview: summary,
                loading: false,
                progress: 0,
            })
        }
    }
    createLoadingEffect = () => {
        this.setState({
            ...this.state,
            loading: true,
            error: null,
            results: null,
            overview: null,
            progress: 0
        })
        Helpers.runAtRandomIntervals(this.setProgressBar)
    }
    setProgressBar = () => {
        let currentState = this.state.progress
        let increment = currentState += (2 + Math.random() * 20)
        // If progress bar is at 95, don't increase until pair data is received
        if (increment >= 90) {
            return
        }
        this.setState({
            ...this.state,
            progress: increment
        })

    }
    setFinishedStatus = async (resultsData) => {
        clearInterval(Helpers.runAtRandomIntervals)
        let results;
        let summary;
        if (resultsData) {
            results = resultsData.results
            summary = resultsData.summary
        }
        this.setState({
            ...this.state,
            progress: 100
        }, () => {
            setTimeout(() => {this.setResultsData(results, summary)}, 500)
        })
    }

    componentDidMount() {
        const authorizedUser = TokenService.getAuthToken();
        const loginStatus = authorizedUser ? true : false;
        this.setState({
            ...this.state,
            loggedIn: loginStatus
        })
    }
    render() {
        return (
            <>
            <div className="search-bar-section">
                <div className="search-results-container sw-wrapper" >
                    <div className="search-box-title-box">
                        <img src={SineWaveIcon} loading="lazy" width="48" alt="" className="sine_wave"/>
                        <div className="find-the-best-price-text">Find the best price</div>
                        <div className="searchresults_subtitle">Simulate your order across 50+ exchanges.</div>
                    </div>
                    <SearchBar 
                        onSearchFinished ={this.setFinishedStatus} 
                        onSearch={this.createLoadingEffect} 
                        homepage = {this.props.homepage ? true: false}
                    />
                    <div className={this.state.loading ? 
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
                    <div className={this.state.loading ? 
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
                                <LoadingBar progress={this.state.progress} status={"Consolidating exchanges..."}/>
                                <Skeleton className="sw-skeleton">
                                </Skeleton> 
                            </>
                            : null
                        }
                    {this.state.error ? 
                    <div className="error-wrapper">
                        <p>{this.state.error}</p>
                    </div> : null }
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