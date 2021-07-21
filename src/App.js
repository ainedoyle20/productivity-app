import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/home/home-page.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup-page.component';

import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
