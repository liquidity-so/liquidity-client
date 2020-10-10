import React, {Component} from 'react';
import AccordionSearchList from '../AccordionSearchList/AccordionSearchList';
import LiquidityService from '../../services/liquidity.service';

export default class SearchBar extends Component{
  constructor(props) {
    super(props)
    this.state = {
      pairData0: [],
      pairData1: [],
      orderSize: null,
    }
  }
  
  componentDidMount() {
    this.LiquidityApi = new LiquidityService()
  }

  findMatches = async (input, pairIndex) => {
    console.log(input)
    // Set up the appropriate crypto pair
    let target;
    if (pairIndex === 0) {
      target = "pairData0"
    }
    else if (pairIndex === 1){
      target = "pairData1"
    }
    // If input is less than 1, set to empty array
    if (!input.length) {
      this.setMatches(null, target)
      return 
    }
    const matchData = await this.LiquidityApi.findClosestMatches(input);
    this.setMatches(matchData, target)
 
    return
    // then
    // set matches to pair index
    // pass to props
  }

  setMatches = (data, target) => {
    this.setState({
      ...this.state,
      [target]: data
    })
  }

  changeOrderSize = (value) => {
    if (!parseFloat(value)) {
      // Add an error handler here
      return
    }

    this.setState({
      ...this.state,
      orderSize: parseFloat(value)
    })
  }

  render() {
    console.log(this.state)
      return (
        <div class="search-bar home">
          <div class="accorion-wrappa">
            <input type="text" name="pair-0" class="search-box-input-field" placeholder="Crypto Pair 1" onChange={(input) => this.findMatches(input.target.value, 0)}/>
            {this.state.pairData0 && this.state.pairData0.length ? <AccordionSearchList matchData={this.state.pairData0}/>  : null }
          </div>
          <div class="accorion-wrappa">
            <input type="text" name="pair-1"  class="search-box-input-field" placeholder="Crypto Pair 2" onChange={(input) => this.findMatches(input.target.value, 1)}/>
            {this.state.pairData1 && this.state.pairData1.length ?  <AccordionSearchList matchData={this.state.pairData1}/>  : null  }
          </div>
          <input type="text" class="search-box-input-field" placeholder="Order Size" name="order-size" onChange={(e) => this.changeOrderSize(e.target.value)}/>
          <div class="div-block-138"><a href="searchs/no-login.html" class="search-box-button w-button">Buy</a>
          <a href="searchs/no-login.html" class="search-box-button sell w-button">Sell</a></div>
        </div>
      )
  }
}