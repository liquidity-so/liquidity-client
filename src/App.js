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
import AccountPage from './pages/AccountPage/AccountPage';
import AccountSettings from './components/AccountSettings/AccountSettings';
import PrivateRoute from './utils/PrivateRoute';
import PublicOnlyRoute from './utils/PublicOnlyRoute';

function App() {
  // Home Page, Product should be public only 
  // Dashboard, Account is private only
  const nonBetaRoutes = 
  <>
      <PublicOnlyRoute 
        path={"/welcome"}
        component={WelcomePage}></PublicOnlyRoute>
      <PublicOnlyRoute 
        path={"/login"}
        component={LoginPage}></PublicOnlyRoute>
      <PublicOnlyRoute 
        path={"/signup"}
        component={SignUpPage}></PublicOnlyRoute>
        <PrivateRoute 
        path={"/dashboard"}
        component={DashboardPage}></PrivateRoute>
        <Route 
        path={"/pricing"}
        render={() => <PricingPage/>}></Route>
  </>
  const betaRoutes = 
  <>
  <PublicOnlyRoute 
    path={"/welcome"}
    component={HomePage}></PublicOnlyRoute>
  <PublicOnlyRoute 
    path={"/login"}
    component={HomePage}></PublicOnlyRoute>
  <PublicOnlyRoute 
    path={"/signup"}
    component={HomePage}></PublicOnlyRoute>
  <PrivateRoute 
    path={"/dashboard"}
    component={HomePage}></PrivateRoute>
  <Route 
        path={"/pricing"}
        component={HomePage}></Route>
  </>

  return (
    <>
      <ScrollToTop />
      <Route 
        path={"/product"}
        render={() => <ProductPage/>}></Route>
      <Route 
        path={"/exchanges"}
        render={() => <ExchangePage/>}></Route>
      <Route 
        path={"/about"}
        render={() => <AboutUsPage/>}></Route>
      <PublicOnlyRoute 
        exact path={"/"}
        component={HomePage}></PublicOnlyRoute>
      {betaRoutes}
      <a className='product-hunt-link' href=
        'https://www.producthunt.com/posts/liquidity-so-3?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-liquidity-so-3' target='_blank'>
        <img src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=289651&theme=light' 
        width={250} height={54}
        alt='Liquidity.so - Skyscanner for cryptocurrency trading. | Product Hunt' 
        style={{width: '250px', height: '54px'}}/>
      </a>
    </>
  );
}

export default App;
