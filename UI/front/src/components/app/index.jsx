import React from 'react';
import { Route } from 'react-router-dom';

import Profile from './profile';
import Add from './add';
import Experiences from './experiences';
import './index.css';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="root-container">
                <SideBar />
                <div className="main-page-right-side">
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/experiences" exact component={Experiences}/>
                    <Route path="/add" exact component={Add}/>
                </div>
            </div>
        );
    }
}

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="side-bar">
                <h2 className="main-page-loggo">
                    Loggo
                </h2>
                <button className="navigation-btn">
                    Profile
                </button>
                <button className="navigation-btn">
                    Experiences
                </button>
                <button className="navigation-btn">
                    Add                    
                </button>
                <button className="navigation-btn logout">
                    Logout
                </button>
            </div>
        );
    }
}

export default MainPage;