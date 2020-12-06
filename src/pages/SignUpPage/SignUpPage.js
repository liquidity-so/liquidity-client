import React from 'react'
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar'
import LoginForm from '../../components//LoginForm/LoginForm';

export default function SignUpPage(){
    return (
    <>
    <NavBar/>
        <LoginForm signUp={true}/>
    <Footer/>
    </>
    )
}