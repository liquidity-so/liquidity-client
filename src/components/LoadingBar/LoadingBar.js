import React from 'react';
import HashLoader from "react-spinners/HashLoader";
import {Line} from 'rc-progress';
import './LoadingBar.css'

// Add status update below progress bar
// Add a circular animation
export default function LoadingBar(props) {
    return(
        <>
            <div className="progress-container">
                <div className="status-container">
                    <div class="loading-indicator">
                        <HashLoader
                            size={17}
                            //width={"100%"}
                            color={"#e6e6e6"}
                        />
                    </div>
                    {props.status}
                </div> 
                <Line 
                    percent={props.progress} 
                />  
            </div>
        </>
    )
}

/*



*/