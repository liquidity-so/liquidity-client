import { render } from "@testing-library/react"
import React, { Component } from "react"



export default class ProductCalculator extends Component {
    state = {
        tradeSize: 3000,
        monthlyTrades: 50,
        slippage: 100
    }
    render(){
        return(
            <div className="product-calculator-container">
                <div className="product-calculator">
                    
                </div>
            </div>
        )
    }
}