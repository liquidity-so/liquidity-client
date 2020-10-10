import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import PricingPage from './pages/PricingPage/PricingPage';

function App() {
  return (
    <div>
      <Route exact
            path={"/"}
            render={() => <HomePage/>}></Route>
      <Route 
        path={"/login"}
        render={() => <LoginPage/>}></Route>
      <Route 
        path={"/pricing"}
        render={() => <PricingPage/>}></Route>
    </div>
  );
}

export default App;
