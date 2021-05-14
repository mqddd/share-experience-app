import React from 'react';

import './add.css';

class Add extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="add-container">
                <div className="add-form">
                    <h1 className="add-title">
                        Write your Experience here:
                    </h1>
                    <form action="#" className="add-experience-form">
                        <div className="add-form-group">
                            <input type="text" name="title" placeholder="title"/>
                        </div>
                        <div className="add-form-group">
                            <textarea name="content" placeholder="content"/>
                        </div>
                        <button class="add-btn" type="submit"> 
                            Add Experience
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Add;