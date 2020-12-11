
import React, { Component } from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import AccountBilling from './Billing/AccountBilling'
import AccountGeneral from './General/AccountGeneral'
import AccountPassword from './Password/AccountPassword'
import AccountUsage from './Usage/AccountUsage'



class AccountSettings extends Component{
    state = {
        active: 'Account'
    }
    setActive = (tab) => {
        this.setState({
            active: tab
        })
    }
    render() {
    return ( 
    <div class="search-bar-section">
    <div class="div-block-86">
        <div class="settings_side_bar">
        <h1 class="heading-6">Settings</h1>
        <Link to={`${this.props.match.url}`} 
            onClick={() => this.setActive('Account')} 
            class={this.state.active === "Account" ? "active_sidebar_button w-inline-block w--current" :"inactive_sidebar_button w-inline-block" }>
            <div class="text-block-15">Account</div>
        </Link>
        <Link to={`${this.props.match.url}/password`} 
            onClick={() => this.setActive('Password')} 
            class={this.state.active === "Password" ? "active_sidebar_button w-inline-block w--current" :"inactive_sidebar_button w-inline-block" }>
            <div class="text-block-15">Password</div>
        </Link>
        <Link to={`${this.props.match.url}/usage`} 
            onClick={() =>  this.setActive('Usage')} 
            class={this.state.active === "Usage" ? "active_sidebar_button w-inline-block w--current" :"inactive_sidebar_button w-inline-block" }>
            <div class="text-block-15">Usage</div>
        </Link>
        <Link to={`${this.props.match.url}/billing`} 
            onClick={() => this.setActive('Billing')} 
            class={this.state.active === "Billing" ? "active_sidebar_button w-inline-block w--current" :"inactive_sidebar_button w-inline-block" }>
            <div class="text-block-15">Billing</div>
        </Link>
        </div>
        <div class="settings-card parameters">
            <Route exact path={this.props.match.url + "/"} component={AccountGeneral}/>
            <Route exact path={this.props.match.url + "/password"} component={AccountPassword}/>
            <Route exact path={this.props.match.url + "/usage"} component={AccountUsage}/>
            <Route exact path={this.props.match.url + "/billing"} component={AccountBilling}/>
        </div>
    </div>
    </div>
    
    )
}
}

export default withRouter(AccountSettings);