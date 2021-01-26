import React from 'react';
import { Link } from 'react-router-dom';
import ResultContainerItem from '../ResultContainerItem/ResultContainerItem';
import './ResultContainer.css';

export default function ResultContainer(props) {
    const results = props.queryResults.map((result, i) => {
        return (
            <ResultContainerItem 
                key={i}
                url={result.url} 
                exImg={result.img} 
                exName={result.name}
                pi={result.pi}
                cost={result.cost}
                wap={result.wap}
                total={result.total}
            />
        )
    })
    const loggedIn = props.loggedIn ? true: false;
    let signUpBanner;

    if (loggedIn) {
        signUpBanner = null
    }
    else {
        signUpBanner =  
        <div className="div-block-122">
            <div className="text-block-81">
                Sign up to uncover the exchanges, 
                get the full results, 
                get link to exchanges and more. Get <strong>50 free searches/month</strong>.
                <Link to="/signup" className="link-6">Create a free account</Link>
            </div>
        </div>    
    }
    return (
        <>
            <div className="div-block-112 title">
              <div className="w-layout-grid search-results_row title">
                <div className="div-block-109">
                  <div className="results_title">Exchange</div>
                </div>
                <div className="div-block-110 hide-on-mobile">
                  <div className="results_title">PI</div>
                </div>
                <div id="w-node-6a07e2478c00-2dc2b4ba" className="div-block-110">
                  <div className="results_title hide-on-mobile">Cost</div>
                </div>
                <div id="w-node-8921f85c498e-2dc2b4ba" className="div-block-110">
                  <div className="results_title">WAP</div>
                </div>
                <div className="div-block-110 left">
                  <div className="results_title">Total</div>
                </div>
              </div>
            </div>
          {results}
          {signUpBanner}
        </>
    )
}