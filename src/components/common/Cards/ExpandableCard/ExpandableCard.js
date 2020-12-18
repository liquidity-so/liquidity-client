import React, {Component} from 'react';
import SlideDown from 'react-slidedown';
import ChevronDownIcon from '../../../../assets/icons/chevron-down.png';
import "./ExpandableCard.css";
import 'react-slidedown/lib/slidedown.css'

export default class ExpandableCard extends Component {
  state = {
    activated: false
  }
  handleToggleCard = () => {
    this.setState({
      activated: !this.state.activated
    })
  }
  render(){
      return (
        <div class="faq-question-box">
        <div class="faq-question-trigger" onClick={this.handleToggleCard}>
          <div class="faq-question">{this.props.heading}</div>
          <img src={ChevronDownIcon} loading="lazy" width="24" height="24" alt="" class="image-32"/></div>
          <SlideDown>
          {this.state.activated ? <div class="faq-question-content expandable">
          <p class="faq-answer">{this.props.subheading}</p>
          </div> : null }
        </SlideDown>
      </div>
    )
  } 
}