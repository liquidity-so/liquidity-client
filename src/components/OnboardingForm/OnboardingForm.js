import React, {Component} from 'react'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LiquidityService from '../../services/liquidity.service';
import "./OnboardingForm.css";

class OnboardingForm extends Component {
    state = {
        email: "",
        password: "",
        username: "",
        confirmPass: "",
        error: null,
    }
    componentDidMount() {
        this.LiquidityApi = new LiquidityService()
        const newEmail = this.props.location.state.email;
        this.setState({
            email: newEmail
        });
    }
    onChangeUserName = (value) => {
        this.setCredentials(value, "username")
    }
    onChangePassword = (value) => {
        this.setCredentials(value, "password")
    }
    handleCreateNewUser = async () => {
        const validUser = this.validateNewUser();
        if (!validUser) {
            return
        }
        const newUser = await this.LiquidityApi.createNewUser({
            email: this.state.email,
            password: this.state.password,
            username: this.state.username
        })
        console.log(newUser);
    } 
    onChangePasswordConfirm = (value) => {
        this.setCredentials(value, "confirmPass")
    }
    checkifPasswordsMatch = () => {
        const matchingPasswords = this.state.confirmPass === this.state.password;
        if (!matchingPasswords) {
            this.setState({
                ...this.state,
                error: "Passwords do not match."
            })
        }
        else {
            this.setState({
            ...this.state,
            error: null
            })
        }
        return matchingPasswords
    }
    checkifValidPassword = () => {
        const strongPassword = RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)
        const goodPassword = strongPassword.test(this.state.password)
        if (!goodPassword) {
            this.setState({
                ...this.state,
                error:"Passwords must be at least 6 characters, contain at least an uppercase letter, lowercase letter and a digit"
            })
        }
        else {
            this.setState({
            ...this.state,
            error: null
            })
        }
        return goodPassword
    }
    checkIfValidUserName =  () => {
        const validUserName = RegExp(/^([a-zA-Z])[a-zA-Z0-9-_]*$/)
        const goodUserName = validUserName.test(this.state.username);
        if (!goodUserName) {
            this.setState({
                ...this.state,
                error: "Username is invalid, please enter a different username"
            })
        }
        else {
            this.setState({
            ...this.state,
            error: null
            })
        }
        return goodUserName
    }
    validateNewUser = () => {
        return this.checkifValidPassword() && this.checkifPasswordsMatch() && this.checkIfValidUserName()
    }
    // When user creation is successful navigate to dashboard page and pass in the user credentials
    onCreateUserSuccess = (newUserCredentials) => {
        this.props.history.push({
            pathname: '/dashboard',
            state: {
                newUserCredentials
            }
        });
    }
    setCredentials = (data, target) => {
        this.setState({
        ...this.state,
        [target]: data
        })
    }
    render() {
        return (
            <div class="account_setup-section">
            <div class="signup-signin-section-container custom w-container">
            <div class="div-block-129">
                <h2 class="heading-3 fds">Welcome to Liquidity</h2>
                <div class="text-block-100">First things first, tell us a little about yourself</div>
            </div>
            <div class="sign-up-in-container">
              
                <div class="email-input-field-button-container">
                <div class="input_field_header">Username</div>
                <input 
                    class="email-input-field-sign-up-sign-in custom" 
                    placeholder="@satoshinakamoto"
                    onChange={(e) => this.onChangeUserName(e.target.value)}
                />
                <div class="input_field_header">Set password</div>
                <input  
                    type="password"
                    class="email-input-field-sign-up-sign-in" 
                    placeholder="New Password" 
                    onChange={(e) => this.onChangePassword(e.target.value)}/>
                <div class="input_field_header">Confirm password</div>
                <input  
                    type="password"
                    class="email-input-field-sign-up-sign-in" 
                    placeholder="Confirm Password" 
                    onChange={(e) => this.onChangePasswordConfirm(e.target.value)}/>
                <div class="div-block-126"></div>
                {
                    this.state.error ? 
                    <div className="onboard-status-block">
                        <p>{this.state.error}</p>
                    </div> 
                    : null
                }
                <div class="email_button w-inline-block"  onClick={e => this.handleCreateNewUser(e)}>
                    <div class="text-block-7">Continue</div>
                </div>
            
                </div>
         
                </div>
                <div class="text-block-88">You&#x27;re currently logged in as <span class="text-span-9">{this.state.email}</span>. <br/>If you don&#x27;t intent to set up a new account, you can
                <Link to="/login" class="link-5"> log in with another email</Link>.</div>
                </div>
            </div>
        );
    }
}
export default withRouter(OnboardingForm);

/* UNUSED FOR NOW, THIS GOES RIGHT BELOW ".sign-up-in-container"
  <div class="div-block-128">
                    <img src="images/Frame-22.png" loading="lazy" width="80" alt="" class="signup_avatar"></img>
                    <div class="signup_avatar_button">Add a photo</div>
                </div>
*/