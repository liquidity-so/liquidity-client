import React, { Component } from "react";
import TwitterLogo from "../../assets/logos/TwitterLogo.png";
import GoogleLogo from "../../assets/logos/GoogleLogo.png";
import { Link, withRouter } from 'react-router-dom';
import "./LoginForm.css"
import LiquidityService from "../../services/liquidity.service";
import TokenService from "../../services/token.service";
import SquareLoader from "react-spinners/HashLoader";

class LoginForm extends Component {
    state = {
        email: "",
        password: "",
        toggledField: false,
        emailValid: true,
        error: null,
        loading: false
    }
    componentDidMount() {
        this.LiquidityApi = new LiquidityService()
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
    nextState = (e) => {
        e.preventDefault();
        // Validate email
        if (this.props.signUp) {
           this.goToWelcomePage();
        } else {
            this.togglePasswordField()
        }
    }
    goToWelcomePage = (newEmail) => {
        this.props.history.push({
            pathname: '/welcome',
            state: {
                email: this.state.email
            }
        });
    }
    setCredentials = (data, target) => {
        this.setState({
        ...this.state,
        [target]: data
        })
    } 
    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    handleSocialIntegration = () => {
        alert("Coming soon. We do not offer social sign up for Liquidity beta.")
    }
    handleForgotPassword = () => {
        alert("Please email alfonso@liquidity.so")
    }
    handleUserLogin = async (e) => {
        e.preventDefault();
        const credentials = {
            username: this.state.email,
            password: this.state.password
        }
        this.setState({
            ...this.state,
            loading: true
        })
        await this.timeout(2000);
        this.LiquidityApi.loginUser(credentials).then(data => {
            if (data) {
                TokenService.saveAuthToken(data.token)
                this.props.history.push('/dashboard')
            }
            else{
                this.setState({
                    ...this.state,
                    loading: false,
                    error: "Incorrect username or password."
                })
                alert("ERROR: COULD NOT FIND USERNAME OR PASSWORD")
            }
        })
        
    }
    render(){
        const passwordField = 
        !this.state.toggledField ? null : 
            <>
            <label for ="password" className="input_field_header">Password</label>
            <input name="password" id="password" type="password" className="email-input-field-sign-up-sign-in filled" placeholder="Enter your password..." 
            onChange={(e) => this.onChangePassword(e.target.value)}/>
            </>

        const nextbutton = 
        !this.state.toggledField ?    
            <button className="next-btn email_button w-inline-block" onClick={(e) => this.nextState(e)} disabled={!this.state.email}>
                <div className="text-block-7">Continue with Email</div>
            </button>
            :
            <button onClick={(e) => this.handleUserLogin(e)} className="next-btn email_button w-inline-block">
                <div className="text-block-7">Continue with Password</div>
            </button>
        return(
            <div className="signup-signin-section-container w-container">
                <div className="sign-up-in-container" >
                    <h1 className="heading-4">{this.props.signUp ? 'Sign up' : 'Log in'}</h1>
                    <div className="form-container">
                    <button className="third-party-btn twitter_button w-inline-block" onClick={this.handleSocialIntegration}>
                        <img src={TwitterLogo} loading="lazy" alt="" className="image-16"/>
                        <div className="text-block-6">Continue with Twitter</div>
                        </button>
                        <button className="third-party-btn gmail-button w-inline-block" onClick={this.handleSocialIntegration}>
                        <img src={GoogleLogo}loading="lazy" alt="" width="20" className="image-16"/>
                        <div className="text-block-6">Continue with Google</div>
                        </button>
                        <form className="login-form">
                        <div className="div-block-53"></div>
                        <div className="email-input-field-button-container">
                            <label for ="email" className="input_field_header">Email</label>
                            <input name="email" id="email" className="email-input-field-sign-up-sign-in filled" placeholder="arodriguezlebron@gmail.com" 
                            onChange={(e) => this.onChangeEmail(e.target.value)}/>
                            {passwordField}
                            {nextbutton}
                        </div>
                        </form>
                        {
                            this.state.error ? 
                            <div className="status-block">
                                <p>{this.state.error}</p>
                            </div> 
                            : null
                        }
                    </div>
               
                    {this.state.loading ? <div className="loading-wrapper">
                        <SquareLoader size={25} color={"#e6e6e6"}/>
                    </div> : null }
                    <Link onClick={this.handleForgotPassword} className="forgot-password-button">Forgot password?</Link>
                    <div className="div-block-123">
                        <div className="terms-conditions small">By clicking “Continue with Twitter/Google/Email” above, you acknowledge that you have read and understood, and agree to Liquidity&#x27;s <a href="https://pdfhost.io/v/xVCZXGnoG_Terms_of_Service_Liquiditysopdf.pdf" target="_blank" className="mini-link"><span className="text-span-7">Terms &amp; Conditions</span></a> and <a href="https://pdfhost.io/v/vD3RKzKIo_Privacy_Policy_Liquiditysopdf.pdf" target="_blank"><span className="text-span-8">Privacy Policy</span></a>.</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(LoginForm);
