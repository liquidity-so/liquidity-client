import { render } from '@testing-library/react';
import React from 'react';

export default function NavBar() {
    return (
        <div data-collapse="small" data-animation="default" data-duration="0" role="banner" class="navbar w-nav">
        <div class="nav-bar-container w-container">
      <a href="index.html" aria-current="page" class="customstay w-nav-brand w--current">
        <div class="div-block-33 customstay">
            <img src="images/Group-202.png" loading="lazy" width="96" alt="" class="image customstay"/></div>
      </a><a href="index.html" aria-current="page" class="nav-bar-logo-block w-inline-block w--current">
          <img src="images/Group-202.png" loading="lazy" width="96" alt="" class="nav-bar-logo"/></a>
      <nav role="navigation" class="nav-menu w-nav-menu">
        <div class="nav-bar-links-container"><a href="product1.html" class="the-nav-link w-nav-link">Product</a><a href="pricing.html" class="the-nav-link w-nav-link">Pricing</a>
          <div class="nav_bar_separator"></div><a href="log-in.html" class="the-nav-link log-in w-nav-link">Log in</a><a href="sign-up.html" class="the-nav-link sign-up w-nav-link">Sign up</a></div>
      </nav>
      <div class="menu-button w-nav-button">
        <div class="w-icon-nav-menu"></div>
      </div>
    </div>
  </div>
    )
}