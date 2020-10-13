import React, {Component, createRef} from 'react';
import AccordionSearchList from '../AccordionSearchList/AccordionSearchList';
import LiquidityService from '../../services/liquidity.service';
import "./SearchBar.css"

export default class SearchBar extends Component{
  constructor(props) {
    super(props)
    this.state = {
      matchData0: [],
      matchData1: [],
      currentInput0: "",
      currentInput1: "",
      selectedPair0: null,
      selectedPair1: null,
      orderSize: null,
      validQuery: false
    }
    this.pair0 = createRef();;
    this.pair1 = createRef();;
  }
  
  componentDidMount() {
    this.LiquidityApi = new LiquidityService()
  }

  handleUserSearch = async (input, pairIndex) => {
    this.setCurrentInput(input, pairIndex);
    // Set up the appropriate crypto pair
    let target;
    if (pairIndex === 0) {
      target = "matchData0"
    }
    else if (pairIndex === 1){
      target = "matchData1"
    }
    // If input is less than 1, set to empty array
    if (!input.length) {
      this.setMatches([], target)
      this.setCurrentInput("", pairIndex)
      return 
    }
    const matchData = await this.LiquidityApi.findClosestMatches(input);
    this.setMatches(matchData, target)
 
    return
  }

  setMatches = (data, target) => {
    this.setState({
      ...this.state,
      [target]: data
    })
  }
  setCurrentInput = (input, pairIndex) => {
    const currentInput = (pairIndex === 0) ? "currentInput0" : "currentInput1"
    this.setState({
      ...this.state,
      [currentInput]: input
    })
  }
  setSelectedPair = (data, pairIndex) => {
    alert(data)
    const selectedPair = (pairIndex === 0) ? "currentInput0" : (pairIndex === 1) ? "currentInput1" : null
    this.setState({
      ...this.state,
      [selectedPair]: data
    }, () => {
      this.validateInputs()
    })
  }
  setOrderSize = (value) => {
    if (!parseFloat(value)) {
      return
    }
    this.setState({
      ...this.state,
      orderSize: parseFloat(value)
    }, () => {
      this.validateInputs()
    })
 
  }
  validateInputs = () => {
    // Order size must be an int
    // Pairs must be selected
    // Pairs must be valid
    // Pairs must not be the same
    this.setState({
      ...this.state,
      validQuery: true
    })
    console.log(this.state.validQuery)
  }
  render() {
      return (
        <div class="search-bar home">
          <div class="accorion-wrappa">
            <input 
              type="text" 
              name="pair-0" 
              class="search-box-input-field" 
              placeholder="Crypto Pair 1" 
              onChange={(input) => this.handleUserSearch(input.target.value, 0)} 
              ref={this.pair0}
              value={this.state.currentInput0}
            />
            {
              this.state.currentInput0.length && 
              this.pair0.current === document.activeElement ? 
                <AccordionSearchList 
                  matchData={[]} 
                  currentInput={this.state.currentInput0}
                  inputIndex={0}
                  onUserSelect={this.setSelectedPair}
                />  
                : null 
            }
          </div>
          <div class="accorion-wrappa">
            <input 
              type="text" 
              name="pair-1"  
              class="search-box-input-field" 
              placeholder="Crypto Pair 2" 
              onChange={(input) => this.handleUserSearch(input.target.value, 1)} 
              ref={this.pair1}
              value={this.state.currentInput1}
            />
            {
              this.state.currentInput1.length && 
              this.pair1.current === document.activeElement ?  
              <AccordionSearchList 
                matchData={this.state.matchData1} 
                currentInput={this.state.currentInput1}
                inputIndex={1}
                onUserSelect={this.setSelectedPair}
              />  
              : null  
            }
          </div>
          <input 
            type="text" 
            class="search-box-input-field" 
            placeholder="Order Size" 
            name="order-size" 
            onChange={(e) => this.setOrderSize(e.target.value)}
          />
          <div class="div-block-138">
            <button disabled={!!!this.state.validQuery} class="search-box-button w-button">Buy</button>
            <button disabled={!!!this.state.validQuery} class="search-box-button sell w-button">Sell</button>
          </div>
        </div>
      )
  }
}