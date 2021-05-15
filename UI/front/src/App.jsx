import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
 
import AuthPage from './components/auth/index';
import MainPage from './components/app/index';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={AuthPage}/>
          <Route path="/index" component={MainPage}/>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
