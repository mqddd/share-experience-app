import React from 'react';

import AuthPage from './components/auth/index';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="App">
        <AuthPage />
      </div>
    );
  }

}

export default App;
