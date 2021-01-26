import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar'
import PLATFORM_IMG from '../../assets/misc/Platform.png';
import PLATFORM_IMG_500 from '../../assets/misc/Platform-p-500.png';
import PLATFORM_IMG_800 from '../../assets/misc/Platform-p-800.png';
import PLATFORM_IMG_1080 from '../../assets/misc/Platform-p-1080.png';
import PLATFORM_IMG_1600 from '../../assets/misc/Platform-p-1600.png';

export default class ProductPage extends Component{

    //TODO: Refactor to functional component with hooks
    componentDidMount() {
      const element = document.querySelector('.calculator');
      const script = document.createElement("script")
      script.src = 'https://app.convertcalculator.co/embed.js'
      script.async = true
      element.appendChild(script)
    }

    render() {
      return (
    <>
    <NavBar/>
    <div className="product-section">
    <div className="container_product_hero w-container">
      <div className="product-hero-container">
        <h2 className="heading_h2">Liquidity for everyone</h2>
        <div className="subtitle hero">One simple tool that helps you scan through 50+ exchanges for the best price.</div>
        <Link to="/signup" className="signup_button w-inline-block">
          <div className="exchange_button_interior">
            <p className="say_hi_text">Get started</p>
          </div>
        </Link>
      </div>
      <img src={PLATFORM_IMG} loading="lazy" sizes="100vw" 
      srcSet={`${PLATFORM_IMG_500} 500w`, `${PLATFORM_IMG_800} 800w`,
      `${PLATFORM_IMG_1080} 1080w`,`${PLATFORM_IMG_1600} 1600w`, `${PLATFORM_IMG} 1864w`}
      alt="" className="product-search-image"></img>
      </div>
  </div>
  <div className="product_dark_section">
    <div className="product_circle-image-container w-container">
      <div className="w-layout-grid product_circle-image_grid">
        <div className="circle_block">
          <h1 className="heading_h1 circle">Ditch misleading data sources</h1>
          <div>
            <div className="bullet_block">
              <div className="bullet"></div>
              <h5 className="heading_h5 bullet_text">No more fake volume</h5>
            </div>
            <div className="bullet_block">
              <div className="bullet"></div>
              <h5 className="heading_h5 bullet_text">No more obscure data</h5>
            </div>
            <div className="bullet_block">
              <div className="bullet"></div>
              <h5 className="heading_h5 bullet_text">No more biased metrics</h5>
            </div>
          </div>
        </div>
        <img src="images/Lil-Box.png" loading="lazy" sizes="100vw" 
        srcSet="images/Lil-Box-p-500.png 500w, images/Lil-Box-p-800.png 800w, images/Lil-Box.png 806w" alt="" className="image-30"></img>
        </div>
    </div>
    <div className="container_calculator customcalc w-container">
      <Link to="/signup" className="link-block w-inline-block">
        <div className="exchange_button_interior">
          <h1 className="heading_h5">Save money</h1>
        </div>
      </Link>
      <div className="w-layout-grid grid-31 custom">
        <div id="w-node-f2daa0ddb9eb-7647ea94" className="div-block-139">
          <p className="paragraph_product loser something custom">Poor execution can lead to <span className="text-span-11">$1000s in unexpected trading costs</span> every month.<br/>
          <span className="text-span-14"><br/>
          </span><span className="text-span-15">Estimate how much</span> you are currently overpaying for liquidity. </p>
        </div>
        <div id="w-node-274447c22b55-7647ea94" className="calculator">
          <div className="html-embed script w-embed w-script">
            <div className="calculator" data-calc-id="43HmsvKsGvjkrsWpz"></div>
   
            </div>
        </div>
      </div>
    </div>
    <div className="container_product w-container">
      <Link to="/signup" target="_blank" className="mini_title yellow w-inline-block">
        <div className="exchange_button_interior">
          <h5 className="heading_h5">Increase profits</h5>
        </div>
      </Link>
      <p className="paragraph_product dark_background">Discover the <span className="text-span-12">most cost effective exchange</span> for your trade and know if your order can be filled. </p>
      <img src="images/Dark_Rectangle.png" loading="lazy" sizes="(max-width: 767px) 80vw, 100vw" 
      srcSet="images/Dark_Rectangle-p-500.png 500w, images/Dark_Rectangle-p-800.png 800w, images/Dark_Rectangle-p-1080.png 1080w, images/Dark_Rectangle.png 1560w" alt="" className="product-image"></img>
      </div>
    <div className="container_product mitigate w-container">
      <Link to="/signup" target="_blank" className="mini_title red w-inline-block">
        <div className="exchange_button_interior">
          <h5 className="heading_h5">Mitigate Risk</h5>
        </div>
      </Link>
      <p className="paragraph_product dark_background">Keep track of your portfolio’s liquidity and <span className="text-span-13">anticipate trading costs.</span> Avoid fat fingering and potential slippage.</p>
      <img src="images/Dark_Rectangle.png" loading="lazy" sizes="(max-width: 767px) 80vw, 100vw" 
      srcSet="images/Dark_Rectangle-p-500.png 500w, images/Dark_Rectangle-p-800.png 800w, images/Dark_Rectangle-p-1080.png 1080w, images/Dark_Rectangle.png 1560w" alt="" className="product-image"></img>
      </div>
  </div>
  <div>
    <div className="video-container customshit w-container">
      <div className="call_to_action">
        <h1 className="heading_h1 call_to_action">Save on your next trade.</h1>
        <Link to="/signup" className="signup_button_dark w-inline-block">
          <div className="exchange_button_interior">
            <p className="demo_text">Get started</p>
          </div>
        </Link>
      </div>
    </div>
  </div>
  <Footer/>
  </>
    )}
}

