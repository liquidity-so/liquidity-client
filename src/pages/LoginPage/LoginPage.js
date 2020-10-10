import React from 'react'
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar'
export default function LoginPage(){
    return (
    <>
    <NavBar/>
    <div>
        <div class="signup-signin-section-container w-container">
        <div class="sign-up-in-container">
            <h1 class="heading-4">Log in</h1><a href="searchs/main.html" class="twitter_button w-inline-block"><img src="images/bx_bxl-twitter_1bx_bxl-twitter.png" loading="lazy" alt="" class="image-16"/><div class="text-block-6">Continue with Twitter</div></a><a href="searchs/main.html" class="gmail-button w-inline-block"><img src="images/ant-design_google-outlined_1ant-design_google-outlined.png" loading="lazy" width="20" alt="" class="image-17"/><div class="text-block-7">Continue with Google</div></a>
            <div class="div-block-53"></div>
            <div class="email-input-field-button-container">
            <div class="input_field_header">Email</div>
            <div class="email-input-field-sign-up-sign-in filled">arodriguezlebron@gmail.com</div>
            <div class="input_field_header">Password</div>
            <div class="email-input-field-sign-up-sign-in">Enter your password...</div>
            <a href="searchs/main.html" class="email_button w-inline-block">
                <div class="text-block-7">Continue with Password</div>
            </a>
            </div><a href="forgot-password.html" class="forgot-password-button">Forgot password?</a></div>
        <div class="div-block-123">
            <div class="terms-conditions small">By clicking “Continue with Twitter/Google/Email” above, you acknowledge that you have read and understood, and agree to Liquidity&#x27;s <a href="https://pdfhost.io/v/xVCZXGnoG_Terms_of_Service_Liquiditysopdf.pdf" target="_blank" class="mini-link"><span class="text-span-7">Terms &amp; Conditions</span></a> and <a href="https://pdfhost.io/v/vD3RKzKIo_Privacy_Policy_Liquiditysopdf.pdf" target="_blank"><span class="text-span-8">Privacy Policy</span></a>.</div>
        </div>
        </div>
    </div>
      <Footer/>
    </>
    )
}