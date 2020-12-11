import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import PricingPage from './pages/PricingPage/PricingPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ProductPage from './pages/ProductPage/ProductPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ExchangePage from './pages/ExchangesPage/ExchangePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop';

function App() {
  // Home Page, Product should be public only 
  // Dashboard, Account is private only
  return (
    <>
      <ScrollToTop />
      <Route 
        exact path={"/"}
        render={() => <HomePage/>}></Route>
      <Route 
        path={"/login"}
        render={() => <LoginPage/>}></Route>
      <Route 
        path={"/signup"}
        render={() => <SignUpPage/>}></Route>
      <Route 
        path={"/welcome"}
        render={props => <WelcomePage {...props}/>}></Route>
      <Route 
        path={"/pricing"}
        render={() => <PricingPage/>}></Route>
      <Route 
        path={"/product"}
        render={() => <ProductPage/>}></Route>
      <Route 
        path={"/exchanges"}
        render={() => <ExchangePage/>}></Route>
      <Route 
        path={"/about"}
        render={() => <AboutUsPage/>}></Route>
      <Route 
        path={"/dashboard"}
        render={() => <DashboardPage/>}></Route>
    </>
  );
}

export default App;
