import React from 'react';

import './form-style.css';

export class Register extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="container">
                    <div className="header">
                        <h1>Create Account</h1>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <input type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="email" placeholder="email"/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                        <button class="btn" type="submit"> 
                            SIGN UP
                        </button>
                    </div>    
            </div>
        );
    }
}
