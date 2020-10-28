import React, { Component } from "react";
import TwitterLogo from "../../assets/logos/TwitterLogo.png";
import GoogleLogo from "../../assets/logos/GoogleLogo.png";
import "./LoginForm.css"

export default class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            pass: "",
            toggledField: false,
            emailValid: true,
        }
    }

    onChangeEmail = (value) => {
        this.setCredentials(value, "email")
    }
    onChangePassword = (value) => {
        this.setCredentials(value, "password")
    }

    togglePasswordField = () => {
        this.setState({
            ...this.state,
            toggledField: true
        })
    }

    nextField = (e) => {
        e.preventDefault();
        // Validate email
        this.togglePasswordField()
    }


    setCredentials = (data, target) => {
        this.setState({
        ...this.state,
        [target]: data
        })
    } 

    render(){
        const passwordField = 
        !this.state.toggledField ? null : 
            <>
            <label for ="password" class="input_field_header">Password</label>
            <input name="password" id="password" class="email-input-field-sign-up-sign-in filled" placeholder="Enter your password..." onChange={(e) => this.onChangePassword(e.target.value)}/>
            </>

        const nextbutton = 
        !this.state.toggledField ?    
            <button class="next-btn email_button w-inline-block" onClick={(e) => this.nextField(e)} disabled={!this.state.email}>
                <div class="text-block-7">Continue with Email</div>
            </button>
            :
            <button class="next-btn email_button w-inline-block">
                <div class="text-block-7">Continue with Password</div>
            </button>

    
        
        return(
            <div class="signup-signin-section-container w-container">
                <div class="sign-up-in-container" >
                    <h1 class="heading-4">Log in</h1>
                    <div class="form-container">
                        <button class="third-party-btn twitter_button w-inline-block" >
                            <img src={TwitterLogo} loading="lazy" alt="" class="image-16"/>
                            <div class="text-block-6">Continue with Twitter</div>
                        </button>
                        <button class="third-party-btn gmail-button w-inline-block" >
                            <img src={GoogleLogo}loading="lazy" alt="" width="20" class="image-16"/>
                            <div class="text-block-6">Continue with Google</div>
                        </button>
                        <form class="login-form">
                        <div class="div-block-53"></div>
                        <div class="email-input-field-button-container">
                            <label for ="email" class="input_field_header">Email</label>
                            <input name="email" id="email" class="email-input-field-sign-up-sign-in filled" placeholder="arodriguezlebron@gmail.com" onChange={(e) => this.onChangeEmail(e.target.value)}/>
                            {passwordField}
                            {nextbutton}
                        </div>
                        </form>
                    </div>
                    <a href="forgot-password.html" class="forgot-password-button">Forgot password?</a>
                <div class="div-block-123">
                    <div class="terms-conditions small">By clicking “Continue with Twitter/Google/Email” above, you acknowledge that you have read and understood, and agree to Liquidity&#x27;s <a href="https://pdfhost.io/v/xVCZXGnoG_Terms_of_Service_Liquiditysopdf.pdf" target="_blank" class="mini-link"><span class="text-span-7">Terms &amp; Conditions</span></a> and <a href="https://pdfhost.io/v/vD3RKzKIo_Privacy_Policy_Liquiditysopdf.pdf" target="_blank"><span class="text-span-8">Privacy Policy</span></a>.</div>
                </div>
            </div>
            </div>
        )
    }
}