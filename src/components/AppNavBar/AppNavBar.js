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
        <div class="drop_down_content trial-change">
            <div class="dropdown-container">
            <div class="text-block-20">Hobbyist Plan</div>
            <div class="w-layout-grid grid-21">
                <div class="dropdown-monthly-volume">Monthly volume</div>
                <div class="text-block-22">$25/50k</div>
            </div>
            <img src="../images/Group-255.png" loading="lazy" alt=""/>
            <a href="https://app.tillypay.com/pay/liquidity" class="upgrade_plan_button w-inline-block">
                <div class="upgrade-my-plan-text">Upgrade my plan</div>
            </a>
            <Link to="/dashboard/account" class="dropdown-button w-inline-block">
                <img src={SettingsIcon} loading="lazy" width="14" alt="" class="dropdown-icon"/>
                <div class="text-block-39">Account</div>
            </Link>
            <Link onClick={this.handleUserLogout} to="/" class="dropdown-button w-inline-block">
                <img src={LogOutIcon} loading="lazy" width="14" alt="" class="dropdown-icon"/>
                <div class="text-block-41">Log out</div>
            </Link>
            </div>
        </div>

        return (
            <div class="drop-down-container w-container">
                <div class="logo_logged_in_container">
                    <Link to="/dashboard" aria-current="page" class="logo_logged_in_link w-inline-block w--current">
                        <img src={LiquidityLogo} loading="lazy" width="96" alt="" class="logo_logged_in"/>
                    </Link>
                </div>
                <div data-w-id="6bf5169c-181e-4596-7df5-b445a5f43d44" class="drop_down_wrapper trialchange">
                    <span onMouseEnter={() => this.setIsShown(true)} onMouseLeave = {() => this.setIsShown(false)} >
                    <div class="dropdown_trigger trial-change">
                        <div class="dropdown_hover_area">
                            <img src={this.props.profileImg} loading="lazy" width="40" alt="" class="dropdown-avatar"/>
                        <div class="user-plan_block">
                            <div class="dropdown-username">@cryptodog</div>
                            <div class="dropdown-plan">Hobbyist Plan</div>
                        </div>
                            <img src={ChevronDownIcon} loading="lazy" width="24" alt="" class="dropdown-arrow"/>
                        </div>
                    </div>
                    {this.state.navIsShown ? AppNavCard : null}
                    </span>
                </div>
            </div>
        )
    }
}