import React from 'react';
import { Link } from 'react-router-dom';
import LiquidityLogo from '../../assets/logos/Group-204.png';

const generateLinkTemplatefromColumn = (linkObjArr) => {
  return linkObjArr.map(footerLink => {   
      return (
        footerLink.external?  
        <a href={footerLink.link} target="_blank" className="footer_text_link w-inline-block" key={footerLink.title}>
          <div className="footer_text_link">{footerLink.title}</div>
        </a> :
        <Link to={footerLink.link} className="footer_text_link w-inline-block" key={footerLink.title}>
          <div className="footer_text_link">{footerLink.title}</div>
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
    /* UNUSED FOR BETA VERSION
    {
      title: "Pricing",
      link: "/pricing"
    }
    */
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
      link: "mailto: alfonso@liquidity.so",
      external: true
    }
  ]



    return (
      <div className="footer-section">
      <div className="footer_content w-container">
        <div className="w-layout-grid grid-3">
          <div className="div-block-50">
            <Link to="/" aria-current="page" className="w-inline-block w--current">
              <img src={LiquidityLogo} loading="lazy" width="92" alt="" className="logo"/></Link>
            <p className="footer_description">Your one stop-shop to find the best prices and ancipate trading costs. </p>
            <p className="footer_description">@ 2020 Liquidity.so</p>
          </div>
          <div className="footer_column">
            <div className="footer_title">Product</div>
            {generateLinkTemplatefromColumn(productColumn)}
          </div>
          <div className="footer_column">
            <div className="footer_title">Company</div>
            {generateLinkTemplatefromColumn(companyColumn)}
          </div>
          <div className="footer_column">
            <div className="footer_title">Help &amp; Contact</div>
            {generateLinkTemplatefromColumn(helpColumn)}
          </div>
          <div className="mobile"><a href="index.html" aria-current="page" className="w-inline-block w--current">
            <img src={LiquidityLogo} loading="lazy" width="92" alt="" className="logo"/></a>
            <p className="footer_description">Your one stop-shop to find the best prices and ancipate trading costs. </p>
            <p className="footer_description">@ 2020 Liquidity.so</p>
          </div>
        </div>
      </div>
    </div>
    )
}