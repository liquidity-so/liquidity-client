import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <div data-collapse="small" data-animation="default" data-duration="0" role="banner" class="navbar w-nav">
        <div class="nav-bar-container w-container">
      <Link to="/" class="customstay w-nav-brand w--current">
        <div class="div-block-33 customstay">
            <img src="images/Group-202.png" loading="lazy" width="96" alt="" class="image customstay"/></div>
      </Link>
      <Link to="/" class="nav-bar-logo-block w-inline-block w--current">
          <img src="images/Group-202.png" loading="lazy" width="96" alt="" class="nav-bar-logo"/>
      </Link>
      <nav role="navigation" class="nav-menu w-nav-menu">
        <div class="nav-bar-links-container">
      <Link to="/product" class="the-nav-link w-nav-link">
          Product
      </Link>
      <Link to="/pricing" class="the-nav-link w-nav-link">
          Pricing
      </Link>
          <div class="nav_bar_separator"></div>
        <Link to="/login" class="the-nav-link log-in w-nav-link">Log in</Link>
        <Link to="/signup" class="the-nav-link sign-up w-nav-link">Sign up</Link></div>
      </nav>
      <div class="menu-button w-nav-button">
        <div class="w-icon-nav-menu"></div>
      </div>
    </div>
  </div>
    )
}