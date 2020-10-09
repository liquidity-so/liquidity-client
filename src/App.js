import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <div>
      <Route exact
            path={"/"}
            render={() => <HomePage/>}></Route>
    </div>
  );
}

export default App;
