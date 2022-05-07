import React, { Component } from 'react';
import LiquidityLogo from '../../assets/logos/LiquidityLogo.png'
import SettingsIcon from '../../assets/icons/settings.png';
import LogOutIcon from '../../assets/icons/log-out.png';
import ChevronDownIcon from '../../assets/icons/chevron-down.png';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token.service';


export default class AppNavBar extends Component {
    state = {
        navIsShown: false
    }
    setIsShown = (isShown) => {
        this.setState({
            ...this.state,
            navIsShown: isShown
        })
    }
    handleUserLogout = () => {
        TokenService.clearAuthToken();
    }
    render(){
        const AppNavCard =       
        <div className="drop_down_content trial-change">
            <div className="dropdown-container">
            <div className="text-block-20">Hobbyist Plan</div>
            <div className="w-layout-grid grid-21">
                <div className="dropdown-monthly-volume">Monthly volume</div>
                <div className="text-block-22">$25/50k</div>
            </div>
            <img src="../images/Group-255.png" loading="lazy" alt=""/>
            <a href="https://app.tillypay.com/pay/liquidity" className="upgrade_plan_button w-inline-block">
                <div className="upgrade-my-plan-text">Upgrade my plan</div>
            </a>
            <Link to="/dashboard/account" className="dropdown-button w-inline-block">
                <img src={SettingsIcon} loading="lazy" width="14" alt="" className="dropdown-icon"/>
                <div className="text-block-39">Account</div>
            </Link>
            <Link onClick={this.handleUserLogout} to="/" className="dropdown-button w-inline-block">
                <img src={LogOutIcon} loading="lazy" width="14" alt="" className="dropdown-icon"/>
                <div className="text-block-41">Log out</div>
            </Link>
            </div>
        </div>

        return (
            <div className="drop-down-container w-container">
                <div className="logo_logged_in_container">
                    <Link to="/dashboard" aria-current="page" className="logo_logged_in_link w-inline-block w--current">
                        <img src={LiquidityLogo} loading="lazy" width="96" alt="" className="logo_logged_in"/>
                    </Link>
                </div>
                <div data-w-id="6bf5169c-181e-4596-7df5-b445a5f43d44" className="drop_down_wrapper trialchange">
                    <span onMouseEnter={() => this.setIsShown(true)} onMouseLeave = {() => this.setIsShown(false)} >
                    <div className="dropdown_trigger trial-change">
                        <div className="dropdown_hover_area">
                            <img src={this.props.profileImg} loading="lazy" width="40" alt="" className="dropdown-avatar"/>
                        <div className="user-plan_block">
                            <div className="dropdown-username">@cryptodog</div>
                            <div className="dropdown-plan">Hobbyist Plan</div>
                        </div>
                            <img src={ChevronDownIcon} loading="lazy" width="24" alt="" className="dropdown-arrow"/>
                        </div>
                    </div>
                    {this.state.navIsShown ? AppNavCard : null}
                    </span>
                </div>
            </div>
        )
    }
}