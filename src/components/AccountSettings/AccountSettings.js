
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
    <div className="search-bar-section">
    <div className="div-block-86">
        <div className="settings_side_bar">
        <h1 className="heading-6">Settings</h1>
        <Link to={`${this.props.match.url}`} 
            onClick={() => this.setActive('Account')} 
            className={this.state.active === "Account" ? "active_sidebar_button w-inline-block w--current" :"inactive_sidebar_button w-inline-block" }>
            <div className="text-block-15">Account</div>
        </Link>
        <Link to={`${this.props.match.url}/password`} 
            onClick={() => this.setActive('Password')} 
            className={this.state.active === "Password" ? "active_sidebar_button w-inline-block w--current" :"inactive_sidebar_button w-inline-block" }>
            <div className="text-block-15">Password</div>
        </Link>
        <Link to={`${this.props.match.url}/usage`} 
            onClick={() =>  this.setActive('Usage')} 
            className={this.state.active === "Usage" ? "active_sidebar_button w-inline-block w--current" :"inactive_sidebar_button w-inline-block" }>
            <div className="text-block-15">Usage</div>
        </Link>
        <Link to={`${this.props.match.url}/billing`} 
            onClick={() => this.setActive('Billing')} 
            className={this.state.active === "Billing" ? "active_sidebar_button w-inline-block w--current" :"inactive_sidebar_button w-inline-block" }>
            <div className="text-block-15">Billing</div>
        </Link>
        </div>
        <div className="settings-card parameters">
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