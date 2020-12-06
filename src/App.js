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

function App() {
  return (
    <div>
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
        render={() => <WelcomePage/>}></Route>
      <Route 
        path={"/pricing"}
        render={() => <PricingPage/>}></Route>
      <Route 
        path={"/product"}
        render={() => <ProductPage/>}></Route>
      <Route 
        path={"/dashboard"}
        render={() => <DashboardPage/>}></Route>
    </div>
  );
}

export default App;
