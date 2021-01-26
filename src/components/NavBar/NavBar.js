import React from 'react';
import {Link} from 'react-router-dom';
import LiquidityLogo from '../../assets/logos/LiquidityLogo.png'
import './NavBar.css'


export default function NavBar() {
    return (
        <div data-collapse="small" data-animation="default" data-duration="0" role="banner" className="navbar w-nav">
        <div className="nav-bar-container w-container">
      <Link to="/" className="customstay w-nav-brand w--current">
        <div className="div-block-33 customstay">
            <img src={LiquidityLogo} width="96" alt="" className="image customstay"/>
        </div>
      </Link>
      <Link to="/" className="nav-bar-logo-block w-inline-block w--current">
          <img src={LiquidityLogo}  width="96" alt="" className="nav-bar-logo"/>
      </Link>
      <nav role="navigation" className="nav-menu w-nav-menu">
        <div className="nav-bar-links-container">
      <Link to="/product" className="the-nav-link w-nav-link">
          Product
      </Link>
      <Link to="/pricing" className="the-nav-link w-nav-link">
          Pricing
      </Link>
          <div className="nav_bar_separator"></div>
        <Link to="/login" className="the-nav-link log-in w-nav-link">Log in</Link>
        <Link to="/signup" className="the-nav-link sign-up w-nav-link">Sign up</Link></div>
      </nav>
      <div className="menu-button w-nav-button">
        <div className="w-icon-nav-menu"></div>
      </div>
    </div>
  </div>
    )
}