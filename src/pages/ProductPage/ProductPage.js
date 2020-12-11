import React, {Component} from 'react'
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar'

export default class ProductPage extends Component{

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
    <div class="product-section">
    <div class="container_product_hero w-container">
      <div class="product-hero-container">
        <h2 class="heading_h2">Liquidity for everyone</h2>
        <div class="subtitle hero">One simple tool that helps you scan through 50+ exchanges for the best price.</div>
        <a href="sign-up.html" class="signup_button w-inline-block">
          <div class="exchange_button_interior">
            <p class="say_hi_text">Get started</p>
          </div>
        </a>
      </div>
      <img src="images/Platform.png" loading="lazy" sizes="100vw" 
      srcset="images/Platform-p-500.png 500w, images/Platform-p-800.png 800w, images/Platform-p-1080.png 1080w, images/Platform-p-1600.png 1600w, images/Platform.png 1864w" 
      alt="" class="product-search-image"></img>
      </div>
  </div>
  <div class="product_dark_section">
    <div class="product_circle-image-container w-container">
      <div class="w-layout-grid product_circle-image_grid">
        <div class="circle_block">
          <h1 class="heading_h1 circle">Ditch misleading data sources</h1>
          <div>
            <div class="bullet_block">
              <div class="bullet"></div>
              <h5 class="heading_h5 bullet_text">No more fake volume</h5>
            </div>
            <div class="bullet_block">
              <div class="bullet"></div>
              <h5 class="heading_h5 bullet_text">No more obscure data</h5>
            </div>
            <div class="bullet_block">
              <div class="bullet"></div>
              <h5 class="heading_h5 bullet_text">No more biased metrics</h5>
            </div>
          </div>
        </div>
        <img src="images/Lil-Box.png" loading="lazy" sizes="100vw" 
        srcset="images/Lil-Box-p-500.png 500w, images/Lil-Box-p-800.png 800w, images/Lil-Box.png 806w" alt="" class="image-30"></img>
        </div>
    </div>
    <div class="container_calculator customcalc w-container">
      <a href="#" class="link-block w-inline-block">
        <div class="exchange_button_interior">
          <h1 class="heading_h5">Save money</h1>
        </div>
      </a>
      <div class="w-layout-grid grid-31 custom">
        <div id="w-node-f2daa0ddb9eb-7647ea94" class="div-block-139">
          <p class="paragraph_product loser something custom">Poor execution can lead to <span class="text-span-11">$1000s in unexpected trading costs</span> every month.<br/>
          <span class="text-span-14"><br/>
          </span><span class="text-span-15">Estimate how much</span> you are currently overpaying for liquidity. </p>
        </div>
        <div id="w-node-274447c22b55-7647ea94" class="calculator">
          <div class="html-embed script w-embed w-script">
            <div class="calculator" data-calc-id="43HmsvKsGvjkrsWpz"></div>
   
            </div>
        </div>
      </div>
    </div>
    <div class="container_product w-container">
      <a href="#" target="_blank" class="mini_title yellow w-inline-block">
        <div class="exchange_button_interior">
          <h5 class="heading_h5">Increase profits</h5>
        </div>
      </a>
      <p class="paragraph_product dark_background">Discover the <span class="text-span-12">most cost effective exchange</span> for your trade and know if your order can be filled. </p>
      <img src="images/Dark_Rectangle.png" loading="lazy" sizes="(max-width: 767px) 80vw, 100vw" 
      srcset="images/Dark_Rectangle-p-500.png 500w, images/Dark_Rectangle-p-800.png 800w, images/Dark_Rectangle-p-1080.png 1080w, images/Dark_Rectangle.png 1560w" alt="" class="product-image"></img>
      </div>
    <div class="container_product mitigate w-container">
      <a href="#" target="_blank" class="mini_title red w-inline-block">
        <div class="exchange_button_interior">
          <h5 class="heading_h5">Mitigate Risk</h5>
        </div>
      </a>
      <p class="paragraph_product dark_background">Keep track of your portfolio’s liquidity and <span class="text-span-13">anticipate trading costs.</span> Avoid fat fingering and potential slippage.</p>
      <img src="images/Dark_Rectangle.png" loading="lazy" sizes="(max-width: 767px) 80vw, 100vw" 
      srcset="images/Dark_Rectangle-p-500.png 500w, images/Dark_Rectangle-p-800.png 800w, images/Dark_Rectangle-p-1080.png 1080w, images/Dark_Rectangle.png 1560w" alt="" class="product-image"></img>
      </div>
  </div>
  <div>
    <div class="video-container customshit w-container">
      <div class="call_to_action">
        <h1 class="heading_h1 call_to_action">Save on your next trade.</h1>
        <a href="sign-up.html" class="signup_button_dark w-inline-block">
          <div class="exchange_button_interior">
            <p class="demo_text">Get started</p>
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
  </>
    )}
}

