import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import PricingPage from './pages/PricingPage/PricingPage';
import PrivateRoute from "./utils/PrivateRoute";
import PublicOnlyRoute from "./utils/PublicOnlyRoute";
import DashboardPage from './pages/DashboardPage/DashboardPage';

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
      <Route 
        path={"/dashboard"}
        render={() => <DashboardPage/>}></Route>
    </div>
  );
}

export default App;
