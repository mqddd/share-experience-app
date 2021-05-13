import React from 'react';

import './form-style.css';

export class Login extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="container">
                    <div className="header">
                        <h1>Sign in to Exprio</h1>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <input type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                        <div className="form-group">
                            <a href="#">
                                <h6>Forgot password?</h6>
                            </a>
                        </div>
                        <button class="btn" type="submit"> 
                            SIGN IN
                        </button>
                    </div>    
            </div>
        );
    }
}
