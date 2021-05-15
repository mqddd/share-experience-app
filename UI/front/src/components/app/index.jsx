import React from 'react';
import { Route, Link } from 'react-router-dom';

import Profile from './profile';
import Add from './add';
import Experiences from './experiences';
import ExperiencDetail from './experience-detail';
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
                    <Route path="/index/profile" exact component={Profile}/>
                    <Route path="/index/experiences" exact component={Experiences}/>
                    <Route path="/index/add" exact component={Add}/>
                    <Route path="/index/experience-detail" exact component={ExperiencDetail}/>
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
                <Link to="/index/profile" className="navigation-btn">
                    Profile
                </Link>
                <Link to="/index/experiences" className="navigation-btn">
                    Experiences
                </Link>
                <Link to="/index/add" className="navigation-btn">
                    Add
                </Link>
                <Link to="/" className="navigation-btn logout">
                    Logout
                </Link>
            </div>
        );
    }
}

export default MainPage;