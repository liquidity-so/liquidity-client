import React from 'react';
import { Link } from 'react-router-dom';
import LiquidityLogo from '../../assets/logos/Group-204.png';

const generateLinkTemplatefromColumn = (linkObjArr) => {
  return linkObjArr.map(footerLink => {   
      return (
        footerLink.external?  
        <a href={footerLink.link} target="_blank" class="footer_text_link w-inline-block">
          <div class="footer_text_link">{footerLink.title}</div>
        </a> :
        <Link to={footerLink.link} class="footer_text_link w-inline-block">
          <div class="footer_text_link">{footerLink.title}</div>
        </Link>)
    })
}
export default function Footer() {
  const productColumn = [
    {
      title: "Overview",
      link: "/product"
    },
    {
      title: "Exchanges",
      link: "/exchanges"
    },
    {
      title: "Pricing",
      link: "/pricing"
    }
  ]
  const companyColumn = [
    {
      title: "About",
      link: "/about"
    },
    {
      title: "Newsletter",
      link: "https://liquidity.substack.com/",
      external: true
    },
    {
      title: "Twitter",
      link: "https://twitter.com/LiquidityHQ",
      external: true
    }
  ]
  const helpColumn = [
    {
      title: "Book a call",
      link: "/product"
    },
    {
      title: "Discord",
      link: "https://discord.gg/TNQX5ea",
      external: true
    },
    {
      title: "Send us a message",
      link: "/"
    }
  ]



    return (
      <div class="footer-section">
      <div class="footer_content w-container">
        <div class="w-layout-grid grid-3">
          <div class="div-block-50">
            <a href="index.html" aria-current="page" class="w-inline-block w--current">
              <img src={LiquidityLogo} loading="lazy" width="92" alt="" class="logo"/></a>
            <p class="footer_description">Your one stop-shop to find the best prices and ancipate trading costs. </p>
            <p class="footer_description">@ 2020 Liquidity.so</p>
          </div>
          <div class="footer_column">
            <div class="footer_title">Product</div>
            {generateLinkTemplatefromColumn(productColumn)}
          </div>
          <div class="footer_column">
            <div class="footer_title">Company</div>
            {generateLinkTemplatefromColumn(companyColumn)}
          </div>
          <div class="footer_column">
            <div class="footer_title">Help &amp; Contact</div>
            {generateLinkTemplatefromColumn(helpColumn)}
          </div>
          <div class="mobile"><a href="index.html" aria-current="page" class="w-inline-block w--current">
            <img src={LiquidityLogo} loading="lazy" width="92" alt="" class="logo"/></a>
            <p class="footer_description">Your one stop-shop to find the best prices and ancipate trading costs. </p>
            <p class="footer_description">@ 2020 Liquidity.so</p>
          </div>
        </div>
      </div>
    </div>
    )
}